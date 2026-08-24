import type { Wall } from "@/components/WallCard";
import { displayName } from "@/data/wall-renames";

/**
 * FAQs for a wall detail page, built from that wall's own attributes rather
 * than a fixed template.
 *
 * Two questions, because two honest ones beat five padded ones: how the wall
 * behaves in front of a camera, and what it is usually booked for.
 *
 * The colour advice is shared between walls in the same family, and that is
 * correct — how a cool palette behaves under warm venue lighting is a fact
 * about the colour, not about the product. Combining the primary family with
 * a secondary modifier keeps most walls' answers distinct anyway.
 */

/** How a colour family actually behaves in a room, in front of a camera. */
const FAMILY: [string[], string][] = [
  [
    ["white", "ivory", "cream"],
    "pale walls take on whatever light you put near them, so a room with strong coloured uplighting will tint it — worth a look at the venue's lighting before the day",
  ],
  [
    ["blush", "pink", "rose"],
    "pink reads warmer on camera than it does to the eye, and it flatters skin tones in a way few backdrops manage",
  ],
  [
    ["hot pink", "crimson", "red"],
    "saturated reds and pinks deepen as the light drops, so an evening photograph looks richer than the same wall did at midday",
  ],
  [
    ["green", "natural"],
    "greenery reads as texture rather than colour, which makes it the most reliable background for signage and lettering",
  ],
  [
    ["blue", "ice blue", "indigo", "teal"],
    "cool palettes shift toward grey under warm tungsten lighting, so it is worth checking what the venue's fixtures actually are",
  ],
  [
    ["purple", "violet", "lilac", "lavender"],
    "purples are the hardest colour for a camera to hold on to and can drift blue under some lighting, which is why we favour them in daylight rooms",
  ],
  [
    ["tan", "beige", "gold"],
    "warm neutrals sit back rather than competing, which is exactly what you want when a logo or a sign is going in front",
  ],
  [
    ["black", "dark"],
    "a dark wall throws light outfits forward hard, and it needs light falling on the subject rather than only on the wall",
  ],
  [
    ["orange", "coral", "yellow"],
    "warm brights carry further across a large room than cool colours do, so this reads well from a distance",
  ],
  [
    ["multicolour", "rainbow"],
    "a multi-colour field is busy behind lettering, so this is at its best without a sign on top of it",
  ],
];

/** A short clause about the secondary colour, where there is one. */
const SECOND: [string[], string][] = [
  [["white", "ivory", "cream"], "the pale sections lift the whole wall and stop it reading heavy"],
  [["green", "natural"], "the greenery breaks up the colour and adds depth the flat shots would otherwise lack"],
  [["gold", "tan", "beige"], "the warm neutrals keep it from feeling one-note"],
  [["blush", "pink", "rose"], "the softer tones stop the stronger colour dominating every frame"],
  [["purple", "violet", "lilac", "lavender"], "the cooler notes give it depth in the shadows"],
  [["blue", "ice blue", "teal"], "the cool notes stop the warmth tipping over"],
  [["red", "crimson"], "the deeper tones give the gradient somewhere to land"],
];

const lookup = (table: [string[], string][], term?: string) =>
  term ? table.find(([keys]) => keys.includes(term))?.[1] : undefined;

/** What a wall's main use says about how it gets booked. */
const USE_NOTE: [string[], string][] = [
  [
    ["weddings", "boho weddings", "neutral-themed weddings", "engagements", "anniversaries"],
    "Wedding dates go earliest, so if yours falls on a Saturday between May and October it is worth asking sooner rather than later.",
  ],
  [
    ["corporate events", "brand activations", "step-and-repeats", "launch parties", "cocktail events"],
    "Corporate bookings usually want a logo or signage in front, which we can set up as part of the same delivery.",
  ],
  [
    ["birthdays", "birthday parties", "themed parties", "sweet sixteens", "quinceañeras", "bachelorettes"],
    "Party bookings are the most flexible on notice, and often the ones where a photo booth in front of the wall earns its place.",
  ],
  [
    ["showers", "bridal showers", "baby showers", "christenings", "gender reveals", "religious ceremonies"],
    "Showers concentrate their photographs into about two hours in one corner, which is exactly where a wall does its best work.",
  ],
  [
    ["galas", "summer socials", "garden parties"],
    "For a larger room it is worth asking about a wider build — a standard span can get lost at gala scale.",
  ],
  [
    ["styled shoots", "photo studios", "minimalist events"],
    "For shoots we can usually be flexible on install and collection times, which is not always true of event bookings.",
  ],
];

export interface WallFaq {
  q: string;
  a: string;
}

export function wallFaqs(wall: Wall): WallFaq[] {
  const name = displayName(wall.name);
  const palette = wall.palette ?? [];
  const uses = wall.eventUses ?? [];
  const faqs: WallFaq[] = [];

  const primary = lookup(FAMILY, palette[0]);
  if (primary) {
    const second = palette.length > 1 ? lookup(SECOND, palette[1]) : undefined;
    faqs.push({
      q: `How does ${name} photograph?`,
      // No shared tail sentence here. An earlier version ended every one of
      // these with the same line about density, which put one identical
      // sentence on 24 pages — the audit caught it, and it was padding.
      a: `${primary.charAt(0).toUpperCase()}${primary.slice(1)}${
        second ? `, and on ${name} ${second}` : ""
      }.`,
    });
  }

  if (uses.length) {
    const note = lookup(USE_NOTE, uses[0]);
    const list =
      uses.length > 1
        ? `${uses.slice(0, -1).join(", ")} and ${uses[uses.length - 1]}`
        : uses[0];
    faqs.push({
      q: `What is ${name} usually booked for?`,
      a: `Most often ${list}.${note ? ` ${note}` : ""}`,
    });
  }

  return faqs;
}
