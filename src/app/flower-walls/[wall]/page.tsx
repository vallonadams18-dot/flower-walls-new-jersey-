import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import walls from "@/data/walls.json";
import { displayName } from "@/data/wall-renames";
import { type Wall } from "@/components/WallCard";
import { pageMeta } from "@/lib/metadata";
import { JsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonld";
import { SITE } from "@/lib/site";
import { wallImage } from "@/lib/wallImage";
import { wallFaqs } from "@/lib/wallFaqs";

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
    // No "| New Jersey" here — the sitewide template already appends
    // "| NJ Flower Walls", and the pair read as "New Jersey | NJ ...".
    title: `${displayName(w.name)} Flower Wall Rental`,
    description: `${w.description?.slice(0, 150) ?? ""}`.trim(),
    path: `/flower-walls/${w.slug}/`,
    image: w.image,
    imageAlt: `${displayName(w.name)} flower wall rental in New Jersey`,
  });
}

export default async function WallDetail({ params }: Props) {
  const { wall } = await params;
  const w = bySlug(wall);
  if (!w) notFound();

  const img = wallImage(w.slug, w.image);
  // Related walls are chosen by what they share with this one — palette first,
  // then what they get booked for. Every page used to link the same first four
  // walls, which is a weaker internal link graph and reads as filler.
  const rest = detailed.filter((o) => o.slug !== w.slug);
  const score = (o: Wall) =>
    (o.palette ?? []).filter((c) => (w.palette ?? []).includes(c)).length * 2 +
    (o.eventUses ?? []).filter((e) => (w.eventUses ?? []).includes(e)).length;
  const others = [...rest]
    .sort((a, b) => score(b) - score(a) || a.slug.localeCompare(b.slug))
    .slice(0, 4);
  const faqs = wallFaqs(w);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Flower Walls", path: "/flower-walls/" },
            { name: displayName(w.name), path: `/flower-walls/${w.slug}/` },
          ]),
          ...(faqs.length ? [faqJsonLd(faqs)] : []),
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: `${displayName(w.name)} flower wall`,
            image: w.image,
            description: w.description,
            url: `${SITE.url}/flower-walls/${w.slug}/`,
            // No Offer node: the site does not publish prices, so there is no
            // rate to mark up. Rich results would otherwise show a figure the
            // page itself does not state.
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
            alt={`${displayName(w.name)} flower wall rental in New Jersey`}
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
            / {displayName(w.name)}
          </nav>
          <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl">
            {displayName(w.name)} flower wall
          </h1>
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
              href={w.bookingUrl}
              className="rounded-full bg-brand px-6 py-3 text-white font-medium hover:bg-brand-dark transition-colors"
            >
              Check availability
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

      {faqs.length ? (
        <section className="bg-ivory border-y border-line">
          <div className="mx-auto max-w-3xl px-4 py-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl">
              About the {displayName(w.name)} wall
            </h2>
            <dl className="mt-5 space-y-6">
              {faqs.map((f) => (
                <div key={f.q}>
                  <dt className="font-medium">{f.q}</dt>
                  <dd className="mt-1.5 text-ink/75 leading-relaxed">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-5xl px-4 py-16">
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
                {displayName(o.name)}
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
