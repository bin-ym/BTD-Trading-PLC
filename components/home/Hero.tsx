"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Users,
  Clock,
  FileCheck,
  UserCheck,
  Building2,
  PartyPopper,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { blurPlaceholder } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const coreStats = [
    {
      value: t.hero.statExperienceValue,
      label: t.hero.statExperienceLabel,
      sublabel: language === "am" ? "የተግባር ልምድ" : "Hands-On Experience",
      icon: Clock,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      value: t.hero.statTeamValue,
      label: t.hero.statTeamLabel,
      sublabel: language === "am" ? "የሰለጠኑ ባለሙያዎች" : "Full-Time Staff",
      icon: Users,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      value: t.hero.statContractValue,
      label: t.hero.statContractLabel,
      sublabel: language === "am" ? "1-3+ ዓመት / አጭር ጊዜ" : "Short & Long-Term",
      icon: FileCheck,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      value: t.hero.statLeadershipValue,
      label: t.hero.statLeadershipLabel,
      sublabel: language === "am" ? "የቡድን አመራር" : "Managing On-Site Teams",
      icon: UserCheck,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
  ];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background image with overlays */}
      <Image
        src="/images/work/work-08.jpg"
        alt="BTD Trading PLC - Professional cleaning service in Addis Ababa"
        fill
        className="object-cover"
        priority
        sizes="100vw"
        placeholder="blur"
        blurDataURL={blurPlaceholder}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-background/75 to-background/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/25 via-transparent to-transparent" />

      {/* Animated decorative elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-primary/30 blur-3xl pointer-events-none"
      />

      <div className="container relative mx-auto px-6 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Hero Branding: Logo & Workers Info Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-8 flex flex-col items-center justify-center gap-3"
          >
            {/* Logo + Company Identity Badge */}
            <div className="group flex items-center gap-3 rounded-full border border-primary/20 bg-background/80 px-4 py-2 shadow-sm backdrop-blur-md transition-all hover:border-primary/40">
              <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-1 shadow-inner">
                <Image
                  src="/images/logo.png"
                  alt="BTD Trading PLC Logo"
                  width={36}
                  height={36}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold tracking-tight text-foreground sm:text-sm">
                    BTD Trading PLC
                  </span>
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                </div>
                <p className="text-[10px] text-muted-foreground">
                  {language === "am"
                    ? "ቢቲዲ ትሬዲንግ ኃ.የተ. የግል. ማህበር"
                    : "Professional Cleaning & Facility Support"}
                </p>
              </div>
            </div>

            {/* Workers Info & Location Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-medium text-primary">
                <Users className="h-3.5 w-3.5" />
                <span>{t.hero.workersBadge}</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--ethiopian-green)]" />
                <span>🇪🇹 Addis Ababa (Megenagna / Amecha)</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--ethiopian-red)]" />
              </div>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {t.hero.title}{" "}
            <span className="bg-gradient-to-r from-primary via-sky-500 to-primary bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {t.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 sm:px-8 sm:py-4 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:scale-105"
            >
              {t.hero.getQuote}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-background/60 px-7 py-3.5 sm:px-8 sm:py-4 font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10"
            >
              {t.hero.ourServices}
            </Link>
          </motion.div>

          {/* Key Service Highlights Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-2.5 text-xs font-medium"
          >
            <span className="text-muted-foreground">
              {language === "am" ? "ቁልፍ አገልግሎቶች፦" : "Key Focus:"}
            </span>
            <Link
              href="/services/building-cleaning"
              className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-sky-600 dark:text-sky-400 transition-colors hover:bg-sky-500/20"
            >
              <Building2 className="h-3 w-3" />
              <span>
                {language === "am"
                  ? "የህንጻ ጽዳት (ከማብሪያ አጨራረስ ጋር)"
                  : "Building Cleanup (Polished Finishes)"}
              </span>
            </Link>
            <Link
              href="/services/service-galas-support"
              className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-purple-600 dark:text-purple-400 transition-colors hover:bg-purple-500/20"
            >
              <PartyPopper className="h-3 w-3" />
              <span>
                {language === "am"
                  ? "የድግስ እና የክብረ በዓላት ድጋፍ"
                  : "Service & Galas Support"}
              </span>
            </Link>
          </motion.div>

          {/* Unified Core Statistics Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="mt-10 sm:mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4"
          >
            {coreStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative flex flex-col items-center justify-center rounded-2xl border border-border/80 bg-background/80 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                >
                  <div
                    className={`mb-2.5 flex h-10 w-10 items-center justify-center rounded-xl ${stat.bg} ${stat.color} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold text-foreground/90 text-center">
                    {stat.label}
                  </span>
                  <span className="text-[10px] text-muted-foreground text-center">
                    {stat.sublabel}
                  </span>
                </div>
              );
            })}
          </motion.div>

          {/* Trust indicators footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.95, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-emerald-500"
              />
              <span>{t.hero.available}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-foreground">35+</span>
              <span>{t.hero.projects}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-foreground">98%</span>
              <span>{t.hero.satisfaction}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 1.3 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-9 w-5 rounded-full border-2 border-primary/30 flex justify-center pt-1.5"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
