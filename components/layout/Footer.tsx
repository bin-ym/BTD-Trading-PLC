import Link from "next/link";
import { Sparkles, MapPin, Phone, Mail, Globe, Camera, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto grid gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="text-lg font-bold">BTD Trading PLC</span>
          </Link>
          <p className="text-sm leading-7 text-muted-foreground">
            Professional cleaning services for offices, commercial buildings,
            hospitals, and institutions across Ethiopia.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 font-semibold">Quick Links</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
            <Link href="/about" className="transition-colors hover:text-foreground">About</Link>
            <Link href="/services" className="transition-colors hover:text-foreground">Services</Link>
            <Link href="/gallery" className="transition-colors hover:text-foreground">Gallery</Link>
            <Link href="/contact" className="transition-colors hover:text-foreground">Contact</Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 font-semibold">Our Services</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <Link href="/services/office-cleaning" className="transition-colors hover:text-foreground">Office Cleaning</Link>
            <Link href="/services/building-cleaning" className="transition-colors hover:text-foreground">Building Cleaning</Link>
            <Link href="/services/commercial-cleaning" className="transition-colors hover:text-foreground">Commercial Cleaning</Link>
            <Link href="/services/hospital-cleaning" className="transition-colors hover:text-foreground">Hospital Cleaning</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 font-semibold">Contact Us</h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
              <span>Addis Ababa, Ethiopia</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0" />
              <span>+251 911 234 567</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0" />
              <span>info@btdtrading.com</span>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border hover:bg-primary hover:text-white hover:border-primary transition-colors" aria-label="Facebook">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border hover:bg-primary hover:text-white hover:border-primary transition-colors" aria-label="Twitter">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </a>
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border hover:bg-primary hover:text-white hover:border-primary transition-colors" aria-label="Instagram">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full border hover:bg-primary hover:text-white hover:border-primary transition-colors" aria-label="LinkedIn">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
          <span>© {new Date().getFullYear()} BTD Trading PLC. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/" className="transition-colors hover:text-foreground">Privacy Policy</Link>
            <Link href="/" className="transition-colors hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
