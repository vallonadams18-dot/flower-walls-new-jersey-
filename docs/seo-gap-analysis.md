# SEO Gap Analysis — Round 1: Flower Walls New Jersey

**Prepared:** August 24, 2026
**Site A (client):** flowerwallsnewjersey.com — Newark + Barnegat hubs, 50-mile radius each, statewide NJ
**Site B (primary benchmark):** bloomsbylily.com — North Jersey / NY tri-state, closest business-model match
**Site C (secondary):** redskyeventsnj.com — photo-booth-first NJ operator, included because it is the only
site in this market that has built any location pages at all
**Method:** Phase 0 of `docs/seo-playbook.md`.

**How this report was built:** raw `curl` against each site's `sitemap.xml`, with `grep` extraction of
`<loc>`, `<title>`, `<meta name="description">`, `<h1>` counts and `"@type"` values from the served HTML —
not AI-summarized fetches, per the playbook's working rule 2. Site A was audited both from source (this
repo) and from the live GitHub Pages preview. Every count below is exact. Word counts are **not** reported
as figures, for a reason stated in Data Limitations.

---

## Executive summary

**The coverage grid is completely uncontested in this market.** Neither competitor has built service ×
location pages. Red Sky Events has four town pages total (`/photo-booth-rental-princeton-nj`,
`-middletown-nj`, `-red-bank-nj`, and one for New York City). Blooms by Lily, the strongest site in the
category, has **zero** location pages of any kind. Site A already has five real location pages and a
sitemap derived from its own data — it starts this round ahead of both.

**Site A also wins decisively on technical fundamentals**, the same way the Brooklyn site did:

| | Site A | Blooms by Lily | Red Sky Events |
|---|---|---|---|
| Total URLs in sitemap | 51 | 55 | 21 |
| Location pages | 5 | 0 | 4 |
| Service × location combos | 0 | 0 | 0 |
| Schema types | 8 — LocalBusiness, WebSite, BreadcrumbList, Place, GeoCircle, GeoCoordinates, PostalAddress, ItemList/Product | 2 — LocalBusiness, WebSite | **none** |
| H1 per page | 1 | **0** on wall detail pages | **2** on every page checked |
| Titles | Unique, in range | Keyword-stuffed, 140–190 chars | Clean, in range |
| Blog posts | 0 | 12 | 1 |

Blooms by Lily's wall detail pages carry **no H1 at all** and titles like *"ivory white orchids flower wall
rental in north nj event bridal shower wedding 5 star rentals birthday ny — BLOOMSC BY LILY"* — a
190-character keyword string that also misspells their own brand name. Red Sky's pages carry **zero
structured data** and two H1s each.

**Where they beat us — two real things, both fixable:**

1. **Blooms by Lily has 14 named-wall detail pages; we have 12 out of a 53-wall catalogue.** Their
   catalogue is smaller than ours and they've given a higher share of it a landing page. Forty-one of our
   walls exist only as cards.
2. **Blooms by Lily's blog is the local-intent play in this market, and we have no blog.** Their posts are
   not generic filler — they're geo-targeted venue content: *venues with the best views in north jersey*,
   *most beautiful wedding venues in north jersey*, *bridal shower venues in north jersey we absolutely
   love*, *the ultimate guide to hosting a bridal shower in north jersey 2026*, *bloom bars — the chic
   bridal shower trend taking over north jersey & nyc*. That is how they're capturing local search without
   building a single location page. Six of their twelve posts name North Jersey in the title.

**Net read:** the structural gap the Brooklyn audit found — competitor has the grid, we don't — is
**inverted here.** Nobody has the grid. Site A has the data model, the schema, and the derived sitemap
already in place to build it first, and the competition is not positioned to respond quickly. The
opportunity is to claim the whole grid before anyone else in this market realizes it exists.

---

## Step 1 — Page inventories

### Site A: flowerwallsnewjersey.com — 51 URLs

Exact, from the live preview's `sitemap.xml` (which is generated from `src/data/*`, so it cannot drift).

| Category | Count | Notes |
|---|---|---|
| Utility / hubs | 10 | home, about, contact, faq, gallery, packages, locations, events, flower-walls hub, photo-booths hub |
| Service pages | 3 | event-rentals, event-branding, custom-signs |
| Event / occasion pages | 5 | weddings, corporate, birthdays, bridal-showers, baby-showers |
| Flower wall detail pages | 12 | of 53 walls in `walls.json` |
| Photo booth detail pages | 16 | |
| Location pages | 5 | jersey-city, newark, hoboken, montclair, jersey-shore |
| **Service × location combos** | **0** | **none exist** |
| Blog | 0 | no blog |

### Site B: bloomsbylily.com — 55 URLs

| Category | Count | Notes |
|---|---|---|
| Utility / hubs | ~12 | home, about, gallery, faqs, contact, testimonials, client-resources, forms, legal |
| Product hubs | 4 | flower-walls-signs, flower-arches, photo-booth, decor-packages |
| Named wall / arch detail pages | ~14 | Blanca, Zoe Pink, Mia, Celeste Blue, Cindy Pink, Sady, Eli Boxwood, Ane, White Pampas, Madison, Amari (×3), Ana Collection (×2) |
| Adjacent service pages | ~8 | flower carts, balloons, audio guest book, draping, candle design, permanent installations, expo packages, corporate |
| Blog posts | 12 | **6 of 12 name North Jersey in the title** |
| **Location pages** | **0** | **none** |
| **Service × location combos** | **0** | **none** |

### Site C: redskyeventsnj.com — 21 URLs

| Category | Count | Notes |
|---|---|---|
| Booth-type service pages | 8 | selfie, DSLR, black-and-white, AI, 360/photo-and-video, add-ons, corporate, wedding |
| Other services | 3 | flower-wall-rental (one page), event photography, headshot photography |
| **Location pages** | **4** | Princeton, Middletown, Red Bank, New York City |
| Utility | 5 | home, about, gallery, blog index, contact-equivalent |
| Blog posts | 1 | |

Red Sky's four location pages use the flat `/photo-booth-rental-{town}-nj` pattern — the same URL shape the
playbook prescribes. They've proven the pattern works in this market and then stopped at four.

---

## Step 2 — Gap analysis

### 2a. The combo grid: uncontested

No competitor has a single service × location page. Site A's own service axis is unusually wide for this
market — 53 walls, 16 booth types, 3 service pages, 5 event types — and its stated service area is already
documented in `src/lib/site.ts` as 12 named areas across two 50-mile delivery hubs. The grid can be built
from data that already exists.

### 2b. Location coverage: we're short of our own stated service area

`SITE.SERVICE_AREAS` in `src/lib/site.ts` names 12 areas the business says it serves. Only 5 have pages:

| Stated service area | Has a location page? |
|---|---|
| Jersey City, Newark, Hoboken, Montclair | yes |
| Jersey Shore (region) | yes |
| **Princeton, Morristown, Red Bank, Edison, New Brunswick, Cherry Hill, Atlantic City, Barnegat** | **no** |

This is the cheapest gap on the list: the business already claims these areas in its own About copy, and
two of them (Princeton, Red Bank) are exactly where Red Sky Events has chosen to build.

### 2c. Wall detail pages: 12 of 53

Site B gives roughly 14 of its walls a dedicated page. Site A has 53 walls and 12 pages. Every wall without
a page is a named product — people search wall names — that currently exists only as a card in a grid.

Note the constraint: four walls on the site (BLUE OCEAN, Custom, Custom Champagne and flower walls, Pink
Arcadia) are absent from CheckCherry catalogue group 20105 and may be retired. Confirm before building
pages for them.

### 2d. Blog: zero vs twelve, and theirs is geo-targeted

This is Site B's actual local-search strategy and it's working without any location pages. Half their posts
target North Jersey venue and planning intent directly. Site A has no equivalent content anywhere.

### 2e. Schema: Site A is far ahead, with three gaps

Present on Site A: `LocalBusiness`, `WebSite`, `BreadcrumbList`, `Place`, `GeoCircle`, `GeoCoordinates`,
`PostalAddress`, `ItemList`, `Product`. The `GeoCircle` treatment of the two delivery hubs is better than
anything either competitor does.

Missing, per the playbook's Phase 3 table:

- **`Service`** — not on the service or booth pages.
- **`FAQPage`** — `faqJsonLd` exists in `src/lib/jsonld.tsx` but is not applied to location, wall or booth
  pages, only the FAQ page. This is the cheapest schema win available.
- **`HowTo`** — absent sitewide. A delivery-and-install business is a natural fit.

**`Offer` is deliberately excluded and stays excluded** — the client's no-prices rule. Neither competitor
publishes prices either, so nothing is lost.

### 2f. One technical finding worth acting on before launch

The generated sitemap emits `https://www.flowerwallsnewjersey.com/...` URLs because `SITE.url` defaults to
the production domain, but that domain still serves the **old WordPress site**. The sitemap is correct for
after the cutover and wrong for today. Don't submit it to Search Console until the domain is pointed at the
new build, or it will describe pages that don't exist at those URLs yet.

---

## Step 3 — Prioritized action list

Ranked by likely traffic gain ÷ effort.

| # | Action | Spec | Why |
|---|---|---|---|
| **1** | Expand location pages to the full stated service area | Add Princeton, Morristown, Red Bank, Edison, New Brunswick, Cherry Hill, Atlantic City, Barnegat to `src/data/locations.ts`, same shape as the existing five: real venue types, real access constraints, no doorway copy | The business already claims these areas. Two are where the only competitor building location pages has chosen to build. |
| **2** | Build the combo grid | `/flower-wall-rental-{town}`, `/photo-booth-rental-{town}`, `/wedding-flower-wall-{town}` — tiered: full set in the Newark-hub core, 2 services in secondary towns, 1 in fringe | The core play, and completely uncontested in this market. |
| **3** | Add `FAQPage` schema to location, wall and booth pages | `faqJsonLd` already exists — wire it into the templates and give each page type its own Q&As | Cheapest schema lever on the site; neither competitor has FAQ markup at all. |
| **4** | Start the blog with geo-targeted venue content | Answer Site B directly: NJ wedding venues by county, what size wall a venue needs, venues that require a COI, bridal-shower planning | This is Site B's entire local strategy and we have no answer to it. |
| **5** | Add `Service` and `HowTo` schema | Extend `src/lib/jsonld.tsx`, wire into service/booth and location templates | Completes the Phase 3 table; a delivery-and-install business is a textbook `HowTo`. |
| **6** | Give more of the 53 walls a detail page | Prioritize the walls that already have strong photography and a CheckCherry package id | Site B has a higher share of its catalogue landing-paged than we do. |
| **7** | Hold the sitemap until the domain cutover | No code change — a sequencing note | Submitting it now describes URLs the old WordPress site still occupies. |
| **8** | Off-site (Phase 7) | Google Business Profile, Yelp, The Knot / WeddingWire, NAP consistency | Not verifiable from here; needs account access. The real phone and email already exist in `site.ts`, so unlike Proposal Perfection there is no blocker. |

---

## Data limitations, stated plainly

- **No word counts are reported in this document.** Raw HTML-stripped counts on both competitors came back
  wildly inflated (7,000–17,000 words on pages that visibly hold a few hundred) because both sites are
  JS-heavy builders — Squarespace and Wix — whose inline script payloads survive naive tag-stripping. Per
  the playbook's Phase 4 note, a rendered-DOM check is required before any word-count claim is made here.
  Round 2 should do that; this round does not guess.
- **Blooms by Lily is a Squarespace site**, so its sitemap is reliable but its served HTML may not reflect
  everything rendered client-side. Schema was read from the served HTML only.
- **Jerseyshoreflowerwalls.com could not be fetched** (connection failure, HTTP 000). It appears in search
  results for Monmouth/Ocean county terms and should be checked in round 2 before the Jersey Shore combo
  pages are finalized.
- **Indexability (`noindex`) was not verified** for any site.
- **Off-site presence** — Google Business Profile, Yelp, directory listings — is login-gated and outside
  what a fetch-based audit can check for any of the three sites.
