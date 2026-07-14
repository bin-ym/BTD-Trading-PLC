import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Process } from "@/components/home/Process";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
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