import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, getPost, postsByDate } from "@/data/posts";
import { pageMeta } from "@/lib/metadata";
import { JsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { SITE } from "@/lib/site";

interface Props {
  params: Promise<{ post: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ post: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { post } = await params;
  const p = getPost(post);
  if (!p) return {};
  return pageMeta({
    title: p.meta.title,
    description: p.meta.description,
    path: `/blog/${p.slug}/`,
  });
}

const shown = (iso: string) =>
  new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

export default async function PostPage({ params }: Props) {
  const { post } = await params;
  const p = getPost(post);
  if (!p) notFound();

  const others = postsByDate()
    .filter((o) => o.slug !== p.slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/blog/" },
            { name: p.title, path: `/blog/${p.slug}/` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: p.title,
            description: p.dek,
            datePublished: p.date,
            dateModified: p.date,
            url: `${SITE.url}/blog/${p.slug}/`,
            mainEntityOfPage: `${SITE.url}/blog/${p.slug}/`,
            author: { "@type": "Organization", name: SITE.name },
            publisher: { "@id": `${SITE.url}/#business` },
          },
        ]}
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <nav aria-label="Breadcrumb" className="text-sm text-ink/60">
            <Link href="/blog/" className="hover:text-heritage">
              Guides
            </Link>
          </nav>
          <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl sm:text-5xl leading-tight">
            {p.title}
          </h1>
          <p className="mt-3 text-sm text-ink/55">
            <time dateTime={p.date}>{shown(p.date)}</time> · {p.minutes} min read
          </p>
          <div className="gold-rule mt-6" />
          <p className="mt-6 text-lg text-mute leading-relaxed">{p.dek}</p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-12 space-y-10">
        {p.sections.map((s) => (
          <section key={s.h}>
            <h2 className="font-[family-name:var(--font-display)] text-2xl">{s.h}</h2>
            {s.p.map((para) => (
              <p key={para.slice(0, 40)} className="mt-3 text-ink/80 leading-relaxed">
                {para}
              </p>
            ))}
          </section>
        ))}

        <div className="rounded-2xl bg-ivory border border-line p-6">
          <p className="font-[family-name:var(--font-display)] text-xl">
            Planning something in New Jersey?
          </p>
          <p className="mt-2 text-ink/75 leading-relaxed">
            Tell us the date, the venue and the room. We will come back with a
            straight answer.
          </p>
          <a
            href={SITE.booking.contact}
            className="mt-4 inline-block rounded-full bg-brand px-6 py-3 text-white font-medium hover:bg-brand-dark transition-colors"
          >
            Ask us
          </a>
        </div>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-xl">Related</h2>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {p.related.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="text-heritage hover:underline underline-offset-4"
                >
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-xl">More guides</h2>
          <ul className="mt-3 space-y-2">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/blog/${o.slug}/`}
                  className="text-ink/75 hover:text-heritage hover:underline underline-offset-4"
                >
                  {o.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}
