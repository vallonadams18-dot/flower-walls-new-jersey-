import type { Metadata } from "next";
import { SITE } from "@/lib/site";

/**
 * Builds full page metadata: canonical URL, Open Graph and Twitter card.
 * Every page routes through this so no page silently loses its canonical
 * or social image.
 */
export function pageMeta({
  title,
  description,
  path,
  image = "/img/og.jpg",
  imageAlt = "Flower wall rentals in New Jersey",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
}): Metadata {
  const url = `${SITE.url}${path}`;
  const absImage = image.startsWith("http") ? image : `${SITE.url}${image}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type: "website",
      locale: "en_US",
      images: [{ url: absImage, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absImage],
    },
  };
}
