# Wall photo review — every flagged wall checked against its actual photograph

**Prepared:** September 5, 2026
**Method:** downloaded the CheckCherry product photograph for all 26 flagged walls and looked at
each one, then compared it to the `description` and `palette` currently in `walls.json`.
**Nothing has been changed.** This is the confirm-or-correct pass that
`docs/wall-inventory-review.md` asked for. Clearing `needsReview` is still a human decision.

## Headline

`docs/wall-inventory-review.md` predicted the failure mode exactly:

> "The descriptions and palettes for those were written *from the name*, not from looking at the
> product. 'Blue-toned styling named for the butterfly' is an inference. It may well be right; it
> has never been checked."

It has now been checked. **16 of 26 are materially wrong or misleading.** The butterfly-named
walls are the worst affected — the copy describes the *butterfly's* colouring, and several of the
actual products look nothing like it.

**This is why these pages were never published.** Had all 26 shipped as detail pages, the site
would have published false colour descriptions on sixteen products.

### Three things that must not publish as-is

1. **Five walls still contain the placeholder sentence** "Ask us for current photographs" —
   Abigail, American Lady, Chloe, Majestic, Venessa. That string must never reach a live page.
2. **Amazon Hawaiian activation's image is a rendered mockup carrying the Amazon Ads logo**, not a
   photograph of the product. Publishing a product page around a third party's trademark is a
   real risk, separate from the SEO question. It needs a genuine photo.
3. **"Majestic" appears twice in `walls.json`** — one entry has an empty description. A duplicate
   catalogue entry, not two products.

---

## Correct as written — clear `needsReview`, publish

| Wall | Note |
|---|---|
| **Pink & blue** | Accurate. Pastel pink and baby blue roses, exactly as described. |
| **Pink Arcadia** | Accurate — blush/coral pink with cream hydrangea and wisteria. (Separately: absent from CheckCherry group 20105 — the owner question from the earlier doc still stands.) |
| **Tailed Jay** | Accurate. Deep green eucalyptus with white roses and white wisteria trails. |

## Correct, but the palette is thin — widen it and publish

| Wall | Currently | Should be |
|---|---|---|
| **Adonis Blue** | `[blue]` | `[blue, grey, silver, navy]` — dusty blue roses over steel and silver-grey foliage, with near-black navy roses. |
| **Amazon** | `[green]` | `[green, cream]` — dense mixed foliage with small cream flowers scattered through it. |
| **Arctic Admiral** | `[white, ice blue]` | `[white, ivory, cream]` — dense white roses and cream hydrangea. The "ice blue" isn't visible. |

## Vague, not wrong — needs real copy plus a palette

These four are honest but say nothing, and three carry the placeholder sentence.

| Wall | Actually |
|---|---|
| **American Lady** | Vivid pink rose wall — hot pink through blush, with cream. `[pink, blush, cream]` |
| **Chloe** | Soft pastel — blush, peach, mauve, dusty rose, cream. `[blush, peach, mauve, cream]` |
| **Venessa** | Blush, coral, peach, cream and ivory roses with hydrangea. `[blush, coral, peach, cream]` |
| **Purple Baby** | Understated rather than wrong: it is purple and lilac, but also strong pink/magenta with dusty blue accents and baby's breath. More vivid than "gentle, sweet". `[purple, lilac, pink, dusty blue, cream]` |

---

## Materially wrong — do not publish until corrected

| Wall | Claims | Actually |
|---|---|---|
| **Paris** | "Romantic, formal styling… a favourite backdrop for proposals" | **A plain green grass hedge wall. No flowers at all.** The most severe mismatch in the set. `[green]` |
| **Pavon** | "Peacock-inspired — teals and greens with iridescent depth" `[teal, green]` | **Purple, plum and mauve roses** with blush, cream and white pompoms over green fern. No teal anywhere. `[purple, plum, mauve, blush, cream]` |
| **Peacock Butterfly** | "teal, violet and green together" `[teal, violet, green]` | **Autumnal** — rust, burnt orange, terracotta and brown with cream and white, maple leaves throughout. `[rust, burnt orange, terracotta, cream]` |
| **Indigo Duskywing** | "Deep indigo… moody, cool" `[indigo]` | **Terracotta, dusty rose, mauve, peach and cream** — warm earthy neutrals. No indigo. `[terracotta, dusty rose, peach, cream]` |
| **Mourning cloak** | "Dark, dramatic… one of the boldest walls" `[dark]` | **Dusty pink, blush and cream roses with gold metallic leaves.** Soft and glamorous, not dark. `[dusty pink, blush, cream, gold]` |
| **Monarch** | "warm oranges grounded in black accents" `[orange, black]` | **Jewel-toned garden wall** — magenta, burgundy, blush and coral roses with cream berries on deep green. No orange, no black. `[magenta, burgundy, blush, coral, green]` |
| **Jasmin** | "Delicate white-and-green styling" `[white, green]` | **Blush pink, cream, ivory and peach** roses and hydrangea. `[blush, cream, ivory, peach]` |
| **Abigail** | "A soft, romantic arrangement" `[]` | **Deep crimson.** Dense red roses with burgundy ferns and dark foliage. Dramatic, not soft. `[red, crimson, burgundy]` |
| **Bali** | "Tropical styling with a softer, more romantic hand" `[green, white]` | **A glossy green leaf hedge wall. No flowers.** `[green]` |
| **Joy** | "Bright, happy florals… crowd-pleaser" `[]` | **White and green** — ivory roses, green foliage, small orange-centred white blossoms. Not multicoloured. `[white, ivory, green]` |
| **Majestic** | "rich, layered arrangement built to anchor a ballroom" `[]` | **A green boxwood wall framed by a multicoloured floral garland** across the top and down both sides. `[green, orange, red, purple, cream]` |
| **Pink Butterfly Arch** | "The Pink Butterfly styling shaped as a walk-through arch" `[pink]` | **Not a walk-through arch** — a flat green boxwood wall with a pink-and-white floral border framing an arch shape. Mostly green. `[green, pink, white, cream]` |
| **Tailed Jay 2.0** | "same palette [as Tailed Jay], denser florals" `[green, white]` | **Green on green** — deep eucalyptus with lime/chartreuse orchids and pale green hydrangea. A different palette from Tailed Jay, not the same one. `[green, chartreuse]` |
| **Red Admiral** | "warmer and less formal than our full rose walls" `[red]` | It **is** a full rose wall — solid, dense red roses edge to edge. Palette right, comparison wrong. `[red]` |
| **Pink Butterfly** | "Pink florals with butterfly accents throughout" `[pink]` | Pink is right; **no butterfly accents are visible**. Blush, cream, mauve and dusty rose with baby's breath. `[blush, pink, cream, mauve]` |
| **Amazon Hawaiian activation** | "Amazon's greenery depth combined with Hawaiian colour" `[green, coral]` | Tropical green foliage — **no coral**. And the image is a **rendered mockup with the Amazon Ads logo**, not a product photo. See headline item 2. |

---

## Recommended sequence

1. **Publish the 3 accurate walls now** (Pink & blue, Pink Arcadia, Tailed Jay) plus the 3
   palette-widened ones — six detail pages with no content risk.
2. **Apply the corrections above** to the 16 wrong ones, then clear `needsReview`. The corrections
   come from the product photographs, which is the same source the earlier doc pointed at
   ("open the wall in CheckCherry, look at the photograph"), so they are checkable rather than
   invented — but they should still be confirmed by someone who knows the inventory.
3. **Get a real photo** for Amazon Hawaiian activation, or drop it from the catalogue.
4. **Resolve the duplicate Majestic entry.**
5. Only then does the "19 detail pages" gain from `docs/seo-round-2-shipped.md` become safe to bank.

## Limitations, stated plainly

- Colour naming from a photograph is a judgement call; lighting and screen calibration shift it.
  The palette values above are descriptive, not authoritative.
- Only the flagged walls with a CheckCherry `packageId` were reviewed (26). `Custom` and
  `Custom Champagne and flower walls` were excluded as non-products.
- Nothing here confirms **availability** — only what each product looks like. A wall can be
  accurately described and still be retired.
