import type { Metadata } from "next";

export const siteUrl = "https://www.projectmycelium.ai";

/** Share card used for every page (1200×630, in public/). */
export const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Mycelium: Advancing robust moral character in frontier AI",
};

/**
 * Open Graph fields shared by every page. Next.js replaces (rather than
 * merges) a parent's `openGraph` when a page defines its own, so pages
 * spread this in alongside their own title, description and URL.
 */
export const baseOpenGraph = {
  type: "website",
  siteName: "Mycelium",
  locale: "en_US",
  images: [ogImage],
} satisfies NonNullable<Metadata["openGraph"]>;
