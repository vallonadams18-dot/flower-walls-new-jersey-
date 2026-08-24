import Link from "next/link";
import walls from "@/data/walls.json";
import { BOOTHS } from "@/data/booths";
import { type Wall, WallCard } from "@/components/WallCard";
import { pageMeta } from "@/lib/metadata";
import { JsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { SITE } from "@/lib/site";

export const metadata = pageMeta({
  title: "Flower Wall + Photo Booth Packages | New Jersey",
  description:
    "Combine a flower wall backdrop with a photo booth experience — one team, one delivery, one setup for your New Jersey event. Build your package.",
  path: "/packages/",
});

const featured = (walls as Wall[]).filter((w) => w.price).slice(0, 3);

export default function Packages() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Packages", path: "/packages/" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Flower wall and photo booth packages",
            serviceType: "Event backdrop and photo booth package",
            areaServed: { "@type": "State", name: "New Jersey" },
            provider: { "@id": `${SITE.url}/#business` },
            url: `${SITE.url}/packages/`,
          },
        ]}
      />
      <section className="bg-ivory">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl max-w-3xl leading-tight">
            Flower wall + photo booth packages
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/75">
            The backdrop and the booth are better together: guests pose against
            a wall that matches your styling, and the booth captures and shares
            it all night. One team, one delivery, one setup, one invoice.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={SITE.booking.contact} className="rounded-full bg-brand px-6 py-3 text-white font-medium hover:bg-brand-dark transition-colors">
              Build your package
            </a>
            <a href={SITE.booking.collection} className="rounded-full border border-heritage/40 px-6 py-3 font-medium hover:bg-white transition-colors">
              Check availability
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-[family-name:var(--font-display)] text-3xl">
          How a package comes together
        </h2>
        <ol className="mt-6 grid gap-8 sm:grid-cols-3">
          <li>
            <span className="font-[family-name:var(--font-display)] text-heritage text-3xl">1</span>
            <h3 className="mt-1 font-medium">Pick the wall</h3>
            <p className="mt-1 text-ink/75">
              Any of our {walls.length} designs — matched to your colours and
              event. <Link href="/flower-walls/" className="text-heritage hover:underline underline-offset-4">View flower walls</Link>.
            </p>
          </li>
          <li>
            <span className="font-[family-name:var(--font-display)] text-heritage text-3xl">2</span>
            <h3 className="mt-1 font-medium">Pick the booth</h3>
            <p className="mt-1 text-ink/75">
              Mirror, 360, glam, digital, video or branded. <Link href="/photo-booths/" className="text-heritage hover:underline underline-offset-4">Explore photo booths</Link>.
            </p>
          </li>
          <li>
            <span className="font-[family-name:var(--font-display)] text-heritage text-3xl">3</span>
            <h3 className="mt-1 font-medium">We do the rest</h3>
            <p className="mt-1 text-ink/75">
              One crew delivers, installs and runs both, then breaks it all down
              after the last song.
            </p>
          </li>
        </ol>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="font-[family-name:var(--font-display)] text-2xl">Pairings we book most</h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 text-ink/80">
            <li><strong>Glam booth + Ebony or Purity</strong> — black-and-white portraits against a dramatic wall. The wedding favourite.</li>
            <li><strong>360 booth + Ombre or Sunset</strong> — colour that moves as the camera does. Sweet 16s and launches.</li>
            <li><strong>Mirror booth + Pink Blush</strong> — full-length photos, romantic backdrop. Showers and receptions.</li>
            <li><strong>Branded booth + custom logo wall</strong> — the activation setup, with data capture. <Link href="/events/corporate/" className="text-heritage hover:underline underline-offset-4">Corporate events</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-[family-name:var(--font-display)] text-2xl">Start with the wall</h2>
          <Link href="/flower-walls/" className="text-heritage hover:underline underline-offset-4 shrink-0">All {walls.length} walls →</Link>
        </div>
        <div className="mt-6 grid gap-x-8 gap-y-12 grid-cols-2 lg:grid-cols-3">
          {featured.map((w) => <WallCard key={w.slug} wall={w} />)}
        </div>
        <div className="mt-10 rounded-xl bg-ivory p-6 sm:p-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl">Ready to build yours?</h2>
          <p className="mt-2 text-ink/75 max-w-2xl">
            Tell us your date, venue, the wall you like and the booth you want —
            we reply with availability and a package quote.
          </p>
          <a href={SITE.booking.contact} className="mt-4 inline-block rounded-full bg-brand px-6 py-3 text-white font-medium hover:bg-brand-dark transition-colors">
            Get a quote
          </a>
        </div>
      </section>
    </>
  );
}
