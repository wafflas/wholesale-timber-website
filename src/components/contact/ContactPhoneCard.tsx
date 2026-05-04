import { PhoneCall } from "lucide-react";
import { getLocale } from "next-intl/server";

const CONTACTS = [
  {
    nameEl: "ΠΑΝΤΕΛΗΣ ΚΑΡΑΓΙΑΝΝΗΣ",
    nameEn: "PANTELIS KARAGIANNIS",
    display: "6932 262 910",
    href: "tel:+306932262910",
  },
  {
    nameEl: "ΝΙΚΟΣ ΚΑΡΑΓΙΑΝΝΗΣ",
    nameEn: "NIKOS KARAGIANNIS",
    display: "6944 567 317",
    href: "tel:+306944567317",
  },
  {
    nameEl: "ΠΑΝΑΓΙΩΤΗΣ ΚΑΡΑΓΙΑΝΝΗΣ",
    nameEn: "PANAGIOTIS KARAGIANNIS",
    display: "6943 619 220",
    href: "tel:+306943619220",
  },
] as const;

const EMAIL = {
  display: "bestplyike@gmail.com",
  href: "mailto:bestplyike@gmail.com",
};

export default async function ContactPhoneCard() {
  const locale = await getLocale();

  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-black/[0.04] bg-white px-6 py-10 text-center shadow-[0_1px_3px_rgb(0,0,0,0.04)]">
      <div className="flex size-[4.25rem] items-center justify-center rounded-full border-[1.5px] border-primary/25">
        <PhoneCall
          className="size-7 text-primary"
          strokeWidth={1.4}
          aria-hidden
        />
      </div>
      <div className="mt-6 w-full max-w-sm">
        <ul className="divide-y divide-black/[0.06] rounded-xl border border-black/[0.06] bg-black/[0.015] text-left">
          {CONTACTS.map((c) => (
            <li
              key={c.href}
              className="group grid grid-cols-1 gap-y-1 px-3 py-3 transition-colors hover:bg-black/[0.03] sm:grid-cols-[1fr_auto] sm:items-center sm:gap-x-4 sm:gap-y-0"
            >
              <span className="min-w-0 text-[0.72rem] font-semibold tracking-[0.12em] text-[#2b2623]/60 sm:text-xs">
                {locale === "el" ? c.nameEl : c.nameEn}
              </span>
              <a
                href={c.href}
                className="w-fit rounded-md text-[1.05rem] font-bold tabular-nums tracking-tight text-[#2b2623] transition-colors group-hover:text-primary sm:text-base"
              >
                {c.display}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <a
        href={EMAIL.href}
        className="mt-3 text-sm text-[#2b2623]/50 transition-colors hover:text-primary"
      >
        {EMAIL.display}
      </a>
    </div>
  );
}
