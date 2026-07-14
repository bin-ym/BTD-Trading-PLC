"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { blurPlaceholder } from "@/lib/utils";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Team Members" },
];

const benefits = [
  "Trained & vetted cleaning professionals",
  "Customized cleaning plans",
  "Eco-friendly products available",
  "100% satisfaction guarantee",
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="about" className="relative py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80"
                alt="Professional cleaning team at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={blurPlaceholder}
              />

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 rounded-2xl border bg-card p-3 sm:p-4 shadow-xl"
              >
                {/* <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-semibold">Certified Experts</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Fully trained staff
                    </p>
                  </div>
                </div> */}
              </motion.div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              About BTD Trading
            </span>

            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Your Trusted Cleaning Partner in Ethiopia
            </h2>

            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              BTD Trading PLC has been providing professional cleaning services
              for offices, commercial buildings, hospitals, and institutions
              across Ethiopia. We are committed to delivering exceptional
              results with every service.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="rounded-xl border bg-muted/30 p-4"
                >
                  <motion.p
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                    className="text-2xl sm:text-3xl font-bold text-primary"
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
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
              className="mt-8 space-y-3"
            >
              {benefits.map((benefit) => (
                <motion.li
                  key={benefit}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
