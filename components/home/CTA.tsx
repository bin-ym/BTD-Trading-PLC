"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-12 sm:py-20 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
      {/* Subtle Ethiopian flag accent at top */}
      <div className="absolute top-0 left-0 right-0 h-1 flex">
        <div className="flex-1 bg-[var(--ethiopian-green)]" />
        <div className="flex-1 bg-[var(--ethiopian-yellow)]" />
        <div className="flex-1 bg-[var(--ethiopian-red)]" />
      </div>

      {/* Animated decorative elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none"
      />

      <div className="container relative mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 sm:mb-6 flex flex-col items-center justify-center gap-3">
            <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-1.5 shadow-lg">
              <Image
                src="/images/logo.png"
                alt="BTD Trading PLC Logo"
                width={56}
                height={56}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-white/80" />
              <span className="text-xs sm:text-sm font-medium text-white/90">
                {t.cta.badge}
              </span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            {t.cta.title}
          </h2>

          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
            {t.cta.description}
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-primary transition-all hover:shadow-xl hover:shadow-white/25 hover:scale-105"
            >
              <span>{t.cta.getQuote}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border-2 border-white/30 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              <span>{t.cta.ourServices}</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
