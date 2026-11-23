"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
  // Selected Images
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
      en: "Medical-grade disinfection and surface cleaning",
      am: "የህክምና ደረጃ ማምከን እና የወለል/ዕቃዎች ጽዳት",
    },
  },
  {
    id: 5,
    type: "image",
    category: "office",
    src: "/images/work/work-10.jpg",
    title: {
      en: "Executive Boardroom Cleaning",
      am: "የስራ አመራር ቦርድ አዳራሽ ጽዳት",
    },
    location: {
      en: "CMC, Addis Ababa",
      am: "ሲኤምሲ፣ አዲስ አበባ",
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
    id: 8,
    type: "image",
    category: "cleaning",
    src: "/images/work/work-17.jpg",
    title: {
      en: "Floor Restoration & Polishing",
      am: "የወለል ማደስ እና ማብራት ስራ",
    },
    location: {
      en: "Gerji, Addis Ababa",
      am: "ገርጂ፣ አዲስ አበባ",
    },
    description: {
      en: "Scrubbing, buffing, and surface polishing with high-shine finish",
      am: "የወለል ማጠብ፣ ማሽን ወለወላ እና የሚያብረቀርቅ አጨራረስ",
    },
  },
  {
    id: 9,
    type: "image",
    category: "commercial",
    src: "/images/work/work-19.jpg",
    title: {
      en: "Restaurant & Kitchen Cleaning",
      am: "የምግብ ቤት እና የወጥ ቤት ጽዳት",
    },
    location: {
      en: "Sarbet, Addis Ababa",
      am: "ሳርቤት፣ አዲስ አበባ",
    },
    description: {
      en: "Degreasing, sanitizing, and hygiene standard compliance",
      am: "ስብ ማስወገድ፣ ማምከን እና የንጽህና መስፈርቶችን ማሟላት",
    },
  },
  {
    id: 10,
    type: "image",
    category: "office",
    src: "/images/work/work-22.jpg",
    title: {
      en: "Open Office Space Cleaning",
      am: "የክፍት ቢሮ ቦታዎች ጽዳት",
    },
    location: {
      en: "Piazza, Addis Ababa",
      am: "ፒያሳ፣ አዲስ አበባ",
    },
    description: {
      en: "Floor care, waste removal, and ergonomic station wipe-downs",
      am: "የወለል እንክብካቤ፣ ቆሻሻ ማስወገድ እና የጠረጴዛዎች ንጽህና",
    },
  },
  {
    id: 11,
    type: "image",
    category: "building",
    src: "/images/work/work-25.jpg",
    title: {
      en: "Commercial Entrance & Reception",
      am: "የድርጅት መግቢያ እና የእንግዳ መቀበያ",
    },
    location: {
      en: "Megenagna, Addis Ababa",
      am: "መገናኛ፣ አዲስ አበባ",
    },
    description: {
      en: "First-impression cleaning: glass panels, mats, and polished reception floors",
      am: "የመጀመሪያ እይታ ጽዳት፡ የመስታወት ክፍሎች እና የሚያብረቀርቁ ወለሎች",
    },
  },
  {
    id: 12,
    type: "image",
    category: "cleaning",
    src: "/images/work/work-28.jpg",
    title: {
      en: "Restroom Sanitization",
      am: "የመጸዳጃ ቤት ጥልቅ ንጽህና",
    },
    location: {
      en: "Bole, Addis Ababa",
      am: "ቦሌ፣ አዲስ አበባ",
    },
    description: {
      en: "High-level hygiene, descaling, and continuous fragrance maintenance",
      am: "ከፍተኛ የንጽህና ደረጃ፣ የቆሻሻ ማስወገድ እና ጥሩ መዓዛ አጠባበቅ",
    },
  },
  {
    id: 13,
    type: "image",
    category: "commercial",
    src: "/images/work/work-30.jpg",
    title: {
      en: "Warehouse & Storage Cleaning",
      am: "የመጋዘን እና የዕቃ ማስቀመጫ ጽዳት",
    },
    location: {
      en: "Kality, Addis Ababa",
      am: "ቃሊቲ፣ አዲስ አበባ",
    },
    description: {
      en: "Heavy-duty sweeping, dust suppression, and high-ceiling dusting",
      am: "ከፍተኛ ጽዳት፣ አቧራ መቆጣጠር እና የኮርኒስ ጽዳት",
    },
  },
  // Selected Videos
  {
    id: 14,
    type: "video",
    category: "video",
    src: "/images/work/work-video-1.mp4",
    title: {
      en: "Floor Polishing in Action",
      am: "የወለል ማሽን ወለወላ በተግባር",
    },
    location: {
      en: "Addis Ababa, Ethiopia",
      am: "አዲስ አበባ፣ ኢትዮጵያ",
    },
    description: {
      en: "Watch our team operate heavy-duty rotary scrubbing and buffing machines",
      am: "ቡድናችን ከፍተኛ የወለል ማሽን በመጠቀም ሲያጸዳ ይመልከቱ",
    },
  },
  {
    id: 15,
    type: "video",
    category: "video",
    src: "/images/work/work-video-2.mp4",
    title: {
      en: "Professional Team Workflow",
      am: "የባለሙያ ቡድን የስራ ሂደት",
    },
    location: {
      en: "Addis Ababa, Ethiopia",
      am: "አዲስ አበባ፣ ኢትዮጵያ",
    },
    description: {
      en: "On-site quality supervision and team coordination in real time",
      am: "የቀጥታ ጥራት ቁጥጥር እና የቡድን ቅንጅት በስራ ቦታ ላይ",
    },
  },
];

export function GalleryContent() {
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
      <main className="pt-16 sm:pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 py-12 sm:py-20 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
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
              <span className="inline-block rounded-full bg-primary/10 px-3.5 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium text-primary">
                {t.gallery.badge}
              </span>
              <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                {t.gallery.title}
              </h1>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                {t.gallery.subtitle}
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--ethiopian-green)]" />
                <span>{t.gallery.proudly}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--ethiopian-red)]" />
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Filter Buttons */}
        <section className="border-b bg-background/50 py-4 sm:py-6 backdrop-blur-xs sticky top-16 sm:top-20 z-30">
          <Container>
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-3.5 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? "bg-primary text-primary-foreground shadow-sm scale-105"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </Container>
        </section>

        {/* Gallery Grid */}
        <section className="py-10 sm:py-16 md:py-20">
          <Container>
            <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence>
                {filteredItems.map((item) => {
                  const isVideo = item.type === "video";
                  return (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-border/70 bg-card shadow-xs transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                      onClick={() => {
                        if (isVideo) {
                          setLightboxVideo(item.src);
                        } else {
                          setLightboxImage(item.src);
                        }
                      }}
                    >
                      {/* Image / Video Thumbnail */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                        {isVideo ? (
                          <>
                            <video
                              src={item.src}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                              muted
                              preload="metadata"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
                                <Play
                                  className="h-5 w-5 sm:h-6 sm:w-6 text-primary ml-1"
                                  fill="currentColor"
                                />
                              </div>
                            </div>
                          </>
                        ) : (
                          <Image
                            src={item.src}
                            alt={item.title[language] || item.title.en}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            placeholder="blur"
                            blurDataURL={blurPlaceholder}
                          />
                        )}

                        {/* Hover overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-primary/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4">
                          <div className="text-center text-white">
                            {isVideo ? (
                              <Play className="mx-auto h-7 w-7 sm:h-8 sm:w-8" />
                            ) : (
                              <Sparkles className="mx-auto h-7 w-7 sm:h-8 sm:w-8" />
                            )}
                            <p className="mt-2.5 text-xs sm:text-sm line-clamp-3">{item.description[language] || item.description.en}</p>
                          </div>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-3.5 sm:p-4">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0 flex-1">
                            <h3 className="text-sm sm:text-base font-semibold transition-colors group-hover:text-primary truncate">
                              {item.title[language] || item.title.en}
                            </h3>
                            <p className="mt-1 text-xs sm:text-sm text-muted-foreground flex items-center gap-1">
                              <MapPin className="h-3 w-3 shrink-0" />
                              <span className="truncate">{item.location[language] || item.location.en}</span>
                            </p>
                          </div>
                          <span className="shrink-0 rounded-full bg-muted px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium capitalize">
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
            </div>
          </Container>
        </section>

        {/* Stats */}
        <section className="bg-muted/30 py-10 sm:py-16 ethiopian-pattern">
          <Container>
            <div className="grid gap-4 sm:gap-8 text-center grid-cols-2 md:grid-cols-4">
              {[
                { value: "35+", label: t.gallery.stats.projects },
                { value: "40+", label: t.gallery.stats.team },
                { value: "98%", label: t.gallery.stats.satisfaction },
                {
                  value: language === "am" ? "2 ዓመት" : "2 years",
                  label: t.gallery.stats.years,
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl border border-border/70 bg-card/60 p-3 sm:p-5"
                >
                  <p className="text-2xl sm:text-4xl font-extrabold text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground font-medium">
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
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-primary px-5 py-10 sm:px-8 sm:py-16 text-center shadow-xl"
            >
              {/* Ethiopian flag accent */}
              <div className="absolute top-0 left-0 right-0 h-1 flex">
                <div className="flex-1 bg-[var(--ethiopian-green)]" />
                <div className="flex-1 bg-[var(--ethiopian-yellow)]" />
                <div className="flex-1 bg-[var(--ethiopian-red)]" />
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {t.gallery.ctaTitle}
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-sm sm:text-base text-primary-foreground/80 leading-relaxed">
                  {t.gallery.ctaText}
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-primary transition-all hover:bg-white/90 hover:shadow-lg hover:scale-105"
                >
                  <span>{t.gallery.getQuote}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-white/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-white/10 blur-3xl pointer-events-none" />
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 sm:p-4 backdrop-blur-xs"
            onClick={() => setLightboxImage(null)}
          >
            <button
              aria-label={language === "am" ? "ዝጋ" : "Close"}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 z-10"
              onClick={() => setLightboxImage(null)}
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-h-[85vh] max-w-[95vw] sm:max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage}
                alt={language === "am" ? "የጋለሪ ፎቶ" : "Gallery photo"}
                width={1200}
                height={900}
                className="rounded-lg object-contain"
                style={{ maxHeight: "85vh", maxWidth: "95vw", width: "auto" }}
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 sm:p-4 backdrop-blur-xs"
            onClick={() => setLightboxVideo(null)}
          >
            <button
              aria-label={language === "am" ? "ዝጋ" : "Close"}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 z-10"
              onClick={() => setLightboxVideo(null)}
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-h-[85vh] max-w-[95vw] sm:max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={lightboxVideo}
                controls
                autoPlay
                className="rounded-lg"
                style={{ maxHeight: "85vh", maxWidth: "95vw" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
