"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Building2,
  Store,
  Hospital,
  PartyPopper,
  CheckCircle2,
  Star,
  Sparkles,
  Shield,
  Clock,
  Heart,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import {
  AnimateInView,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/AnimateInView";
import { EquipmentInventory } from "@/components/shared/EquipmentInventory";
import { blurPlaceholder } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

type ServiceKey = "office" | "building" | "commercial" | "hospital" | "galas";

const serviceImages: Record<ServiceKey, string> = {
  building: "/images/work/work-11.jpg",
  galas: "/images/work/work-26.jpg",
  office: "/images/work/work-05.jpg",
  commercial: "/images/work/work-17.jpg",
  hospital: "/images/work/work-23.jpg",
};

const serviceMeta: Record<
  ServiceKey,
  { icon: typeof Briefcase; color: string }
> = {
  building: { icon: Building2, color: "bg-sky-500" },
  galas: { icon: PartyPopper, color: "bg-purple-500" },
  office: { icon: Briefcase, color: "bg-blue-500" },
  commercial: { icon: Store, color: "bg-indigo-500" },
  hospital: { icon: Hospital, color: "bg-teal-500" },
};

export function ServiceDetailContent({ slug }: { slug: ServiceKey }) {
  const { t } = useLanguage();

  const item = t.servicesPage.items[slug];
  const meta = serviceMeta[slug];
  const Icon = meta.icon;

  const benefits = t.serviceDetail.benefits[slug];

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
    <main className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />

        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <AnimateInView>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 text-sm font-medium text-foreground shadow-xs transition-all hover:bg-muted hover:shadow-md"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                {t.serviceDetail.backToServices}
              </Link>
            </AnimateInView>

            <AnimateInView delay={0.1}>
              <div
                className={`mx-auto mt-8 inline-flex h-20 w-20 items-center justify-center rounded-2xl ${meta.color} text-white shadow-lg`}
              >
                <Icon className="h-10 w-10" />
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight">
                {item.title}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                {item.short}
              </p>
            </AnimateInView>
          </div>
        </Container>
      </section>

      {/* Overview image card */}
      <section className="py-16 sm:py-20">
        <Container>
          <AnimateInView>
            <div className="relative overflow-hidden rounded-3xl border border-border/80 shadow-md">
              <div className="relative aspect-[16/9] sm:aspect-[21/9]">
                <Image
                  src={serviceImages[slug]}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  placeholder="blur"
                  blurDataURL={blurPlaceholder}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${meta.color} text-white shadow-lg`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                </div>
              </div>
              <div className="bg-card p-6 sm:p-8">
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {item.long}
                </p>
              </div>
            </div>
          </AnimateInView>
        </Container>
      </section>

      {/* What's Included */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <Container>
          <AnimateInView className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight">
              {t.serviceDetail.whatsIncluded}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {t.serviceDetail.whatsIncludedDesc}
            </p>
          </AnimateInView>

          <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2">
            {item.features.map((feature) => (
              <StaggerItem key={feature}>
                <div className="flex items-start gap-3 rounded-2xl border border-border/80 bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary/40">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm sm:text-base font-medium">{feature}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Key Benefits */}
      <section className="py-16 sm:py-24">
        <Container>
          <AnimateInView className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight">
              {t.serviceDetail.keyBenefits}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {t.serviceDetail.benefitsDesc}
            </p>
          </AnimateInView>

          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit}>
                <div className="h-full rounded-2xl border border-border/80 bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary/40">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Star className="h-6 w-6" />
                  </div>
                  <p className="mt-4 text-sm font-semibold">{benefit}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Equipment & Materials Inventory for this service */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <Container>
          <EquipmentInventory showTitle={true} />
        </Container>
      </section>

      {/* Feature highlights strip */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <Container className="relative">
          <StaggerContainer className="grid gap-6 rounded-3xl border border-border/80 bg-card p-6 sm:p-8 sm:grid-cols-2 lg:grid-cols-4 shadow-sm">
            {features.map((feature) => {
              const FeatureIcon = feature.icon;
              return (
                <StaggerItem key={feature.title}>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <FeatureIcon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-foreground">{feature.title}</h3>
                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <Container>
          <AnimateInView>
            <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center md:px-12 shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-1 flex">
                <div className="flex-1 bg-[var(--ethiopian-green)]" />
                <div className="flex-1 bg-[var(--ethiopian-yellow)]" />
                <div className="flex-1 bg-[var(--ethiopian-red)]" />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-extrabold text-white md:text-4xl">
                  {t.serviceDetail.ctaTitle}
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/90 leading-relaxed">
                  {t.serviceDetail.ctaDesc}
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-primary shadow-lg transition-all hover:bg-white/90 hover:scale-105"
                  >
                    {t.serviceDetail.requestQuote}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 font-bold text-white transition-all hover:bg-white/10"
                  >
                    {t.serviceDetail.backToServices}
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
