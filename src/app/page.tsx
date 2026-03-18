import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import AboutSection from "@/components/AboutSection";
import PartnersGrid from "@/components/PartnersGrid";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductCategories />
      <AboutSection />
      <PartnersGrid />
      <CtaBanner />
    </main>
  );
}
