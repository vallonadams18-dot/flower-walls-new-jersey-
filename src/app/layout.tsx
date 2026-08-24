import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { SITE, NAV, FOOTER_NAV } from "@/lib/site";
import { JsonLd, businessJsonLd, websiteJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Flower Wall Rental New Jersey | Weddings & Events",
    template: `%s | ${SITE.name}`,
  },
  description:
    "Premium flower wall rentals across New Jersey. Over 50 designs for weddings, corporate events and parties.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <JsonLd data={[businessJsonLd(), websiteJsonLd()]} />

        <header className="border-b border-bloom-100 sticky top-0 bg-white/95 backdrop-blur z-50">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-6">
            <Link href="/" className="font-[family-name:var(--font-display)] text-lg font-semibold text-bloom-700 shrink-0">
              Flower Walls <span className="text-leaf-700">New Jersey</span>
            </Link>
            <nav aria-label="Main" className="hidden md:flex gap-5 text-sm ml-auto">
              {NAV.map((n) => (
                <Link key={n.href} href={n.href} className="hover:text-bloom-600 transition-colors">
                  {n.label}
                </Link>
              ))}
            </nav>
            <a
              href={SITE.booking.collection}
              className="ml-auto md:ml-0 shrink-0 rounded-full bg-bloom-600 px-4 py-2 text-sm font-medium text-white hover:bg-bloom-700 transition-colors"
            >
              Book Now
            </a>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="mt-20 border-t border-bloom-100 bg-bloom-50">
          <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 sm:grid-cols-3 text-sm">
            <div>
              <p className="font-[family-name:var(--font-display)] text-base font-semibold text-bloom-700">
                {SITE.name}
              </p>
              <p className="mt-2 text-ink/70">
                Flower wall rentals for weddings, corporate events and celebrations
                across New Jersey.
              </p>
            </div>
            <nav aria-label="Footer">
              <ul className="space-y-1">
                {[...NAV, ...FOOTER_NAV].map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="hover:text-bloom-600">{n.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="space-y-2">
              <a href={SITE.booking.contact} className="block hover:text-bloom-600">
                Request a quote
              </a>
              <a href={SITE.booking.signIn} className="block hover:text-bloom-600">
                My account
              </a>
              {SITE.phone ? (
                <a href={SITE.phoneHref} className="block hover:text-bloom-600">{SITE.phone}</a>
              ) : null}
            </div>
          </div>
          <div className="border-t border-bloom-100 py-4 text-center text-xs text-ink/60">
            &copy; {new Date().getFullYear()} {SITE.name}. Serving New Jersey.
          </div>
        </footer>
      </body>
    </html>
  );
}
