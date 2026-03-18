import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin", "greek"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "greek"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
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
    <html lang="el" className={`${roboto.variable} ${inter.variable}`}>
      <body className="antialiased">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
