"use client";

import Link from "next/link";
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
    <main className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1 flex">
          <div className="flex-1 bg-[var(--ethiopian-green)]" />
          <div className="flex-1 bg-[var(--ethiopian-yellow)]" />
          <div className="flex-1 bg-[var(--ethiopian-red)]" />
        </div>

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              {page.badge}
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              {page.title}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {page.lastUpdated}: {page.updatedDate}
            </p>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              {page.intro}
            </p>
          </div>
        </Container>
      </section>

      {/* Sections */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            {page.sections.map((section, index) => (
              <div
                key={section.heading}
                className="rounded-2xl border bg-card p-6 sm:p-8 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold">
                      {section.heading}
                    </h2>
                    <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {section.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Cross-link to the other policy */}
            <Link
              href={otherHref}
              className="group flex items-center justify-between rounded-2xl border bg-muted/30 p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <p className="text-sm text-muted-foreground">
                  {kind === "privacy" ? t.nav.contact : t.nav.about}
                </p>
                <p className="mt-1 font-semibold text-primary">
                  {otherPage.title}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
