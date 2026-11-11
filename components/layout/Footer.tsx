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
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/services", label: "services" },
  { href: "/gallery", label: "gallery" },
  { href: "/contact", label: "contact" },
];

const services = [
  { href: "/services/office-cleaning", label: "Office Cleaning" },
  { href: "/services/building-cleaning", label: "Building Cleaning" },
  { href: "/services/commercial-cleaning", label: "Commercial Cleaning" },
  { href: "/services/hospital-cleaning", label: "Hospital Cleaning" },
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
      <div className="container mx-auto grid gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link
            href="/"
            className="mb-4 flex items-center gap-2"
          >
            <Image
              src="/images/logo.png"
              alt="BTD Trading PLC Logo"
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg object-contain"
            />

            <span className="text-lg font-bold">
              BTD Trading PLC
            </span>
          </Link>

          <p className="text-sm leading-7 text-muted-foreground">
            Professional cleaning & trading services for offices,
            commercial buildings, hospitals, and institutions in
            Addis Ababa, Ethiopia.
          </p>

          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
            aria-label="View BTD Trading PLC location on Google Maps"
          >
            <MapPin className="h-3 w-3 shrink-0" />
            <span>Megenagna, Amecha - Addis Ababa</span>
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 font-semibold">
            {t.footer.quickLinks}
          </h4>

          <nav className="flex flex-col gap-3 text-sm text-muted-foreground">
            {quickLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="transition-colors hover:text-foreground"
              >
                {t.nav[label as keyof typeof t.nav]}
              </Link>
            ))}
          </nav>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 font-semibold">
            Our Services
          </h4>

          <nav className="flex flex-col gap-3 text-sm text-muted-foreground">
            {services.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 font-semibold">
            {t.footer.contact}
          </h4>

          <div className="space-y-4 text-sm text-muted-foreground">

            {/* Address */}
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 transition-colors hover:text-primary"
              aria-label="View BTD Trading PLC address on Google Maps"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />

              <span>
                Addis Ababa, Ethiopia / Megenagna / Amecha
              </span>
            </a>

            {/* Phone Numbers */}
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />

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
              className="flex items-center gap-3 transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4 shrink-0" />

              <span>{t.contact.emailValue}</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-5 flex gap-3">
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
      <div className="border-t py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
          <span>
            © {new Date().getFullYear()} BTD Trading PLC.{" "}
            {t.footer.rights}
          </span>

          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
