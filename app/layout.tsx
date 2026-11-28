import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import {
  DEFAULT_OG_IMAGE,
  LOGO_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const googleVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() || undefined;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Professional Cleaning Services in Addis Ababa`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "BTD Trading PLC provides professional cleaning and facility support services in Addis Ababa, Ethiopia, including office, building, commercial, and hospital cleaning.",
  keywords: [
    "Cleaning Services Ethiopia",
    "Office Cleaning Addis Ababa",
    "Commercial Cleaning Ethiopia",
    "Building Cleaning Addis Ababa",
    "Hospital Cleaning Ethiopia",
    "Facility Management Ethiopia",
    "BTD Trading PLC",
    "Ethiopia Cleaning Company",
    "Megenagna Cleaning Services",
    "Amecha Cleaning",
    "Floor Polishing Addis Ababa",
    "Janitorial Services Addis Ababa",
    "የጽዳት አገልግሎት ኢትዮጵያ",
    "አዲስ አበባ የጽዳት ድርጅት",
    "የቢሮ ጽዳት",
    "የህንፃ ጽዳት",
    "ቢቲዲ ትሬዲንግ",
    "ቢቲዲ ትሬዲንግ ኃ/የተ/የግ/ማህበር",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  applicationName: SITE_NAME,
  category: "Business & Facility Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["am_ET"],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Professional Cleaning Services in Addis Ababa`,
    description:
      "BTD Trading PLC provides professional cleaning and facility support services in Addis Ababa, Ethiopia, backed by 40+ dedicated staff and on-site shift leaders.",
    images: [DEFAULT_OG_IMAGE, LOGO_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Professional Cleaning Services in Addis Ababa`,
    description:
      "Professional commercial, office, building, and hospital cleaning services in Addis Ababa, Ethiopia.",
    images: [DEFAULT_OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/logo.png", sizes: "1280x1280", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/images/logo.png" },
    ],
  },
  ...(googleVerification
    ? {
        verification: {
          google: googleVerification,
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="bg-background text-foreground min-h-screen overflow-x-hidden antialiased">
        <LanguageProvider>
          <ThemeProvider>
            <div className="ethiopian-stripe-top" />
            {children}
            <div className="ethiopian-stripe-bottom" />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
