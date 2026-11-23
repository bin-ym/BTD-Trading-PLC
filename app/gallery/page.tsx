import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GalleryContent } from "./GalleryContent";

export const metadata: Metadata = {
  title: "Project Gallery & Work Portfolio | Addis Ababa, Ethiopia",
  description:
    "Explore real cleaning project photos and videos from BTD Trading PLC in Addis Ababa. Commercial offices, shopping centers, rotary floor scrubbing, buffing machines, and hospital sanitation.",
  keywords: [
    "Cleaning Projects Addis Ababa",
    "Ethiopian Cleaning Service Photos",
    "Floor Polishing Photos Addis Ababa",
    "Office Cleaning Gallery Ethiopia",
    "BTD Trading Work Portfolio",
    "Janitorial Work Gallery Ethiopia",
    "Commercial Cleaning Videos Addis Ababa",
  ],
  alternates: {
    canonical: "https://www.btdtradingplc.com/gallery",
  },
  openGraph: {
    title: "Cleaning Project Gallery | BTD Trading PLC Ethiopia",
    description:
      "Explore real project photos and videos from BTD Trading PLC — Addis Ababa's trusted commercial cleaning and facility maintenance provider.",
    url: "https://www.btdtradingplc.com/gallery",
    type: "website",
    images: [
      {
        url: "/images/work/work-08.jpg",
        width: 1200,
        height: 630,
        alt: "BTD Trading PLC Cleaning Projects Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Gallery | BTD Trading PLC Ethiopia",
    description:
      "Explore photos and videos of our professional cleaning and floor polishing projects in Addis Ababa.",
    images: ["/images/work/work-08.jpg"],
  },
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <GalleryContent />
      <Footer />
    </>
  );
}
