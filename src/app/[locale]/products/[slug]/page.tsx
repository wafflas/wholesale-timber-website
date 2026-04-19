import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/products";
import ProductDetailPage from "@/components/products/ProductDetailPage";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};
  const isGreek = locale === "el";

  const title = `${isGreek ? product.nameGr : product.name} | BEST PLY I.K.E.`;
  const description = isGreek ? product.descriptionGr : product.descriptionEn;

  return {
    title,
    description,
    alternates: {
      canonical: "./",
      languages: {
        el: `/el/products/${slug}`,
        en: `/en/products/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}/products/${slug}`,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const isGreek = locale === "el";
  const t = await getTranslations("ProductDetailPage");
  const tNav = await getTranslations("Navigation");

  const related = PRODUCTS.filter(
    (p) => p.typeEn === product.typeEn && p.slug !== product.slug,
  ).map((p) => ({
    slug: p.slug,
    title: isGreek ? p.nameGr : p.name,
    image: p.image,
  }));

  return (
    <ProductDetailPage
      name={isGreek ? product.nameGr : product.name}
      subtitle={isGreek ? product.subtitleGr : product.subtitleEn}
      typeLabel={isGreek ? product.typeGr : product.typeEn}
      description={isGreek ? product.descriptionGr : product.descriptionEn}
      dimensions={product.dimensions}
      thicknesses={product.thicknesses}
      image={product.image}
      relatedProducts={related}
      labels={{
        description: t("description"),
        dimensions: t("dimensions"),
        thicknesses: t("thicknesses"),
        unit: t("unit"),
        contactCta: t("contactCta"),
        relatedProducts: t("relatedProducts"),
        backLabel: tNav("products"),
        homeLabel: tNav("home"),
      }}
    />
  );
}
