"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useId, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface BestPickItem {
  title: string;
  countLabel: string;
  imageSrc: string;
}

interface BestPicksCarouselProps {
  items: BestPickItem[];
}
export function BestPicksCarousel({ items }: BestPicksCarouselProps) {
  const id = useId();
  const prevClassName = `best-picks-prev-${id}`;
  const nextClassName = `best-picks-next-${id}`;
  const [isLocked, setIsLocked] = useState(false);

  return (
    <div className="relative py-4">
      <Swiper
        modules={[Navigation, Pagination]}
        enabled={!isLocked}
        grabCursor={!isLocked}
        centeredSlides={!isLocked}
        centeredSlidesBounds={!isLocked}
        watchOverflow
        spaceBetween={14}
        slidesPerView={1.12}
        breakpoints={{
          640: { slidesPerView: 1.25, spaceBetween: 16 },
          768: { slidesPerView: 1.6, spaceBetween: 18 },
          1024: { slidesPerView: 2.25, spaceBetween: 20 },
          1280: { slidesPerView: 2.75, spaceBetween: 22 },
        }}
        onInit={(swiper) => setIsLocked(swiper.isLocked)}
        onResize={(swiper) => setIsLocked(swiper.isLocked)}
        onLock={() => setIsLocked(true)}
        onUnlock={() => setIsLocked(false)}
        navigation={
          isLocked
            ? false
            : {
                prevEl: `.${prevClassName}`,
                nextEl: `.${nextClassName}`,
                disabledClass: "is-disabled",
              }
        }
        pagination={isLocked ? false : { clickable: true }}
        className="best-picks-swiper overflow-visible px-4 sm:px-6 lg:px-10"
      >
        {items.map((item) => (
          <SwiperSlide key={item.imageSrc}>
            <div className="relative overflow-hidden rounded-[20px] ring-1 ring-black/5 ">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 86vw, (max-width: 1024px) 70vw, 520px"
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
          </SwiperSlide>
        ))}
      </Swiper>

      {!isLocked ? (
        <>
          <button
            type="button"
            aria-label="Previous"
            className={[
              prevClassName,
              "group absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-2xl border border-white/[0.14] bg-black/[0.22] text-white backdrop-blur-md transition-all duration-300",
              "h-12 w-12 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.65)] hover:bg-black/[0.34] hover:border-white/[0.22] hover:-translate-y-1/2 hover:scale-[1.03]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40",
              "lg:flex",
              "is-disabled:pointer-events-none is-disabled:opacity-35",
            ].join(" ")}
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.25} aria-hidden />
          </button>

          <button
            type="button"
            aria-label="Next"
            className={[
              nextClassName,
              "group absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-2xl border border-white/[0.14] bg-black/[0.22] text-white backdrop-blur-md transition-all duration-300",
              "h-12 w-12 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.65)] hover:bg-black/[0.34] hover:border-white/[0.22] hover:-translate-y-1/2 hover:scale-[1.03]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40",
              "lg:flex",
              "is-disabled:pointer-events-none is-disabled:opacity-35",
            ].join(" ")}
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2.25} aria-hidden />
          </button>
        </>
      ) : null}
    </div>
  );
}
