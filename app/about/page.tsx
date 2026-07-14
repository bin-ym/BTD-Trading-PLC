import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/shared/Container";
import { AnimateInView, StaggerContainer, StaggerItem } from "@/components/shared/AnimateInView";
import { blurPlaceholder } from "@/lib/utils";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about BTD Trading PLC and our professional cleaning services in Ethiopia.",
};

const timeline = [
  {
    year: "2014",
    title: "Founded",
    description: "BTD Trading PLC was established with a vision to provide professional cleaning services.",
  },
  {
    year: "2016",
    title: "Expansion",
    description: "Expanded services to include hospital and healthcare facility cleaning.",
  },
  {
    year: "2019",
    title: "Growth",
    description: "Reached 200+ clients across Addis Ababa and surrounding areas.",
  },
  {
    year: "2023",
    title: "Recognition",
    description: "Awarded as one of Ethiopia's leading cleaning service providers.",
  },
  {
    year: "2025",
    title: "Present",
    description: "500+ successful projects and counting, serving offices, hospitals, and commercial facilities.",
  },
];

const team = [
  {
    name: "Operations Manager",
    description: "Oversees daily operations and service delivery",
    icon: Users,
  },
  {
    name: "Quality Supervisor",
    description: "Ensures consistent high-quality standards",
    icon: CheckCircle2,
  },
  {
    name: "Training Coordinator",
    description: "Manages staff training and certification",
    icon: Award,
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

          <Container className="relative">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                About Us
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight">
                Professional Cleaning Partner You Can Trust
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                BTD Trading PLC provides reliable and professional cleaning
                solutions for offices, commercial buildings, healthcare facilities,
                and institutions across Ethiopia.
              </p>
            </div>
          </Container>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 sm:py-24">
          <Container>
            <AnimateInView className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold">What Drives Us</h2>
              <p className="mt-4 text-muted-foreground">Our core principles guide every service we deliver</p>
            </AnimateInView>
            <StaggerContainer className="grid gap-8 md:grid-cols-3">
            <StaggerItem>
              <div className="group relative overflow-hidden rounded-3xl border bg-card p-8 transition-all hover:-translate-y-2 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold">Our Mission</h2>
                  <p className="mt-4 text-muted-foreground">
                    To deliver high-quality cleaning services that create healthier
                    and more productive environments for our clients across Ethiopia.
                  </p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="group relative overflow-hidden rounded-3xl border bg-card p-8 transition-all hover:-translate-y-2 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Eye className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold">Our Vision</h2>
                  <p className="mt-4 text-muted-foreground">
                    To become the most trusted and reliable cleaning and facility
                    service provider in Ethiopia, setting the standard for quality
                    and professionalism.
                  </p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="group relative overflow-hidden rounded-3xl border bg-card p-8 transition-all hover:-translate-y-2 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Heart className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold">Our Values</h2>
                  <p className="mt-4 text-muted-foreground">
                    Quality, reliability, professionalism, and customer
                    satisfaction are at the heart of everything we do.
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>        {/* Stats */}
      <section className="relative overflow-hidden bg-primary py-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1920&q=80')] bg-cover bg-center opacity-10" />
        <Container className="relative z-10">
          <StaggerContainer className="grid gap-8 text-center text-white md:grid-cols-4">
            <StaggerItem>
              <p className="text-4xl font-bold">10+</p>
              <p className="mt-2 text-primary-foreground/80">Years Experience</p>
            </StaggerItem>
            <StaggerItem>
              <p className="text-4xl font-bold">500+</p>
              <p className="mt-2 text-primary-foreground/80">Projects Completed</p>
            </StaggerItem>
            <StaggerItem>
              <p className="text-4xl font-bold">98%</p>
              <p className="mt-2 text-primary-foreground/80">Client Satisfaction</p>
            </StaggerItem>
            <StaggerItem>
              <p className="text-4xl font-bold">50+</p>
              <p className="mt-2 text-primary-foreground/80">Team Members</p>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>

      {/* Our Journey */}
      <section className="py-16 sm:py-24">
        <Container>
          <AnimateInView className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Our Journey</h2>
            <p className="mt-4 text-muted-foreground">
              From humble beginnings to becoming a leading cleaning service provider
            </p>
          </AnimateInView>

          <StaggerContainer className="mt-12 relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <StaggerItem key={item.year}>
                  <div
                    className={`relative flex items-center gap-8 md:grid md:grid-cols-2 ${index % 2 === 0 ? "md:grid-flow-dense" : ""
                      }`}
                  >
                    <div
                      className={`md:text-right ${index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                        }`}
                    >
                      <div className="rounded-2xl border bg-card p-6">
                        <span className="text-sm font-bold text-primary">
                          {item.year}
                        </span>
                        <h3 className="mt-1 font-semibold">{item.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex h-4 w-4 rounded-full bg-primary border-4 border-background" />

                    <div className={index % 2 === 0 ? "md:col-start-2" : "md:col-start-1"} />
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </Container>
      </section>        {/* Team Structure */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <Container>
          <AnimateInView className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Our Leadership</h2>
            <p className="mt-4 text-muted-foreground">
              Experienced professionals dedicated to delivering excellence
            </p>
          </AnimateInView>

          <AnimateInView className="relative h-48 sm:h-64 rounded-3xl overflow-hidden mb-12">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
              alt="Our professional team"
              fill
              className="object-cover"
              sizes="100vw"
              placeholder="blur"
              blurDataURL={blurPlaceholder}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </AnimateInView>

          <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-3">
            {team.map((member) => {
              const Icon = member.icon;
              return (
                <StaggerItem key={member.name}>
                  <div className="rounded-2xl border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mt-4 font-semibold">{member.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {member.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <Container>
          <AnimateInView>
            <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center md:px-12">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white md:text-4xl">
                  Ready to Work With Us?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                  Join hundreds of satisfied clients who trust BTD Trading PLC for
                  their cleaning needs.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-primary transition-all hover:bg-white/90 hover:shadow-lg"
                  >
                    Get in Touch
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 font-medium text-white transition-all hover:bg-white/10"
                  >
                    Our Services
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
