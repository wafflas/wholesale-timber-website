"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: Phone,
    label: "Τηλέφωνο",
    value: "6932 262 910",
    value2: "210 800 0365",
    href: "tel:+306932262910",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@bestply.gr",
    href: "mailto:info@bestply.gr",
  },
  {
    icon: MapPin,
    label: "Διεύθυνση",
    value: "Φιλαδελφείας 7",
    value2: "Νέα Ερυθραία, Αθήνα",
  },
  {
    icon: Clock,
    label: "Ωράριο",
    value: "Δευτέρα - Παρασκευή",
    value2: "9:00 πμ - 5:00 μμ",
  },
];

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useGSAP(
    () => {
      gsap.from(".contact-card", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2,
      });
      gsap.from(".contact-form", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5,
      });
    },
    { scope: pageRef },
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    alert("Το μήνυμά σας στάλθηκε επιτυχώς!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div ref={pageRef} className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold tracking-wider text-[#AC8D5B] uppercase mb-4 font-[family-name:var(--font-heading)]">
            Επικοινωνία
          </span>
          <h1 className="text-3xl font-bold text-[#333333] md:text-4xl lg:text-5xl font-[family-name:var(--font-heading)]">
            Επικοινωνήστε μαζί μας
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#333333]/60">
            Είμαστε στη διάθεσή σας για οποιαδήποτε πληροφορία ή προσφορά.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="contact-card group rounded-2xl bg-[#F9F9F9] p-6 border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-[#AC8D5B]/20"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#AC8D5B]/10 text-[#AC8D5B] transition-colors group-hover:bg-[#AC8D5B] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-sm font-semibold text-[#333333]/50 uppercase tracking-wider font-[family-name:var(--font-heading)]">
                      {item.label}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 block text-base font-semibold text-[#333333] hover:text-[#AC8D5B] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-base font-semibold text-[#333333]">
                        {item.value}
                      </p>
                    )}
                    {item.value2 && (
                      <p className="text-sm text-[#333333]/60">{item.value2}</p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <div className="contact-card overflow-hidden rounded-2xl border border-gray-100 bg-[#F9F9F9] h-64 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.8!2d23.82!3d38.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDA0JzQ4LjAiTiAyM8KwNDknMTIuMCJF!5e0!3m2!1sel!2sgr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BEST PLY I.K.E. Location"
                className="rounded-2xl"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white border border-gray-100 shadow-sm p-8 md:p-10"
            >
              <h2 className="text-2xl font-bold text-[#333333] mb-8 font-[family-name:var(--font-heading)]">
                Στείλτε μας μήνυμα
              </h2>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="flex items-center gap-2 text-sm font-semibold text-[#333333] mb-2"
                  >
                    <User className="h-4 w-4 text-[#AC8D5B]" />
                    Ονοματεπώνυμο
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-lg border border-gray-200 bg-[#F9F9F9] px-4 py-3 text-sm text-[#333333] outline-none transition-all focus:border-[#AC8D5B] focus:ring-2 focus:ring-[#AC8D5B]/20 placeholder:text-[#333333]/30"
                    placeholder="Εισάγετε το ονοματεπώνυμό σας"
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="flex items-center gap-2 text-sm font-semibold text-[#333333] mb-2"
                    >
                      <Mail className="h-4 w-4 text-[#AC8D5B]" />
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-lg border border-gray-200 bg-[#F9F9F9] px-4 py-3 text-sm text-[#333333] outline-none transition-all focus:border-[#AC8D5B] focus:ring-2 focus:ring-[#AC8D5B]/20 placeholder:text-[#333333]/30"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="flex items-center gap-2 text-sm font-semibold text-[#333333] mb-2"
                    >
                      <Phone className="h-4 w-4 text-[#AC8D5B]" />
                      Τηλέφωνο
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-lg border border-gray-200 bg-[#F9F9F9] px-4 py-3 text-sm text-[#333333] outline-none transition-all focus:border-[#AC8D5B] focus:ring-2 focus:ring-[#AC8D5B]/20 placeholder:text-[#333333]/30"
                      placeholder="69xx xxx xxxx"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="flex items-center gap-2 text-sm font-semibold text-[#333333] mb-2"
                  >
                    <MessageSquare className="h-4 w-4 text-[#AC8D5B]" />
                    Μήνυμα
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full rounded-lg border border-gray-200 bg-[#F9F9F9] px-4 py-3 text-sm text-[#333333] outline-none transition-all focus:border-[#AC8D5B] focus:ring-2 focus:ring-[#AC8D5B]/20 placeholder:text-[#333333]/30 resize-none"
                    placeholder="Περιγράψτε το αίτημά σας..."
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#AC8D5B] py-4 text-sm font-bold tracking-wider text-white uppercase transition-all duration-300 hover:bg-[#9a7c4e] hover:shadow-lg hover:shadow-[#AC8D5B]/25 font-[family-name:var(--font-heading)]"
                >
                  <Send className="h-4 w-4" />
                  Αποστολή Μηνύματος
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
