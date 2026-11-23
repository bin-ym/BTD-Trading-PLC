import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPage } from "@/components/shared/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | BTD Trading PLC",
  description:
    "How BTD Trading PLC collects, uses, and protects customer information in accordance with privacy best practices in Ethiopia.",
  alternates: {
    canonical: "https://www.btdtradingplc.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | BTD Trading PLC",
    description: "Read BTD Trading PLC's privacy and data protection policy.",
    url: "https://www.btdtradingplc.com/privacy",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <LegalPage kind="privacy" />
      <Footer />
    </>
  );
}
