import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";
import { SITE, NAV, FOOTER_NAV } from "@/lib/site";
import { asset } from "@/lib/asset";
import { cormorant, inter } from "@/lib/fonts";
import { JsonLd, businessJsonLd, websiteJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Luxury Flower Wall Rentals in New Jersey",
    // Short brand, not SITE.name: page titles already carry their own
    // keywords, and appending the full legal name pushed titles past 85
    // characters and duplicated the brand on pages that self-branded.
    template: "%s | NJ Flower Walls",
  },
  description:
    "Premium flower wall rentals across New Jersey. Over 50 designs for weddings, corporate events and parties.",
  // Google Search Console ownership for the
  // https://www.flowerwallsnewjersey.com/ property, verified 2026-08-24 under
  // hello@mirrormebrooklyn.com. Leave this in place — removing it un-verifies
  // the property and Search Console stops reporting.
  verification: {
    google: "tm4KDOEzen40gSYKB0GodLTCzwtqdYvItE-Vc3OAlzQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <JsonLd data={[businessJsonLd(), websiteJsonLd()]} />

        {/* Google Analytics 4. `afterInteractive` so the tag never blocks
            first paint — this is a static export and the pages must render
            without waiting on Google. Skipped entirely when SITE.ga4 is
            empty, so a build with analytics off emits no broken tag. */}
        {SITE.ga4 ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${SITE.ga4}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${SITE.ga4}');`}
            </Script>
          </>
        ) : null}

        <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-5">
            <Link href="/" className="shrink-0" aria-label={`${SITE.name} — home`}>
              {/* The wordmark is 313x125, so 150px wide keeps it above 2x. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/logo.png")}
                alt={SITE.name}
                width={313}
                height={125}
                fetchPriority="high"
                className="h-11 sm:h-14 w-auto"
              />
            </Link>

            <nav aria-label="Main" className="hidden lg:flex gap-6 text-[0.92rem] ml-auto">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="text-ink/80 hover:text-heritage transition-colors"
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            <a
              href={SITE.booking.collection}
              className="hidden sm:inline-block ml-auto lg:ml-0 shrink-0 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-dark transition-colors"
            >
              Check Availability
            </a>

            {/* Mobile menu — <details> keeps it JS-free and crawlable */}
            <details className="lg:hidden ml-auto sm:ml-0 relative group">
              <summary
                className="list-none cursor-pointer rounded-md border border-line px-3 py-2 text-sm select-none"
                aria-label="Menu"
              >
                Menu
              </summary>
              <nav
                aria-label="Mobile"
                className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-line bg-white p-2 shadow-lg"
              >
                {NAV.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    className="block rounded-lg px-3 py-2.5 hover:bg-ivory hover:text-heritage transition-colors"
                  >
                    {n.label}
                  </Link>
                ))}
                <a
                  href={SITE.booking.collection}
                  className="mt-1 block rounded-lg bg-brand px-3 py-2.5 text-center font-medium text-white"
                >
                  Check Availability
                </a>
              </nav>
            </details>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="mt-20 bg-brand text-ivory">
          <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 sm:grid-cols-3 text-sm">
            <div>
              <p className="font-[family-name:var(--font-display)] text-2xl">
                Flower Walls <span className="text-gold">New Jersey</span>
              </p>
              <div className="gold-rule mt-3" />
              <p className="mt-4 text-ivory/75 leading-relaxed">
                Luxury flower wall and photo booth rentals for weddings,
                celebrations and brand events across New Jersey.
              </p>
              <a href={SITE.phoneHref} className="mt-4 block text-ivory hover:text-gold transition-colors">
                {SITE.phone}
              </a>
            </div>
            <nav aria-label="Footer">
              <p className="eyebrow !text-gold">Explore</p>
              <ul className="mt-3 space-y-2">
                {[...NAV, ...FOOTER_NAV].map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="text-ivory/80 hover:text-gold transition-colors">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="eyebrow !text-gold">Book</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a href={SITE.booking.contact} className="text-ivory/80 hover:text-gold transition-colors">
                    Request a quote
                  </a>
                </li>
                <li>
                  <a href={SITE.booking.collection} className="text-ivory/80 hover:text-gold transition-colors">
                    Check availability
                  </a>
                </li>
                <li>
                  <a href={SITE.booking.signIn} className="text-ivory/80 hover:text-gold transition-colors">
                    My account
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-ivory/15 py-4 text-center text-xs text-ivory/60">
            &copy; {new Date().getFullYear()} {SITE.name}. Serving all of New Jersey
            from Newark and Barnegat.
          </div>
        </footer>

        {/* Mobile sticky CTA — out of the way on desktop */}
        <div className="sm:hidden fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 backdrop-blur p-3">
          <a
            href={SITE.booking.collection}
            className="block rounded-full bg-brand py-3 text-center font-medium text-white"
          >
            Check Availability
          </a>
        </div>
      </body>
    </html>
  );
}
