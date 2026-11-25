"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Hospital,
  Store,
  Briefcase,
  Sparkles,
  Shield,
  Clock,
  Heart,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/shared/Container";
import {
  AnimateInView,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/AnimateInView";
import { EquipmentInventory } from "@/components/shared/EquipmentInventory";
import { blurPlaceholder } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

const serviceImages = [
  "/images/work/work-11.jpg",
  "/images/work/work-05.jpg",
  "/images/work/work-17.jpg",
  "/images/work/work-23.jpg",
];

const serviceMeta = [
  {
    slug: "building-cleaning",
    key: "building" as const,
    icon: Building2,
    color: "bg-sky-500",
  },
  {
    slug: "office-cleaning",
    key: "office" as const,
    icon: Briefcase,
    color: "bg-blue-500",
  },
  {
    slug: "commercial-cleaning",
    key: "commercial" as const,
    icon: Store,
    color: "bg-indigo-500",
  },
  {
    slug: "hospital-cleaning",
    key: "hospital" as const,
    icon: Hospital,
    color: "bg-teal-500",
  },
];

export function ServicesContent() {
  const { t, language } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = serviceMeta.map((meta, index) => ({
    ...meta,
    title: t.servicesPage.items[meta.key].title,
    description: t.servicesPage.items[meta.key].short,
    features: t.servicesPage.items[meta.key].features,
    image: serviceImages[index],
  }));

  const features = [
    {
      icon: Sparkles,
      title: t.services.feature1Title,
      description: t.services.feature1Desc,
    },
    {
      icon: Shield,
      title: t.services.feature2Title,
      description: t.services.feature2Desc,
    },
    {
      icon: Clock,
      title: t.services.feature3Title,
      description: t.services.feature3Desc,
    },
    {
      icon: Heart,
      title: t.services.feature4Title,
      description: t.services.feature4Desc,
    },
  ];

  return (
    <main className="pt-16 sm:pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 py-12 sm:py-20 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />

        <Container>
          <AnimateInView className="mx-auto max-w-3xl text-center">
            {/* Official Brand Identity Emblem */}
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
                {t.servicesPage.badge}
              </span>
            </div>

            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              {t.servicesPage.title}
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              {t.servicesPage.subtitle}
            </p>
          </AnimateInView>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="relative overflow-hidden bg-muted/30 py-12 sm:py-20 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

        <Container className="relative">
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-4 sm:p-5 lg:p-6 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 ${
                      hoveredIndex === index
                        ? "border-primary/40 ring-2 ring-primary/20"
                        : ""
                    }`}
                  >
                    <div>
                      {/* Service Image */}
                      <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-xl">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          placeholder="blur"
                          blurDataURL={blurPlaceholder}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                        {/* Icon overlay */}
                        <div
                          className={`absolute bottom-2.5 right-2.5 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl ${service.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                        >
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                      </div>

                      <h2 className="text-lg sm:text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                        {service.title}
                      </h2>

                      <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center gap-1 text-xs sm:text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
                      <span>{t.servicesPage.learnMore}</span>
                      <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </div>

          {/* Feature highlights strip */}
          <StaggerContainer className="mt-12 sm:mt-16 md:mt-20 grid gap-4 sm:gap-6 rounded-2xl sm:rounded-3xl border border-border/80 bg-card p-4 sm:p-6 lg:p-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 shadow-sm">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <StaggerItem key={feature.title}>
                  <div className="text-center p-2 sm:p-0">
                    <div className="mx-auto mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-foreground">{feature.title}</h3>
                    <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* Equipment & Materials Inventory Section */}
      <section className="py-12 sm:py-20 md:py-24">
        <Container>
          <EquipmentInventory showTitle={true} />
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 py-12 sm:py-20 md:py-24">
        <Container>
          <AnimateInView className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              {t.servicesPage.whyTitle}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground">
              {t.servicesPage.whySubtitle}
            </p>
          </AnimateInView>

          <StaggerContainer className="mt-10 sm:mt-12 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={service.slug}>
                  <div className="h-full rounded-2xl border border-border/80 bg-card p-5 sm:p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <h3 className="mt-3.5 sm:mt-4 text-base sm:text-lg font-bold text-foreground">{service.title}</h3>
                    <ul className="mt-3 space-y-2">
                      {service.features.slice(0, 4).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20 md:py-24">
        <Container>
          <AnimateInView>
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-primary px-5 py-12 sm:px-8 sm:py-16 md:px-12 text-center shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-1 flex">
                <div className="flex-1 bg-[var(--ethiopian-green)]" />
                <div className="flex-1 bg-[var(--ethiopian-yellow)]" />
                <div className="flex-1 bg-[var(--ethiopian-red)]" />
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                  {t.servicesPage.ctaTitle}
                </h2>
                <p className="mx-auto mt-3 sm:mt-4 max-w-xl text-sm sm:text-base text-primary-foreground/90 leading-relaxed">
                  {t.servicesPage.ctaText}
                </p>
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full sm:w-auto">
                  <Link
                    href="/contact"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-primary shadow-lg transition-all hover:bg-white/90 hover:scale-105"
                  >
                    <span>{t.servicesPage.getQuote}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border-2 border-white/40 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white transition-all hover:bg-white/10"
                  >
                    <span>{t.servicesPage.contactUs}</span>
                  </Link>
                </div>
              </div>

              <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
            </div>
          </AnimateInView>
        </Container>
      </section>
    </main>
  );
}
