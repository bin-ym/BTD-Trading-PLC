"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type LegalPageKind = "privacy" | "terms";

export function LegalPage({ kind }: { kind: LegalPageKind }) {
  const { t } = useLanguage();

  const page = kind === "privacy" ? t.privacyPage : t.termsPage;
  const otherKind: LegalPageKind = kind === "privacy" ? "terms" : "privacy";
  const otherPage = kind === "privacy" ? t.termsPage : t.privacyPage;
  const otherHref = kind === "privacy" ? "/terms" : "/privacy";

  return (
    <main className="pt-16 sm:pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 py-12 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-1 flex">
          <div className="flex-1 bg-[var(--ethiopian-green)]" />
          <div className="flex-1 bg-[var(--ethiopian-yellow)]" />
          <div className="flex-1 bg-[var(--ethiopian-red)]" />
        </div>

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            {/* Brand Emblem */}
            <div className="mx-auto mb-3.5 inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-background/80 px-3.5 py-1.5 shadow-xs backdrop-blur-md">
              <div className="relative flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-0.5 shadow-inner">
                <Image
                  src="/images/logo.png"
                  alt="BTD Trading PLC Logo"
                  width={28}
                  height={28}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-tight text-foreground">
                BTD Trading PLC
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-[11px] sm:text-xs text-muted-foreground">
                {page.badge}
              </span>
            </div>

            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {page.title}
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              {page.lastUpdated}: {page.updatedDate}
            </p>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              {page.intro}
            </p>
          </div>
        </Container>
      </section>

      {/* Sections */}
      <section className="py-10 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-4 sm:space-y-6">
            {page.sections.map((section, index) => (
              <div
                key={section.heading}
                className="rounded-xl sm:rounded-2xl border bg-card p-4 sm:p-7 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <span className="mt-0.5 flex h-7 w-7 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs sm:text-sm font-bold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h2 className="text-base sm:text-xl font-semibold">
                      {section.heading}
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground">
                      {section.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Cross-link to the other policy */}
            <Link
              href={otherHref}
              className="group flex items-center justify-between rounded-xl sm:rounded-2xl border bg-muted/30 p-4 sm:p-6 transition-all hover:-translate-y-1 hover:shadow-lg mt-6"
            >
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {kind === "privacy" ? t.nav.contact : t.nav.about}
                </p>
                <p className="mt-0.5 sm:mt-1 font-semibold text-sm sm:text-base text-primary">
                  {otherPage.title}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
