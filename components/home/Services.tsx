"use client";

import { useRef, useState } from "react";
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
  Disc,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { blurPlaceholder } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

const serviceImages = [
  "/images/work/work-05.jpg",
  "/images/work/work-11.jpg",
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
      className="relative overflow-hidden bg-muted/30 py-12 sm:py-20 md:py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-primary">
            {t.services.badge}
          </span>
          <h2 className="mt-4 sm:mt-6 text-2xl font-bold tracking-tight sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            {t.services.description}
          </p>
        </motion.div>

        {/* Services Grid with 4 core service offerings */}
        <div className="mt-10 sm:mt-14 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const BadgeIcon = service.badgeIcon;
            return (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.6 }}
              >
                <Link
                  href={service.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-4 sm:p-5 lg:p-6 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 ${
                    hoveredIndex === index
                      ? "border-primary/40 ring-2 ring-primary/20"
                      : ""
                  }`}
                >
                  <div>
                    {/* Service Image with overlay and badge */}
                    <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-xl">
                      <Image
                        src={serviceImages[index] || serviceImages[0]}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        placeholder="blur"
                        blurDataURL={blurPlaceholder}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Top Service Badge */}
                      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 rounded-full bg-background/90 px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-bold text-foreground shadow-md backdrop-blur-md">
                        <BadgeIcon className="h-3 w-3 text-primary" />
                        <span className="truncate max-w-[130px] sm:max-w-none">{service.badge}</span>
                      </div>

                      {/* Icon overlay */}
                      <div
                        className={`absolute bottom-2.5 right-2.5 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl ${service.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold transition-colors group-hover:text-primary">
                        {service.title}
                      </h3>
                    </div>

                    {service.subtitle && (
                      <p className="mt-1 text-xs font-semibold text-primary">
                        {service.subtitle}
                      </p>
                    )}

                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary transition-all group-hover:translate-x-1">
                    <span>{t.services.learnMore}</span>
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Highlights Strip */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid gap-4 sm:gap-6 rounded-2xl sm:rounded-3xl border border-border/80 bg-card p-4 sm:p-6 lg:p-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 shadow-sm">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="text-center p-2 sm:p-0"
              >
                <div className="mx-auto mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h4 className="font-bold text-sm sm:text-base text-foreground">{feature.title}</h4>
                <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-muted-foreground">
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
