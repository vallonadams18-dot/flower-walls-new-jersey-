import walls from "@/data/walls.json";
import { WallCard, type Wall } from "@/components/WallCard";
import { pageMeta } from "@/lib/metadata";
import { JsonLd, catalogJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { SITE } from "@/lib/site";

export const metadata = pageMeta({
  title: "Flower Walls New Jersey: Our Full Collection",
  description:
    "Browse our full collection of flower walls in New Jersey. Over 50 designs in every colour and style, available for weddings, parties and brand events.",
  path: "/flower-walls/",
});

const all = walls as Wall[];

export default function FlowerWalls() {
  return (
    <>
      <JsonLd
        data={[
          catalogJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Flower Walls", path: "/flower-walls/" },
          ]),
        ]}
      />

      <section className="mx-auto max-w-6xl px-4 pt-14 pb-8">
        <h1 className="font-[family-name:var(--font-display)] text-4xl">
          Our flower wall collection
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-ink/75">
          {all.length} walls, all available across New Jersey. Every one is
          delivered, installed and collected by our team. Walls without a listed
          price are quoted to your date, size and venue.
        </p>
        <a
          href={SITE.booking.contact}
          className="mt-6 inline-block rounded-full bg-brand px-6 py-3 text-white font-medium hover:bg-brand-dark transition-colors"
        >
          Request a quote
        </a>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {all.map((w) => (
            <WallCard key={w.slug} wall={w} />
          ))}
        </div>
      </section>
    </>
  );
}
