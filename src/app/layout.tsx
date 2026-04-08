import type { Metadata } from "next";
import localFont from "next/font/local";
import { Golos_Text } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const golosText = Golos_Text({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-golos-text",
  display: "swap",
});

const fontHero = localFont({
  src: "../../public/fonts/PostNoBillsJaffna-SemiBold.ttf",
  weight: "600",
  variable: "--font-hero",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BEST PLY I.K.E. | Εισαγωγές & Εξαγωγές Ξυλείας",
  description:
    "BEST PLY I.K.E. — Αξιοπιστία στις εισαγωγές και εξαγωγές ξυλείας. Birch Plywood, Okoume, Poplar, Blockboard, OSB, PET MDF.",
  manifest: "/favicon_io/site.webmanifest",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const locale = headersList.get("x-next-locale");
  const lang = locale === "en" ? "en" : "el";

  return (
    <html lang={lang} className={`${golosText.variable} ${fontHero.variable}`}>
      <body className="font-golos-text antialiased text-foreground bg-background">
        {children}
      </body>
    </html>
  );
}
