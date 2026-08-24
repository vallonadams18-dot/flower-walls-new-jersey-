# Flower Wall Rentals New Jersey

Static Next.js site, exported to plain HTML and served by GitHub Pages.
No server, no hosting bill, no WordPress.

## Run it

    npm install
    npm run dev       # http://localhost:3000
    npm run build     # writes ./out

## Deploying

Pushing to `main` builds and publishes via
`.github/workflows/deploy.yml`. Enable it once under
**Settings → Pages → Source → GitHub Actions**.

## Where the content lives

| File | Holds |
|---|---|
| `src/lib/site.ts` | Business name, phone, address, booking URLs, nav |
| `src/data/walls.json` | All 52 walls — image, price, CheckCherry booking link |
| `src/data/services.ts` | Copy for the five service pages |
| `src/data/faqs.ts` | FAQ questions and answers |
| `src/data/wall-renames.ts` | Display-name overrides |

Editing a page means editing one of those files. No CMS, no plugins.

## Before this goes live

Three values in `src/lib/site.ts` are deliberately blank, because the old
site carried California ones:

- `phone` / `phoneHref` — the New Jersey number
- `email`
- `addressLocality` — currently "Jersey City"; set your real service address

`LocalBusiness` schema needs a real locality, so fill these in before launch.

## SEO built in

- Per-page canonical, Open Graph and Twitter tags (`src/lib/metadata.ts`)
- `LocalBusiness`, `WebSite`, `BreadcrumbList`, `FAQPage` and `ItemList`
  structured data (`src/lib/jsonld.tsx`)
- `sitemap.xml` generated from the same data the pages use, so a new page
  cannot be left out of it
- `robots.txt`
- Static HTML — no client-side rendering for crawlers to wait on

## Pricing

36 of the 52 walls have no advertised rate in CheckCherry (the catalog's
`$0` and `$100` entries are placeholders, not real prices). Those render as
"Request a quote" and are deliberately left out of `Offer` schema, so the
site never publishes a price that is not real.
