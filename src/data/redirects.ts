/**
 * Old WordPress URL → new URL. The single source of truth for redirects.
 *
 * `scripts/write-redirects.mjs` turns this into two things after a build:
 *
 *   1. A static HTML stub at each old path in ./out — canonical to the target,
 *      meta refresh, and a JS replace. This is the only redirect mechanism
 *      GitHub Pages supports, because it serves static files and cannot issue
 *      a 3xx. Google follows these and passes signals, but a real 301 is
 *      stronger, so see the note at the bottom of this file.
 *   2. `out/_redirects`, the Cloudflare Pages / Netlify format, which DOES
 *      produce real 301s. Present so a move to that host needs no extra work.
 *
 * Sourced from the old site's own `wp-sitemap-posts-page-1.xml` (15 indexable
 * pages) plus legacy paths that predate the New Jersey business — the site was
 * cloned from a California operation, so Bay Area and Atlanta URLs exist and
 * may still carry links.
 *
 * Rule applied throughout: redirect to the closest genuine replacement, never
 * blanket-to-homepage. A homepage redirect tells Google the old page's topic
 * no longer exists here, and it usually does.
 */

export interface Redirect {
  /** Old path, always with a trailing slash. */
  from: string;
  /** New path on this site. */
  to: string;
  /** Why this target, for whoever reads this in a year. */
  why: string;
}

export const REDIRECTS: Redirect[] = [
  // --- from the old sitemap: pages WordPress considered indexable
  {
    from: "/flower-walls-rentals-new-jersey/",
    to: "/flower-walls/",
    why: "The old catalogue page. Direct equivalent.",
  },
  {
    from: "/flower-walls-new-jersey/",
    to: "/about/",
    why: 'Titled "About Flower Wall Rentals New Jersey" — it was the about page, not the catalogue.',
  },
  {
    from: "/photo-booth-rentals-new-jersey/",
    to: "/photo-booths/",
    why: "Direct equivalent.",
  },
  {
    from: "/event-branding-new-jersey/",
    to: "/event-branding/",
    why: "Same page, shorter slug.",
  },
  {
    from: "/custom-signs-san-francisco/",
    to: "/custom-signs/",
    why: "Same page. The old slug named the California city this site was cloned from.",
  },
  {
    from: "/corporate-flower-wall-rentals/",
    to: "/events/corporate/",
    why: "The corporate landing page is now an event-type page.",
  },
  {
    from: "/resources/",
    to: "/blog/",
    why: 'Titled "Flower Wall and Photo Booth Resources". The guides index is the true successor, not the FAQ.',
  },
  {
    from: "/products/",
    to: "/flower-walls/",
    why: "WooCommerce product archive. The wall collection is the closest replacement.",
  },
  {
    from: "/shop/",
    to: "/flower-walls/",
    why: "WooCommerce shop root. Same reasoning as /products/.",
  },
  {
    from: "/stripe-checkout-result/",
    to: "/contact/",
    why: "Transactional artefact with no standalone content. Kept only so an old link is not a dead end.",
  },

  // --- legacy paths not in the old sitemap, but plausible link targets
  {
    from: "/flower-wall-rental-bay-area/",
    to: "/flower-walls/",
    why: "California-era page. The collection is the closest topic match; the homepage would discard the intent.",
  },
  {
    from: "/california-flower-wall-rentals/",
    to: "/flower-walls/",
    why: "California-era page, same reasoning.",
  },
  {
    from: "/atlanta-backdrop-rentals/",
    to: "/flower-walls/",
    why: "Atlanta-era page, same reasoning.",
  },
  {
    from: "/photo-booth-rental-new-jersey/",
    to: "/photo-booths/",
    why: "Singular variant of the old booth URL.",
  },
  {
    from: "/corporate-events/",
    to: "/events/corporate/",
    why: "Older corporate slug.",
  },
  {
    from: "/corporate/",
    to: "/events/corporate/",
    why: "Older corporate slug.",
  },
  {
    from: "/custom-signage/",
    to: "/custom-signs/",
    why: "Older signage slug.",
  },
  {
    from: "/acrylic-signs-new-york/",
    to: "/custom-signs/",
    why: "Signage page named for another state. Custom signs is the equivalent service.",
  },
  {
    from: "/cold-sparks-rental-nyc/",
    to: "/event-rentals/",
    why: "Cold sparks are an event rental add-on; that page covers them.",
  },
  {
    from: "/black-flower-wall-rentals/",
    to: "/flower-walls/",
    why: "Colour-specific archive page. The collection replaces it and is filterable by eye.",
  },
  {
    from: "/blue-flower-wall-rentals/",
    to: "/flower-walls/",
    why: "Colour-specific archive page, same reasoning.",
  },
  {
    from: "/connect-with-us/",
    to: "/contact/",
    why: "Old contact slug.",
  },
  {
    from: "/360/",
    to: "/photo-booths/360-photo-booth/",
    why: "Old 360 booth page. Exact product equivalent exists.",
  },
];

/**
 * Old URLs that need NO redirect because the new site uses the same path:
 * /, /blog/, /contact/, /event-rentals/, /faq/.
 *
 * Note on /blog/ specifically: the previous hand-written _redirects file sent
 * /blog/ to the homepage. That was written before this site had a blog and
 * would now redirect our own guides index away. It is deliberately absent.
 *
 * ---------------------------------------------------------------------------
 * A limitation worth stating plainly: GitHub Pages cannot return a 301. The
 * stubs this generates are meta-refresh redirects. Google follows them and
 * they do pass ranking signals, but they are weaker and slower to consolidate
 * than a real 301. If preserving the old site's authority matters, hosting the
 * export on Cloudflare Pages instead — same repo, same build — turns the
 * generated _redirects file into genuine 301s at no other cost.
 */
export const NO_REDIRECT_NEEDED = [
  "/",
  "/blog/",
  "/contact/",
  "/event-rentals/",
  "/faq/",
] as const;
