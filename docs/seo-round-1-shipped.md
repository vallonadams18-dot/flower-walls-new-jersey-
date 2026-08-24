# Round 1 — what actually shipped

**Date:** August 24, 2026
**Scored against:** the action list in `docs/seo-gap-analysis.md`
**Rule:** score honestly. Writing down what *didn't* ship is what makes round 2 real.

| # | Action | Status | What happened |
|---|---|---|---|
| 1 | Expand location pages to the full stated service area | **done** | 5 → 12. Princeton, Morristown, Red Bank, Edison, New Brunswick, Cherry Hill, Atlantic City added. Barnegat deliberately has no page — it is a delivery hub, not a market. |
| 2 | Build the combo grid | **done** | 26 pages. `/flower-wall-rental-newark-nj` and the rest, tiered 3 / 2 / 1 service across 12 areas. |
| 3 | `FAQPage` schema on location, wall and booth pages | **partial** | Shipped on all 26 grid pages, three FAQs each, written per town and per service. **Not yet** on the location, wall or booth templates — those still have no FAQ blocks to mark up. |
| 4 | Blog with geo-targeted venue content | **untouched** | Still the clearest thing the strongest competitor does that this site has no answer to. |
| 5 | `Service` and `HowTo` schema | **partial** | `Service` shipped on the 26 grid pages. `HowTo` untouched sitewide. `Service` still missing from the booth and service-page templates. |
| 6 | Give more of the 53 walls a detail page | **partial** | 12 → 13. Blue Ocean had a photograph, description, event uses and a booking link already and simply was not flagged for a page. Forty of the catalogue remain cards only. |
| 7 | Hold the sitemap until the domain cutover | **standing** | Unchanged and still true. The sitemap emits `www.flowerwallsnewjersey.com` URLs; that domain still serves the old WordPress site. Do not submit to Search Console until the cutover. |
| 8 | Off-site (Phase 7) | **untouched** | Needs account access — Google Business Profile, Yelp, The Knot / WeddingWire. Cannot be done from the repo. |

**Score: 2 fully done, 3 partial, 2 untouched, 1 standing note.**

## Not on the list, but shipped

- **Title cannibalisation fixed.** The flower-wall grid pages and the location pages had word-for-word identical titles *and* H1s for eight towns — two URLs competing for one query. Location pages are now area hubs ("Flower walls and photo booths in X") that link down to the grid.
- **`wall-renames.ts` was dead code.** It had existed since launch, was documented in the README, and was imported nowhere, so the site still said "Atlanta" — a name carried over from the brand this catalogue came from. `displayName` is now applied everywhere a wall name renders.
- **`scripts/audit-export.mjs`** (`npm run audit`) — broken links, missing images, duplicate titles and descriptions, H1 counts, orphans, and repeated prose measured inside `<main>`. This is what caught the cannibalisation above.

## Verified, not assumed

Per the playbook's working rules — raw `curl` against the live preview, requests spaced:

- 26 of 26 grid pages return 200.
- 85 URLs in the live sitemap.
- `Service`, `FAQPage`, `BreadcrumbList` present on a sampled grid page; `addressRegion: NJ`.
- **No `Offer` node anywhere in the export.** The no-prices rule holds.
- **Zero sentences shared between any two of the 26 grid pages.** The playbook's own benchmark was one duplicated sentence across 102 Brooklyn pages.

## Round 2 should start here

1. **The blog.** Item 4 is now the largest untouched gap and the thing the strongest competitor is actually winning with.
2. **FAQ blocks on the location, wall and booth templates**, then mark them up — finishing item 3 rather than leaving it half done.
3. **`HowTo` on the location hubs.** A delivery-and-install business is the textbook case and it is still absent sitewide.
4. **Wall detail pages.** 40 walls are still cards. Prioritise the ones with strong photography. Confirm first whether Custom, Custom Champagne and flower walls, and Pink Arcadia are retired — they are absent from CheckCherry catalogue group 20105. Blue Ocean, the fourth in that group, turned out to be live and now has a page.
5. **Re-check the competitors.** Round 1 benchmarked bloomsbylily.com and redskyeventsnj.com. Neither had a single combo page then. Check again before assuming the grid is still uncontested, and check jerseyshoreflowerwalls.com, which could not be fetched in round 1.
