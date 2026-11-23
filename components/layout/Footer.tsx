"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const MAP_URL = "https://www.google.com/maps?q=9.016333,38.805167";

const phoneNumbers = [
  "+251 928-57-12-96",
  "+251 939-00-87-72",
  "+251 904-35-17-31",
];

const quickLinks = [
  { href: "/", label: "home" as const },
  { href: "/about", label: "about" as const },
  { href: "/services", label: "services" as const },
  { href: "/gallery", label: "gallery" as const },
  { href: "/contact", label: "contact" as const },
];

const serviceLinks = [
  { href: "/services/office-cleaning", key: "office" as const },
  { href: "/services/building-cleaning", key: "building" as const },
  { href: "/services/commercial-cleaning", key: "commercial" as const },
  { href: "/services/hospital-cleaning", key: "hospital" as const },
];

const socialLinks = [
  {
    href: "#",
    label: "Facebook",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "Twitter",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "Instagram",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "LinkedIn",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const phoneHref = (phone: string) =>
  `tel:${phone.replace(/[^0-9+]/g, "")}`;

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t bg-muted/40 ethiopian-glow">
      <div className="container mx-auto grid gap-8 sm:gap-10 px-4 sm:px-6 py-12 sm:py-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link
            href="/"
            className="mb-4 flex items-center gap-2.5 sm:gap-3"
          >
            <Image
              src="/images/logo.png"
              alt="BTD Trading PLC Logo"
              width={36}
              height={36}
              className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg object-contain"
            />

            <span className="text-base sm:text-lg font-bold tracking-tight">
              BTD Trading PLC
            </span>
          </Link>

          <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
            {t.footer.description}
          </p>

          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3.5 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
            aria-label="View BTD Trading PLC location on Google Maps"
          >
            <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
            <span className="truncate">{t.footer.address}</span>
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold text-foreground">
            {t.footer.quickLinks}
          </h4>

          <nav className="flex flex-col gap-2.5 text-xs sm:text-sm text-muted-foreground">
            {quickLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="transition-colors hover:text-foreground py-0.5"
              >
                {t.nav[label]}
              </Link>
            ))}
          </nav>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold text-foreground">
            {t.footer.ourServices}
          </h4>

          <nav className="flex flex-col gap-2.5 text-xs sm:text-sm text-muted-foreground">
            {serviceLinks.map(({ href, key }) => (
              <Link
                key={href}
                href={href}
                className="transition-colors hover:text-foreground py-0.5"
              >
                {t.services[key]}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold text-foreground">
            {t.footer.contact}
          </h4>

          <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-muted-foreground">
            {/* Address */}
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 transition-colors hover:text-primary"
              aria-label="View BTD Trading PLC address on Google Maps"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{t.footer.address}</span>
            </a>

            {/* Phone Numbers */}
            <div className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <div className="flex flex-col gap-1">
                {phoneNumbers.map((phone) => (
                  <a
                    key={phone}
                    href={phoneHref(phone)}
                    className="transition-colors hover:text-primary"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            {/* Email */}
            <a
              href={`mailto:${t.contact.emailValue}`}
              className="flex items-center gap-2.5 transition-colors hover:text-primary break-all"
            >
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              <span>{t.contact.emailValue}</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-4 sm:mt-5 flex gap-2.5">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full border transition-colors hover:border-primary hover:bg-primary hover:text-white"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-5 sm:py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 sm:px-6 text-center text-xs sm:text-sm text-muted-foreground sm:flex-row sm:text-left">
          <span>
            © {new Date().getFullYear()} BTD Trading PLC. {t.footer.rights}
          </span>

          <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm">
            <Link
              href="/privacy"
              className="transition-colors hover:text-foreground"
            >
              {t.footer.privacyPolicy}
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-foreground"
            >
              {t.footer.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
