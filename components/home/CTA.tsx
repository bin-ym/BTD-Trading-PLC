"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />

      {/* Animated decorative elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-white/10 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-white/10 blur-3xl"
      />

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-2">
            <Sparkles className="h-5 w-5 text-white/80" />
            <span className="text-sm font-medium text-white/80">
              Professional Cleaning Services
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Ready for a Cleaner, Healthier Workplace?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-white/80">
            Contact BTD Trading PLC today and let our professional team provide
            the cleaning solution your business deserves. Free quotes available.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 sm:px-8 sm:py-4 font-medium text-primary transition-all hover:shadow-xl hover:shadow-white/25"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 sm:px-8 sm:py-4 font-medium text-white transition-all hover:bg-white/10"
            >
              Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
