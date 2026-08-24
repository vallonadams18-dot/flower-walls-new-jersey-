import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES, getService } from "@/data/services";
import { COMBOS, getCombo } from "@/data/combos";
import { ComboPageView } from "@/components/ComboPageView";
import { pageMeta } from "@/lib/metadata";
import { JsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { SITE } from "@/lib/site";

/**
 * Root-level flat URLs, serving two page types from one segment: the service
 * pages (`/custom-signs`) and the coverage grid
 * (`/flower-wall-rental-newark-nj`).
 *
 * They share a route because the App Router cannot distinguish two sibling
 * dynamic segments at the same level, and both want to sit at the root — the
 * grid's flat URL shape is the one the market's only other location-page
 * builder uses, and it is what the playbook prescribes.
 */

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...SERVICES.map((s) => ({ slug: s.slug })),
    ...COMBOS.map((c) => ({ slug: c.slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const c = getCombo(slug);
  if (c) {
    return pageMeta({
      title: c.title,
      description: c.description,
      path: `/${c.slug}/`,
    });
  }

  const s = getService(slug);
  if (!s) return {};
  return pageMeta({
    title: s.meta.title,
    description: s.meta.description,
    path: `/${slug}/`,
  });
}

export default async function FlatPage({ params }: Props) {
  const { slug } = await params;

  const combo = getCombo(slug);
  if (combo) return <ComboPageView c={combo} />;

  const s = getService(slug);
  if (!s) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: s.nav, path: `/${s.slug}/` },
        ])}
      />
      <section className="bg-ivory">
        <div className="mx-auto max-w-4xl px-4 py-14">
          <h1 className="font-[family-name:var(--font-display)] text-4xl">{s.h1}</h1>
          <p className="mt-4 text-lg text-ink/75">{s.lede}</p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-12 space-y-10">
        {s.sections.map((sec) => (
          <section key={sec.h}>
            <h2 className="font-[family-name:var(--font-display)] text-2xl">{sec.h}</h2>
            {sec.p.map((para) => (
              <p key={para.slice(0, 40)} className="mt-3 text-ink/80 leading-relaxed">
                {para}
              </p>
            ))}
          </section>
        ))}

        <a
          href={SITE.booking[s.cta]}
          className="inline-block rounded-full bg-brand px-6 py-3 text-white font-medium hover:bg-brand-dark transition-colors"
        >
          Request a quote
        </a>
      </article>
    </>
  );
}
