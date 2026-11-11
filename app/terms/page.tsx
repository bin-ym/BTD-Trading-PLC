import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPage } from "@/components/shared/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing the use of the BTD Trading PLC website and services.",
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
