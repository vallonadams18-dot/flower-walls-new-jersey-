/**
 * Photo booth lineup. Grounded in the booths the business itself described
 * on its old photo-booth page (Social, Pro, Lux, Infinity 360, Magic Mirror,
 * B&W Glam, Video, Branded) — nothing here is invented. Copy is rewritten
 * fresh for New Jersey.
 */
export interface Booth {
  slug: string;
  name: string;
  nav: string;
  meta: { title: string; description: string };
  h1: string;
  lede: string;
  sections: { h: string; p: string[] }[];
}

export const BOOTHS: Booth[] = [
  {
    slug: "360-photo-booth",
    name: "Infinity 360 Booth",
    nav: "360 Booth",
    meta: {
      title: "360 Photo Booth Rental New Jersey",
      description:
        "360 photo booth rental in New Jersey. Slow-motion 15-second videos of your guests from every angle, set to music, shared instantly.",
    },
    h1: "360 photo booth rental in New Jersey",
    lede: "A rotating camera circles your guests on a platform, capturing slow-motion video from every angle, set to the soundtrack you pick.",
    sections: [
      {
        h: "How it works",
        p: [
          "Guests step onto the platform, the arm sweeps around them, and fifteen seconds later they have a slow-motion video ready to share. An attendant runs the booth all night, keeps the line moving and helps guests nail the moment.",
          "Videos deliver instantly by text or QR code, so your event's hashtag starts filling up while the party is still going.",
        ],
      },
      {
        h: "Space and setup",
        p: [
          "The 360 needs roughly a 10ft x 10ft footprint with clearance on all sides, plus a standard outlet. We confirm the space against your venue before booking — some ballroom corners work, some dance-floor edges don't, and we'd rather know first.",
        ],
      },
      {
        h: "Pair it with a flower wall",
        p: [
          "A flower wall behind the 360 platform turns every rotation into a styled shot instead of a room full of chairs. It is our most-booked combination — see the packages page.",
        ],
      },
    ],
  },
  {
    slug: "mirror-photo-booth",
    name: "Magic Mirror Booth",
    nav: "Mirror Booth",
    meta: {
      title: "Mirror Photo Booth Rental New Jersey",
      description:
        "Magic mirror photo booth rental in New Jersey. A full-length interactive mirror with animations, touch signing and instant prints.",
    },
    h1: "Magic mirror photo booth rental in New Jersey",
    lede: "A full-length mirror that talks back — animations, touch-screen signing and games, with instant prints your guests take home.",
    sections: [
      {
        h: "Why guests love it",
        p: [
          "The mirror greets guests, walks them through poses with animations, and lets them sign or doodle on their photo before it prints. It photographs people at full length, which flatters gowns and suits in a way a cropped booth cannot.",
          "It is the booth people queue for twice — once to take photos and once to watch other people take them.",
        ],
      },
      {
        h: "What is included",
        p: [
          "Delivery and setup, an attendant for the full rental, unlimited sessions, instant prints, props, a custom print template matched to your event, and a digital gallery afterwards.",
        ],
      },
    ],
  },
  {
    slug: "glam-photo-booth",
    name: "Glam Booth",
    nav: "Glam Booth",
    meta: {
      title: "Glam Photo Booth Rental New Jersey",
      description:
        "Glam photo booth rental in New Jersey. Black-and-white studio portraits with skin-smoothing glam filter — the Kardashian-style booth.",
    },
    h1: "Glam photo booth rental in New Jersey",
    lede: "Black-and-white studio portraits with a subtle skin-smoothing filter — timeless, flattering, and the most-requested look for upscale events.",
    sections: [
      {
        h: "The look",
        p: [
          "One light, one backdrop, black and white, and a glam filter that smooths without blurring. The result reads like a magazine portrait rather than a party snap, which is why this style took over weddings and galas.",
          "Prints come out as classic strips or full portraits, and the digital copies arrive by text before guests leave the booth.",
        ],
      },
      {
        h: "Where it fits",
        p: [
          "Weddings, milestone birthdays, galas and any event with a dress code. It pairs especially well with our Ebony or Purity walls when you want the backdrop in colour and the prints in black and white.",
        ],
      },
    ],
  },
  {
    slug: "digital-photo-booth",
    name: "Social Booth",
    nav: "Digital Booth",
    meta: {
      title: "Digital Photo Booth Rental New Jersey",
      description:
        "Digital photo booth rental in New Jersey. Photos, GIFs and boomerangs uploaded live to a branded gallery — no prints, no waiting.",
    },
    h1: "Digital photo booth rental in New Jersey",
    lede: "Photos, GIFs and boomerangs, delivered straight to phones and a live gallery — the lightest-footprint booth we run.",
    sections: [
      {
        h: "Built for sharing",
        p: [
          "Everything the booth captures uploads in real time to a gallery you can brand — your names, your logo, your hashtag. Guests grab their shots by text or QR and post them while the event is still trending.",
          "Because there is no printer, the booth sets up almost anywhere, needs only an outlet, and keeps a smaller footprint than any other option — handy for tighter venues.",
        ],
      },
      {
        h: "Good to know",
        p: [
          "If your crowd loves physical prints, pair the digital booth with the mirror or glam booth instead — or add prints through a package. We will tell you honestly which fits your event.",
        ],
      },
    ],
  },
  {
    slug: "video-booth",
    name: "Video Booth",
    nav: "Video Booth",
    meta: {
      title: "Video Booth Rental New Jersey",
      description:
        "Video booth rental in New Jersey. High-quality guest videos with filters and effects, processed on the spot — video guestbooks and more.",
    },
    h1: "Video booth rental in New Jersey",
    lede: "Guests record high-quality video messages with filters and effects, processed instantly — the modern video guestbook.",
    sections: [
      {
        h: "What it does",
        p: [
          "Guests step in and record — a toast, a message to the couple, a birthday wish — and the booth processes it on the spot with the filter set you choose. By the end of the night you have a full reel of everyone who matters saying something you will keep.",
          "It runs alongside a photo booth without competing with it: photos for the wall, videos for the memory.",
        ],
      },
    ],
  },
  {
    slug: "branded-photo-booth",
    name: "Branded Booth",
    nav: "Branded Booth",
    meta: {
      title: "Branded Photo Booth Rental New Jersey | Activations",
      description:
        "Branded photo booth rentals in New Jersey for brand activations. Custom wraps, branded overlays, data capture and live galleries.",
    },
    h1: "Branded photo booths for New Jersey activations",
    lede: "The booth becomes the brand — custom wraps, branded photo overlays, a branded live gallery, and capture that gives your team real numbers.",
    sections: [
      {
        h: "Built around your campaign",
        p: [
          "We wrap the booth hardware to your spec, put your mark on every photo and GIF, and skin the sharing gallery in your identity. Guests do the distribution for you — every share carries the brand.",
          "For teams that need numbers, the platform reports sessions, shares and opt-ins, so the activation ends with data instead of guesses.",
        ],
      },
      {
        h: "Add a branded flower wall",
        p: [
          "A floral wall with your logo set into it out-queues a vinyl step-and-repeat every time. One team delivers and installs both — see corporate events and packages.",
        ],
      },
    ],
  },
];

export const getBooth = (slug: string) => BOOTHS.find((b) => b.slug === slug);
