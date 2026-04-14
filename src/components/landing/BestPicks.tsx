import { getTranslations } from "next-intl/server";
import SectionTitle from "./SectionTitle";
import { BestPicksCarousel } from "@/components/landing/BestPicksCarousel";

export default async function BestPicks() {
  const t = await getTranslations("BestPicks");
  const items = [
    {
      title: t("items.mdf.title"),
      countLabel: t("items.mdf.countLabel"),
      imageSrc: "/images/best-picks/1.jpg",
    },
    {
      title: t("items.plywood.title"),
      countLabel: t("items.plywood.countLabel"),
      imageSrc: "/images/best-picks/2.jpg",
    },
    {
      title: t("items.osb.title"),
      countLabel: t("items.osb.countLabel"),
      imageSrc: "/images/best-picks/3.jpg",
    },
  ];

  return (
    <section className="bg-white py-8">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <SectionTitle title={t("title")} className="text-black sm:text-5xl" />

        <div className="mt-10 lg:mt-16">
          <BestPicksCarousel items={items} />
        </div>
      </div>
    </section>
  );
}
