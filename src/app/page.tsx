import Link from "next/link";
import walls from "@/data/walls.json";
import { WallCard, type Wall } from "@/components/WallCard";
import { SITE, SERVICE_AREAS } from "@/lib/site";
import { pageMeta } from "@/lib/metadata";
import { wallImage } from "@/lib/wallImage";

export const metadata = pageMeta({
  title: "Luxury Flower Wall Rentals in New Jersey",
  description:
    "Premium flower wall rentals across New Jersey. Over 50 designs for weddings, corporate events and parties. Serving Jersey City, Newark and statewide.",
  path: "/",
});

const all = walls as Wall[];
const featured = all.filter((w) => w.price).slice(0, 8);
const hero = all.find((w) => w.slug === "majestic") ?? all[0];
const heroImg = wallImage(hero.slug, hero.image);

export default function Home() {
  return (
    <>
      {/* HERO — editorial split: copy on ivory, photography carrying the drama */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Flower Walls &amp; Photo Booths · New Jersey</p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-[2.6rem] leading-[1.08] sm:text-6xl font-medium">
              Luxury flower wall rentals in New Jersey
            </h1>
            <div className="gold-rule mt-6" />
            <p className="mt-6 max-w-lg text-lg text-mute leading-relaxed">
              Over {all.length} handcrafted floral backdrops for weddings,
              showers, milestone birthdays and brand events — delivered,
              installed and styled by our team, with photo booth experiences
              to match.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/flower-walls/"
                className="rounded-full bg-brand px-7 py-3.5 text-white font-medium hover:bg-brand-dark transition-colors"
              >
                View Flower Walls
              </Link>
              <a
                href={SITE.booking.collection}
                className="rounded-full border border-heritage/50 px-7 py-3.5 font-medium text-brand hover:bg-white transition-colors"
              >
                Check Availability
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-sage/20 lg:aspect-[4/5] aspect-square">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroImg.src}
              srcSet={heroImg.srcset}
              alt={`${hero.name} luxury flower wall rental in New Jersey`}
              width={800}
              height={1000}
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-white border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 sm:grid-cols-3">
          {[
            ["Delivered & installed", "Transport, setup and breakdown handled. Your venue receives a finished wall, never a pile of panels."],
            ["Built for photographs", "High-density silk florals that read as real in camera and stay perfect from first look to last dance."],
            ["Statewide coverage", "Two hubs — Newark and Barnegat — put every corner of New Jersey inside our delivery range."],
          ].map(([h, p]) => (
            <div key={h}>
              <h2 className="font-[family-name:var(--font-display)] text-2xl">{h}</h2>
              <p className="mt-2 text-mute leading-relaxed">{p}</p>
            </div>
          ))}
        </div>
      </section>


      {/* EXPERIENCE BAND — booths introduced early, walls still the hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center">
          <span className="font-[family-name:var(--font-display)] text-xl sm:text-2xl">Beautiful backdrop</span>
          <span className="text-gold" aria-hidden>+</span>
          <span className="font-[family-name:var(--font-display)] text-xl sm:text-2xl">Interactive photo booth</span>
          <span className="text-gold" aria-hidden>+</span>
          <span className="font-[family-name:var(--font-display)] text-xl sm:text-2xl">Shareable memories</span>
          <Link href="/packages/" className="ml-2 text-sm text-heritage hover:underline underline-offset-4 whitespace-nowrap">
            See how packages work →
          </Link>
        </div>
      </section>

      {/* FEATURED WALLS — the catalog is the star */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="eyebrow">The Collection</p>
        <div className="mt-3 flex items-end justify-between gap-4">
          <h2 className="font-[family-name:var(--font-display)] text-4xl">
            Signature flower walls
          </h2>
          <Link href="/flower-walls/" className="text-heritage hover:underline underline-offset-4 shrink-0">
            View all {all.length} →
          </Link>
        </div>
        <div className="mt-8 grid gap-x-6 gap-y-10 grid-cols-2 lg:grid-cols-4">
          {featured.map((w) => (
            <WallCard key={w.slug} wall={w} />
          ))}
        </div>
      </section>

      {/* PHOTO BOOTHS — same brand, introduced naturally */}
      <section className="bg-white border-y border-line">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="eyebrow">Complete the Experience</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl max-w-xl">
            Photo booths that match the backdrop
          </h2>
          <p className="mt-4 max-w-2xl text-mute leading-relaxed">
            Mirror, 360, glam, digital, video and branded booths — every one
            delivered with an attendant, props and instant sharing, styled to
            sit beside your wall rather than beside it in spirit only.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/photo-booths/" className="rounded-full bg-brand px-6 py-3 text-white font-medium hover:bg-brand-dark transition-colors">
              Explore Photo Booths
            </Link>
          </div>
        </div>
      </section>

      {/* PACKAGES — the drama section, deep green band */}
      <section className="bg-brand text-ivory">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <p className="eyebrow !text-gold">Flower Wall + Photo Booth</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl sm:text-5xl">
            One backdrop. One booth.<br className="hidden sm:block" /> One unforgettable event.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-ivory/80 leading-relaxed">
            Choose any wall, pair it with the booth that suits your crowd, and
            one team delivers, installs and runs it all — on one invoice.
          </p>
          <Link
            href="/packages/"
            className="mt-8 inline-block rounded-full border border-gold px-8 py-3.5 font-medium text-ivory hover:bg-brand-dark transition-colors"
          >
            Explore Packages
          </Link>
        </div>
      </section>

      {/* EVENTS */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="eyebrow">Styled For</p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl">Every kind of celebration</h2>
        <ul className="mt-5 flex flex-wrap gap-3">
          {[
            ["Weddings", "/events/weddings/"],
            ["Birthdays & Sweet 16s", "/events/birthdays/"],
            ["Baby Showers", "/events/baby-showers/"],
            ["Bridal Showers", "/events/bridal-showers/"],
            ["Corporate & Activations", "/events/corporate/"],
          ].map(([label, href]) => (
            <li key={href}>
              <Link
                href={href}
                className="inline-block rounded-full border border-line bg-white px-5 py-2.5 text-sm hover:border-heritage/50 hover:text-heritage transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* COVERAGE */}
      <section className="bg-white border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="eyebrow">Areas We Serve</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl">
            Newark to the Shore, and everywhere between
          </h2>
          <p className="mt-3 text-mute max-w-2xl leading-relaxed">
            Two delivery hubs — Newark for North and Central Jersey, Barnegat
            for the Shore and South Jersey — each covering a 50-mile radius.
            Travel is quoted before you book, never after.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {SERVICE_AREAS.map((a) => {
              const slug = ({ "Jersey City": "jersey-city", Newark: "newark", Hoboken: "hoboken", Montclair: "montclair" } as Record<string, string>)[a];
              return (
                <li key={a} className="rounded-full border border-line bg-ivory px-4 py-1.5 text-sm">
                  {slug ? (
                    <Link href={`/locations/${slug}/`} className="hover:text-heritage">{a}</Link>
                  ) : (
                    a
                  )}
                </li>
              );
            })}
          </ul>
          <Link href="/locations/" className="mt-6 inline-block text-heritage hover:underline underline-offset-4">
            All service areas →
          </Link>
        </div>
      </section>
    </>
  );
}
