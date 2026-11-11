"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/shared/Container";
import { blurPlaceholder } from "@/lib/utils";
import { Sparkles, ArrowRight, MapPin, Play, X } from "lucide-react";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "cleaning", label: "Cleaning" },
  { id: "office", label: "Office" },
  { id: "building", label: "Building" },
  { id: "commercial", label: "Commercial" },
  { id: "video", label: "Videos" },
];

const galleryImages = [
  "/images/work/work-01.jpg",
  "/images/work/work-02.jpg",
  "/images/work/work-03.jpg",
  "/images/work/work-04.jpg",
  "/images/work/work-05.jpg",
  "/images/work/work-06.jpg",
  "/images/work/work-07.jpg",
  "/images/work/work-08.jpg",
  "/images/work/work-09.jpg",
  "/images/work/work-10.jpg",
  "/images/work/work-11.jpg",
  "/images/work/work-12.jpg",
  "/images/work/work-13.jpg",
  "/images/work/work-14.jpg",
  "/images/work/work-15.jpg",
  "/images/work/work-16.jpg",
  "/images/work/work-17.jpg",
  "/images/work/work-18.jpg",
  "/images/work/work-19.jpg",
  "/images/work/work-20.jpg",
  "/images/work/work-21.jpg",
  "/images/work/work-22.jpg",
  "/images/work/work-23.jpg",
  "/images/work/work-24.jpg",
  "/images/work/work-25.jpg",
  "/images/work/work-26.jpg",
  "/images/work/work-27.jpg",
  "/images/work/work-28.jpg",
  "/images/work/work-29.jpg",
  "/images/work/work-30.jpg",
];

const projects = [
  { id: 1, title: "Office Cleaning", category: "office", location: "Megenagna, Addis Ababa", description: "Complete office space cleaning and sanitization", imageIndex: 0 },
  { id: 2, title: "Building Maintenance", category: "building", location: "Bole, Addis Ababa", description: "Exterior and interior building cleaning", imageIndex: 1 },
  { id: 3, title: "Commercial Cleaning", category: "commercial", location: "Kazanchis, Addis Ababa", description: "Commercial facility deep cleaning", imageIndex: 2 },
  { id: 4, title: "Office Sanitization", category: "office", location: "Bole Medhanialem", description: "Full office sanitization service", imageIndex: 3 },
  { id: 5, title: "Building Exterior", category: "building", location: "Addis Ababa", description: "Building facade and window cleaning", imageIndex: 4 },
  { id: 6, title: "Workspace Cleaning", category: "office", location: "Megenagna", description: "Daily workspace cleaning service", imageIndex: 5 },
  { id: 7, title: "Facility Cleaning", category: "commercial", location: "Addis Ababa", description: "Complete facility maintenance", imageIndex: 6 },
  { id: 8, title: "Deep Cleaning", category: "cleaning", location: "Amecha, Addis Ababa", description: "Deep cleaning and sanitization", imageIndex: 7 },
  { id: 9, title: "Office Maintenance", category: "office", location: "Addis Ababa", description: "Regular office maintenance cleaning", imageIndex: 8 },
  { id: 10, title: "Building Care", category: "building", location: "Summit, Addis Ababa", description: "Common area and lobby cleaning", imageIndex: 9 },
  { id: 11, title: "Commercial Space", category: "commercial", location: "Mercato, Addis Ababa", description: "Retail and commercial space cleaning", imageIndex: 10 },
  { id: 12, title: "Office Hygiene", category: "office", location: "Kazanchis", description: "Office hygiene and sanitization", imageIndex: 11 },
  { id: 13, title: "Building Detail", category: "building", location: "Bole, Addis Ababa", description: "Detailed building cleaning service", imageIndex: 12 },
  { id: 14, title: "Sanitization Service", category: "cleaning", location: "Addis Ababa", description: "Professional sanitization service", imageIndex: 13 },
  { id: 15, title: "Office Deep Clean", category: "office", location: "Megenagna", description: "Thorough office deep cleaning", imageIndex: 14 },
  { id: 16, title: "Commercial Facility", category: "commercial", location: "Addis Ababa", description: "Large-scale commercial cleaning", imageIndex: 15 },
  { id: 17, title: "Building Wash", category: "building", location: "Bole Medhanialem", description: "Complete building wash and cleaning", imageIndex: 16 },
  { id: 18, title: "Office Polish", category: "office", location: "Addis Ababa", description: "Office floor polishing and cleaning", imageIndex: 17 },
  { id: 19, title: "Facility Care", category: "commercial", location: "Amecha", description: "Ongoing facility care service", imageIndex: 18 },
  { id: 20, title: "Deep Sanitize", category: "cleaning", location: "Addis Ababa", description: "Deep sanitization and disinfection", imageIndex: 19 },
  { id: 21, title: "Office Refresh", category: "office", location: "Bole", description: "Complete office refresh cleaning", imageIndex: 20 },
  { id: 22, title: "Building Shine", category: "building", location: "Addis Ababa", description: "Building shine and maintenance", imageIndex: 21 },
  { id: 23, title: "Commercial Clean", category: "commercial", location: "Kazanchis", description: "Commercial space regular cleaning", imageIndex: 22 },
  { id: 24, title: "Office Maintenance", category: "office", location: "Megenagna", description: "Scheduled office maintenance", imageIndex: 23 },
  { id: 25, title: "Building Service", category: "building", location: "Addis Ababa", description: "Full building cleaning service", imageIndex: 24 },
  { id: 26, title: "Space Cleaning", category: "cleaning", location: "Addis Ababa", description: "Complete space cleaning", imageIndex: 25 },
  { id: 27, title: "Office Care", category: "office", location: "Bole", description: "Premium office care service", imageIndex: 26 },
  { id: 28, title: "Building Detail", category: "building", location: "Addis Ababa", description: "Detailed building maintenance", imageIndex: 27 },
  { id: 29, title: "Commercial Care", category: "commercial", location: "Mercato", description: "Commercial facility care", imageIndex: 28 },
  { id: 30, title: "Final Touch", category: "cleaning", location: "Addis Ababa", description: "Final touch cleaning service", imageIndex: 29 },
];

const videoItems = [
  { id: 101, title: "Cleaning in Action", category: "video", location: "Addis Ababa", description: "Watch our team at work", src: "/images/work/work-video-1.mp4" },
  { id: 102, title: "Team at Work", category: "video", location: "Megenagna", description: "Professional cleaning process", src: "/images/work/work-video-2.mp4" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxVideo, setLightboxVideo] = useState<string | null>(null);

  const allItems = [
    ...projects.map((p) => ({ ...p, type: "image" as const })),
    ...videoItems.map((v) => ({ ...v, type: "video" as const })),
  ];

  const filteredItems =
    activeCategory === "all"
      ? allItems
      : allItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          {/* Ethiopian flag accent */}
          <div className="absolute top-0 left-0 right-0 h-1 flex">
            <div className="flex-1 bg-[var(--ethiopian-green)]" />
            <div className="flex-1 bg-[var(--ethiopian-yellow)]" />
            <div className="flex-1 bg-[var(--ethiopian-red)]" />
          </div>

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
                buildings, and commercial facilities in Addis Ababa, Ethiopia
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--ethiopian-green)]" />
                <span>🇪🇹 Proudly Ethiopian</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--ethiopian-red)]" />
              </div>
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
              className="grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => {
                  const isVideo = item.type === "video";
                  return (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="group relative overflow-hidden rounded-2xl border bg-card transition-all hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                      onClick={() => {
                        if (isVideo) {
                          setLightboxVideo((item as any).src);
                        } else {
                          setLightboxImage(galleryImages[(item as any).imageIndex]);
                        }
                      }}
                    >
                      {/* Image / Video Thumbnail */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        {isVideo ? (
                          <>
                            <video
                              src={(item as any).src}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                              muted
                              preload="metadata"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
                                <Play className="h-6 w-6 text-primary ml-1" fill="currentColor" />
                              </div>
                            </div>
                          </>
                        ) : (
                          <Image
                            src={galleryImages[(item as any).imageIndex]}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                            placeholder="blur"
                            blurDataURL={blurPlaceholder}
                          />
                        )}

                        {/* Hover overlay */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 flex items-center justify-center bg-primary/80"
                        >
                          <div className="p-4 text-center text-white">
                            {isVideo ? (
                              <Play className="mx-auto h-8 w-8" />
                            ) : (
                              <Sparkles className="mx-auto h-8 w-8" />
                            )}
                            <p className="mt-3 text-sm">
                              {item.description}
                            </p>
                          </div>
                        </motion.div>
                      </div>

                      {/* Info */}
                      <div className="p-3 sm:p-4">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <h3 className="text-sm sm:font-semibold transition-colors group-hover:text-primary truncate">
                              {item.title}
                            </h3>
                            <p className="mt-1 text-xs sm:text-sm text-muted-foreground flex items-center gap-1">
                              <MapPin className="h-3 w-3 shrink-0" />
                              <span className="truncate">{item.location}</span>
                            </p>
                          </div>
                          <span className="shrink-0 rounded-full bg-muted px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium capitalize">
                            {isVideo ? "🎬 Video" : item.category}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            {filteredItems.length === 0 && (
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
        <section className="bg-muted/30 py-12 sm:py-16 ethiopian-pattern">
          <Container>
            <div className="grid gap-6 sm:gap-8 text-center grid-cols-2 md:grid-cols-4">
              {[
                { value: "35+", label: "Projects Completed" },
                { value: "40+", label: "Dedicated Staff" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "1–2 Yrs", label: "Field Experience" },
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
              {/* Ethiopian flag accent */}
              <div className="absolute top-0 left-0 right-0 h-1 flex">
                <div className="flex-1 bg-[var(--ethiopian-green)]" />
                <div className="flex-1 bg-[var(--ethiopian-yellow)]" />
                <div className="flex-1 bg-[var(--ethiopian-red)]" />
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Want to See Your Space Here?
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-primary-foreground/80">
                  Contact us today for a free quote and let us show you the BTD
                  Trading PLC difference. Proudly serving Addis Ababa, Ethiopia.
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

      {/* Lightbox for images */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30"
              onClick={() => setLightboxImage(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-h-[85vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage}
                alt="Gallery photo"
                width={1200}
                height={900}
                className="rounded-lg object-contain"
                style={{ maxHeight: "85vh", width: "auto" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox for videos */}
      <AnimatePresence>
        {lightboxVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightboxVideo(null)}
          >
            <button
              className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 z-10"
              onClick={() => setLightboxVideo(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-h-[85vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={lightboxVideo}
                controls
                autoPlay
                className="rounded-lg"
                style={{ maxHeight: "85vh", maxWidth: "90vw" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
