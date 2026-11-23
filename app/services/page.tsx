import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Professional Cleaning Services in Addis Ababa",
  description:
    "Explore comprehensive cleaning services from BTD Trading PLC in Ethiopia: corporate office cleaning, building cleanup & maintenance with high-shine polish, commercial facilities, and hospital-grade disinfection.",
  keywords: [
    "Cleaning Services Addis Ababa",
    "Office Cleaning Services Ethiopia",
    "Building Cleanup Addis Ababa",
    "Commercial Cleaning Services Ethiopia",
    "Hospital Disinfection Ethiopia",
    "Floor Polishing Services Addis Ababa",
    "Facility Management Addis Ababa",
  ],
  alternates: {
    canonical: "https://www.btdtradingplc.com/services",
  },
  openGraph: {
    title: "Cleaning & Facility Services | BTD Trading PLC Ethiopia",
    description:
      "Reliable cleaning solutions tailored for offices, commercial centers, healthcare facilities, and multi-story buildings across Addis Ababa.",
    url: "https://www.btdtradingplc.com/services",
    type: "website",
    images: [
      {
        url: "/images/work/work-05.jpg",
        width: 1200,
        height: 630,
        alt: "BTD Trading PLC Commercial Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cleaning & Facility Services | BTD Trading PLC",
    description:
      "Commercial cleaning, office maintenance, floor buffing and hospital disinfection in Addis Ababa.",
    images: ["/images/work/work-05.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <ServicesContent />
      <Footer />
    </>
  );
}
