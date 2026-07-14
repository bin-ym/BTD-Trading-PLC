import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
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
    default: "BTD Trading PLC",
    template: "%s | BTD Trading PLC",
  },
  description:
    "Professional cleaning and facility management services for offices, commercial buildings, hospitals, and institutions in Ethiopia.",
  keywords: [
    "Cleaning Services",
    "Office Cleaning",
    "Commercial Cleaning",
    "Building Cleaning",
    "Hospital Cleaning",
    "Facility Management",
    "BTD Trading PLC",
    "Ethiopia",
  ],
  authors: [{ name: "BTD Trading PLC" }],
  creator: "BTD Trading PLC",
  applicationName: "BTD Trading PLC",
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
