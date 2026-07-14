import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/shared/Container";
import { AnimateInView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateInView";
import { blurPlaceholder } from "@/lib/utils";
import {
  Building2,
  Hospital,
  Store,
  Briefcase,
  Sparkles,
  Shield,
  Clock,
  Heart,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional office, building, commercial, and hospital cleaning services in Ethiopia.",
};

const serviceImages = [
  "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80",
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
  "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80",
  "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
];

const services = [
  {
    slug: "office-cleaning",
    title: "Office Cleaning",
    shortDescription:
      "Complete office cleaning services for workspaces, meeting rooms, and common areas.",
    description:
      "Our comprehensive office cleaning services ensure your workspace remains clean, organized, and professional. We understand that a clean office environment is crucial for productivity and employee well-being.",
    features: [
      "Daily & weekly cleaning schedules",
      "Workspace and desk cleaning",
      "Meeting room sanitization",
      "Floor care and vacuuming",
      "Restroom cleaning & sanitization",
      "Kitchen and break room cleaning",
      "Window cleaning",
      "Trash removal and recycling",
    ],
    icon: Briefcase,
    color: "bg-blue-500",
  },
  {
    slug: "building-cleaning",
    title: "Building Cleaning",
    shortDescription:
      "Interior and exterior cleaning solutions for commercial and residential buildings.",
    description:
      "From high-rise buildings to residential complexes, our building cleaning services cover all aspects of property maintenance. We deliver thorough cleaning that enhances the appearance and longevity of your property.",
    features: [
      "Lobby and entrance cleaning",
      "Elevator cleaning",
      "Stairwell cleaning",
      "Exterior window washing",
      "Common area maintenance",
      "Parking lot cleaning",
      "Facade cleaning",
      "High-rise access cleaning",
    ],
    icon: Building2,
    color: "bg-sky-500",
  },
  {
    slug: "commercial-cleaning",
    title: "Commercial Facility Cleaning",
    shortDescription:
      "Professional cleaning services for malls, shops, warehouses, and business facilities.",
    description:
      "We provide specialized cleaning solutions for commercial facilities of all sizes. Our team is equipped to handle the unique challenges of retail spaces, warehouses, and business complexes.",
    features: [
      "Retail space cleaning",
      "Warehouse cleaning",
      "Showroom maintenance",
      "Storefront cleaning",
      "Stock room cleaning",
      "Loading dock cleaning",
      "Floor care for high-traffic areas",
      "Deep cleaning services",
    ],
    icon: Store,
    color: "bg-indigo-500",
  },
  {
    slug: "hospital-cleaning",
    title: "Hospital Cleaning",
    shortDescription:
      "Professional sanitation and cleaning services for hospitals and healthcare facilities.",
    description:
      "Healthcare facilities require the highest standards of cleanliness. Our hospital cleaning services follow strict protocols to ensure safe, hygienic environments for patients and staff.",
    features: [
      "Operating room cleaning",
      "Patient room sanitization",
      "Emergency room cleaning",
      "ICU cleaning",
      "Operating theater cleaning",
      "Medical equipment sanitization",
      "Waste disposal management",
      "Infection control cleaning",
    ],
    icon: Hospital,
    color: "bg-teal-500",
  },
];

const whyChooseUs = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Industry-leading cleaning standards with attention to detail",
  },
  {
    icon: Shield,
    title: "Trusted & Insured",
    description: "Fully bonded and insured services for your peace of mind",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Services available 24/7 to minimize disruption",
  },
  {
    icon: Heart,
    title: "Eco-Friendly",
    description: "Safe, green cleaning products available on request",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

          <Container>
            <AnimateInView className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Our Services
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight">
                Professional Cleaning Solutions
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                Comprehensive cleaning services tailored to meet the unique needs
                of your business or facility
              </p>
            </AnimateInView>
          </Container>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-24">
          <Container>
            <StaggerContainer className="grid gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <StaggerItem key={service.slug}>
                    <div className="group overflow-hidden rounded-3xl border bg-card transition-all hover:shadow-xl">
                      <div className="grid lg:grid-cols-3">
                        {/* Image */}
                        <div className="relative h-48 sm:h-full lg:col-span-1 overflow-hidden">
                          <Image
                            src={serviceImages[index]}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                            placeholder="blur"
                            blurDataURL={blurPlaceholder}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/40 to-transparent" />
                          <div className="absolute bottom-4 left-4 lg:top-4 lg:bottom-auto">
                            <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${service.color} text-white shadow-lg`}
                            >
                              <Icon className="h-7 w-7" />
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 lg:col-span-2">
                          <h2 className="text-2xl font-bold">{service.title}</h2>
                          <p className="mt-2 text-muted-foreground">
                            {service.shortDescription}
                          </p>
                          <p className="mt-4 text-muted-foreground">{service.description}</p>

                          <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            {service.features.slice(0, 6).map((feature) => (
                              <div
                                key={feature}
                                className="flex items-center gap-2"
                              >
                                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>

                          <Link
                            href={`/services/${service.slug}`}
                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all"
                          >
                            Learn more
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </Container>
        </section>

        {/* Why Choose Us */}
        <section className="bg-muted/30 py-16 sm:py-24">
          <Container>
            <AnimateInView className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold">Why Choose BTD Trading PLC?</h2>
              <p className="mt-4 text-muted-foreground">
                We are committed to delivering exceptional cleaning services that
                exceed your expectations
              </p>
            </AnimateInView>

            <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {whyChooseUs.map((item) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={item.title}>
                    <div className="rounded-2xl border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg">
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <Container>
            <AnimateInView>
              <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center md:px-12">
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-white md:text-4xl">
                    Ready to Transform Your Space?
                  </h2>
                  <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                    Get a free quote for your cleaning needs. Our team is ready to
                    provide you with professional, reliable service.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-primary transition-all hover:bg-white/90 hover:shadow-lg"
                    >
                      Get a Free Quote
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 font-medium text-white transition-all hover:bg-white/10"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>

                <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              </div>
            </AnimateInView>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}