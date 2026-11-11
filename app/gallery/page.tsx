"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/shared/Container";
import { blurPlaceholder } from "@/lib/utils";
import { Sparkles, ArrowRight, MapPin, Play, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface GalleryItem {
  id: number;
  type: "image" | "video";
  category: "cleaning" | "office" | "building" | "commercial" | "video";
  src: string;
  title: {
    en: string;
    am: string;
  };
  location: {
    en: string;
    am: string;
  };
  description: {
    en: string;
    am: string;
  };
}

const galleryItems: GalleryItem[] = [
  // 10 Selected Images
  {
    id: 1,
    type: "image",
    category: "office",
    src: "/images/work/work-01.jpg",
    title: {
      en: "Corporate Office Cleaning",
      am: "የኮርፖሬት ቢሮ ጽዳት",
    },
    location: {
      en: "Megenagna, Addis Ababa",
      am: "መገናኛ፣ አዲስ አበባ",
    },
    description: {
      en: "Complete workspace cleaning, desk sanitization, and floor maintenance",
      am: "ሙሉ የስራ ቦታ ጽዳት፣ የጠረጴዛ ማጽዳት እና የወለል እንክብካቤ",
    },
  },
  {
    id: 2,
    type: "image",
    category: "building",
    src: "/images/work/work-05.jpg",
    title: {
      en: "Commercial Building Maintenance",
      am: "የንግድ ህንጻ ጥገና እና ጽዳት",
    },
    location: {
      en: "Bole, Addis Ababa",
      am: "ቦሌ፣ አዲስ አበባ",
    },
    description: {
      en: "High-shine rotary floor scrubbing, buffing machine maintenance, and polished finish",
      am: "በማሽን የተወለወለ እና የሚያብረቀርቅ ከፍተኛ የወለል ጽዳት እና አጨራረስ",
    },
  },
  {
    id: 3,
    type: "image",
    category: "commercial",
    src: "/images/work/work-07.jpg",
    title: {
      en: "Commercial Shopping Complex",
      am: "የንግድ እና የገበያ ማዕከል",
    },
    location: {
      en: "Kazanchis, Addis Ababa",
      am: "ካዛንቺስ፣ አዲስ አበባ",
    },
    description: {
      en: "Deep cleaning and floor sanitization for high-traffic retail spaces",
      am: "ለከፍተኛ እንቅስቃሴ የገበያ ቦታዎች ጥልቅ ጽዳት እና የወለል ንጽህና",
    },
  },
  {
    id: 4,
    type: "image",
    category: "cleaning",
    src: "/images/work/work-08.jpg",
    title: {
      en: "Deep Sanitization Service",
      am: "ጥልቅ የጽዳት እና ማምከን አገልግሎት",
    },
    location: {
      en: "Amecha, Addis Ababa",
      am: "አሜቻ፣ አዲስ አበባ",
    },
    description: {
      en: "Intensive sanitization, chemical disinfection, and surface polishing",
      am: "ጥልቅ ጽዳት፣ ኬሚካላዊ ማምከን እና የገጽታ ማብራት ስራ",
    },
  },
  {
    id: 5,
    type: "image",
    category: "office",
    src: "/images/work/work-11.jpg",
    title: {
      en: "Executive Office Sanitization",
      am: "የስራ አስፈፃሚ ቢሮ ጽዳት",
    },
    location: {
      en: "Bole Medhanialem",
      am: "ቦሌ መድኃኔዓለም",
    },
    description: {
      en: "Scheduled daily office sanitization and conference room hygiene",
      am: "የታቀደ ዕለታዊ የቢሮ እና የመሰብሰቢያ አዳራሽ ንጽህና አጠባበቅ",
    },
  },
  {
    id: 6,
    type: "image",
    category: "building",
    src: "/images/work/work-12.jpg",
    title: {
      en: "Multi-Story Building Care",
      am: "የፎቅ ህንጻዎች እንክብካቤ",
    },
    location: {
      en: "Summit, Addis Ababa",
      am: "ሰሚት፣ አዲስ አበባ",
    },
    description: {
      en: "Common areas, staircases, and lobby maintenance with shift leader supervision",
      am: "የጋራ መተላለፊያዎች፣ ደረጃዎች እና ሎቢ በፈረቃ መሪዎች ቁጥጥር የሚከናወን ጽዳት",
    },
  },
  {
    id: 7,
    type: "image",
    category: "commercial",
    src: "/images/work/work-15.jpg",
    title: {
      en: "Retail Facility Care",
      am: "የችርቻሮ እና የንግድ ተቋም ጽዳት",
    },
    location: {
      en: "Mercato, Addis Ababa",
      am: "መርካቶ፣ አዲስ አበባ",
    },
    description: {
      en: "Comprehensive retail space and storage facility cleaning",
      am: "አጠቃላይ የንግድ መደብሮች እና የመጋዘን ቦታዎች ጽዳት",
    },
  },
  {
    id: 8,
    type: "image",
    category: "cleaning",
    src: "/images/work/work-17.jpg",
    title: {
      en: "Floor Restoration & Polishing",
      am: "የወለል ማደስ እና ማብራት ስራ",
    },
    location: {
      en: "Addis Ababa",
      am: "አዲስ አበባ",
    },
    description: {
      en: "Machine scrubbing, wax application, and high-gloss floor buffing",
      am: "በማሽን ማሸት፣ ሰም መቀባት እና ከፍተኛ አንጸባራቂ የወለል ወለላ",
    },
  },
  {
    id: 9,
    type: "image",
    category: "office",
    src: "/images/work/work-20.jpg",
    title: {
      en: "Open Workspace Maintenance",
      am: "የክፍት የስራ ቦታ እንክብካቤ",
    },
    location: {
      en: "Kazanchis, Addis Ababa",
      am: "ካዛንቺስ፣ አዲስ አበባ",
    },
    description: {
      en: "Day-to-day workspace vacuuming, trash disposal, and sanitization",
      am: "የዕለት ተዕለት የቫክዩም ጽዳት፣ የቆሻሻ አወጋገድ እና የንጽህና ስራ",
    },
  },
  {
    id: 10,
    type: "image",
    category: "building",
    src: "/images/work/work-26.jpg",
    title: {
      en: "Building Interior & Glass Cleaning",
      am: "የህንጻ ውስጣዊ እና የመስታወት ጽዳት",
    },
    location: {
      en: "Bole, Addis Ababa",
      am: "ቦሌ፣ አዲስ አበባ",
    },
    description: {
      en: "Interior glass partitions, windows, and high-level architectural surface cleaning",
      am: "የውስጥ መስታወቶች፣ መስኮቶች እና ከፍ ያሉ የህንጻ ገጽታዎች ጽዳት",
    },
  },
  // 2 Videos
  {
    id: 101,
    type: "video",
    category: "video",
    src: "/images/work/work-video-1.mp4",
    title: {
      en: "Cleaning Crew in Action",
      am: "የጽዳት ቡድናችን በተግባር",
    },
    location: {
      en: "Addis Ababa",
      am: "አዲስ አበባ",
    },
    description: {
      en: "Watch our dedicated cleaning crew performing specialized commercial cleaning",
      am: "ቁርጠኛ የጽዳት ቡድናችን ልዩ የንግድ ተቋማት ጽዳት ሲያከናውን ይመልከቱ",
    },
  },
  {
    id: 102,
    type: "video",
    category: "video",
    src: "/images/work/work-video-2.mp4",
    title: {
      en: "Shift Leader Coordination",
      am: "የፈረቃ መሪዎች ቅንጅት",
    },
    location: {
      en: "Megenagna, Addis Ababa",
      am: "መገናኛ፣ አዲስ አበባ",
    },
    description: {
      en: "On-site quality supervision and team coordination in real time",
      am: "የቀጥታ ጥራት ቁጥጥር እና የቡድን ቅንጅት በስራ ቦታ ላይ",
    },
  },
];

export default function GalleryPage() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxVideo, setLightboxVideo] = useState<string | null>(null);

  const categories = [
    { id: "all", label: t.gallery.filters.all },
    { id: "cleaning", label: t.gallery.filters.cleaning },
    { id: "office", label: t.gallery.filters.office },
    { id: "building", label: t.gallery.filters.building },
    { id: "commercial", label: t.gallery.filters.commercial },
    { id: "video", label: t.gallery.filters.videos },
  ];

  const categoryLabels: Record<string, string> = {
    cleaning: t.gallery.filters.cleaning,
    office: t.gallery.filters.office,
    building: t.gallery.filters.building,
    commercial: t.gallery.filters.commercial,
    video: t.gallery.videoLabel,
  };

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

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
                {t.gallery.badge}
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                {t.gallery.title}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                {t.gallery.subtitle}
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--ethiopian-green)]" />
                <span>{t.gallery.proudly}</span>
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
                          setLightboxVideo(item.src);
                        } else {
                          setLightboxImage(item.src);
                        }
                      }}
                    >
                      {/* Image / Video Thumbnail */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        {isVideo ? (
                          <>
                            <video
                              src={item.src}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                              muted
                              preload="metadata"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
                                <Play
                                  className="h-6 w-6 text-primary ml-1"
                                  fill="currentColor"
                                />
                              </div>
                            </div>
                          </>
                        ) : (
                          <Image
                            src={item.src}
                            alt={item.title[language]}
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
                            <p className="mt-3 text-sm">{item.description[language]}</p>
                          </div>
                        </motion.div>
                      </div>

                      {/* Info */}
                      <div className="p-3 sm:p-4">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <h3 className="text-sm sm:font-semibold transition-colors group-hover:text-primary truncate">
                              {item.title[language]}
                            </h3>
                            <p className="mt-1 text-xs sm:text-sm text-muted-foreground flex items-center gap-1">
                              <MapPin className="h-3 w-3 shrink-0" />
                              <span className="truncate">{item.location[language]}</span>
                            </p>
                          </div>
                          <span className="shrink-0 rounded-full bg-muted px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium capitalize">
                            {isVideo
                              ? `🎬 ${t.gallery.videoLabel}`
                              : (categoryLabels[item.category] || item.category)}
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
                  {t.gallery.noProjects}
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
                { value: "35+", label: t.gallery.stats.projects },
                { value: "40+", label: t.gallery.stats.team },
                { value: "98%", label: t.gallery.stats.satisfaction },
                {
                  value: language === "am" ? "2 ዓመታት" : "2 years",
                  label: t.gallery.stats.years,
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
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
                  {t.gallery.ctaTitle}
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-primary-foreground/80">
                  {t.gallery.ctaText}
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-primary transition-all hover:bg-white/90 hover:shadow-lg"
                >
                  {t.gallery.getQuote}
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
              aria-label={language === "am" ? "ዝጋ" : "Close"}
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
                alt={language === "am" ? "የጋለሪ ፎቶ" : "Gallery photo"}
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
              aria-label={language === "am" ? "ዝጋ" : "Close"}
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
