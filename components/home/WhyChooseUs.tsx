"use client";

import { useRef, useState } from "react";
import {
  Users,
  Wrench,
  DollarSign,
  Clock,
  Leaf,
  CheckCircle2,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    icon: Users,
    title: "Experienced Team",
    description: "Our trained professionals have years of experience in commercial cleaning.",
  },
  {
    icon: Wrench,
    title: "Modern Equipment",
    description: "We use state-of-the-art cleaning equipment and techniques.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Competitive rates with no hidden fees or surprises.",
  },
  {
    icon: Clock,
    title: "Reliable Service",
    description: "On-time arrival and consistent service you can count on.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "Safe, environmentally friendly cleaning solutions available.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance",
    description: "Rigorous quality checks to ensure complete satisfaction.",
  },
];

export function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Why Choose BTD Trading
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted Cleaning Professionals
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            We combine expertise, reliability, and attention to detail to deliver
            exceptional cleaning services
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative overflow-hidden rounded-2xl border bg-card p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  hoveredIndex === index
                    ? "border-primary/30 ring-2 ring-primary/20"
                    : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-white"
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary transition-colors group-hover:text-white" />
                  </motion.div>

                  <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold transition-colors group-hover:text-primary">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
