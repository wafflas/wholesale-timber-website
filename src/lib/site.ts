/** Public marketing domain (apex). Live site is served at www. */
export const SITE_DOMAIN = "bestplyike.com";

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
