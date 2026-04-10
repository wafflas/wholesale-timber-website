import { getTranslations } from "next-intl/server";
import { ExternalLink } from "lucide-react";

const MAPS_QUERY = "Φιλαδελφείας+7,+Νέα+Ερυθραία,+146+71";
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;

export default async function ContactMapCard() {
  const t = await getTranslations("ContactPage");

  return (
    <div className="rounded-2xl border border-black/[0.04] bg-white p-5 shadow-[0_1px_3px_rgb(0,0,0,0.04)] sm:p-6">
      <h2 className="text-[1.05rem] font-semibold text-[#2b2623]">
        {t("mapTitle")}
      </h2>
      <div className="relative mt-4 overflow-hidden rounded-xl">
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-2.5 top-2.5 z-10 flex items-center gap-1.5 rounded-md bg-white/95 px-2.5 py-1.5 text-[0.7rem] font-medium text-[#2b2623] shadow-md backdrop-blur-sm transition-colors hover:bg-white"
        >
          {t("openInMaps")}
          <ExternalLink className="size-3" strokeWidth={2} aria-hidden />
        </a>
        <iframe
          src={MAPS_EMBED}
          width="100%"
          height="260"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={t("mapTitle")}
          className="w-full"
        />
      </div>
    </div>
  );
}
