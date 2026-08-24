import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` writes a fully static site to ./out,
  // which GitHub Pages serves directly. No Node server, no hosting bill.
  output: "export",
  // GitHub Pages serves directories, so emit /page/index.html rather than
  // /page.html. Without this, every URL 404s on Pages.
  trailingSlash: true,
  images: {
    // Wall photography is served from CheckCherry's image CDN, which already
    // resizes. Next's optimiser needs a server, so it is disabled here.
    unoptimized: true,
  },
};

export default nextConfig;
