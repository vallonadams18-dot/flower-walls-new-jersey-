import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EVENTS, getEvent } from "@/data/events";
import wallsData from "@/data/walls.json";
import { WallCard, type Wall } from "@/components/WallCard";
import { pageMeta } from "@/lib/metadata";
import { JsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonld";
import { SITE } from "@/lib/site";

const allWalls = wallsData as Wall[];
interface Props { params: Promise<{ event: string }> }
export const dynamicParams = false;
export function generateStaticParams() {
  return EVENTS.map((e) => ({ event: e.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { event } = await params;
  const e = getEvent(event);
  if (!e) return {};
  return pageMeta({ title: e.meta.title, description: e.meta.description, path: `/events/${e.slug}/` });
}

export default async function EventPage({ params }: Props) {
  const { event } = await params;
  const e = getEvent(event);
  if (!e) notFound();
  const walls = e.walls.map((s) => allWalls.find((w) => w.slug === s)).filter(Boolean) as Wall[];
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Events", path: "/events/" },
            { name: e.nav, path: `/events/${e.slug}/` },
          ]),
          faqJsonLd(e.faqs),
        ]}
      />
      <section className="bg-bloom-50">
        <div className="mx-auto max-w-4xl px-4 py-14">
          <nav aria-label="Breadcrumb" className="text-sm text-ink/60">
            <Link href="/events/" className="hover:text-bloom-600">Events</Link> / {e.nav}
          </nav>
          <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl">{e.h1}</h1>
          <p className="mt-4 text-lg text-ink/75">{e.lede}</p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-12 space-y-10">
        {e.sections.map((s) => (
          <section key={s.h}>
            <h2 className="font-[family-name:var(--font-display)] text-2xl">{s.h}</h2>
            {s.p.map((p) => (
              <p key={p.slice(0, 40)} className="mt-3 text-ink/80 leading-relaxed">{p}</p>
            ))}
          </section>
        ))}
      </article>

      <section className="mx-auto max-w-6xl px-4 pb-6">
        <h2 className="font-[family-name:var(--font-display)] text-2xl">Walls that suit {e.nav.toLowerCase()}</h2>
        <div className="mt-6 grid gap-8 grid-cols-2 lg:grid-cols-4">
          {walls.map((w) => <WallCard key={w.slug} wall={w} />)}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <h2 className="font-[family-name:var(--font-display)] text-2xl">Quick answers</h2>
        <dl className="mt-4 space-y-6">
          {e.faqs.map((f) => (
            <div key={f.q}>
              <dt className="font-medium">{f.q}</dt>
              <dd className="mt-1 text-ink/80">{f.a}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={SITE.booking.contact} className="rounded-full bg-bloom-600 px-6 py-3 text-white font-medium hover:bg-bloom-700 transition-colors">Get a quote</a>
          <Link href="/packages/" className="rounded-full border border-bloom-300 px-6 py-3 font-medium hover:bg-bloom-50 transition-colors">Add a photo booth</Link>
        </div>
      </section>
    </>
  );
}
