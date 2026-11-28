import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildLocalBusinessSchema,
  buildPageMetadata,
  buildWebSiteSchema,
  SITE_NAME,
} from "@/lib/seo";

import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Process } from "@/components/home/Process";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = buildPageMetadata({
  absoluteTitle: `${SITE_NAME} | Professional Cleaning Services in Addis Ababa`,
  description:
    "BTD Trading PLC provides professional cleaning and facility support services in Addis Ababa, Ethiopia, including office, building, commercial, and hospital cleaning.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={buildWebSiteSchema()} />
      <JsonLd data={buildLocalBusinessSchema()} />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
