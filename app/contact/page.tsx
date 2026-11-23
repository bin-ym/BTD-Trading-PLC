import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Cleaning Quote in Addis Ababa",
  description:
    "Contact BTD Trading PLC for professional commercial, office, building and healthcare cleaning services in Addis Ababa, Ethiopia. Located in Megenagna (Amecha). Call +251 928-57-12-96 or request a fast quote online.",
  keywords: [
    "Contact BTD Trading PLC",
    "Cleaning Services Quote Addis Ababa",
    "Office Cleaning Estimate Ethiopia",
    "Megenagna Cleaning Office",
    "BTD Trading Phone Number",
    "Cleaning Company Contact Addis Ababa",
    "Ethiopian Cleaning Contact",
  ],
  alternates: {
    canonical: "https://www.btdtradingplc.com/contact",
  },
  openGraph: {
    title: "Contact BTD Trading PLC | Cleaning Services in Addis Ababa",
    description:
      "Get in touch with BTD Trading PLC for expert cleaning and facility management in Addis Ababa, Ethiopia. Call +251 928-57-12-96 or request a consultation.",
    url: "https://www.btdtradingplc.com/contact",
    type: "website",
    images: [
      {
        url: "/images/work/work-08.jpg",
        width: 1200,
        height: 630,
        alt: "Contact BTD Trading PLC - Addis Ababa, Ethiopia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact BTD Trading PLC | Professional Cleaning in Addis Ababa",
    description:
      "Request a consultation or cleaning proposal from BTD Trading PLC in Addis Ababa, Ethiopia.",
    images: ["/images/work/work-08.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactContent />
      <Footer />
    </>
  );
}
