"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { blurPlaceholder } from "@/lib/utils";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Background image with overlays */}
      <Image
        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
        alt="Professional cleaning service"
        fill
        className="object-cover"
        priority
        sizes="100vw"
        placeholder="blur"
        blurDataURL={blurPlaceholder}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-background/70 to-background/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

      {/* Animated decorative elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-primary/30 blur-3xl"
      />

      <div className="container relative mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 flex items-center justify-center gap-2"
          >
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">
              Professional Cleaning Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Keeping Your Space{" "}
            <span className="text-primary">Clean & Professional</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            BTD Trading PLC delivers expert cleaning solutions for offices,
            commercial buildings, hospitals, and institutions across Ethiopia.
            Quality you can trust, service you can rely on.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 sm:px-8 sm:py-4 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 px-6 py-3 sm:px-8 sm:py-4 font-medium text-foreground transition-all hover:border-primary hover:bg-primary/5"
            >
              Our Services
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-green-500"
              />
              <span>Available Now</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">500+</span>
              <span>Projects Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">98%</span>
              <span>Client Satisfaction</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-6 rounded-full border-2 border-primary/30 flex justify-center pt-2"
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
