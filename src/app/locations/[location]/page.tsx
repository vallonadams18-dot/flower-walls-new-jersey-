import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LOCATIONS, getLocation } from "@/data/locations";
import { EVENTS } from "@/data/events";
import { combosForLocation, COMBO_SERVICES } from "@/data/combos";
import { pageMeta } from "@/lib/metadata";
import { JsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { SITE } from "@/lib/site";

interface Props { params: Promise<{ location: string }> }
export const dynamicParams = false;
export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ location: l.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location } = await params;
  const l = getLocation(location);
  if (!l) return {};
  return pageMeta({ title: l.meta.title, description: l.meta.description, path: `/locations/${l.slug}/` });
}

export default async function LocationPage({ params }: Props) {
  const { location } = await params;
  const l = getLocation(location);
  if (!l) notFound();
  const evts = l.events.map((s) => EVENTS.find((e) => e.slug === s)).filter(Boolean);
  const combos = combosForLocation(l.slug);
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Areas We Serve", path: "/locations/" },
          { name: l.nav, path: `/locations/${l.slug}/` },
        ])}
      />
      <section className="bg-ivory">
        <div className="mx-auto max-w-4xl px-4 py-14">
          <nav aria-label="Breadcrumb" className="text-sm text-ink/60">
            <Link href="/locations/" className="hover:text-heritage">Areas We Serve</Link> / {l.nav}
          </nav>
          <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl">{l.h1}</h1>
          <p className="mt-4 text-lg text-ink/75">{l.lede}</p>
        </div>
      </section>
      <article className="mx-auto max-w-3xl px-4 py-12 space-y-10">
        {l.sections.map((s) => (
          <section key={s.h}>
            <h2 className="font-[family-name:var(--font-display)] text-2xl">{s.h}</h2>
            {s.p.map((p) => (
              <p key={p.slice(0, 40)} className="mt-3 text-ink/80 leading-relaxed">{p}</p>
            ))}
          </section>
        ))}
        {combos.length ? (
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl">
              What we rent in {l.nav}
            </h2>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {combos.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/${c.slug}/`}
                    className="text-heritage hover:underline underline-offset-4"
                  >
                    {COMBO_SERVICES[c.service].label} in {c.town}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
        <section>
          <h2 className="font-[family-name:var(--font-display)] text-2xl">Popular here</h2>
          <ul className="mt-3 flex flex-wrap gap-3">
            {evts.map((e) => e && (
              <li key={e.slug}>
                <Link href={`/events/${e.slug}/`} className="text-heritage hover:underline underline-offset-4">{e.nav}</Link>
              </li>
            ))}
            <li><Link href="/flower-walls/" className="text-heritage hover:underline underline-offset-4">All flower walls</Link></li>
            <li><Link href="/packages/" className="text-heritage hover:underline underline-offset-4">Wall + booth packages</Link></li>
          </ul>
        </section>
        <a href={SITE.booking.contact} className="inline-block rounded-full bg-brand px-6 py-3 text-white font-medium hover:bg-brand-dark transition-colors">
          Check your date in {l.nav}
        </a>
      </article>
    </>
  );
}
