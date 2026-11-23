import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPage } from "@/components/shared/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | BTD Trading PLC",
  description:
    "Terms and conditions governing the use of BTD Trading PLC website and contracted cleaning and facility support services.",
  alternates: {
    canonical: "https://www.btdtradingplc.com/terms",
  },
  openGraph: {
    title: "Terms of Service | BTD Trading PLC",
    description: "Read BTD Trading PLC's terms of service and service contracts.",
    url: "https://www.btdtradingplc.com/terms",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <LegalPage kind="terms" />
      <Footer />
    </>
  );
}
