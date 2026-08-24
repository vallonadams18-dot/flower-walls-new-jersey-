import { SITE, SERVICE_AREAS, COVERAGE_HUBS } from "./site";
import walls from "@/data/walls.json";

type JsonLd = Record<string, unknown>;

export function businessJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    url: SITE.url,
    description:
      "Flower wall rentals across New Jersey for weddings, corporate events, brand activations and private parties. Over 50 designs, delivered, installed and collected.",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.addressLocality,
      addressRegion: SITE.addressRegion,
      addressCountry: "US",
    },
    // Two 50-mile GeoCircles (Newark and Barnegat) state the real delivery
    // range precisely; the named places keep the towns crawlable as text.
    areaServed: [
      ...COVERAGE_HUBS.map((h) => ({
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: h.lat,
          longitude: h.lng,
          name: `${h.name}, NJ`,
        },
        geoRadius: `${Math.round(h.radiusMiles * 1609.34)}`,
      })),
      ...SERVICE_AREAS.map((name) => ({ "@type": "Place", name })),
    ],
    ...(SITE.phone ? { telephone: SITE.phone } : {}),
    ...(SITE.email ? { email: SITE.email } : {}),
  };
}

export function websiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { "@id": `${SITE.url}/#business` },
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/**
 * The full wall catalog as an ItemList. Only walls with a real advertised
 * rate carry an Offer — the catalog's $0/$100 entries are placeholders and
 * marking those up would publish prices that are not real.
 */
export function catalogJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Flower wall rentals in New Jersey",
    numberOfItems: walls.length,
    itemListElement: walls.map((w, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: `${w.name} flower wall`,
        image: w.image,
        url: `${SITE.url}/flower-walls/#${w.slug}`,
        ...(w.price
          ? {
              offers: {
                "@type": "Offer",
                price: w.price.replace(/[^0-9.]/g, ""),
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                url: w.bookingUrl,
              },
            }
          : {}),
      },
    })),
  };
}

export function breadcrumbJsonLd(trail: { name: string; path: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE.url}${t.path}`,
    })),
  };
}

/** Renders a JSON-LD block. Next inlines this into the static HTML at build. */
export function JsonLd({ data }: { data: JsonLd | JsonLd[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
