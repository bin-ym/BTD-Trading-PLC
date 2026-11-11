"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Hospital,
  Store,
  Briefcase,
  PartyPopper,
  Sparkles,
  Shield,
  Clock,
  Heart,
  ArrowRight,
  Disc,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { blurPlaceholder } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

const serviceImages = [
  "/images/work/work-05.jpg",
  "/images/work/work-11.jpg",
  "/images/work/work-26.jpg",
  "/images/work/work-17.jpg",
  "/images/work/work-23.jpg",
];

export function Services() {
  const { t, language } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const services = [
    {
      title: t.services.building,
      subtitle: t.services.buildingSubtitle,
      description: t.services.buildingDesc,
      icon: Building2,
      color: "bg-sky-500",
      badge: language === "am" ? "የማብሪያ አጨራረስ" : "Polished Finishes",
      badgeIcon: Disc,
      href: "/services/building-cleaning",
    },
    {
      title: t.services.galas,
      subtitle: t.services.galasSubtitle,
      description: t.services.galasDesc,
      icon: PartyPopper,
      color: "bg-purple-500",
      badge: language === "am" ? "የዝግጅት ድጋፍ" : "Galas & Events",
      badgeIcon: Sparkles,
      href: "/services/service-galas-support",
    },
    {
      title: t.services.office,
      subtitle: language === "am" ? "የስራ ቦታዎች" : "Corporate Workspaces",
      description: t.services.officeDesc,
      icon: Briefcase,
      color: "bg-blue-500",
      badge: language === "am" ? "ዕለታዊ እና ሳምንታዊ" : "Daily & Weekly",
      badgeIcon: Clock,
      href: "/services/office-cleaning",
    },
    {
      title: t.services.commercial,
      subtitle: language === "am" ? "የንግድ ማዕከላት" : "Malls & Facilities",
      description: t.services.commercialDesc,
      icon: Store,
      color: "bg-indigo-500",
      badge: language === "am" ? "ከፍተኛ እንቅስቃሴ" : "High-Traffic",
      badgeIcon: Building2,
      href: "/services/commercial-cleaning",
    },
    {
      title: t.services.hospital,
      subtitle: language === "am" ? "የህክምና ደረጃ" : "Healthcare Standard",
      description: t.services.hospitalDesc,
      icon: Hospital,
      color: "bg-teal-500",
      badge: language === "am" ? "የጸዳ አካባቢ" : "Disinfection",
      badgeIcon: Shield,
      href: "/services/hospital-cleaning",
    },
  ];

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
    <section
      ref={sectionRef}
      id="services"
      className="relative overflow-hidden bg-muted/30 py-16 sm:py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            {t.services.badge}
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            {t.services.description}
          </p>
        </motion.div>

        {/* Services Grid with 5 core service offerings */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const BadgeIcon = service.badgeIcon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className={index === 0 || index === 1 ? "lg:col-span-1" : ""}
              >
                <Link
                  href={service.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 ${
                    hoveredIndex === index
                      ? "border-primary/40 ring-2 ring-primary/20"
                      : ""
                  }`}
                >
                  <div>
                    {/* Service Image with overlay and badge */}
                    <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-xl">
                      <Image
                        src={serviceImages[index] || serviceImages[0]}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        placeholder="blur"
                        blurDataURL={blurPlaceholder}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Top Service Badge */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-bold text-foreground shadow-md backdrop-blur-md">
                        <BadgeIcon className="h-3 w-3 text-primary" />
                        <span>{service.badge}</span>
                      </div>

                      {/* Icon overlay */}
                      <div
                        className={`absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-xl ${service.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold transition-colors group-hover:text-primary">
                        {service.title}
                      </h3>
                    </div>

                    {service.subtitle && (
                      <p className="mt-1 text-xs font-semibold text-primary">
                        {service.subtitle}
                      </p>
                    )}

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:translate-x-1">
                    <span>{t.services.learnMore}</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Highlights Strip */}
        <div className="mt-16 sm:mt-20 grid gap-6 rounded-3xl border border-border/80 bg-card p-6 sm:p-8 sm:grid-cols-2 lg:grid-cols-4 shadow-sm">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-foreground">{feature.title}</h4>
                <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
