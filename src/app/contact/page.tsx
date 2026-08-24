import { pageMeta } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = pageMeta({
  title: "Contact & Booking | Flower Wall Rentals New Jersey",
  description:
    "Request a quote for flower wall and photo booth rentals in New Jersey. Tell us your date and venue and we'll check availability.",
  path: "/contact/",
});

export default function Contact() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="font-[family-name:var(--font-display)] text-4xl">
        Check your date
      </h1>
      <p className="mt-4 text-lg text-ink/75">
        Tell us the date, the venue and roughly what you have in mind. We reply
        with real availability and a real number.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={SITE.booking.contact}
          className="rounded-full bg-brand px-6 py-3 text-white font-medium hover:bg-brand-dark transition-colors"
        >
          Request a quote
        </a>
        <a
          href={SITE.booking.collection}
          className="rounded-full border border-heritage/40 px-6 py-3 font-medium hover:bg-white transition-colors"
        >
          Check availability online
        </a>
      </div>

      {SITE.phone ? (
        <p className="mt-8 text-ink/80">
          Prefer to talk? Call <a className="text-heritage underline underline-offset-4" href={SITE.phoneHref}>{SITE.phone}</a>.
        </p>
      ) : null}
    </article>
  );
}
