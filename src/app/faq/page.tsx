import { pageMeta } from "@/lib/metadata";
import { JsonLd, faqJsonLd } from "@/lib/jsonld";
import { FAQS } from "@/data/faqs";
import { SITE } from "@/lib/site";

export const metadata = pageMeta({
  title: "Flower Wall Rental FAQ | New Jersey",
  description:
    "Answers on pricing, delivery, setup and sizing for flower wall rentals in New Jersey. What to expect when you book with us.",
  path: "/faq/",
});

export default function Faq() {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQS.map((f) => ({ q: f.q, a: f.a })))} />
      <article className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="font-[family-name:var(--font-display)] text-4xl">
          Flower wall rental FAQ
        </h1>
        <dl className="mt-10 space-y-8">
          {FAQS.map((f) => (
            <div key={f.q}>
              <dt className="font-[family-name:var(--font-display)] text-xl">{f.q}</dt>
              <dd className="mt-2 text-ink/80 leading-relaxed">{f.a}</dd>
            </div>
          ))}
        </dl>
        <a
          href={SITE.booking.contact}
          className="mt-10 inline-block rounded-full bg-brand px-6 py-3 text-white font-medium hover:bg-brand-dark transition-colors"
        >
          Still have a question? Ask us
        </a>
      </article>
    </>
  );
}
