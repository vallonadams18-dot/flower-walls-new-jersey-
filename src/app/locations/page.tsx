import Link from "next/link";
import { LOCATIONS } from "@/data/locations";
import { SERVICE_AREAS, SITE } from "@/lib/site";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Areas We Serve | Flower Walls New Jersey",
  description:
    "Flower wall and photo booth delivery across New Jersey from our Newark and Barnegat hubs — Jersey City, Hoboken, Montclair, the Shore and statewide.",
  path: "/locations/",
});

export default function Locations() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="font-[family-name:var(--font-display)] text-4xl">Areas we serve</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink/75">
        Two delivery hubs — Newark for North and Central Jersey, Barnegat for
        the Shore and South Jersey — each covering a 50-mile radius. Between
        them, the whole state. Travel is quoted before you book, never after.
      </p>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {LOCATIONS.map((l) => (
          <article key={l.slug}>
            <h2 className="font-[family-name:var(--font-display)] text-2xl">
              <Link href={`/locations/${l.slug}/`} className="hover:text-heritage">{l.nav}</Link>
            </h2>
            <p className="mt-2 text-ink/75">{l.lede}</p>
            <Link href={`/locations/${l.slug}/`} className="mt-3 inline-block text-sm font-medium text-heritage underline-offset-4 hover:underline">
              {l.nav} details →
            </Link>
          </article>
        ))}
      </div>
      <div className="mt-12 rounded-xl bg-ivory p-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl">Not listed? We still come to you.</h2>
        <p className="mt-2 text-ink/75">
          We regularly deliver to {SERVICE_AREAS.join(", ")} and everywhere
          between. <a href={SITE.booking.contact} className="text-heritage hover:underline underline-offset-4">Ask about your town</a>.
        </p>
      </div>
    </section>
  );
}
