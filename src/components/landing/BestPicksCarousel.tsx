"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface BestPickItem {
  title: string;
  countLabel: string;
  imageSrc: string;
}

function BestPickCard({ item }: { item: BestPickItem }) {
  return (
    <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/5">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={item.imageSrc}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 86vw, (max-width: 1023px) 70vw, 33vw"
          className="object-cover"
          priority={false}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-7 flex flex-col items-center justify-center text-center">
        <p className="font-golos-text text-2xl font-black tracking-tight text-white">
          {item.title}
        </p>
        <p className="mt-1 text-lg font-semibold text-white/70">
          {item.countLabel}
        </p>
      </div>
    </div>
  );
}

interface BestPicksCarouselProps {
  items: BestPickItem[];
}

export function BestPicksCarousel({ items }: BestPicksCarouselProps) {
  return (
    <div className="relative py-4">
      <div className="lg:hidden">
        <Swiper
          modules={[Pagination]}
          grabCursor
          centeredSlides
          centeredSlidesBounds
          spaceBetween={14}
          slidesPerView={1.12}
          breakpoints={{
            640: { slidesPerView: 1.25, spaceBetween: 16 },
            768: { slidesPerView: 1.6, spaceBetween: 18 },
          }}
          pagination={{ clickable: true }}
          className="best-picks-swiper overflow-visible px-4 sm:px-6"
        >
          {items.map((item) => (
            <SwiperSlide key={item.imageSrc}>
              <BestPickCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden gap-5 px-4 sm:px-6 lg:grid lg:grid-cols-3 ">
        {items.map((item) => (
          <BestPickCard key={item.imageSrc} item={item} />
        ))}
      </div>
    </div>
  );
}
