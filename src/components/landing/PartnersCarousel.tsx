"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Partner {
  id: string;
  name: string;
  url: string;
  role: string;
}

interface PartnersCarouselProps {
  partners: Partner[];
}

const LOGO_SRC_BY_ID: Record<string, string> = {
  arserwood: "/partnerlogos/arserwoodlog.png",
  hsbaco: "/partnerlogos/HSgroupLogo.png",
  odek: "/partnerlogos/odeklogo.png",
  versowood: "/partnerlogos/versowoodlogo.png",
  welde: "/partnerlogos/weldewoodlogo.png",
  sumec: "/partnerlogos/sumeclogo.png",
  veko: "/partnerlogos/vekologo.png",
  majerholz: "/partnerlogos/majer-holzlogo.png",
  starwood: "/partnerlogos/starwoodlogo.png",
};

function PartnerCard({
  partner,
  isShowcase = false,
}: {
  partner: Partner;
  isShowcase?: boolean;
}) {
  const logoSrc = LOGO_SRC_BY_ID[partner.id];

  return (
    <div
      className={[
        "flex flex-col items-center justify-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.03] px-6 py-10 transition-all duration-300 lg:gap-5 lg:px-8 lg:py-12",
        isShowcase
          ? "border-primary/30 bg-white/[0.06] shadow-[0_0_30px_rgba(172,141,91,0.08)] -translate-y-1"
          : "",
      ].join(" ")}
    >
      <div
        className={[
          "relative flex h-14 w-32 items-center justify-center overflow-hidden rounded-lg bg-white/[0.06] transition-colors duration-300 lg:h-16 lg:w-36 lg:rounded-xl",
          isShowcase ? "bg-white/[0.1]" : "",
        ].join(" ")}
      >
        {logoSrc ? (
          <Image
            src={logoSrc}
            alt={`${partner.name} logo`}
            fill
            sizes="(min-width: 1024px) 144px, 128px"
            className="object-contain p-2"
          />
        ) : (
          <span className="px-3 text-xs font-semibold tracking-wide text-[#9CA3AF]">
            {partner.name}
          </span>
        )}
      </div>
      <div className="text-center">
        <p className="text-lg font-bold tracking-wide text-white lg:text-xl">
          {partner.name}
        </p>
        <p className="mt-1.5 text-xs font-medium italic text-primary">
          {partner.role}
        </p>
      </div>
    </div>
  );
}

export function PartnersCarousel({ partners }: PartnersCarouselProps) {
  return (
    <>
      <div className="lg:hidden">
        <Swiper
          modules={[Pagination]}
          centeredSlides
          loop
          spaceBetween={16}
          slidesPerView={1.35}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 20 },
          }}
          pagination={{ clickable: true }}
          className="partners-swiper"
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              {({ isActive }) => (
                <PartnerCard partner={partner} isShowcase={isActive} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden gap-4 px-4 lg:grid lg:grid-cols-3 lg:gap-5 xl:grid-cols-4 xl:gap-6 2xl:grid-cols-5">
        {partners.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </div>
    </>
  );
}
