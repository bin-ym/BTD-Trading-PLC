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
  metadataBase: new URL("https://btdtrading.com"),
  title: {
    default: "BTD Trading PLC - Professional Cleaning & Trading Services in Ethiopia",
    template: "%s | BTD Trading PLC",
  },
  description:
    "BTD Trading PLC is a trusted Ethiopian company offering professional cleaning and facility management services for offices, commercial buildings, hospitals, and institutions in Addis Ababa, Ethiopia.",
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
    "ጥffield አገልግሎት ኢትዮጵያ",
    "ቢቲዲ ትሬዲንግ",
  ],
  authors: [{ name: "BTD Trading PLC" }],
  creator: "BTD Trading PLC",
  applicationName: "BTD Trading PLC",
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
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
