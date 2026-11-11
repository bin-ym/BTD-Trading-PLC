import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional office, building, commercial, and hospital cleaning services in Ethiopia.",
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
