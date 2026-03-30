import type { Metadata } from "next";
import { Golos_Text } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";

const golosText = Golos_Text({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-golos-text",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BEST PLY I.K.E. | Εισαγωγές & Εξαγωγές Ξυλείας",
  description:
    "BEST PLY I.K.E. — Αξιοπιστία στις εισαγωγές και εξαγωγές ξυλείας. Birch Plywood, Okoume, Poplar, Blockboard, OSB, PET MDF.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className={golosText.variable}>
      <body className="font-golos-text antialiased text-foreground bg-background">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
