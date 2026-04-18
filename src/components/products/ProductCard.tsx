import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

interface ProductCardProps {
  title: string;
  subtitle: string;
  image: string;
  typeLabel: string;
  slug?: string;
}

export function ProductCard({
  title,
  subtitle,
  image,
  typeLabel,
  slug,
}: ProductCardProps) {
  const inner = (
    <div className="group relative overflow-hidden rounded-xl ring-1 ring-black/5">
      <div className="relative aspect-[4/5] w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 via-45% to-transparent" />

      <span className="absolute left-2.5 top-2.5 rounded-full bg-[#2b2623] px-2.5 py-0.5 text-[0.55rem] font-bold uppercase tracking-widest text-white/90 sm:left-3.5 sm:top-3.5 sm:px-3 sm:py-1 sm:text-[0.65rem]">
        {typeLabel}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-2 sm:p-3">
        <h3 className="truncate font-golos-text text-sm font-bold leading-snug text-white sm:text-base">
          {title}
        </h3>
        <p className="mt-0.5 truncate font-golos-text text-[0.6rem] font-bold uppercase tracking-[0.039rem] text-primary">
          {subtitle}
        </p>
        <div className="mt-1.5 flex justify-end">
          <ArrowRight
            className="size-4 text-white/70 transition-transform duration-300 group-hover:translate-x-1 sm:size-5"
            strokeWidth={2}
            aria-hidden
          />
        </div>
      </div>
    </div>
  );

  if (slug) {
    return (
      <Link href={`/products/${slug}`} className="block">
        {inner}
      </Link>
    );
  }

  return inner;
}
