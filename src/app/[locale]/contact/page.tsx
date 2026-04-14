import { setRequestLocale } from "next-intl/server";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactPhoneCard from "@/components/contact/ContactPhoneCard";
import ContactMapCard from "@/components/contact/ContactMapCard";
import ContactFormCard from "@/components/contact/ContactFormCard";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-[#FAF9F7] selection:bg-primary selection:text-white">
      <div className="mx-auto max-w-3xl px-5 pb-20 sm:px-6 lg:max-w-5xl lg:px-8 ">
        <ContactHeader />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <ContactPhoneCard />
          <ContactMapCard />
          <ContactFormCard />
        </div>
      </div>
    </main>
  );
}
