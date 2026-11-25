import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BTD Trading PLC - Professional Cleaning Services",
    short_name: "BTD Trading",
    description:
      "BTD Trading PLC is a trusted Ethiopian cleaning and facility management company in Addis Ababa, Ethiopia.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/images/logo.png",
        sizes: "1280x1280",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
