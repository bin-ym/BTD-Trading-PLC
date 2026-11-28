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
  title: "Terms of Service",
  description:
    "Read the terms and conditions governing the use of the BTD Trading PLC website and our cleaning and facility support services in Ethiopia.",
  path: "/terms",
  image: LOGO_OG_IMAGE,
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ])}
      />
      <Navbar />
      <LegalPage kind="terms" />
      <Footer />
    </>
  );
}
