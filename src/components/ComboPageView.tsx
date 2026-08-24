import Link from "next/link";
import {
  COMBOS,
  COMBO_SERVICES,
  combosForLocation,
  type ComboPage,
} from "@/data/combos";
import { LOCATIONS } from "@/data/locations";
import { SITE } from "@/lib/site";
import { JsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonld";

/**
 * A coverage-grid page — one service in one New Jersey town.
 *
 * Rendered from the root `[slug]` route rather than its own dynamic segment:
 * the App Router cannot tell two sibling dynamic segments apart, and the flat
 * `/flower-wall-rental-newark-nj` URL shape is worth keeping.
 */
export function ComboPageView({ c }: { c: ComboPage }) {

  const service = COMBO_SERVICES[c.service];
  const location = LOCATIONS.find((l) => l.slug === c.locationSlug);
  // Other services we cover in this same town — the tier's internal links.
  const siblings = combosForLocation(c.locationSlug).filter((o) => o.slug !== c.slug);
  // The same service in other towns, so no page in the grid is a dead end.
  const elsewhere = COMBOS.filter(
    (o) => o.service === c.service && o.slug !== c.slug,
  ).slice(0, 8);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: service.parent.name, path: service.parent.path },
            { name: `${service.label} in ${c.town}`, path: `/${c.slug}/` },
          ]),
          faqJsonLd(c.faqs),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${service.label} in ${c.town}`,
            serviceType: service.label,
            description: c.description,
            url: `${SITE.url}/${c.slug}/`,
            provider: { "@id": `${SITE.url}/#business` },
            areaServed: {
              "@type": "Place",
              name: `${c.town}, New Jersey`,
              address: {
                "@type": "PostalAddress",
                addressLocality: c.town,
                addressRegion: "NJ",
                addressCountry: "US",
              },
            },
          },
        ]}
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-4xl px-4 py-14">
          <nav aria-label="Breadcrumb" className="text-sm text-ink/60">
            <Link href={service.parent.path} className="hover:text-heritage">
              {service.parent.name}
            </Link>{" "}
            / {c.town}
          </nav>
          <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl sm:text-5xl leading-tight">
            {c.h1}
          </h1>
          <div className="gold-rule mt-6" />
          <p className="mt-6 max-w-2xl text-lg text-mute leading-relaxed">{c.lede}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SITE.booking.contact}
              className="rounded-full bg-brand px-7 py-3.5 text-white font-medium hover:bg-brand-dark transition-colors"
            >
              Check your date
            </a>
            <Link
              href={service.parent.path}
              className="rounded-full border border-heritage/50 px-7 py-3.5 font-medium text-brand hover:bg-white transition-colors"
            >
              {service.parent.name === "Weddings"
                ? "Weddings we style"
                : `Browse ${service.parent.name.toLowerCase()}`}
            </Link>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-12 space-y-5">
        {c.body.map((p) => (
          <p key={p.slice(0, 40)} className="text-ink/80 leading-relaxed">
            {p}
          </p>
        ))}
      </article>

      <section className="bg-white border-y border-line">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <h2 className="font-[family-name:var(--font-display)] text-2xl">
            {c.town === "the Jersey Shore"
              ? "Jersey Shore questions"
              : `${c.town} questions`}
          </h2>
          <dl className="mt-6 space-y-6">
            {c.faqs.map((f) => (
              <div key={f.q}>
                <dt className="font-medium">{f.q}</dt>
                <dd className="mt-1.5 text-ink/75 leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 space-y-8">
        {siblings.length ? (
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-xl">
              Also in {c.town}
            </h2>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {siblings.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/${o.slug}/`}
                    className="text-heritage hover:underline underline-offset-4"
                  >
                    {COMBO_SERVICES[o.service].label}
                  </Link>
                </li>
              ))}
              {location ? (
                <li>
                  <Link
                    href={`/locations/${location.slug}/`}
                    className="text-heritage hover:underline underline-offset-4"
                  >
                    Everything we do in {c.town}
                  </Link>
                </li>
              ) : null}
            </ul>
          </div>
        ) : location ? (
          <p>
            <Link
              href={`/locations/${location.slug}/`}
              className="text-heritage hover:underline underline-offset-4"
            >
              Everything we do in {c.town} →
            </Link>
          </p>
        ) : null}

        <div>
          <h2 className="font-[family-name:var(--font-display)] text-xl">
            {service.label} elsewhere in New Jersey
          </h2>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {elsewhere.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/${o.slug}/`}
                  className="text-ink/70 hover:text-heritage hover:underline underline-offset-4"
                >
                  {o.town}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/locations/"
                className="text-ink/70 hover:text-heritage hover:underline underline-offset-4"
              >
                All areas we serve →
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
