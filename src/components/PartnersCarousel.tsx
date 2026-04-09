"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import {
  Truck,
  Layers,
  Factory,
  Trees,
  Building2,
  Ship,
  Package,
  TreePine,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
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

const ICON_MAP: Record<string, LucideIcon> = {
  arserwood: Truck,
  hsbaco: Layers,
  odek: Factory,
  versowood: Trees,
  welde: Building2,
  sumec: Ship,
  veko: Package,
  majerholz: TreePine,
  starwood: Warehouse,
};

function PartnerCard({ partner }: { partner: Partner }) {
  const Icon = ICON_MAP[partner.id] ?? Package;

  return (
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${partner.name} — ${partner.role}`}
      className="group flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-10 transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(172,141,91,0.08)] lg:gap-5 lg:px-8 lg:py-12 hover:-translate-y-1"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/[0.06] transition-colors duration-300 group-hover:bg-white/[0.1] lg:h-16 lg:w-16 lg:rounded-2xl">
        <Icon
          className="h-7 w-7 text-[#6B7280] transition-colors duration-300 group-hover:text-[#9CA3AF] lg:h-8 lg:w-8"
          strokeWidth={1.5}
        />
      </div>
      <div className="text-center">
        <p className="text-lg font-bold tracking-wide text-white lg:text-xl">
          {partner.name}
        </p>
        <p className="mt-1.5 text-sm font-medium italic text-primary lg:text-base">
          {partner.role}
        </p>
      </div>
    </a>
  );
}

export function PartnersCarousel({ partners }: PartnersCarouselProps) {
  return (
    <>
      {/* Mobile — Swiper carousel with blur masking */}
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
              <PartnerCard partner={partner} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop — Dense grid */}
      <div className="hidden gap-4 px-4 lg:grid lg:grid-cols-3 lg:gap-5 xl:grid-cols-4 xl:gap-6 2xl:grid-cols-5">
        {partners.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </div>
    </>
  );
}
