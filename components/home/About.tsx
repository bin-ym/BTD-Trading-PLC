"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, ShieldCheck, Users } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { blurPlaceholder } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export function About() {
  const { t, language } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const stats = [
    { value: language === "am" ? "2 ዓመት" : "2 years", label: t.about.years },
    { value: "40+", label: t.about.team },
    { value: t.about.contractsVal, label: t.about.contracts },
    { value: t.about.leadershipVal, label: t.about.leadership },
  ];

  const benefits = [
    t.about.benefit1,
    t.about.benefit2,
    t.about.benefit3,
    t.about.benefit4,
  ];

  return (
    <section ref={sectionRef} id="about" className="relative py-12 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl">
              <Image
                src="/images/work/work-14.jpg"
                alt="BTD Trading PLC - Professional cleaning team at work in Addis Ababa"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={blurPlaceholder}
              />

              {/* Floating Leadership & Workers Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 max-w-[92%] sm:max-w-none rounded-xl sm:rounded-2xl border border-border/80 bg-background/95 p-3 sm:p-4 shadow-xl backdrop-blur-md"
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="text-xs sm:text-sm font-bold text-foreground truncate">
                        {language === "am"
                          ? "40+ ቁርጠኛ ሠራተኞች"
                          : "40+ Dedicated Staff"}
                      </p>
                      <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-primary" />
                    </div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground truncate">
                      {language === "am"
                        ? "በቦታው የሚገኙ የፈረቃ መሪዎች"
                        : "Led by On-Site Shift Leaders"}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className="inline-block rounded-full bg-primary/10 px-3.5 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium text-primary">
              {t.about.badge}
            </span>

            <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              {t.about.title}
            </h2>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              {t.about.description}
            </p>

            {/* Core Stats Grid */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-2.5 sm:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="rounded-xl border border-border/70 bg-card p-3 sm:p-4 shadow-xs transition-colors hover:border-primary/40"
                >
                  <motion.p
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      delay: 0.45 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="text-lg sm:text-2xl font-extrabold text-primary"
                  >
                    {stat.value}
                  </motion.p>
                  <p className="mt-0.5 text-[11px] sm:text-sm font-medium text-muted-foreground truncate">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Benefits list */}
            <motion.ul
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="mt-6 sm:mt-8 space-y-2.5 sm:space-y-3"
            >
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="flex items-start sm:items-center gap-2.5 sm:gap-3 text-xs sm:text-base font-medium"
                >
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-primary mt-0.5 sm:mt-0" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-6 sm:mt-8">
              <Link
                href="/about"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:scale-105"
              >
                <span>{t.about.learnMore}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
