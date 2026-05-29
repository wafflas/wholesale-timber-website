import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getSiteUrl } from "@/lib/site";

// Static date for predictable caching — bump when you ship meaningful content changes
const lastModified = new Date("2026-05-01");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  const paths = ["/", "/products", "/contact", "/privacy"] as const;

  return routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${base}/${locale}${path === "/" ? "" : path}`,
      lastModified,
      changeFrequency:
        path === "/privacy"
          ? "yearly"
          : path === "/products"
            ? "weekly"
            : "monthly",
      priority: path === "/" ? 1 : path === "/products" ? 0.9 : 0.7,
    })),
  );
}
