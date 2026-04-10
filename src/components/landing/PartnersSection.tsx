import { getTranslations } from "next-intl/server";
import { PartnersCarousel } from "./PartnersCarousel";

const PARTNER_CONFIG = [
  {
    id: "arserwood",
    name: "ARSER WOOD",
    url: "https://www.arserwood-global.com/",
  },
  {
    id: "hsbaco",
    name: "HS BACO",
    url: "https://hs.at/en/newsroom/blog/detail/hs-baco-panels-and-the-magic-of-10-1.html",
  },
  { id: "odek", name: "ODEK", url: "https://odek.eu/" },
  { id: "versowood", name: "VERSOWOOD", url: "https://www.versowood.com/" },
  { id: "welde", name: "WELDE", url: "https://www.welde.at/en/" },
  { id: "sumec", name: "SUMEC", url: "https://www.sumecbuildingmaterial.com/" },
  { id: "veko", name: "VEKO", url: "https://veko-al.com/en/" },
  { id: "majerholz", name: "MAJER - HOLZ", url: "https://www.majer-holz.com/" },
  { id: "starwood", name: "STARWOOD", url: "https://www.starwood.com.tr/" },
] as const;

export default async function PartnersSection() {
  const t = await getTranslations("PartnersSection");

  const partners = PARTNER_CONFIG.map((p) => ({
    id: p.id,
    name: p.name,
    url: p.url,
    role: t(p.id),
  }));

  return (
    <section className="bg-[#1A1A1A] py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl xl:max-w-7xl">
        <div className="px-4 text-center">
          <h2 className="font-golos-text text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <span className="bg-gradient-to-r from-[#C9A96E] via-[#E8D5A8] to-[#C9A96E] bg-clip-text text-transparent">
              {t("title")}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#9CA3AF] sm:text-base lg:mt-6 lg:max-w-2xl lg:text-lg">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-10 md:mt-14 lg:mt-16">
          <PartnersCarousel partners={partners} />
        </div>
      </div>
    </section>
  );
}
