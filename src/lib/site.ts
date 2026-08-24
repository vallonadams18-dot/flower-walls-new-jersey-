export const SITE = {
  name: "Flower Wall Rentals New Jersey",
  legalName: "Flower Wall Rentals New Jersey",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.flowerwallsnewjersey.com",

  phone: "(347) 383-5851",
  phoneHref: "tel:+13473835851",

  addressLocality: "Newark",
  addressRegion: "NJ",

  email: "flowerwallsnewjersey@gmail.com",

  booking: {
    host: "https://new-jersey-flower-wall-photo-booth-rentals.checkcherry.com",
    // The whole flower wall catalog, for a generic "book now".
    collection:
      "https://new-jersey-flower-wall-photo-booth-rentals.checkcherry.com/reservation/set_event?package_group_id=20105",
    // General enquiry form.
    contact:
      "https://new-jersey-flower-wall-photo-booth-rentals.checkcherry.com/contact/8683",
    // Flower-wall-specific enquiry form.
    wallEnquiry:
      "https://new-jersey-flower-wall-photo-booth-rentals.checkcherry.com/contact/9552",
    signIn:
      "https://new-jersey-flower-wall-photo-booth-rentals.checkcherry.com/users/sign_in",
  },
} as const;

/**
 * Two delivery hubs, each covering a 50-mile radius. Together they blanket
 * New Jersey; the Newark circle also reaches NYC and Staten Island, the
 * Barnegat circle the Shore, Atlantic City and the Camden/Cherry Hill side.
 * Used for GeoCircle schema and the coverage copy.
 */
export const COVERAGE_HUBS = [
  { name: "Newark", lat: 40.7357, lng: -74.1724, radiusMiles: 50 },
  { name: "Barnegat", lat: 39.7529, lng: -74.2229, radiusMiles: 50 },
] as const;

/** Counties and cities the business states it serves, from the About copy. */
export const SERVICE_AREAS = [
  "Jersey City",
  "Newark",
  "Hoboken",
  "Montclair",
  "Princeton",
  "Morristown",
  "Red Bank",
  "Edison",
  "New Brunswick",
  "Cherry Hill",
  "Atlantic City",
  "Barnegat",
] as const;

export const NAV = [
  { href: "/flower-walls/", label: "Flower Walls" },
  { href: "/photo-booths/", label: "Photo Booths" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/packages/", label: "Packages" },
  { href: "/events/", label: "Events" },
  { href: "/locations/", label: "Areas We Serve" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Get a Quote" },
] as const;

/** Secondary pages linked from the footer, not the main nav. */
export const FOOTER_NAV = [
  { href: "/event-rentals/", label: "Event Rentals" },
  { href: "/event-branding/", label: "Event Branding" },
  { href: "/custom-signs/", label: "Custom Signs" },
  { href: "/faq/", label: "FAQ" },
] as const;
