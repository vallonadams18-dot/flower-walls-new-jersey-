/**
 * Service page copy.
 *
 * Written fresh for New Jersey rather than adapted from the Atlanta or
 * California sites. Those sites share near-identical text across four
 * domains, which is why none of them rank well — Google treats them as
 * duplicates of each other. Keeping this copy genuinely distinct is the
 * whole point.
 */
export interface ServicePage {
  slug: string;
  nav: string;
  h1: string;
  meta: { title: string; description: string };
  lede: string;
  sections: { h: string; p: string[] }[];
  cta: "collection" | "contact" | "wallEnquiry";
}

export const SERVICES: ServicePage[] = [
  {
    slug: "photo-booth-rental-new-jersey",
    nav: "Photo Booths",
    h1: "Photo booth rental in New Jersey",
    meta: {
      title: "Photo Booth Rental New Jersey | Weddings & Corporate",
      description:
        "Modern photo booth rentals in New Jersey. Mirror booths, enclosed booths and 360 booths for weddings, corporate events and private parties.",
    },
    lede: "Mirror, enclosed and 360 booths, delivered with an attendant who stays for the whole event.",
    sections: [
      {
        h: "Booths that suit the room",
        p: [
          "A ballroom in Morristown and a loft in Jersey City need different equipment. Open-air mirror booths work where there is floor space and a decent backdrop. Enclosed booths suit tighter venues and crowds that want a bit of privacy. A 360 booth needs clearance on all sides and a ceiling that will take the lighting.",
          "We ask about the room before recommending anything, because the wrong booth in the right venue still produces a queue nobody joins.",
        ],
      },
      {
        h: "What is included",
        p: [
          "Delivery, setup, an attendant for the duration, unlimited sessions, instant prints and a digital gallery afterwards. Props and custom print templates are included rather than upsold.",
          "Setup takes about an hour. We arrive early enough that the booth is running before your first guest walks in, and we break down after the last one leaves.",
        ],
      },
      {
        h: "Pairing a booth with a flower wall",
        p: [
          "Most of our bookings are both. A flower wall gives the booth a backdrop that matches the event styling rather than a generic curtain, and the same team sets up both in one visit.",
        ],
      },
    ],
    cta: "contact",
  },
  {
    slug: "event-rentals",
    nav: "Event Rentals",
    h1: "Event rentals in New Jersey",
    meta: {
      title: "Event Rentals New Jersey | Decor & Backdrops",
      description:
        "Event rentals across New Jersey, from flower walls and backdrops to custom decor. Everything you need to transform your venue in one place.",
    },
    lede: "Backdrops, walls, signage and staging — sourced, delivered and installed by one team.",
    sections: [
      {
        h: "One supplier, one delivery",
        p: [
          "Coordinating four vendors into a venue with a two-hour load-in window is how event days go wrong. We supply the wall, the booth, the signage and the props together, on one truck, with one contact.",
          "That matters most at venues with strict access rules — hotel loading bays, waterfront venues with limited parking, historic properties that will not take fixings in the walls.",
        ],
      },
      {
        h: "Built for New Jersey venues",
        p: [
          "Our stands are free-standing and weighted. Nothing is drilled, taped or leaned against a wall, which keeps venue managers happy and keeps your deposit intact.",
          "For outdoor events at the Shore we bring extra ballast. A flower wall behaves like a sail in an ocean breeze, and we would rather over-engineer it than watch it go over.",
        ],
      },
    ],
    cta: "contact",
  },
  {
    slug: "event-branding",
    nav: "Event Branding",
    h1: "Event branding in New Jersey",
    meta: {
      title: "Event Branding New Jersey | Custom Signage & Decor",
      description:
        "Event branding in New Jersey. Custom signage, branded backdrops and print media that bring your brand into the room and onto every photo.",
    },
    lede: "Logo walls, step-and-repeats and printed decor that put your brand in the photograph, not just the room.",
    sections: [
      {
        h: "Branding that survives the crop",
        p: [
          "Most event photography ends up cropped square for social. A logo along the bottom of a backdrop disappears in that crop. We lay out step-and-repeats so the mark reads at any crop and at thumbnail size.",
          "The same applies to flower walls with an inset logo — the floral has to frame the mark, not swallow it.",
        ],
      },
      {
        h: "Lead times",
        p: [
          "Printed graphics need about two weeks from artwork approval. Rush turnarounds are possible but cost more and leave no room for a reprint if the colour is off, so we would rather have your files early.",
        ],
      },
    ],
    cta: "contact",
  },
  {
    slug: "custom-signs",
    nav: "Custom Signs",
    h1: "Custom event signs in New Jersey",
    meta: {
      title: "Custom Signs New Jersey | Neon & Event Signage",
      description:
        "Custom event signs in New Jersey. Neon signs, welcome boards and branded displays made for weddings, launches and corporate events.",
    },
    lede: "Neon signs, welcome boards and bespoke lettering, made for the event and lit for the camera.",
    sections: [
      {
        h: "Neon and LED",
        p: [
          "Modern event neon is LED flex on acrylic — lighter, safer and brighter in photographs than glass. It runs off a standard outlet and can hang on a flower wall without extra rigging.",
          "Names, dates, a phrase, a monogram. If it fits on a sheet of acrylic we can make it.",
        ],
      },
      {
        h: "Ordering",
        p: [
          "Custom signs take roughly three weeks. Send the wording and any font preference and we will mock it up before anything is manufactured.",
        ],
      },
    ],
    cta: "contact",
  },
  {
    slug: "corporate-events",
    nav: "Corporate",
    h1: "Corporate flower wall rentals in New Jersey",
    meta: {
      title: "Corporate Flower Wall Rentals New Jersey",
      description:
        "Corporate flower wall rentals in New Jersey for brand activations, launches and conferences. Custom logo walls and step-and-repeat backdrops.",
    },
    lede: "Brand activations, product launches, conferences and holiday parties across the state.",
    sections: [
      {
        h: "Working with corporate timelines",
        p: [
          "Corporate events run on procurement schedules, certificates of insurance and venue compliance paperwork. We are set up for all three and can usually turn a COI around the same day.",
          "For multi-day conferences we can leave the installation in place and return for breakdown, rather than charging a fresh setup each morning.",
        ],
      },
      {
        h: "Logo walls",
        p: [
          "A floral wall with the company mark set into it photographs far better than a vinyl step-and-repeat, and guests actually queue for it. That is the point — an activation only works if people want to stand in front of it.",
        ],
      },
      {
        h: "Venues we know",
        p: [
          "We work regularly across Jersey City and Newark hotel ballrooms, Princeton conference space, and the pharmaceutical and financial campuses along the 287 and Route 1 corridors. If you tell us the venue we can usually tell you the load-in.",
        ],
      },
    ],
    cta: "contact",
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
