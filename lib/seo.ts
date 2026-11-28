import type { Metadata } from "next";

export const SITE_URL = "https://www.btdtradingplc.com";
export const SITE_NAME = "BTD Trading PLC";
export const SITE_ALTERNATE_NAME = "ቢቲዲ ትሬዲንግ ኃ.የተ. የግል. ማህበር";

export const BUSINESS_INFO = {
  name: SITE_NAME,
  alternateName: SITE_ALTERNATE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  email: "info@btdtrading.com",
  telephone: [
    "+251 928-57-12-96",
    "+251 939-00-87-72",
    "+251 904-35-17-31",
  ],
  address: {
    streetAddress: "Megenagna, Amecha",
    addressLocality: "Addis Ababa",
    addressCountry: "ET",
  },
  geo: {
    latitude: 9.016333,
    longitude: 38.805167,
  },
} as const;

export interface OgImageSpec {
  url: string;
  width: number;
  height: number;
  alt: string;
}

export const DEFAULT_OG_IMAGE: OgImageSpec = {
  url: "/images/work/work-01.jpg",
  width: 1280,
  height: 960,
  alt: "BTD Trading PLC professional cleaning team in Addis Ababa",
};

export const LOGO_OG_IMAGE: OgImageSpec = {
  url: "/images/logo.png",
  width: 1280,
  height: 1280,
  alt: "BTD Trading PLC Logo",
};

export function canonicalUrl(path: string = "/"): string {
  if (path === "/" || path === "") {
    return SITE_URL;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function buildPageMetadata({
  title,
  absoluteTitle,
  description,
  path,
  keywords,
  image = DEFAULT_OG_IMAGE,
}: {
  title?: string;
  absoluteTitle?: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: OgImageSpec;
}): Metadata {
  const url = canonicalUrl(path);
  const fullTitle = absoluteTitle ?? `${title} | ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      alternateLocale: ["am_ET"],
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS_INFO.name,
    alternateName: BUSINESS_INFO.alternateName,
    url: BUSINESS_INFO.url,
    logo: BUSINESS_INFO.logo,
    description:
      "Professional cleaning and facility support company in Addis Ababa, Ethiopia.",
    email: BUSINESS_INFO.email,
    telephone: [...BUSINESS_INFO.telephone],
    address: {
      "@type": "PostalAddress",
      ...BUSINESS_INFO.address,
    },
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: ["ቢቲዲ ትሬዲንግ", "BTD Trading"],
    url: SITE_URL,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "CleaningService"],
    "@id": `${SITE_URL}/#localbusiness`,
    name: BUSINESS_INFO.name,
    alternateName: BUSINESS_INFO.alternateName,
    description:
      "Professional cleaning and facility support services in Addis Ababa, Ethiopia, including office, building, commercial, and hospital cleaning with 40+ dedicated staff and on-site shift leaders.",
    url: BUSINESS_INFO.url,
    logo: BUSINESS_INFO.logo,
    image: [
      `${SITE_URL}/images/work/work-01.jpg`,
      `${SITE_URL}/images/work/work-11.jpg`,
      `${SITE_URL}/images/work/work-07.jpg`,
      `${SITE_URL}/images/work/work-08.jpg`,
    ],
    telephone: [...BUSINESS_INFO.telephone],
    email: BUSINESS_INFO.email,
    address: {
      "@type": "PostalAddress",
      ...BUSINESS_INFO.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Addis Ababa",
      },
      {
        "@type": "Country",
        name: "Ethiopia",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning & Facility Support Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Building Cleanup & Maintenance (with polished finishes)",
            url: `${SITE_URL}/services/building-cleaning`,
            description:
              "Interior, exterior, and post-construction cleanup with high-shine floor scrubbing, buffing machine maintenance, and polished finishes.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Office Cleaning",
            url: `${SITE_URL}/services/office-cleaning`,
            description:
              "Complete office cleaning for workspaces, meeting rooms, floors, and common areas.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Facility Cleaning",
            url: `${SITE_URL}/services/commercial-cleaning`,
            description:
              "Specialized cleaning for shopping malls, shops, warehouses, and commercial complexes.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hospital & Clinic Sanitation",
            url: `${SITE_URL}/services/hospital-cleaning`,
            description:
              "Medical-grade disinfection and sanitation services for hospitals, healthcare facilities, and clinics.",
          },
        },
      ],
    },
  };
}

export function buildServiceSchema({
  name,
  serviceType,
  description,
  path,
  image,
}: {
  name: string;
  serviceType: string;
  description: string;
  path: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    description,
    url: canonicalUrl(path),
    image: image.startsWith("http") ? image : `${SITE_URL}${image}`,
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: BUSINESS_INFO.name,
      url: BUSINESS_INFO.url,
    },
    areaServed: {
      "@type": "City",
      name: "Addis Ababa",
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}
