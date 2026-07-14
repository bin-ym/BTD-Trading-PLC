"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/shared/Container";
import { blurPlaceholder } from "@/lib/utils";
import { Sparkles, ArrowRight, MapPin } from "lucide-react";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "office", label: "Office" },
  { id: "building", label: "Building" },
  { id: "hospital", label: "Hospital" },
  { id: "commercial", label: "Commercial" },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
  "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80",
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
  "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&q=80",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
];

const projects = [
  {
    id: 1,
    title: "Corporate Office Complex",
    category: "office",
    location: "Addis Ababa",
    description: "Complete office cleaning and maintenance",
    imageIndex: 0,
  },
  {
    id: 2,
    title: "Multi-Story Building",
    category: "building",
    location: "Bole Area",
    description: "Interior and exterior cleaning services",
    imageIndex: 1,
  },
  {
    id: 3,
    title: "Healthcare Facility",
    category: "hospital",
    location: "Central Addis",
    description: "Hospital sanitation and deep cleaning",
    imageIndex: 2,
  },
  {
    id: 4,
    title: "Shopping Mall",
    category: "commercial",
    location: "Mercato",
    description: "Daily cleaning and maintenance",
    imageIndex: 3,
  },
  {
    id: 5,
    title: "Business Center",
    category: "office",
    location: "Kazanchis",
    description: "Professional office cleaning services",
    imageIndex: 4,
  },
  {
    id: 6,
    title: "Residential Tower",
    category: "building",
    location: "Summit",
    description: "Common areas and lobby cleaning",
    imageIndex: 5,
  },
  {
    id: 7,
    title: "Medical Clinic",
    category: "hospital",
    location: "Ayat",
    description: "Sterilization and sanitization",
    imageIndex: 6,
  },
  {
    id: 8,
    title: "Retail Store",
    category: "commercial",
    location: "Piassa",
    description: "Storefront and interior cleaning",
    imageIndex: 7,
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

          <Container>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Our Work
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Project Gallery
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                Explore our portfolio of cleaning projects across offices,
                buildings, hospitals, and commercial facilities
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Filter */}
        <section className="sticky top-16 z-30 border-b bg-background/80 backdrop-blur-xl py-4">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-2"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "border bg-background hover:bg-muted"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 sm:py-16">
          <Container>
            <motion.div
              layout
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => {
                  return (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="group relative overflow-hidden rounded-2xl border bg-card transition-all hover:-translate-y-2 hover:shadow-xl"
                    >
                      {/* Image */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={galleryImages[project.imageIndex]}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          placeholder="blur"
                          blurDataURL={blurPlaceholder}
                        />

                        {/* Hover overlay */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 flex items-center justify-center bg-primary/80"
                        >
                          <div className="p-4 text-center text-white">
                            <Sparkles className="mx-auto h-8 w-8" />
                            <p className="mt-3 text-sm">
                              {project.description}
                            </p>
                          </div>
                        </motion.div>
                      </div>

                      {/* Info */}
                      <div className="p-4 sm:p-5">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <h3 className="font-semibold transition-colors group-hover:text-primary truncate">
                              {project.title}
                            </h3>
                            <p className="mt-1 text-sm text-muted-foreground flex items-center gap-1">
                              <MapPin className="h-3 w-3 shrink-0" />
                              {project.location}
                            </p>
                          </div>
                          <span className="shrink-0 rounded-full bg-muted px-3 py-1 text-xs font-medium capitalize">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center"
              >
                <p className="text-muted-foreground">
                  No projects found in this category.
                </p>
              </motion.div>
            )}
          </Container>
        </section>

        {/* Stats */}
        <section className="bg-muted/30 py-12 sm:py-16">
          <Container>
            <div className="grid gap-6 sm:gap-8 text-center grid-cols-2 md:grid-cols-4">
              {[
                { value: "500+", label: "Projects Completed" },
                { value: "200+", label: "Happy Clients" },
                { value: "50+", label: "Team Members" },
                { value: "10+", label: "Years Experience" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="text-3xl sm:text-4xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 sm:py-16 text-center"
            >
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Want to See Your Space Here?
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-primary-foreground/80">
                  Contact us today for a free quote and let us show you the BTD
                  Trading PLC difference.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-primary transition-all hover:bg-white/90 hover:shadow-lg"
                >
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

