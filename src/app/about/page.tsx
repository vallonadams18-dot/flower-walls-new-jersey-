import { pageMeta } from "@/lib/metadata";
import { SITE, SERVICE_AREAS } from "@/lib/site";
import walls from "@/data/walls.json";

export const metadata = pageMeta({
  title: "About Us | Flower Wall Rentals New Jersey",
  description:
    "New Jersey's premier flower wall rental company, serving Jersey City, Newark, North Jersey, South Jersey and Barnegat with the state's largest selection.",
  path: "/about/",
});

export default function About() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="font-[family-name:var(--font-display)] text-4xl">
        About Flower Wall Rentals New Jersey
      </h1>
      <p className="mt-5 text-lg text-ink/75">
        We rent flower walls, photo booths and event signage across New Jersey,
        with {walls.length} wall designs in stock.
      </p>

      <h2 className="mt-10 font-[family-name:var(--font-display)] text-2xl">
        What we actually do
      </h2>
      <p className="mt-3 text-ink/80 leading-relaxed">
        A flower wall is simple to describe and easy to get wrong. Cheap silk
        florals read as plastic under venue lighting. Panels that do not butt up
        properly leave seams down the middle of every photograph. Stands that are
        not weighted move when someone leans on them.
      </p>
      <p className="mt-3 text-ink/80 leading-relaxed">
        We build ours on weighted free-standing frames with high-density florals
        and seamless panel joins, then send a team to install and collect them.
        Nothing is drilled into a venue wall, which is what lets us work in hotels
        and historic properties that turn other suppliers away.
      </p>

      <h2 className="mt-10 font-[family-name:var(--font-display)] text-2xl">
        Where we work
      </h2>
      <p className="mt-3 text-ink/80 leading-relaxed">
        We deliver from two hubs. Newark covers North and Central Jersey within
        a 50-mile radius — which also reaches New York City and Staten Island
        for clients who ask. Barnegat covers the Shore, Atlantic City and the
        Camden and Cherry Hill side of the state. Between the two circles that
        is effectively all of New Jersey, and travel is quoted up front rather
        than added afterwards.
      </p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {SERVICE_AREAS.map((a) => (
          <li key={a} className="rounded-full bg-ivory px-3 py-1 text-sm border border-line">
            {a}
          </li>
        ))}
      </ul>

      <a
        href={SITE.booking.contact}
        className="mt-10 inline-block rounded-full bg-brand px-6 py-3 text-white font-medium hover:bg-brand-dark transition-colors"
      >
        Request a quote
      </a>
    </article>
  );
}
