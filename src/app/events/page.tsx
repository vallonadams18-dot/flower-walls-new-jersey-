import Link from "next/link";
import { EVENTS } from "@/data/events";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Events We Style | Flower Walls New Jersey",
  description:
    "Flower walls and photo booths for weddings, birthdays, baby showers, bridal showers and corporate events across New Jersey.",
  path: "/events/",
});

export default function Events() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <p className="eyebrow">Styled For</p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl">Events we style</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink/75">
        Every event photographs differently. These pages cover how the walls
        and booths work for each one — which designs suit it, and the logistics
        that make the day easy.
      </p>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {EVENTS.map((e) => (
          <article key={e.slug}>
            <h2 className="font-[family-name:var(--font-display)] text-2xl">
              <Link href={`/events/${e.slug}/`} className="hover:text-heritage">{e.nav}</Link>
            </h2>
            <p className="mt-2 text-ink/75">{e.lede}</p>
            <Link href={`/events/${e.slug}/`} className="mt-3 inline-block text-sm font-medium text-heritage underline-offset-4 hover:underline">
              {e.nav} details →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
