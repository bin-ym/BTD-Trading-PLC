import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
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
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    Clock,
    Shield,
    Star,
} from "lucide-react";

const serviceImages: Record<string, string> = {
    "office-cleaning": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1200&q=80",
    "building-cleaning": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80",
    "commercial-cleaning": "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1200&q=80",
    "hospital-cleaning": "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80",
};

export const metadata: Metadata = {
    title: "Service Details",
    description: "Professional cleaning services details.",
};

const services = {
    "office-cleaning": {
        title: "Office Cleaning",
        description:
            "Complete office cleaning services for workspaces, meeting rooms, and common areas. We understand that a clean office environment is crucial for productivity and employee well-being.",
        icon: Briefcase,
        color: "bg-blue-500",
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
        benefits: [
            "Professional appearance for clients",
            "Healthier work environment",
            "Increased employee productivity",
            "Reduced sick days",
        ],
    },
    "building-cleaning": {
        title: "Building Cleaning",
        description:
            "Interior and exterior cleaning solutions for commercial and residential buildings. We deliver thorough cleaning that enhances the appearance and longevity of your property.",
        icon: Building2,
        color: "bg-sky-500",
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
        benefits: [
            "Enhanced curb appeal",
            "Property value preservation",
            "Safe and clean common areas",
            "Professional building image",
        ],
    },
    "commercial-cleaning": {
        title: "Commercial Facility Cleaning",
        description:
            "Professional cleaning services for malls, shops, warehouses, and business facilities. Our team handles unique challenges of retail spaces and business complexes.",
        icon: Store,
        color: "bg-indigo-500",
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
        benefits: [
            "Customer-friendly environment",
            "Inventory protection",
            "Compliance with health standards",
            "Safe working conditions",
        ],
    },
    "hospital-cleaning": {
        title: "Hospital Cleaning",
        description:
            "Professional sanitation and cleaning services for hospitals and healthcare facilities. Our protocols ensure safe, hygienic environments for patients and staff.",
        icon: Hospital,
        color: "bg-teal-500",
        features: [
            "Operating room cleaning",
            "Patient room sanitization",
            "Emergency room cleaning",
            "ICU cleaning",
            "Medical equipment sanitization",
            "Waste disposal management",
            "Infection control cleaning",
            "High-touch surface cleaning",
        ],
        benefits: [
            "Infection prevention",
            "Patient safety",
            "Regulatory compliance",
            "Staff protection",
        ],
    },
};

export async function generateStaticParams() {
    return Object.keys(services).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const service = services[slug as keyof typeof services];

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    return (
        <>
            <Navbar />
            <main className="pt-16">
                {/* Hero */}
                <section className="relative flex min-h-[50vh] sm:min-h-[60vh] items-center justify-center overflow-hidden py-16 sm:py-24">
                    {/* Background image */}
                    <Image
                        src={serviceImages[slug]}
                        alt={service.title}
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                        placeholder="blur"
                        blurDataURL={blurPlaceholder}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-background/70 to-background/80" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

                    <Container className="relative z-10">
                        <div className="mb-8">
                            <Link
                                href="/services"
                                className="group inline-flex items-center gap-2 rounded-full border bg-background/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-all hover:bg-muted hover:shadow-md"
                            >
                                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                                Back to Services
                            </Link>
                        </div>

                        <AnimateInView className="mx-auto max-w-3xl text-center">
                            <div
                                className={`mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl ${service.color} text-white shadow-lg`}
                            >
                                <Icon className="h-10 w-10" />
                            </div>

                            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                                {service.title}
                            </h1>
                            <p className="mt-4 text-lg text-white/80">
                                {service.description}
                            </p>
                        </AnimateInView>
                    </Container>
                </section>

                {/* Features */}
                <section className="py-16 sm:py-24">
                    <Container>
                        <div className="mx-auto max-w-3xl">
                            <AnimateInView>
                                <h2 className="text-3xl font-bold">What&apos;s Included</h2>
                                <p className="mt-4 text-muted-foreground">
                                    Our comprehensive {service.title.toLowerCase()} package covers all
                                    your cleaning needs
                                </p>
                            </AnimateInView>

                            <StaggerContainer className="mt-8 grid gap-4 sm:grid-cols-2">
                                {service.features.map((feature) => (
                                    <StaggerItem key={feature}>
                                        <div className="flex items-start gap-3 rounded-xl border bg-card p-4">
                                            <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                                            <span className="text-sm">{feature}</span>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    </Container>
                </section>

                {/* Benefits */}
                <section className="bg-muted/30 py-16 sm:py-24">
                    <Container>
                        <div className="mx-auto max-w-3xl">
                            <AnimateInView>
                                <h2 className="text-3xl font-bold">Key Benefits</h2>
                                <p className="mt-4 text-muted-foreground">
                                    Why choosing our {service.title.toLowerCase()} makes a difference
                                </p>
                            </AnimateInView>

                            <StaggerContainer className="mt-8 space-y-4">
                                {service.benefits.map((benefit) => (
                                    <StaggerItem key={benefit}>
                                        <div className="flex items-center gap-4 rounded-xl border bg-card p-5">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                                <Star className="h-5 w-5 text-primary" />
                                            </div>
                                            <span className="font-medium">{benefit}</span>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    </Container>
                </section>

                {/* Why Choose Us */}
                <section className="py-16 sm:py-24">
                    <Container>
                        <AnimateInView className="mx-auto max-w-3xl text-center mb-12">
                            <h2 className="text-3xl font-bold">Why Choose Us</h2>
                            <p className="mt-4 text-muted-foreground">
                                We are committed to delivering exceptional service quality
                            </p>
                        </AnimateInView>
                        <StaggerContainer className="grid gap-8 md:grid-cols-3">
                            <StaggerItem>
                                <div className="rounded-2xl border bg-card p-6 text-center">
                                    <Clock className="mx-auto h-10 w-10 text-primary" />
                                    <h3 className="mt-4 font-semibold">Flexible Scheduling</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        Services available before, during, or after business hours
                                    </p>
                                </div>
                            </StaggerItem>
                            <StaggerItem>
                                <div className="rounded-2xl border bg-card p-6 text-center">
                                    <Shield className="mx-auto h-10 w-10 text-primary" />
                                    <h3 className="mt-4 font-semibold">Fully Insured</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        Comprehensive insurance coverage for peace of mind
                                    </p>
                                </div>
                            </StaggerItem>
                            <StaggerItem>
                                <div className="rounded-2xl border bg-card p-6 text-center">
                                    <CheckCircle2 className="mx-auto h-10 w-10 text-primary" />
                                    <h3 className="mt-4 font-semibold">Satisfaction Guaranteed</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        We ensure you&apos;re happy with our service, every time
                                    </p>
                                </div>
                            </StaggerItem>
                        </StaggerContainer>
                    </Container>
                </section>

                {/* CTA */}
                <section className="py-16 sm:py-24">
                    <Container>
                        <AnimateInView>
                            <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center md:px-12">
                                <div className="relative z-10">
                                    <h2 className="text-3xl font-bold text-white md:text-4xl">
                                        Get a Free Quote Today
                                    </h2>
                                    <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                                        Contact us to discuss your {service.title.toLowerCase()} needs.
                                        We&apos;ll provide a customized quote tailored to your requirements.
                                    </p>
                                    <div className="mt-8">
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-primary transition-all hover:bg-white/90 hover:shadow-lg"
                                        >
                                            Request a Quote
                                            <ArrowRight className="h-4 w-4" />
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