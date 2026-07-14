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
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { blurPlaceholder } from "@/lib/utils";

const serviceImages = [
  "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&q=80",
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
  "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80",
  "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80",
];

const services = [
  {
    title: "Office Cleaning",
    description:
      "Complete office cleaning services including workspaces, meeting rooms, floors, and common areas.",
    icon: Briefcase,
    color: "bg-blue-500",
    href: "/services/office-cleaning",
  },
  {
    title: "Building Cleaning",
    description:
      "Interior and exterior cleaning solutions for commercial and residential buildings.",
    icon: Building2,
    color: "bg-sky-500",
    href: "/services/building-cleaning",
  },
  {
    title: "Commercial Facility Cleaning",
    description:
      "Cleaning services for malls, shops, warehouses, and business facilities.",
    icon: Store,
    color: "bg-indigo-500",
    href: "/services/commercial-cleaning",
  },
  {
    title: "Hospital Cleaning",
    description:
      "Professional sanitation and cleaning services for hospitals and healthcare facilities.",
    icon: Hospital,
    color: "bg-teal-500",
    href: "/services/hospital-cleaning",
  },
];

const features = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Industry-leading cleaning standards",
  },
  {
    icon: Shield,
    title: "Trusted & Insured",
    description: "Fully bonded and insured services",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Services available 24/7",
  },
  {
    icon: Heart,
    title: "Eco-Friendly",
    description: "Safe, green cleaning products",
  },
];

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="services" className="relative overflow-hidden bg-muted/30 py-16 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            What We Offer
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Professional Cleaning Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Comprehensive cleaning solutions tailored to your needs
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link
                  href={service.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group relative block overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 ${
                    hoveredIndex === index
                      ? "border-primary/30 ring-2 ring-primary/20"
                      : ""
                  }`}
                >
                  {/* Service Image */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <Image
                      src={serviceImages[index]}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      placeholder="blur"
                      blurDataURL={blurPlaceholder}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`absolute top-4 left-4 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl ${service.color} text-white shadow-lg`}
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </motion.div>
                  </div>

                  <div className="p-5 sm:p-6">

                  <h3 className="text-lg sm:text-xl font-semibold transition-colors group-hover:text-primary">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn more
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-12 sm:mt-20 grid gap-6 sm:gap-8 rounded-3xl border bg-card p-6 sm:p-8 grid-cols-2 sm:grid-cols-4"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="mx-auto mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold">{feature.title}</h3>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
