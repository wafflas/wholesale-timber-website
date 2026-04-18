"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "@/i18n/navigation";

interface RelatedProduct {
  slug: string;
  title: string;
  image: string;
}

interface RelatedProductsCarouselProps {
  products: RelatedProduct[];
  heading: string;
}

export function RelatedProductsCarousel({
  products,
  heading,
}: RelatedProductsCarouselProps) {
  const id = useId();
  const prevClass = `related-prev-${id.replace(/:/g, "")}`;
  const nextClass = `related-next-${id.replace(/:/g, "")}`;
  const [isLocked, setIsLocked] = useState(false);

  if (products.length === 0) return null;

  return (
    <section className="mt-16 border-t border-[#2b2623]/10 pt-12">
      <h2 className="mb-6 font-golos-text text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#2b2623]/40">
        {heading}
      </h2>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={12}
          slidesPerView={2}
          slidesPerGroup={2}
          breakpoints={{
            640: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 14 },
            1024: { slidesPerView: 3, slidesPerGroup: 5, spaceBetween: 16 },
          }}
          pagination={isLocked ? false : { clickable: true }}
          navigation={
            isLocked
              ? false
              : {
                  prevEl: `.${prevClass}`,
                  nextEl: `.${nextClass}`,
                  disabledClass: "is-disabled",
                }
          }
          onInit={(s) => setIsLocked(s.isLocked)}
          onResize={(s) => setIsLocked(s.isLocked)}
          onLock={() => setIsLocked(true)}
          onUnlock={() => setIsLocked(false)}
          className="best-picks-swiper"
        >
          {products.map((p) => (
            <SwiperSlide key={p.slug}>
              <Link href={`/products/${p.slug}`} className="group block">
                <div className="overflow-hidden rounded-lg ring-1 ring-black/5">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 640px) 44vw, (max-width: 1024px) 30vw, 22vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <p className="mt-2.5 truncate font-golos-text text-[0.75rem] font-semibold text-[#2b2623] group-hover:text-primary transition-colors">
                  {p.title}
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {!isLocked && (
          <>
            <button
              type="button"
              aria-label="Previous"
              className={`${prevClass} absolute -left-3 top-[40%] z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-[#2b2623]/10 bg-white shadow-md transition-all hover:bg-[#FAF9F7] lg:flex is-disabled:pointer-events-none is-disabled:opacity-30 h-9 w-9`}
            >
              <ChevronLeft className="size-4 text-[#2b2623]" strokeWidth={2} aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Next"
              className={`${nextClass} absolute -right-3 top-[40%] z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-[#2b2623]/10 bg-white shadow-md transition-all hover:bg-[#FAF9F7] lg:flex is-disabled:pointer-events-none is-disabled:opacity-30 h-9 w-9`}
            >
              <ChevronRight className="size-4 text-[#2b2623]" strokeWidth={2} aria-hidden />
            </button>
          </>
        )}
      </div>
    </section>
  );
}
