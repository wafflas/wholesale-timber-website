import { Suspense } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { PRODUCTS } from "@/lib/products";
import { ProductFilterProvider } from "@/components/products/ProductFilterContext";
import { ProductTabBar } from "@/components/products/ProductTabBar";
import ProductHeader from "@/components/products/ProductHeader";
import { ProductContent } from "@/components/products/ProductContent";
import { ProductToolbar } from "@/components/products/ProductToolbar";

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("ProductsPage");
  const isGreek = locale === "el";

  const products = PRODUCTS.map((p) => ({
    title: isGreek ? p.nameGr : p.name,
    subtitle: isGreek ? p.subtitleGr : p.subtitleEn,
    image: p.image,
    typeLabel: isGreek ? p.typeGr : p.typeEn,
    typeKey: p.typeEn,
    slug: p.slug,
  }));

  const seen = new Set<string>();
  const categories = PRODUCTS.reduce<{ key: string; label: string }[]>(
    (acc, p) => {
      if (!seen.has(p.typeEn)) {
        seen.add(p.typeEn);
        acc.push({ key: p.typeEn, label: isGreek ? p.typeGr : p.typeEn });
      }
      return acc;
    },
    [],
  );

  return (
    <main className="min-h-screen bg-[#FAF9F7] selection:bg-primary selection:text-white">
      <Suspense fallback={null}>
        <ProductFilterProvider>
          <ProductTabBar categories={categories} allLabel={t("allTab")} />
          <div className="mx-auto max-w-3xl px-5 pb-20 pt-20 sm:px-6 lg:max-w-5xl lg:px-8">
            <ProductHeader />
            <ProductToolbar products={products} />
            <div className="mt-8">
              <ProductContent products={products} />
            </div>
          </div>
        </ProductFilterProvider>
      </Suspense>
    </main>
  );
}
