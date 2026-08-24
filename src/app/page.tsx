import Link from "next/link";
import walls from "@/data/walls.json";
import { WallCard, type Wall } from "@/components/WallCard";
import { SITE, SERVICE_AREAS } from "@/lib/site";
import { pageMeta } from "@/lib/metadata";
import { asset } from "@/lib/asset";

export const metadata = pageMeta({
  title: "Luxury Flower Wall Rentals in New Jersey",
  description:
    "Premium flower wall rentals across New Jersey. Over 50 designs for weddings, corporate events and parties. Serving Jersey City, Newark and statewide.",
  path: "/",
});

const all = walls as Wall[];
const featured = all.filter((w) => w.price).slice(0, 6);

/* Homepage mirrors the old site's structure, row for row, inside the new
   design system: banner → split intro → Featured Flower Walls → Additional
   Services cards → Events that Bloomed → booths → packages → coverage. */
export default function Home() {
  return (
    <>
      {/* ROW 1 — the original full-width hero banner */}
      <section className="border-b border-line">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/legacy/hero-flower-wall.jpg")}
          alt="Take your event to new heights — Flower Wall Rentals New Jersey"
          width={1900}
          height={750}
          fetchPriority="high"
          className="w-full h-auto"
        />
      </section>

      {/* ROW 2 — image left, headline + copy + CTA right, as the old page had it */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-2xl bg-sage/20 shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/legacy/flower-wall-showcase.jpg")}
              alt="Luxury flower wall backdrop styled for a New Jersey event"
              width={1440}
              height={1788}
              className="w-full h-auto"
            />
          </div>
          <div>
            <p className="eyebrow">Flower Walls &amp; Photo Booths · New Jersey</p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-medium leading-tight">
              Flower wall rentals in New Jersey
            </h1>
            <div className="gold-rule mt-6" />
            <p className="mt-6 max-w-lg text-lg text-mute leading-relaxed">
              Over {all.length} handcrafted floral backdrops for weddings,
              showers, milestone birthdays and brand events — delivered,
              installed and styled by our team, with photo booth experiences
              to match.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={SITE.booking.contact}
                className="rounded-full bg-brand px-7 py-3.5 text-white font-medium hover:bg-brand-dark transition-colors"
              >
                Inquire Now
              </a>
              <Link
                href="/flower-walls/"
                className="rounded-full border border-heritage/50 px-7 py-3.5 font-medium text-brand hover:bg-white transition-colors"
              >
                View Flower Walls
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* trust strip — a light modern addition between the old rows */}
      <section className="bg-white border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 sm:grid-cols-3">
          {[
            ["Delivered & installed", "Transport, setup and breakdown handled — your venue receives a finished wall."],
            ["Built for photographs", "High-density silk florals that read as real in camera, first look to last dance."],
            ["Statewide coverage", "Two hubs — Newark and Barnegat — cover every corner of New Jersey."],
          ].map(([h, p]) => (
            <div key={h}>
              <h2 className="font-[family-name:var(--font-display)] text-xl">{h}</h2>
              <p className="mt-1.5 text-mute leading-relaxed text-sm">{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROWS 5-6 — Featured Flower Walls: original title artwork, wall grid, View More */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="m-0 flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/legacy/title-featured-flower-walls.png")}
            alt="Featured Flower Walls"
            width={770}
            height={150}
            className="h-12 sm:h-16 w-auto"
          />
        </h2>
        <div className="mt-10 grid gap-x-8 gap-y-12 grid-cols-2 lg:grid-cols-3">
          {featured.map((w) => (
            <WallCard key={w.slug} wall={w} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/flower-walls/"
            className="inline-block rounded-full bg-brand px-8 py-3.5 text-white font-medium hover:bg-brand-dark transition-colors"
          >
            View More
          </Link>
        </div>
      </section>

      {/* ROW 8 — Additional Services: original title artwork + the four
          original service card photographs, each with its button */}
      <section className="bg-white border-y border-line">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="m-0 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/legacy/title-additional-services.png")}
              alt="Additional Services"
              width={650}
              height={150}
              className="h-12 sm:h-14 w-auto"
            />
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-mute leading-relaxed">
            Add a touch of floral elegance to your next event — and everything
            that goes with it. Neon signs, photo booth experiences, event
            rentals and printed branding, delivered by the same team as your
            wall.
          </p>
          <div className="mt-10 grid gap-8 grid-cols-2 lg:grid-cols-4">
            {[
              ["/legacy/neon-sign-activation.png", "Custom neon sign on a hedge wall at a brand activation", "Custom Signs", "/custom-signs/"],
              ["/legacy/photo-booth-flower-wall.png", "Photo booth paired with a flower wall backdrop", "Photo Booths", "/photo-booths/"],
              ["/legacy/wedding-first-dance.png", "First dance in front of floral arches with cold spark fountains", "Event Rentals", "/event-rentals/"],
              ["/legacy/event-printing-services.png", "Custom printed banners produced for an event", "Event Branding", "/event-branding/"],
            ].map(([src, alt, label, href]) => (
              <article key={href} className="group">
                <Link href={href} className="block overflow-hidden rounded-xl bg-sage/20 shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={asset(src)} alt={alt} width={585} height={832} loading="lazy" decoding="async" className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]" />
                </Link>
                <h3 className="mt-3 text-center font-[family-name:var(--font-display)] text-xl">
                  <Link href={href} className="hover:text-heritage">{label}</Link>
                </h3>
                <div className="mt-2 text-center">
                  <a href={SITE.booking.contact} className="text-sm font-medium text-heritage underline-offset-4 hover:underline">
                    Inquire Now
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ROW 9 — Events that Bloomed */}
      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h2 className="m-0 flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/legacy/title-events-that-bloomed.png")}
            alt="Events that Bloomed"
            width={770}
            height={150}
            className="h-12 sm:h-16 w-auto"
          />
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-mute leading-relaxed">
          Prepare to elevate your event to new heights. From weddings and
          showers to activations and galas, these are the backdrops guests
          line up to photograph.
        </p>
        <div className="slideshow mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl bg-sage/20 shadow-sm aspect-[16/10]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/legacy/wedding-first-dance.png")} alt="First dance in front of floral arches with cold spark fountains" width={585} height={832} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/legacy/flower-wall-showcase.jpg")} alt="Luxury flower wall backdrop styled for an event" width={1440} height={1788} loading="lazy" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/legacy/neon-sign-activation.png")} alt="Custom neon sign on a hedge wall at a brand activation" width={585} height={832} loading="lazy" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/legacy/photo-booth-flower-wall.png")} alt="Photo booth paired with a flower wall backdrop" width={585} height={832} loading="lazy" />
        </div>
        <Link
          href="/events/"
          className="mt-7 inline-block rounded-full border border-heritage/50 px-7 py-3 font-medium text-brand hover:bg-white transition-colors"
        >
          See events we style
        </Link>
      </section>

      {/* PHOTO BOOTHS — the modern brief's requirement, kept */}
      <section className="bg-white border-y border-line">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="eyebrow">Complete the Experience</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl max-w-xl">
            Photo booths that match the backdrop
          </h2>
          <p className="mt-4 max-w-2xl text-mute leading-relaxed">
            Mirror, 360, glam, digital, video and branded booths — every one
            delivered with an attendant, props and instant sharing.
          </p>
          <Link href="/photo-booths/" className="mt-6 inline-block rounded-full bg-brand px-6 py-3 text-white font-medium hover:bg-brand-dark transition-colors">
            Explore Photo Booths
          </Link>
        </div>
      </section>

      {/* PACKAGES — deep green drama band */}
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

      {/* COVERAGE */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="eyebrow">Areas We Serve</p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl">
          Newark to the Shore, and everywhere between
        </h2>
        <p className="mt-3 text-mute max-w-2xl leading-relaxed">
          Two delivery hubs — Newark for North and Central Jersey, Barnegat for
          the Shore and South Jersey — each covering a 50-mile radius. Travel
          is quoted before you book, never after.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2.5">
          {SERVICE_AREAS.map((a) => {
            const slug = ({ "Jersey City": "jersey-city", Newark: "newark", Hoboken: "hoboken", Montclair: "montclair" } as Record<string, string>)[a];
            return (
              <li key={a} className="rounded-full border border-line bg-white px-4 py-1.5 text-sm">
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
      </section>
    </>
  );
}
