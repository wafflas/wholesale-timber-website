/** Public marketing domain (apex). Live site is served at www. */
export const SITE_DOMAIN = "bestplyike.com";

export const SITE_LOGO = "/Logo_transparent_greek-removebg-preview.webp";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/bestplyike/",
  facebook: "https://www.facebook.com/profile.php?id=61589200624945",
} as const;

/** Canonical production origin — matches Search Console / deployed host. */
export const SITE_URL = `https://www.${SITE_DOMAIN}`;

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) {
    return `https://${vercelUrl}`;
  }

  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  return SITE_URL;
}
