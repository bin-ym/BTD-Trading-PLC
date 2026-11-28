import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema, buildPageMetadata } from "@/lib/seo";
import { GalleryContent } from "./GalleryContent";

export const metadata: Metadata = buildPageMetadata({
  title: "Project Gallery & Cleaning Work in Addis Ababa",
  description:
    "Explore real cleaning project photos and videos from BTD Trading PLC in Addis Ababa, including commercial offices, shopping complexes, floor polishing, and sanitization.",
  path: "/gallery",
  keywords: [
    "Cleaning Projects Addis Ababa",
    "Ethiopian Cleaning Service Photos",
    "Floor Polishing Photos Addis Ababa",
    "Office Cleaning Gallery Ethiopia",
    "BTD Trading Work Portfolio",
    "Janitorial Work Gallery Ethiopia",
    "Commercial Cleaning Videos Addis Ababa",
  ],
  image: {
    url: "/images/work/work-01.jpg",
    width: 1280,
    height: 960,
    alt: "BTD Trading PLC Cleaning Projects Gallery",
  },
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <Navbar />
      <GalleryContent />
      <Footer />
    </>
  );
}
