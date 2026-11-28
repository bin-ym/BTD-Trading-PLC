import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema, buildPageMetadata, SITE_NAME } from "@/lib/seo";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = buildPageMetadata({
  absoluteTitle: `About ${SITE_NAME} | Cleaning & Facility Support`,
  description:
    "Learn about BTD Trading PLC — professional cleaning and facility support in Addis Ababa, Ethiopia with 40+ dedicated staff, on-site shift leaders, 2 years field experience, and standard equipment inventory.",
  path: "/about",
  keywords: [
    "About BTD Trading PLC",
    "Ethiopia Cleaning Company Profile",
    "Janitorial Service Company Addis Ababa",
    "Commercial Facility Management Ethiopia",
    "Megenagna Cleaning Services Team",
  ],
  image: {
    url: "/images/work/work-01.jpg",
    width: 1280,
    height: 960,
    alt: "BTD Trading PLC Team & Leadership",
  },
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <Navbar />
      <AboutContent />
      <Footer />
    </>
  );
}
