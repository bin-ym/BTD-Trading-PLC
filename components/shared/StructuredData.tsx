import Script from "next/script";

export function StructuredData() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BTD Trading PLC",
    alternateName: ["ቢቲዲ ትሬዲንግ", "BTD Cleaning Services Addis Ababa", "BTD Trading"],
    url: "https://www.btdtradingplc.com",
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "CleaningService"],
    name: "BTD Trading PLC",
    alternateName: "ቢቲዲ ትሬዲንግ ኃ.የተ. የግል. ማህበር",
    description:
      "Professional cleaning and facility support services in Addis Ababa, Ethiopia. 40+ dedicated staff members, on-site shift leaders, flexible short- and long-term contracts, and high-shine polished finishes.",
    url: "https://www.btdtradingplc.com",
    logo: "https://www.btdtradingplc.com/images/logo.png",
    image: [
      "https://www.btdtradingplc.com/images/work/work-08.jpg",
      "https://www.btdtradingplc.com/images/work/work-01.jpg",
      "https://www.btdtradingplc.com/images/work/work-05.jpg",
    ],
    telephone: [
      "+251 928-57-12-96",
      "+251 939-00-87-72",
      "+251 904-35-17-31",
    ],
    email: "info@btdtrading.com",
    priceRange: "$$",
    currenciesAccepted: "ETB",
    paymentAccepted: "Cash, Bank Transfer, Telebirr, CBE",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Megenagna, Amecha",
      addressLocality: "Addis Ababa",
      addressCountry: "ET",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "9.016333",
      longitude: "38.805167",
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
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
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "40+",
      description: "Dedicated field staff members managed by on-site shift leaders",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Professional Cleaning & Facility Support Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Building Cleanup & Maintenance (with polished finishes)",
            url: "https://www.btdtradingplc.com/services/building-cleaning",
            description:
              "Interior, exterior, and post-construction cleanup with high-shine floor scrubbing, buffing machine maintenance, and polished finishes.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Office Cleaning",
            url: "https://www.btdtradingplc.com/services/office-cleaning",
            description:
              "Complete office cleaning for workspaces, boardrooms, floors, and common areas.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Facility Cleaning",
            url: "https://www.btdtradingplc.com/services/commercial-cleaning",
            description:
              "Specialized cleaning for shopping malls, stores, warehouses, and commercial complexes.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hospital & Healthcare Sanitation",
            url: "https://www.btdtradingplc.com/services/hospital-cleaning",
            description:
              "Strict hospital-grade disinfection and sanitation services for healthcare facilities and clinics.",
          },
        },
      ],
    },
  };

  const inventorySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "BTD Trading PLC - Equipment & Materials Inventory",
    description:
      "Standard cleaning equipment and materials tailored to facility requirements.",
    numberOfItems: 12,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Mops",
        description: "Floor cleaning & excess water wringing",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Brooms",
        description: "General sweeping",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Buckets & Wringers",
        description: "Cleaning, water handling, and water removal",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Vacuum Cleaners",
        description: "Dust and surface extraction",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Cleaning Cloths, Rags, & Dusters",
        description: "Surface wiping and dusting",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Brushes & Sponges",
        description: "Detailed cleaning and surface scrubbing",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Waste Bins, Trash Cans, & Bags",
        description: "Waste and garbage collection",
      },
      {
        "@type": "ListItem",
        position: 8,
        name: "Protective Equipment & Uniforms",
        description: "Staff safety, hygiene, and identification",
      },
      {
        "@type": "ListItem",
        position: 9,
        name: "Polishing & Buffing Machines",
        description: "Floor scrubbing and high-shine maintenance",
      },
      {
        "@type": "ListItem",
        position: 10,
        name: "Squeegees & Scrapers",
        description: "Window, surface, and tough residue cleaning",
      },
      {
        "@type": "ListItem",
        position: 11,
        name: "Specialized Chemicals & Detergents",
        description:
          "Disinfection, stain removal, and glass/surface polish (including Vim, Dettol/restroom cleaners, and glass cleaners)",
      },
      {
        "@type": "ListItem",
        position: 12,
        name: "Paper Towels & Tissues",
        description: "Drying and final surface detailing",
      },
    ],
  };

  return (
    <>
      <Script
        id="website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="business-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <Script
        id="inventory-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(inventorySchema) }}
      />
    </>
  );
}
