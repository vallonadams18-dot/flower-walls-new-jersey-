# Round 2 — what shipped

**Date:** August 24, 2026
**Scored against:** the "Round 2 should start here" list in `docs/seo-round-1-shipped.md`
**Rule:** score honestly, and re-check the competitors rather than only ourselves.

| # | Action | Status | What happened |
|---|---|---|---|
| 1 | FAQ blocks on the location, wall and booth templates, then mark them up | **done** | `FAQPage` went from 26 pages to **84**. 12 location hubs × 3, 16 booth pages × 3, 24 wall pages × 2. |
| 2 | `HowTo` on the location hubs | **done, with a caveat** | On all 12 hubs, first step naming what we need to know about that town's access. **Google retired HowTo rich results in 2023** — this is accurate structured data that earns no snippet. Not a ranking lever. |
| 3 | Wall detail pages | **partial, deliberately** | 13 → **24**. Only walls with complete data *and* no `needsReview` flag. 19 more are one review away. |
| 4 | Re-check the competitors | **done** | See below. The grid is still uncontested. |
| — | `Service` schema beyond the grid | **done** | Now on booth and service pages too — **47 pages**. |

**Score: 3 done, 1 partial by choice, 1 extra.**

## Competitor re-check, August 24

Raw `curl` against each sitemap, requests spaced.

| | Us | Blooms by Lily | Red Sky Events |
|---|---|---|---|
| URLs in sitemap | **104** | 55 | 21 |
| Location pages | **12** | 0 | 3 |
| Service × location combos | **26** | **0** | **0** |
| Blog posts | 7 | 12+ | 1 |

- **Blooms by Lily is unchanged structurally** — still zero location pages and zero combos. They are still publishing though: new posts on Amalfi-coast bridal showers, sweetheart tables and floral installations for NJ businesses. Their posts sit at the site root rather than under `/blog/`, which is why a naive `/blog/` count reads zero.
- **Red Sky has not expanded.** Still the same three `photo-booth-rental-{town}-nj` pages. They proved the URL shape works in this market and stopped.
- **jerseyshoreflowerwalls.com is still unreachable** (HTTP 000, second round running). Treat as dead unless it resurfaces.

**Read:** nobody has responded to the grid, and on current evidence nobody is positioned to quickly. The remaining competitive pressure is content velocity from Blooms by Lily, not structure.

## Two things the audit caught in our own work

The point of `npm run audit` is that it does not care who wrote the page.

1. **A boilerplate sentence on 24 pages.** An earlier version of the generated wall FAQ ended every answer with the same line about wall density. It was padding, it is gone.
2. **Every wall page linked the same four walls.** `slice(0, 4)` off the top of the list. Related walls are now scored on shared palette and shared event use, so Palm pulls the greenery walls and Purity pulls the whites. A real internal-link improvement that showed up as a duplicate-text warning.

## Verified live, not assumed

- 104 URLs in the live sitemap.
- 10 of 10 sampled new wall pages return 200.
- `HowTo` and `FAQPage` confirmed live on `/locations/newark/`; `FAQPage` and the generated question confirmed live on `/flower-walls/purity/`.
- **Zero `Offer` nodes across the whole export.** The no-prices rule still holds.
- Audit: 104 pages, zero broken links, missing images, duplicate titles, duplicate descriptions, H1 or orphan problems.

## What is actually left

The code-side list is close to exhausted. Per the playbook's rule 7, saying so beats manufacturing work.

1. **Review the 19 flagged walls.** `needsReview: true` on data that looks fine but nobody has confirmed. Clearing it unlocks 19 detail pages immediately — the single largest remaining on-site gain, and it needs a human who knows the inventory, not more code.
2. **Confirm whether Custom, Custom Champagne and flower walls, and Pink Arcadia are retired.** Absent from CheckCherry catalogue group 20105. Blue Ocean was the fourth in that group and turned out to be live.
3. **Blog velocity.** 7 posts beats a standing start, but Blooms by Lily is still publishing. This is a cadence question, not a build.
4. **The domain cutover.** Still the biggest single blocker. The sitemap emits `www.flowerwallsnewjersey.com` URLs and that domain still serves the old WordPress site. Nothing here is indexable at its canonical URL until that moves.
5. **Off-site (Phase 7).** Google Business Profile, Yelp, The Knot / WeddingWire, NAP consistency. Needs account access; cannot be done from the repo. Once the domain moves, this is where the ceiling is.
