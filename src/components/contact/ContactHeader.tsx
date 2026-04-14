import { getTranslations } from "next-intl/server";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageTitle } from "@/components/shared/PageTitle";

export default async function ContactHeader() {
  const t = await getTranslations("ContactPage");
  const tNav = await getTranslations("Navigation");

  return (
    <header className="pt-28 sm:pt-32 lg:pt-36">
      <Breadcrumb
        items={[{ label: tNav("home"), href: "/" }, { label: tNav("contact") }]}
      />
      <PageTitle title={t("title")} subtitle={t("subtitle")} />
    </header>
  );
}
