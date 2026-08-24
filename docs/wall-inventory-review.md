# Inventory review — walls needing a decision

**Prepared:** August 24, 2026
**Nothing in this list has been deleted, redirected or hidden.** It is a
worklist for someone who knows the actual inventory.

## What "flagged" means

`walls.json` carries `needsReview: true` on **27** walls (an earlier note said
19 — that was the subset with complete data, and the fuller number is the
honest one). The flag is data, not behaviour: nothing in the code reads it
except the decision about which walls get a detail page.

Reading the records, the pattern is clear. A large share of this catalogue is
named after **butterfly species** — Adonis Blue, Indigo Duskywing, Monarch,
Mourning Cloak, Red Admiral, Tailed Jay, Peacock Butterfly, American Lady. The
descriptions and palettes for those were written *from the name*, not from
looking at the product. "Blue-toned styling named for the butterfly" is an
inference. It may well be right; it has never been checked.

That is why they are cards rather than pages. A card shows a real photograph
and a real booking link, so an unverified sentence does little harm. A detail
page would publish that sentence as the page's substance.

**18 of the 25 UPDATE rows already have complete data and would become a
detail page the moment the copy is confirmed** — the largest single on-site
SEO gain still available.

## The list

| Flower Wall | Current URL | Why Flagged | Recommended Action |
|---|---|---|---|
| Abigail | `/flower-walls/#abigail` | Description written from the package name; no palette recorded | **UPDATE** |
| Adonis Blue | `/flower-walls/#adonis-blue` | Description and palette inferred from the package name, never verified | **UPDATE** |
| Amazon | `/flower-walls/#amazon` | Description and palette inferred from the package name, never verified | **UPDATE** |
| Amazon Hawaiian activation | `/flower-walls/#amazon-hawaiian-activation` | Description and palette inferred from the package name, never verified | **UPDATE** |
| American Lady | `/flower-walls/#american-lady` | Description written from the package name; no palette recorded | **UPDATE** |
| Arctic Admiral | `/flower-walls/#arctic-admiral` | Description and palette inferred from the package name, never verified | **UPDATE** |
| Bali | `/flower-walls/#bali` | Description and palette inferred from the package name, never verified | **UPDATE** |
| Chloe | `/flower-walls/#chloe` | Description written from the package name; no palette recorded | **UPDATE** |
| Custom Champagne and flower walls | `/flower-walls/#custom-champagne-and-flower-walls` | Absent from CheckCherry catalogue group 20105 | **NEEDS OWNER CONFIRMATION** |
| Indigo Duskywing | `/flower-walls/#indigo-duskywing` | Description and palette inferred from the package name, never verified | **UPDATE** |
| Jasmin | `/flower-walls/#jasmin` | Description and palette inferred from the package name, never verified | **UPDATE** |
| Joy | `/flower-walls/#joy` | Description written from the package name; no palette recorded | **UPDATE** |
| Majestic | `/flower-walls/#majestic` | Description written from the package name; no palette recorded | **UPDATE** |
| Monarch | `/flower-walls/#monarch` | Description and palette inferred from the package name, never verified | **UPDATE** |
| Mourning cloak | `/flower-walls/#mourning-cloak` | Description and palette inferred from the package name, never verified | **UPDATE** |
| Paris | `/flower-walls/#paris` | Description written from the package name; no palette recorded | **UPDATE** |
| Pavon | `/flower-walls/#pavon` | Description and palette inferred from the package name, never verified | **UPDATE** |
| Peacock Butterfly | `/flower-walls/#peacock-butterfly` | Description and palette inferred from the package name, never verified | **UPDATE** |
| Pink & blue | `/flower-walls/#pink-blue` | Description and palette inferred from the package name, never verified | **UPDATE** |
| Pink Arcadia | `/flower-walls/#pink-arcadia` | Absent from CheckCherry catalogue group 20105 | **NEEDS OWNER CONFIRMATION** |
| Pink Butterfly | `/flower-walls/#pink-butterfly` | Description and palette inferred from the package name, never verified | **UPDATE** |
| Pink Butterfly Arch | `/flower-walls/#pink-butterfly-arch` | Description and palette inferred from the package name, never verified | **UPDATE** |
| Purple Baby | `/flower-walls/#purple-baby` | Description and palette inferred from the package name, never verified | **UPDATE** |
| Red Admiral | `/flower-walls/#red-admiral` | Description and palette inferred from the package name, never verified | **UPDATE** |
| Tailed Jay | `/flower-walls/#tailed-jay` | Description and palette inferred from the package name, never verified | **UPDATE** |
| Tailed Jay 2.0 | `/flower-walls/#tailed-jay-2-0` | Description and palette inferred from the package name, never verified | **UPDATE** |
| Venessa | `/flower-walls/#venessa` | Description written from the package name; no palette recorded | **UPDATE** |


## Recommended handling

- **UPDATE (25)** — all are live in the CheckCherry catalogue, so the products
  exist. Open the wall in CheckCherry, look at the photograph, and confirm or
  correct the description and palette. Then clear `needsReview`. Walls with
  complete data get a detail page automatically on the next build.
- **NEEDS OWNER CONFIRMATION (2)** — see below.
- **KEEP / REDIRECT / RETIRE** — nothing qualifies. Nothing here is a dead
  product with an indexed URL, because none of these has its own URL yet.
  RETIRE only becomes relevant if a wall is genuinely no longer offered, and
  even then the action is removing a card, not deleting a page.

---

## The three products absent from the CheckCherry catalogue

`Custom`, `Custom Champagne and flower walls` and `Pink Arcadia` are in
`walls.json` but are not in catalogue group 20105. **Nothing has been changed
about them.**

### Where each one currently appears

All three are identical in this respect:

| | Custom | Custom Champagne and flower walls | Pink Arcadia |
|---|---|---|---|
| Own detail page | no | no | no |
| Appears on | `/flower-walls/` only | `/flower-walls/` only | `/flower-walls/` only |
| In sitemap.xml | no | no | no |
| Image | CheckCherry CDN | CheckCherry CDN | CheckCherry CDN |
| Booking link | live, `event_type_id=164748` | live, `event_type_id=98241` | live, `event_type_id=89174` |
| `needsReview` | no | yes | yes |

### What would actually happen if you retired one

Low stakes, because none of them has a page:

- **Its page** — there is none to delete. It is one card in the collection
  grid.
- **Internal links** — the only link is its own card. No other page links to
  it, so nothing breaks and no redirect is needed.
- **Sitemap** — no entry to remove. Google was never told these URLs exist.
- **Images** — served from CheckCherry's CDN, not this repo. Nothing to clean
  up, and nothing else references them.
- **SEO value** — effectively nil to lose. No indexed URL, no inbound links,
  no ranking to preserve. The only cost is losing a live booking link a
  customer might have used.

**The real question is not SEO, it is commerce:** if you still sell a custom
build or a champagne wall, the card is a working booking route and should
stay. If the packages were retired in CheckCherry deliberately, the cards
should go so nobody books something you no longer offer.

`Custom` in particular reads like an always-available made-to-order option
rather than a retired product — its description is about building to a brief.
It may simply live outside group 20105 by design.

**No action taken. Tell me which of the three to keep and which to remove.**
