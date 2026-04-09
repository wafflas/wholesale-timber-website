import { getTranslations } from "next-intl/server";
import SectionTitle from "./SectionTitle";
import { BestPicksCarousel } from "@/components/BestPicksCarousel";
import Image from "next/image";

export default async function BestPicks() {
  const t = await getTranslations("BestPicks");

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <SectionTitle
          title={t("title")}
          className="text-black sm:text-5xl"
        />

        <div className="mt-10 md:hidden block">
          <BestPicksCarousel
            items={[
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
            ]}
          />
        </div>

        <div className="mt-10 hidden md:grid grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8 xl:gap-10">
          {[
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
          ].map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[28px] shadow-[0_10px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/5 transition-transform duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)] lg:rounded-[32px]"
            >
              <div className="relative aspect-[4/3] w-full lg:aspect-[3/2]">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 33vw, 90vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-7 flex flex-col items-center justify-center text-center lg:bottom-10">
                <p className="font-golos-text text-2xl font-black tracking-tight text-white lg:text-3xl xl:text-4xl">
                  {item.title}
                </p>
                <p className="mt-1 text-lg font-semibold text-white/70 lg:mt-2 lg:text-xl">
                  {item.countLabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
