"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactForm() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl sm:rounded-3xl border bg-card p-5 sm:p-8 shadow-lg">
        <div className="flex min-h-[350px] sm:min-h-[400px] flex-col items-center justify-center text-center p-4">
          <div className="mx-auto mb-5 sm:mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-8 w-8 sm:h-10 sm:w-10 text-green-600" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">{t.contact.messageSent}</h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground max-w-md">
            {t.contact.thankYou}
          </p>
          <Link
            href="/"
            className="mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <span>{t.contact.backHome}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl sm:rounded-3xl border bg-card p-5 sm:p-8 shadow-lg">
      <h2 className="text-xl sm:text-2xl font-bold tracking-tight">{t.contact.sendMessage}</h2>
      <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground">
        {t.contact.formDesc}
      </p>

      <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-medium"
            >
              {t.contact.fullName} *
            </label>
            <input
              id="name"
              type="text"
              required
              value={formState.name}
              onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              }
              className="w-full rounded-xl border bg-background px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-medium"
            >
              {t.contact.emailAddress} *
            </label>
            <input
              id="email"
              type="email"
              required
              value={formState.email}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
              className="w-full rounded-xl border bg-background px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2">
          <div>
            <label
              htmlFor="phone"
              className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-medium"
            >
              {t.contact.phoneNumber}
            </label>
            <input
              id="phone"
              type="tel"
              value={formState.phone}
              onChange={(e) =>
                setFormState({ ...formState, phone: e.target.value })
              }
              className="w-full rounded-xl border bg-background px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="+251 XXX XXX XXX"
            />
          </div>
          <div>
            <label
              htmlFor="service"
              className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-medium"
            >
              {t.contact.serviceInterested}
            </label>
            <select
              id="service"
              value={formState.service}
              onChange={(e) =>
                setFormState({ ...formState, service: e.target.value })
              }
              className="w-full rounded-xl border bg-background px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="">{t.contact.selectService}</option>
              <option value="office">{t.services.office}</option>
              <option value="building">{t.services.building}</option>
              <option value="commercial">{t.services.commercial}</option>
              <option value="hospital">{t.services.hospital}</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-medium"
          >
            {t.contact.message} *
          </label>
          <textarea
            id="message"
            required
            rows={4}
            value={formState.message}
            onChange={(e) =>
              setFormState({ ...formState, message: e.target.value })
            }
            className="w-full rounded-xl border bg-background px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder={t.contact.messagePlaceholder}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50 cursor-pointer shadow-md"
        >
          {isSubmitting ? (
            <>
              <svg
                className="h-5 w-5 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>{t.contact.sending}</span>
            </>
          ) : (
            <>
              <span>{t.contact.send}</span>
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
