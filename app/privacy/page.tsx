import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { LegalPage } from "@/components/shared/LegalPage";
import {
  buildBreadcrumbSchema,
  buildPageMetadata,
  LOGO_OG_IMAGE,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "Learn how BTD Trading PLC collects, uses, and protects information shared through our website and service channels in Addis Ababa, Ethiopia.",
  path: "/privacy",
  image: LOGO_OG_IMAGE,
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <Navbar />
      <LegalPage kind="privacy" />
      <Footer />
    </>
  );
}
