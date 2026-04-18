"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";
import {
  Mail,
  MessageSquare,
  Phone,
  Send,
  User,
  CheckCircle,
} from "lucide-react";
import { sendContactEmail } from "@/actions/sendContactEmail";

interface FieldProps {
  label: string;
  icon: React.ReactNode;
  error?: string;
  children: React.ReactNode;
}

function Field({ label, icon, error, children }: FieldProps) {
  return (
    <div>
      <label className="flex items-center gap-2 text-[0.8rem] font-medium text-[#2b2623]">
        {icon}
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-500/90">{error}</p>}
    </div>
  );
}

const inputClass =
  "mt-2 w-full rounded-lg border border-black/[0.08] bg-[#FAF9F7] px-4 py-3 text-sm text-[#2b2623] placeholder:text-[#2b2623]/30 transition-colors focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/15";

const iconClass = "size-[0.95rem] text-primary";

export function ContactForm() {
  const t = useTranslations("ContactPage");
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const schema = z.object({
    name: z.string().min(1, t("required")),
    email: z.string().min(1, t("required")).email(t("invalidEmail")),
    phone: z.string().optional(),
    message: z.string().min(1, t("required")),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    setServerError(null);
    const result = await sendContactEmail(data);

    if (result.success) {
      setIsSuccess(true);
      reset();
    } else {
      setServerError(result.error ?? "Something went wrong.");
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center py-12 text-center">
        <CheckCircle className="size-12 text-green-500" strokeWidth={1.5} />
        <p className="mt-4 text-lg font-semibold text-[#2b2623]">
          {t("successTitle")}
        </p>
        <p className="mt-1.5 text-sm text-[#2b2623]/55">{t("successBody")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
      <Field
        label={t("labelName")}
        icon={<User className={iconClass} strokeWidth={1.75} aria-hidden />}
        error={errors.name?.message}
      >
        <input
          {...register("name")}
          placeholder={t("placeholderName")}
          className={inputClass}
        />
      </Field>

      <Field
        label={t("labelEmail")}
        icon={<Mail className={iconClass} strokeWidth={1.75} aria-hidden />}
        error={errors.email?.message}
      >
        <input
          type="email"
          {...register("email")}
          placeholder={t("placeholderEmail")}
          className={inputClass}
        />
      </Field>

      <Field
        label={t("labelPhone")}
        icon={<Phone className={iconClass} strokeWidth={1.75} aria-hidden />}
        error={errors.phone?.message}
      >
        <input
          type="tel"
          {...register("phone")}
          placeholder={t("placeholderPhone")}
          className={inputClass}
        />
      </Field>

      <Field
        label={t("labelMessage")}
        icon={
          <MessageSquare className={iconClass} strokeWidth={1.75} aria-hidden />
        }
        error={errors.message?.message}
      >
        <textarea
          {...register("message")}
          rows={4}
          placeholder={t("placeholderMessage")}
          className={`${inputClass} resize-none`}
        />
      </Field>

      {serverError && (
        <p className="rounded-md bg-red-50 px-4 py-2.5 text-sm text-red-600">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2.5 rounded-lg bg-primary py-3.5 text-[0.8rem] font-bold uppercase tracking-[0.14em] text-white transition-all hover:bg-primary/90 active:scale-[0.98] disabled:opacity-50"
      >
        <Send className="size-4" strokeWidth={2} aria-hidden />
        {t("submitButton")}
      </button>
    </form>
  );
}
