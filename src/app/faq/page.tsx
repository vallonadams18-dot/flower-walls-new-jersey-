import { pageMeta } from "@/lib/metadata";
import { JsonLd, faqJsonLd } from "@/lib/jsonld";
import { FAQS } from "@/data/faqs";
import Link from "next/link";
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
        {/* Three of these questions have a full guide behind them. Linking
            them here is where a reader actually wants them, and it gives the
            guides an entry point from content rather than only the footer. */}
        <section className="mt-12 border-t border-line pt-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl">
            Longer answers
          </h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/blog/what-size-flower-wall-do-i-need/" className="text-heritage hover:underline underline-offset-4">
                What size flower wall do you actually need?
              </Link>
            </li>
            <li>
              <Link href="/blog/certificate-of-insurance-nj-venues/" className="text-heritage hover:underline underline-offset-4">
                Your New Jersey venue asked for a COI. What now?
              </Link>
            </li>
            <li>
              <Link href="/blog/what-decides-flower-wall-cost/" className="text-heritage hover:underline underline-offset-4">
                What actually decides the cost of a flower wall rental
              </Link>
            </li>
          </ul>
        </section>
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
