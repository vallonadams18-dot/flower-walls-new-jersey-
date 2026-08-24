/** Event cluster pages. Five at launch; expand only when a new page can be
 *  genuinely different from these. Each links walls, booths, packages and
 *  locations so the cluster reads as one topic to crawlers and humans. */
export interface EventPage {
  slug: string;
  nav: string;
  h1: string;
  meta: { title: string; description: string };
  lede: string;
  sections: { h: string; p: string[] }[];
  walls: string[];   // wall slugs to feature
  faqs: { q: string; a: string }[];
}

export const EVENTS: EventPage[] = [
  {
    slug: "weddings",
    nav: "Weddings",
    h1: "Wedding flower walls and photo booths in New Jersey",
    meta: {
      title: "Wedding Flower Wall Rental New Jersey",
      description:
        "Wedding flower wall rentals across New Jersey — ceremony backdrops, sweetheart-table walls and photo-op installs, with photo booths to match.",
    },
    lede: "Ceremony backdrop, sweetheart table, photo corner — one wall can carry all three moments, and we move it between them.",
    sections: [
      {
        h: "Where the wall goes",
        p: [
          "Most couples use the wall twice: behind the ceremony, then moved to frame the sweetheart table or the photo corner during the reception. We schedule the move with your venue and planner so it happens during cocktail hour, not during speeches.",
          "White and blush walls — Purity, Pink Blush, White Pink Blush — photograph cleanly against every bridal palette. Ombre and Sunset suit couples who want the backdrop to be a statement of its own.",
        ],
      },
      {
        h: "Timing with your venue",
        p: [
          "We install before your florist's final styling pass and collect after breakdown, coordinating directly with the venue on load-in windows and insurance paperwork. You should never have to relay messages between vendors on your wedding morning.",
        ],
      },
      {
        h: "Add the booth",
        p: [
          "The glam booth's black-and-white portraits are the current wedding favourite, and the mirror booth suits receptions where guests span four generations. Either pairs with your wall as a package — one delivery, one invoice.",
        ],
      },
    ],
    walls: ["purity", "pink-blush", "white-pink-blush", "ombre"],
    faqs: [
      {
        q: "Can the flower wall be moved during the wedding?",
        a: "Yes. One move — typically ceremony to reception — is common and we schedule it with your venue during cocktail hour. Tell us at booking so the crew stays on site.",
      },
      {
        q: "Do you work with our planner and florist?",
        a: "Always. We coordinate install timing so the wall is in place before final styling, and we are used to taking direction from planners on the day.",
      },
    ],
  },
  {
    slug: "birthdays",
    nav: "Birthdays",
    h1: "Birthday flower walls and photo booths in New Jersey",
    meta: {
      title: "Birthday Party Flower Wall Rental New Jersey",
      description:
        "Flower wall and photo booth rentals for birthdays across New Jersey — first birthdays, Sweet 16s, quinceañeras and milestone parties.",
    },
    lede: "From first birthdays to fortieths — and every Sweet 16 and quinceañera between — the wall is where the party photographs itself.",
    sections: [
      {
        h: "Match the wall to the party",
        p: [
          "Barbie Wall and Pink Butterfly own the Sweet 16 market for a reason. Quinceañeras lean into Rio, Ombre and Rainbow. Milestone adult birthdays tend toward Ebony or Ruby's Red with gold signage — dramatic in photos, elegant in the room.",
          "Add a custom neon sign with a name or age and the wall becomes the party's centrepiece rather than its background.",
        ],
      },
      {
        h: "Home parties and rented halls",
        p: [
          "We install in backyards, banquet halls and living rooms alike. The stands are free-standing and weighted — nothing attaches to walls or ceilings — so security deposits survive us. For outdoor parties we bring extra ballast and plan a sheltered spot.",
        ],
      },
    ],
    walls: ["barbie-wall", "pink-butterfly", "rio", "ebony"],
    faqs: [
      {
        q: "Do you do Sweet 16s and quinceañeras?",
        a: "Constantly — they are some of our favourite events. Tell us the theme colours and we will shortlist walls that match.",
      },
      {
        q: "Can you set up in a backyard?",
        a: "Yes, on grass or patio, with extra weighting. We skip outdoor installs only in sustained high wind, and we will flag that risk before your date.",
      },
    ],
  },
  {
    slug: "baby-showers",
    nav: "Baby Showers",
    h1: "Baby shower flower walls in New Jersey",
    meta: {
      title: "Baby Shower Flower Wall Rental New Jersey",
      description:
        "Baby shower and gender reveal flower wall rentals in New Jersey. Soft palettes, custom signs and photo booths for the big reveal.",
    },
    lede: "The wall behind the gift table, the backdrop for the reveal, the photo every guest takes with the parents-to-be.",
    sections: [
      {
        h: "Palettes that work",
        p: [
          "Sky Blue and Purple Baby are the classic shower walls. Pink & Blue was practically built for gender reveals. If the nursery palette is neutral, Earthy and Tan photograph beautifully with pampas and rattan styling.",
          "A custom neon sign — a name, 'oh baby', a due date — turns the wall into the shower's signature shot.",
        ],
      },
      {
        h: "Small venues welcome",
        p: [
          "Showers often happen in restaurant private rooms and homes. The wall needs about 8ft of width and 2ft of depth; we measure against your space before you commit, and the digital photo booth adds a photo experience with almost no extra footprint.",
        ],
      },
    ],
    walls: ["sky-blue", "purple-baby", "pink-blue", "earthy"],
    faqs: [
      {
        q: "Will the wall fit in a restaurant private room?",
        a: "Usually. A standard wall is 8ft x 8ft and needs about 2ft of clearance. Send us the room dimensions or a photo and we will confirm before you book.",
      },
    ],
  },
  {
    slug: "bridal-showers",
    nav: "Bridal Showers",
    h1: "Bridal shower flower walls in New Jersey",
    meta: {
      title: "Bridal Shower Flower Wall Rental New Jersey",
      description:
        "Bridal shower and engagement party flower wall rentals in New Jersey. Romantic backdrops sized for restaurants, homes and garden parties.",
    },
    lede: "A romantic backdrop that makes the bride-to-be the centre of every photograph — sized for restaurants, gardens and homes.",
    sections: [
      {
        h: "The shower look",
        p: [
          "Blush and white walls carry the classic bridal shower: Pink Blush, White Pink Blush and Jasmin are the three we deliver most. For garden-party themes, Greenstreak reads as a hedge in bloom and pairs with minimal extra styling.",
          "Engagement parties lean bolder — Ruby's Red and Ombre give the toast photos real drama.",
        ],
      },
      {
        h: "Easy on the host",
        p: [
          "We deliver, install and collect around the venue's schedule, so whoever is hosting adds nothing to their list. Most showers book the wall alone; the digital booth is the usual add-on when guests skew social-media-first.",
        ],
      },
    ],
    walls: ["pink-blush", "jasmin", "greenstreak", "ruby-s-red"],
    faqs: [
      {
        q: "How far ahead should a shower book?",
        a: "Four to six weeks is comfortable. Spring Saturdays go earliest — shower season and wedding season are the same season.",
      },
    ],
  },
  {
    slug: "corporate",
    nav: "Corporate",
    h1: "Corporate flower walls and photo booths in New Jersey",
    meta: {
      title: "Corporate Flower Wall Rentals New Jersey",
      description:
        "Corporate flower wall and photo booth rentals in New Jersey — brand activations, launches, conferences and holiday parties, with COIs handled.",
    },
    lede: "Brand activations, launches, conferences and holiday parties — with the paperwork corporate venues demand handled same-day.",
    sections: [
      {
        h: "Activations that earn the queue",
        p: [
          "A floral wall with the company mark set into it out-performs a vinyl step-and-repeat because guests actually want to stand in front of it. Add the branded booth and every share carries your identity plus the data your team reports on.",
          "We work the Jersey City and Newark hotel ballrooms, Princeton conference venues, and the corporate campuses along the 287 and Route 1 corridors regularly — name the venue and we can usually tell you the load-in.",
        ],
      },
      {
        h: "Procurement-friendly",
        p: [
          "Certificates of insurance turned around same-day, W-9s on request, and multi-day installs priced as one setup rather than daily rebuilds. Green Machine and Tan are the walls that sit most neutrally behind any brand palette.",
        ],
      },
    ],
    walls: ["green-machine", "tan", "ebony", "custom"],
    faqs: [
      {
        q: "Can you provide a certificate of insurance?",
        a: "Yes, usually the same day. Send the venue's requirements with your enquiry and the COI arrives with the quote.",
      },
      {
        q: "Can the wall carry our logo?",
        a: "Yes — we set logos into custom walls for activations, and brand the booth and its sharing gallery to match. Allow about three weeks for custom pieces.",
      },
    ],
  },
];

export const getEvent = (slug: string) => EVENTS.find((e) => e.slug === slug);
