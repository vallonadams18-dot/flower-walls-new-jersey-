import { SITE, SERVICE_AREAS, COVERAGE_HUBS } from "./site";
import walls from "@/data/walls.json";
import { displayName } from "@/data/wall-renames";

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
 * The full wall catalog as an ItemList. No Offer nodes: the site does not
 * publish prices, so there is no rate to mark up, and a rich result must not
 * state a figure the page itself does not.
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
        name: `${displayName(w.name)} flower wall`,
        image: w.image,
        url: `${SITE.url}/flower-walls/#${w.slug}`,
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

/**
 * How a delivery and install actually runs, for the location hubs.
 *
 * Worth knowing: Google retired HowTo rich results from search in 2023, so
 * this earns no rich snippet today. It stays because it is accurate machine
 * -readable description of the service and costs nothing — but it should not
 * be counted as a ranking lever.
 */
export function howToJsonLd(area: string, accessNote: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How a flower wall install works in ${area}`,
    description: `What happens between booking a flower wall or photo booth for an event in ${area} and the setup being ready for guests.`,
    totalTime: "PT1H",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Tell us the venue and the room",
        text: `Send the date, the venue and which room. ${accessNote}`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "We confirm access and paperwork",
        text: "We agree the load-in window with the venue and issue a certificate of insurance where they require one, naming them exactly as asked.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Delivery and install",
        text: "The crew arrives inside the agreed window and builds the wall on a weighted free-standing frame. Nothing attaches to the venue's walls, floors or ceilings. Outdoors, the frame is ballasted and the weather called the day before.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Collection",
        text: "We collect the same night or the following morning, whichever the venue prefers, and take our packaging with us.",
      },
    ],
  };
}

/** A service offered into a named area. No Offer node — this site publishes no prices. */
export function serviceJsonLd(opts: {
  name: string;
  serviceType: string;
  description: string;
  url: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: opts.url,
    provider: { "@id": `${SITE.url}/#business` },
    areaServed: { "@type": "State", name: "New Jersey" },
  };
}
