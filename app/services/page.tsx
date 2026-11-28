import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema, buildPageMetadata } from "@/lib/seo";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = buildPageMetadata({
  title: "Cleaning Services in Addis Ababa",
  description:
    "Explore professional cleaning services from BTD Trading PLC in Addis Ababa, Ethiopia: office cleaning, building cleanup with polished finishes, commercial facilities, and hospital sanitation.",
  path: "/services",
  keywords: [
    "Cleaning Services Addis Ababa",
    "Office Cleaning Services Ethiopia",
    "Building Cleanup Addis Ababa",
    "Commercial Cleaning Services Ethiopia",
    "Hospital Disinfection Ethiopia",
    "Floor Polishing Services Addis Ababa",
    "Facility Management Addis Ababa",
  ],
  image: {
    url: "/images/work/work-11.jpg",
    width: 1280,
    height: 960,
    alt: "BTD Trading PLC Commercial and Building Cleaning Services",
  },
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <Navbar />
      <ServicesContent />
      <Footer />
    </>
  );
}
