import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import walls from "@/data/walls.json";
import { type Wall } from "@/components/WallCard";
import { pageMeta } from "@/lib/metadata";
import { JsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { SITE } from "@/lib/site";
import { wallImage } from "@/lib/wallImage";

const all = walls as Wall[];
const detailed = all.filter((w) => w.hasDetailPage);
const bySlug = (s: string) => detailed.find((w) => w.slug === s);

interface Props {
  params: Promise<{ wall: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return detailed.map((w) => ({ wall: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { wall } = await params;
  const w = bySlug(wall);
  if (!w) return {};
  return pageMeta({
    title: `${w.name} Flower Wall Rental | New Jersey`,
    description: `${w.description?.slice(0, 150) ?? ""}`.trim(),
    path: `/flower-walls/${w.slug}/`,
    image: w.image,
    imageAlt: `${w.name} flower wall rental in New Jersey`,
  });
}

export default async function WallDetail({ params }: Props) {
  const { wall } = await params;
  const w = bySlug(wall);
  if (!w) notFound();

  const img = wallImage(w.slug, w.image);
  const others = detailed.filter((o) => o.slug !== w.slug).slice(0, 4);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Flower Walls", path: "/flower-walls/" },
            { name: w.name, path: `/flower-walls/${w.slug}/` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: `${w.name} flower wall`,
            image: w.image,
            description: w.description,
            url: `${SITE.url}/flower-walls/${w.slug}/`,
            ...(w.price
              ? {
                  offers: {
                    "@type": "Offer",
                    price: w.price.replace(/[^0-9.]/g, ""),
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                    url: w.bookingUrl,
                  },
                }
              : {}),
          },
        ]}
      />

      <article className="mx-auto max-w-5xl px-4 py-12 grid gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl bg-ivory">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.src}
            srcSet={img.srcset}
            sizes="(min-width: 768px) 50vw, 100vw"
            alt={`${w.name} flower wall rental in New Jersey`}
            width={800}
            height={800}
            className="w-full h-auto object-cover"
          />
        </div>

        <div>
          <nav aria-label="Breadcrumb" className="text-sm text-ink/60">
            <Link href="/flower-walls/" className="hover:text-heritage">
              Flower Walls
            </Link>{" "}
            / {w.name}
          </nav>
          <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl">
            {w.name} flower wall
          </h1>
          {w.price ? (
            <p className="mt-2 text-lg text-ink/70">from {w.price}</p>
          ) : null}
          <p className="mt-5 text-ink/80 leading-relaxed">{w.description}</p>

          {w.eventUses?.length ? (
            <>
              <h2 className="mt-7 font-[family-name:var(--font-display)] text-xl">
                Made for
              </h2>
              <ul className="mt-2 flex flex-wrap gap-2">
                {w.eventUses.map((e) => (
                  <li key={e} className="rounded-full bg-ivory px-3 py-1 text-sm border border-line capitalize">
                    {e}
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          <h2 className="mt-7 font-[family-name:var(--font-display)] text-xl">
            What is included
          </h2>
          <p className="mt-2 text-ink/80 leading-relaxed">
            Delivery anywhere in New Jersey, professional installation on a
            weighted free-standing frame, and collection after the event.
            Standard size is 8ft × 8ft; travel is quoted before you book.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={w.price ? w.bookingUrl : SITE.booking.wallEnquiry}
              className="rounded-full bg-brand px-6 py-3 text-white font-medium hover:bg-brand-dark transition-colors"
            >
              {w.price ? "Check availability" : "Request a quote"}
            </a>
            <a
              href={SITE.booking.contact}
              className="rounded-full border border-heritage/40 px-6 py-3 font-medium hover:bg-white transition-colors"
            >
              Ask a question
            </a>
          </div>
        </div>
      </article>

      <section className="mx-auto max-w-5xl px-4 pb-16">
        <h2 className="font-[family-name:var(--font-display)] text-2xl">
          More walls to consider
        </h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {others.map((o) => (
            <li key={o.slug}>
              <Link
                href={`/flower-walls/${o.slug}/`}
                className="text-heritage hover:underline underline-offset-4"
              >
                {o.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/flower-walls/" className="text-ink/70 hover:underline underline-offset-4">
              All {all.length} walls →
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
