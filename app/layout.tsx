import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { StructuredData } from "@/components/shared/StructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.btdtradingplc.com"),
  title: {
    default: "BTD Trading PLC - Professional Cleaning & Facility Services in Ethiopia",
    template: "%s | BTD Trading PLC",
  },
  description:
    "BTD Trading PLC is a trusted Ethiopian company offering professional commercial cleaning, office maintenance, building cleanup with polished finishes, and healthcare sanitation in Addis Ababa, Ethiopia.",
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
  authors: [{ name: "BTD Trading PLC", url: "https://www.btdtradingplc.com" }],
  creator: "BTD Trading PLC",
  publisher: "BTD Trading PLC",
  applicationName: "BTD Trading PLC",
  category: "Business & Facility Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.btdtradingplc.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["am_ET"],
    url: "https://www.btdtradingplc.com",
    siteName: "BTD Trading PLC",
    title: "BTD Trading PLC - Professional Cleaning & Facility Services in Ethiopia",
    description:
      "Trusted cleaning and facility support in Addis Ababa, Ethiopia. 40+ staff, high-shine floor polishing, hospital disinfection, and full office maintenance.",
    images: [
      {
        url: "/images/work/work-08.jpg",
        width: 1200,
        height: 630,
        alt: "BTD Trading PLC - Professional Cleaning Staff at Work in Addis Ababa",
      },
      {
        url: "/images/logo.png",
        width: 800,
        height: 800,
        alt: "BTD Trading PLC Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BTD Trading PLC - Professional Cleaning & Facility Services in Ethiopia",
    description:
      "Trusted commercial, office, building and healthcare cleaning services in Addis Ababa, Ethiopia. 40+ dedicated staff and modern equipment.",
    images: ["/images/work/work-08.jpg"],
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
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
        <StructuredData />
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
