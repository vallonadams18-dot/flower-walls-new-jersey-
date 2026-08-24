import Link from "next/link";
import { postsByDate } from "@/data/posts";
import { pageMeta } from "@/lib/metadata";
import { JsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { SITE } from "@/lib/site";

export const metadata = pageMeta({
  title: "Flower Wall & Event Planning Guides",
  description:
    "Practical guides for planning a New Jersey event — wall sizing, venue access, COI requirements, shore weather and what actually decides a quote.",
  path: "/blog/",
});

/** Formats an ISO date without pulling in a date library. */
const shown = (iso: string) =>
  new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

export default function BlogIndex() {
  const posts = postsByDate();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/blog/" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": ["CollectionPage", "Blog"],
            name: "Flower wall and event planning guides",
            url: `${SITE.url}/blog/`,
            publisher: { "@id": `${SITE.url}/#business` },
            blogPost: posts.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              description: p.dek,
              datePublished: p.date,
              url: `${SITE.url}/blog/${p.slug}/`,
            })),
          },
        ]}
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-4xl px-4 py-14">
          <p className="eyebrow">Guides</p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl sm:text-5xl leading-tight">
            Planning an event in New Jersey
          </h1>
          <div className="gold-rule mt-6" />
          <p className="mt-6 max-w-2xl text-lg text-mute leading-relaxed">
            The questions we get asked every week, answered properly — sizing,
            venue access, insurance paperwork, shore weather, and what actually
            moves a quote. Written from delivering in this state, not from a
            wedding blog.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <ul className="space-y-10">
          {posts.map((p) => (
            <li key={p.slug} className="group border-b border-line pb-10 last:border-0">
              <p className="text-sm text-ink/55">
                <time dateTime={p.date}>{shown(p.date)}</time> · {p.minutes} min read
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl sm:text-3xl">
                <Link
                  href={`/blog/${p.slug}/`}
                  className="group-hover:text-heritage transition-colors"
                >
                  {p.title}
                </Link>
              </h2>
              <p className="mt-2 text-ink/75 leading-relaxed max-w-2xl">{p.dek}</p>
              <Link
                href={`/blog/${p.slug}/`}
                className="mt-3 inline-block text-sm font-medium text-heritage underline-offset-4 group-hover:underline"
              >
                Read it
                <span className="sr-only">: {p.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
