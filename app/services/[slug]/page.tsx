import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceDetailContent } from "./ServiceDetailContent";

type ServiceSlug =
  | "office-cleaning"
  | "building-cleaning"
  | "commercial-cleaning"
  | "hospital-cleaning"
  | "service-galas-support";

const slugToKey = {
  "office-cleaning": "office",
  "building-cleaning": "building",
  "commercial-cleaning": "commercial",
  "hospital-cleaning": "hospital",
  "service-galas-support": "galas",
} as const;

const metadataBySlug: Record<
  ServiceSlug,
  { title: string; description: string }
> = {
  "building-cleaning": {
    title: "Building Cleanup & Maintenance (with polished finishes)",
    description:
      "Comprehensive building cleanup and maintenance services with floor scrubbing, buffing machines, squeegees, and polished finishes in Addis Ababa, Ethiopia.",
  },
  "service-galas-support": {
    title: "Service & Galas Support",
    description:
      "Specialized event, celebration, and gala sanitation and hospitality support with on-site shift leadership in Addis Ababa, Ethiopia.",
  },
  "office-cleaning": {
    title: "Office Cleaning",
    description:
      "Complete office cleaning services for workspaces, meeting rooms, and common areas in Addis Ababa, Ethiopia.",
  },
  "commercial-cleaning": {
    title: "Commercial Facility Cleaning",
    description:
      "Professional cleaning services for malls, shops, warehouses, and business facilities in Ethiopia.",
  },
  "hospital-cleaning": {
    title: "Hospital & Clinic Sanitation",
    description:
      "Professional medical-grade sanitation and cleaning services for hospitals and healthcare facilities in Ethiopia.",
  },
};

export function generateStaticParams() {
  return Object.keys(slugToKey).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = metadataBySlug[slug as ServiceSlug];
  return meta ?? { title: "Service Details | BTD Trading PLC" };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const key = slugToKey[slug as ServiceSlug];

  if (!key) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <ServiceDetailContent slug={key} />
      <Footer />
    </>
  );
}
