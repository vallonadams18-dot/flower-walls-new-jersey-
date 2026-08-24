import { Cormorant_Garamond, Inter } from "next/font/google";

/** Editorial serif for display headings — self-hosted at build time. */
export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

/** Workhorse sans for nav, body, buttons, forms. */
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
