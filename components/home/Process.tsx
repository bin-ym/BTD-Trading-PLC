"use client";

import { useRef } from "react";
import {
  Search,
  FileText,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const steps = [
    {
      icon: Search,
      title: t.process.step1,
      description: t.process.step1Desc,
    },
    {
      icon: FileText,
      title: t.process.step2,
      description: t.process.step2Desc,
    },
    {
      icon: Sparkles,
      title: t.process.step3,
      description: t.process.step3Desc,
    },
    {
      icon: CheckCircle2,
      title: t.process.step4,
      description: t.process.step4Desc,
    },
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-muted/30 py-16 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            {t.process.badge}
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            {t.process.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            {t.process.description}
          </p>
        </motion.div>

        <div className="mt-12 sm:mt-16">
          <div className="relative">
            {/* Connection line - desktop */}
            <div className="absolute left-1/2 top-8 hidden h-1 w-full max-w-2xl -translate-x-1/2 bg-border md:block" />

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="relative text-center"
                  >
                    {/* Step number with animated circle */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.2, type: "spring", stiffness: 200 }}
                      className="relative z-10 mx-auto mb-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border-4 border-background bg-primary text-white shadow-lg"
                    >
                      <span className="text-base sm:text-lg font-bold">{index + 1}</span>
                    </motion.div>

                    {/* Card */}
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="rounded-2xl border bg-card p-5 sm:p-6 transition-all hover:shadow-lg"
                    >
                      <div className="mx-auto mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>

                      <h3 className="text-base sm:text-lg font-semibold">{step.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
