import Link from "next/link";
import { BOOTHS } from "@/data/booths";
import { pageMeta } from "@/lib/metadata";
import { JsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { SITE } from "@/lib/site";

export const metadata = pageMeta({
  title: "Photo Booth Rental New Jersey | Mirror, 360 & Glam",
  description:
    "Photo booth rentals across New Jersey — mirror, 360, glam, digital, video and branded booths with an attendant, props and instant sharing.",
  path: "/photo-booths/",
});

export default function PhotoBooths() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Photo Booths", path: "/photo-booths/" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Photo booth rental",
            serviceType: "Photo booth rental",
            areaServed: { "@type": "State", name: "New Jersey" },
            provider: { "@id": `${SITE.url}/#business` },
            url: `${SITE.url}/photo-booths/`,
          },
        ]}
      />
      <section className="bg-ivory">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl max-w-3xl leading-tight">
            Photo booth rental in New Jersey
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/75">
            Six booth experiences, every one delivered with an attendant, props
            and instant sharing. Run one on its own, or pair it with a flower
            wall for the full backdrop-and-booth setup.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={SITE.booking.contact} className="rounded-full bg-brand px-6 py-3 text-white font-medium hover:bg-brand-dark transition-colors">
              Check availability
            </a>
            <Link href="/packages/" className="rounded-full border border-heritage/40 px-6 py-3 font-medium hover:bg-white transition-colors">
              Flower wall + booth packages
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {BOOTHS.map((b) => (
            <article key={b.slug}>
              <h2 className="font-[family-name:var(--font-display)] text-2xl">
                <Link href={`/photo-booths/${b.slug}/`} className="hover:text-heritage">
                  {b.name}
                </Link>
              </h2>
              <p className="mt-2 text-ink/75">{b.lede}</p>
              <Link href={`/photo-booths/${b.slug}/`} className="mt-3 inline-block text-sm font-medium text-heritage underline-offset-4 hover:underline">
                About the {b.nav.toLowerCase()} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="font-[family-name:var(--font-display)] text-2xl">
            Every booth includes
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-ink/80">
            <li>Delivery, setup and breakdown</li>
            <li>A professional attendant, all night</li>
            <li>Unlimited sessions and instant sharing</li>
            <li>Props and a custom template</li>
          </ul>
          <p className="mt-6 text-ink/75 max-w-2xl">
            Booths travel everywhere our flower walls do — the whole of New
            Jersey from our Newark and Barnegat hubs. See{" "}
            <Link href="/locations/" className="text-heritage hover:underline underline-offset-4">
              areas we serve
            </Link>.
          </p>
        </div>
      </section>
    </>
  );
}
