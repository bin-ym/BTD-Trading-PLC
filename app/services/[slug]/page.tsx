import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBreadcrumbSchema,
  buildPageMetadata,
  buildServiceSchema,
  type OgImageSpec,
} from "@/lib/seo";
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
  breadcrumbLabel: string;
  serviceName: string;
  serviceType: string;
  description: string;
  keywords: string[];
  image: OgImageSpec;
}

const metadataBySlug: Record<ServiceSlug, ServiceMetaInfo> = {
  "building-cleaning": {
    title: "Building Cleaning & Polishing Services in Addis Ababa",
    breadcrumbLabel: "Building Cleaning",
    serviceName: "Building Cleanup & Maintenance (with polished finishes)",
    serviceType: "Building Cleaning Service",
    description:
      "Comprehensive building cleanup and maintenance services with rotary floor scrubbing, buffing machines, squeegees, and high-shine polished finishes in Addis Ababa, Ethiopia.",
    keywords: [
      "Building Cleaning Addis Ababa",
      "Floor Buffing Ethiopia",
      "Post Construction Cleaning Addis Ababa",
      "Floor Scrubbing Machine Ethiopia",
      "High Shine Floor Polish Addis Ababa",
    ],
    image: {
      url: "/images/work/work-11.jpg",
      width: 1280,
      height: 960,
      alt: "Building Cleanup and Polished Floor Maintenance in Addis Ababa",
    },
  },
  "office-cleaning": {
    title: "Office Cleaning Services in Addis Ababa",
    breadcrumbLabel: "Office Cleaning",
    serviceName: "Office Cleaning",
    serviceType: "Office Cleaning Service",
    description:
      "Complete office cleaning services for workspaces, meeting rooms, executive boardrooms, and restrooms in Addis Ababa, Ethiopia. Daily and contract-based janitorial services.",
    keywords: [
      "Office Cleaning Addis Ababa",
      "Corporate Janitorial Services Ethiopia",
      "Workplace Sanitation Addis Ababa",
      "Office Cleaner Contract Ethiopia",
    ],
    image: {
      url: "/images/work/work-01.jpg",
      width: 1280,
      height: 960,
      alt: "Corporate Office Cleaning Services in Addis Ababa",
    },
  },
  "commercial-cleaning": {
    title: "Commercial Cleaning Services in Addis Ababa",
    breadcrumbLabel: "Commercial Cleaning",
    serviceName: "Commercial Facility Cleaning",
    serviceType: "Commercial Cleaning Service",
    description:
      "Professional cleaning services for shopping malls, retail stores, warehouses, and commercial complexes in Addis Ababa, Ethiopia.",
    keywords: [
      "Commercial Cleaning Ethiopia",
      "Shopping Mall Cleaning Addis Ababa",
      "Warehouse Cleaning Addis Ababa",
      "Retail Facility Maintenance Ethiopia",
    ],
    image: {
      url: "/images/work/work-07.jpg",
      width: 1280,
      height: 960,
      alt: "Commercial Facility and Shopping Complex Cleaning in Addis Ababa",
    },
  },
  "hospital-cleaning": {
    title: "Hospital & Healthcare Cleaning Services in Addis Ababa",
    breadcrumbLabel: "Hospital Cleaning",
    serviceName: "Hospital & Clinic Sanitation",
    serviceType: "Healthcare Cleaning and Sanitation Service",
    description:
      "Hospital-grade disinfection and strict sanitation services for hospitals, clinics, and healthcare facilities in Addis Ababa, Ethiopia.",
    keywords: [
      "Hospital Cleaning Ethiopia",
      "Healthcare Sanitation Addis Ababa",
      "Clinic Disinfection Services Ethiopia",
      "Medical Cleaning Addis Ababa",
    ],
    image: {
      url: "/images/work/work-08.jpg",
      width: 960,
      height: 1280,
      alt: "Hospital and Healthcare Sanitation Services in Addis Ababa",
    },
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
      title: "Service Details",
      description: "Professional cleaning services in Addis Ababa, Ethiopia.",
    };
  }

  return buildPageMetadata({
    title: meta.title,
    description: meta.description,
    path: `/services/${slug}`,
    keywords: meta.keywords,
    image: meta.image,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const key = slugToKey[slug as ServiceSlug];
  const meta = metadataBySlug[slug as ServiceSlug];

  if (!key || !meta) {
    notFound();
  }

  const servicePath = `/services/${slug}`;

  return (
    <>
      <JsonLd
        data={buildServiceSchema({
          name: meta.serviceName,
          serviceType: meta.serviceType,
          description: meta.description,
          path: servicePath,
          image: meta.image.url,
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: meta.breadcrumbLabel, path: servicePath },
        ])}
      />
      <Navbar />
      <ServiceDetailContent slug={key} />
      <Footer />
    </>
  );
}
