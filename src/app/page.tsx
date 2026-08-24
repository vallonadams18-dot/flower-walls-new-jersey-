import Link from "next/link";
import walls from "@/data/walls.json";
import { WallCard, type Wall } from "@/components/WallCard";
import { SITE, SERVICE_AREAS } from "@/lib/site";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Flower Wall Rental New Jersey | Weddings & Events",
  description:
    "Premium flower wall rentals across New Jersey. Over 50 designs for weddings, corporate events and parties. Serving Jersey City, Newark and statewide.",
  path: "/",
});

const featured = (walls as Wall[]).filter((w) => w.price).slice(0, 8);

export default function Home() {
  return (
    <>
      <section className="bg-bloom-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl leading-tight max-w-3xl">
            Flower wall rentals across New Jersey
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/75">
            Over {walls.length} designs for weddings, corporate events, showers and
            brand activations. We deliver, install and collect — you get the
            backdrop every guest photographs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/flower-walls/"
              className="rounded-full bg-bloom-600 px-6 py-3 text-white font-medium hover:bg-bloom-700 transition-colors"
            >
              See all {walls.length} walls
            </Link>
            <a
              href={SITE.booking.contact}
              className="rounded-full border border-bloom-300 px-6 py-3 font-medium hover:bg-white transition-colors"
            >
              Request a quote
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-3">
          {[
            {
              h: "Delivered and installed",
              p: "We handle transport, setup and breakdown. Your venue gets a finished wall, not a pile of panels.",
            },
            {
              h: "Built for photographs",
              p: "Every wall is made from high-density silk florals that read as real in camera and under venue lighting.",
            },
            {
              h: "Statewide coverage",
              p: "North Jersey, Central Jersey, the Shore and South Jersey. Travel is quoted before you book, never after.",
            },
          ].map((c) => (
            <div key={c.h}>
              <h2 className="font-[family-name:var(--font-display)] text-xl">{c.h}</h2>
              <p className="mt-2 text-ink/75">{c.p}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-[family-name:var(--font-display)] text-3xl">
            Popular flower walls
          </h2>
          <Link href="/flower-walls/" className="text-bloom-600 hover:underline underline-offset-4 shrink-0">
            View all →
          </Link>
        </div>
        <div className="mt-8 grid gap-8 grid-cols-2 lg:grid-cols-4">
          {featured.map((w) => (
            <WallCard key={w.slug} wall={w} />
          ))}
        </div>
      </section>

      <section className="bg-bloom-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-[family-name:var(--font-display)] text-3xl">
            Photo booth rental in New Jersey
          </h2>
          <p className="mt-3 max-w-2xl text-ink/75">
            Six booth experiences — mirror, 360, glam, digital, video and
            branded — each delivered with an attendant, props and instant
            sharing. Run one alone or pair it with your wall.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/photo-booths/" className="rounded-full bg-bloom-600 px-6 py-3 text-white font-medium hover:bg-bloom-700 transition-colors">
              Explore photo booths
            </Link>
            <Link href="/packages/" className="rounded-full border border-bloom-300 px-6 py-3 font-medium hover:bg-white transition-colors">
              Wall + booth packages
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-[family-name:var(--font-display)] text-2xl">Styled for your event</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {[
            ["Weddings", "/events/weddings/"],
            ["Birthdays & Sweet 16s", "/events/birthdays/"],
            ["Baby Showers", "/events/baby-showers/"],
            ["Bridal Showers", "/events/bridal-showers/"],
            ["Corporate & Activations", "/events/corporate/"],
          ].map(([label, href]) => (
            <li key={href}>
              <Link href={href} className="rounded-full border border-bloom-100 bg-bloom-50 px-4 py-2 text-sm hover:border-bloom-300 transition-colors inline-block">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-bloom-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-[family-name:var(--font-display)] text-2xl">
            Where we deliver
          </h2>
          <p className="mt-3 text-ink/75 max-w-2xl">
            We run two delivery hubs — Newark for North and Central Jersey, and
            Barnegat for the Shore and South Jersey — each covering a 50-mile
            radius. Between them, that is the whole state, with most weekends
            spent in and around these towns:
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {SERVICE_AREAS.map((a) => {
              const slug = ({"Jersey City":"jersey-city",Newark:"newark",Hoboken:"hoboken",Montclair:"montclair"} as Record<string,string>)[a];
              return (
                <li key={a} className="rounded-full bg-white px-3 py-1 text-sm border border-bloom-100">
                  {slug ? <Link href={`/locations/${slug}/`} className="hover:text-bloom-600">{a}</Link> : a}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
