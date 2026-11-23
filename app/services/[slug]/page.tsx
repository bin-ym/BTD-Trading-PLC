import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceDetailContent } from "./ServiceDetailContent";

type ServiceSlug =
  | "office-cleaning"
  | "building-cleaning"
  | "commercial-cleaning"
  | "hospital-cleaning";

const slugToKey = {
  "office-cleaning": "office",
  "building-cleaning": "building",
  "commercial-cleaning": "commercial",
  "hospital-cleaning": "hospital",
} as const;

interface ServiceMetaInfo {
  title: string;
  description: string;
  keywords: string[];
  image: string;
}

const metadataBySlug: Record<ServiceSlug, ServiceMetaInfo> = {
  "building-cleaning": {
    title: "Building Cleanup & Maintenance (with Polished Finishes) | Addis Ababa",
    description:
      "Comprehensive building cleanup and maintenance services with rotary floor scrubbing, buffing machines, squeegees, and high-shine polished finishes in Addis Ababa, Ethiopia.",
    keywords: [
      "Building Cleaning Addis Ababa",
      "Floor Buffing Ethiopia",
      "Post Construction Cleaning Addis Ababa",
      "Floor Scrubbing Machine Ethiopia",
      "High Shine Floor Polish Addis Ababa",
    ],
    image: "/images/work/work-05.jpg",
  },
  "office-cleaning": {
    title: "Professional Office Cleaning Services | Addis Ababa, Ethiopia",
    description:
      "Complete office cleaning services for workspaces, meeting rooms, executive boardrooms, and restrooms in Addis Ababa, Ethiopia. Daily and contract-based janitorial services.",
    keywords: [
      "Office Cleaning Addis Ababa",
      "Corporate Janitorial Services Ethiopia",
      "Workplace Sanitation Addis Ababa",
      "Office Cleaner Contract Ethiopia",
    ],
    image: "/images/work/work-01.jpg",
  },
  "commercial-cleaning": {
    title: "Commercial Facility & Mall Cleaning | Addis Ababa, Ethiopia",
    description:
      "Professional cleaning services for shopping malls, retail stores, warehouses, and commercial complexes in Ethiopia. Heavy-duty floor care and waste management.",
    keywords: [
      "Commercial Cleaning Ethiopia",
      "Shopping Mall Cleaning Addis Ababa",
      "Warehouse Cleaning Addis Ababa",
      "Retail Facility Maintenance Ethiopia",
    ],
    image: "/images/work/work-07.jpg",
  },
  "hospital-cleaning": {
    title: "Hospital & Healthcare Sanitation Services | Addis Ababa, Ethiopia",
    description:
      "Hospital-grade disinfection and strict medical sanitation services for healthcare facilities, clinics, and diagnostic laboratories across Ethiopia.",
    keywords: [
      "Hospital Cleaning Ethiopia",
      "Healthcare Sanitation Addis Ababa",
      "Clinic Disinfection Services Ethiopia",
      "Medical Cleaning Addis Ababa",
    ],
    image: "/images/work/work-08.jpg",
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

  if (!meta) {
    return {
      title: "Service Details | BTD Trading PLC",
      description: "Professional cleaning services in Addis Ababa, Ethiopia.",
    };
  }

  const canonicalUrl = `https://www.btdtradingplc.com/services/${slug}`;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${meta.title} | BTD Trading PLC`,
      description: meta.description,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: meta.image,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [meta.image],
    },
  };
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
