import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | Company Profile & Leadership",
  description:
    "Learn about BTD Trading PLC — professional cleaning and facility support in Addis Ababa, Ethiopia. 40+ dedicated staff members, on-site shift leaders, 2 years field experience, and standard equipment inventory.",
  keywords: [
    "About BTD Trading PLC",
    "Ethiopia Cleaning Company Profile",
    "Janitorial Service Company Addis Ababa",
    "Commercial Facility Management Ethiopia",
    "Megenagna Cleaning Services Team",
  ],
  alternates: {
    canonical: "https://www.btdtradingplc.com/about",
  },
  openGraph: {
    title: "About BTD Trading PLC | Company Profile & Cleaning Standards",
    description:
      "Learn about BTD Trading PLC — 40+ staff, on-site shift leaders, floor buffing machines, and hospital-grade sanitization in Addis Ababa, Ethiopia.",
    url: "https://www.btdtradingplc.com/about",
    type: "website",
    images: [
      {
        url: "/images/work/work-01.jpg",
        width: 1200,
        height: 630,
        alt: "BTD Trading PLC Team & Leadership",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About BTD Trading PLC | Ethiopian Cleaning Leaders",
    description:
      "Discover BTD Trading PLC's journey, 40+ dedicated team members, and comprehensive cleaning equipment.",
    images: ["/images/work/work-01.jpg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutContent />
      <Footer />
    </>
  );
}
