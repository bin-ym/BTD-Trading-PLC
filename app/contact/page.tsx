import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema, buildPageMetadata, SITE_NAME } from "@/lib/seo";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = buildPageMetadata({
  absoluteTitle: `Contact ${SITE_NAME} | Cleaning Services in Addis Ababa`,
  description:
    "Contact BTD Trading PLC for commercial, office, building, and hospital cleaning services in Addis Ababa, Ethiopia. Located in Megenagna, Amecha. Call +251 928-57-12-96 or request a quote.",
  path: "/contact",
  keywords: [
    "Contact BTD Trading PLC",
    "Cleaning Services Quote Addis Ababa",
    "Office Cleaning Estimate Ethiopia",
    "Megenagna Cleaning Office",
    "BTD Trading Phone Number",
    "Cleaning Company Contact Addis Ababa",
    "Ethiopian Cleaning Contact",
  ],
  image: {
    url: "/images/work/work-01.jpg",
    width: 1280,
    height: 960,
    alt: "Contact BTD Trading PLC in Addis Ababa, Ethiopia",
  },
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <Navbar />
      <ContactContent />
      <Footer />
    </>
  );
}
