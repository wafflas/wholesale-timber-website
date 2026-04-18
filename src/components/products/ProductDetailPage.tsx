import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { RelatedProductsCarousel } from "./RelatedProductsCarousel";

interface ProductDetailPageProps {
  name: string;
  subtitle: string;
  typeLabel: string;
  description: string;
  dimensions: string[];
  thicknesses: string[];
  image: string;
  relatedProducts: { slug: string; title: string; image: string }[];
  labels: {
    description: string;
    dimensions: string;
    thicknesses: string;
    unit: string;
    contactCta: string;
    backLabel: string;
    homeLabel: string;
    relatedProducts: string;
  };
}

export default function ProductDetailPage({
  name,
  subtitle,
  typeLabel,
  description,
  dimensions,
  thicknesses,
  image,
  relatedProducts,
  labels,
}: ProductDetailPageProps) {
  return (
    <main className="min-h-screen bg-[#FAF9F7] selection:bg-primary selection:text-white">
      <div className="mx-auto max-w-3xl px-5 pb-24 pt-28 sm:px-6 lg:max-w-5xl lg:px-8 lg:pt-32">
        <Breadcrumb
          items={[
            { label: labels.homeLabel, href: "/" },
            { label: labels.backLabel, href: "/products" },
            { label: name },
          ]}
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-14">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl lg:aspect-auto lg:min-h-full">
            <Image
              src={image}
              alt={name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          <div className="flex flex-col">
            <div>
              <span className="inline-block rounded-full bg-[#2b2623] px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-widest text-white/90">
                {typeLabel}
              </span>
              <h1 className="font-golos-text mt-3 text-3xl leading-tight tracking-wide text-[#2b2623] sm:text-4xl lg:text-5xl">
                {name}
              </h1>
              <p className="mt-1 font-golos-text text-xs font-bold uppercase tracking-[0.12em] text-primary">
                {subtitle}
              </p>
            </div>

            <div className="mt-7 space-y-6 border-t border-[#2b2623]/10 pt-7">
              <section>
                <h2 className="mb-2 font-golos-text text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#2b2623]/40">
                  {labels.description}
                </h2>
                <p className="font-golos-text text-sm leading-relaxed text-[#2b2623]/75 sm:text-[0.9rem]">
                  {description}
                </p>
              </section>

              <section>
                <h2 className="mb-2.5 font-golos-text text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#2b2623]/40">
                  {labels.dimensions}{" "}
                  <span className="normal-case">{labels.unit}</span>
                </h2>
                <div className="flex flex-wrap gap-2">
                  {dimensions.map((d) => (
                    <span
                      key={d}
                      className="rounded-full border border-[#2b2623]/15 bg-white px-3.5 py-1.5 font-golos-text text-xs font-semibold text-[#2b2623] shadow-sm"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="mb-2.5 font-golos-text text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#2b2623]/40">
                  {labels.thicknesses}{" "}
                  <span className="normal-case">{labels.unit}</span>
                </h2>
                <div className="flex flex-wrap gap-2">
                  {thicknesses.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-primary/10 px-3.5 py-1.5 font-golos-text text-xs font-bold text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2b2623] px-6 py-3 font-golos-text text-xs font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-80"
              >
                {labels.contactCta}
                <ArrowRight className="size-3.5" strokeWidth={2.5} aria-hidden />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#2b2623]/20 bg-transparent px-6 py-3 font-golos-text text-xs font-semibold uppercase tracking-widest text-[#2b2623] transition-colors hover:bg-[#2b2623]/5"
              >
                <ArrowLeft className="size-3.5" strokeWidth={2.5} aria-hidden />
                {labels.backLabel}
              </Link>
            </div>
          </div>
        </div>

        <RelatedProductsCarousel
          products={relatedProducts}
          heading={labels.relatedProducts}
        />
      </div>
    </main>
  );
}
