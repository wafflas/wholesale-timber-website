import { normalizeLocale } from "@/lib/locale";

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);

  const copy =
    locale === "en"
      ? {
          title: "Terms of Service",
          body: "Content in progress.",
        }
      : {
          title: "Όροι Παροχής Υπηρεσιών",
          body: "Περιεχόμενο σε εξέλιξη.",
        };

  return (
    <main className="mx-auto max-w-3xl px-5 py-24 sm:px-6 md:py-32">
      <h1 className="font-hero text-3xl tracking-hero text-white sm:text-4xl">
        {copy.title}
      </h1>
      <p className="mt-6 text-sm leading-relaxed text-white/60">
        {copy.body}
      </p>
    </main>
  );
}

