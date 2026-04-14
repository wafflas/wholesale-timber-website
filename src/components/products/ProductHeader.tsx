import { getTranslations } from "next-intl/server";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageTitle } from "@/components/shared/PageTitle";

export default async function ProductHeader() {
  const t = await getTranslations("ProductsPage");
  const tNav = await getTranslations("Navigation");

  return (
    <header className="pt-20">
      <Breadcrumb
        items={[
          { label: tNav("home"), href: "/" },
          { label: tNav("products") },
        ]}
      />
      <PageTitle title={t("title")} subtitle={t("body")} />
    </header>
  );
}
