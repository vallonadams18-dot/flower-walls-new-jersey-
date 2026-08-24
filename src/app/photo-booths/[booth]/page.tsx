import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BOOTHS, getBooth } from "@/data/booths";
import { pageMeta } from "@/lib/metadata";
import { JsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { SITE } from "@/lib/site";

interface Props { params: Promise<{ booth: string }> }
export const dynamicParams = false;
export function generateStaticParams() {
  return BOOTHS.map((b) => ({ booth: b.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { booth } = await params;
  const b = getBooth(booth);
  if (!b) return {};
  return pageMeta({ title: b.meta.title, description: b.meta.description, path: `/photo-booths/${b.slug}/` });
}

export default async function BoothPage({ params }: Props) {
  const { booth } = await params;
  const b = getBooth(booth);
  if (!b) notFound();
  const others = BOOTHS.filter((o) => o.slug !== b.slug).slice(0, 3);
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Photo Booths", path: "/photo-booths/" },
          { name: b.name, path: `/photo-booths/${b.slug}/` },
        ])}
      />
      <section className="bg-ivory">
        <div className="mx-auto max-w-4xl px-4 py-14">
          <nav aria-label="Breadcrumb" className="text-sm text-ink/60">
            <Link href="/photo-booths/" className="hover:text-heritage">Photo Booths</Link> / {b.name}
          </nav>
          <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl">{b.h1}</h1>
          <p className="mt-4 text-lg text-ink/75">{b.lede}</p>
        </div>
      </section>
      <article className="mx-auto max-w-3xl px-4 py-12 space-y-10">
        {b.sections.map((s) => (
          <section key={s.h}>
            <h2 className="font-[family-name:var(--font-display)] text-2xl">{s.h}</h2>
            {s.p.map((p) => (
              <p key={p.slice(0, 40)} className="mt-3 text-ink/80 leading-relaxed">{p}</p>
            ))}
          </section>
        ))}
        <div className="flex flex-wrap gap-3">
          <a href={SITE.booking.contact} className="rounded-full bg-brand px-6 py-3 text-white font-medium hover:bg-brand-dark transition-colors">
            Get a quote
          </a>
          <Link href="/packages/" className="rounded-full border border-heritage/40 px-6 py-3 font-medium hover:bg-white transition-colors">
            Pair it with a flower wall
          </Link>
        </div>
        <p className="text-sm text-ink/60">
          Also consider: {others.map((o, i) => (
            <span key={o.slug}>
              <Link href={`/photo-booths/${o.slug}/`} className="text-heritage hover:underline underline-offset-4">{o.name}</Link>
              {i < others.length - 1 ? " · " : ""}
            </span>
          ))}
        </p>
      </article>
    </>
  );
}
