import { PhoneCall } from "lucide-react";

const PHONE = { display: "210 800 0365", href: "tel:+302108000365" };
const EMAIL = {
  display: "bestplyike@gmail.com",
  href: "mailto:bestplyike@gmail.com",
};

export default function ContactPhoneCard() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-black/[0.04] bg-white px-6 py-10 text-center shadow-[0_1px_3px_rgb(0,0,0,0.04)]">
      <div className="flex size-[4.25rem] items-center justify-center rounded-full border-[1.5px] border-primary/25">
        <PhoneCall
          className="size-7 text-primary"
          strokeWidth={1.4}
          aria-hidden
        />
      </div>
      <a
        href={PHONE.href}
        className="mt-5 text-[1.55rem] font-bold tracking-tight text-[#2b2623] transition-colors hover:text-primary"
      >
        {PHONE.display}
      </a>
      <a
        href={EMAIL.href}
        className="mt-1 text-sm text-[#2b2623]/50 transition-colors hover:text-primary"
      >
        {EMAIL.display}
      </a>
    </div>
  );
}
