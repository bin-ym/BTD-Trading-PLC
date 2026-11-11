import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | Company Profile & Leadership",
  description:
    "Learn about BTD Trading PLC — professional cleaning and facility support in Addis Ababa, Ethiopia. 40+ dedicated staff members, on-site shift leaders, 1-2 years field experience, and standard equipment inventory.",
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
