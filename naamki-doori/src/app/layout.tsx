import React from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NaamKi_Doori — Every Stitch Tells A Story | Custom Embroidery",
  description:
    "NaamKi_Doori crafts bespoke embroidered pieces — personalized tote bags, apparel, handkerchiefs, and custom name embroidery. Each creation is a bridge between tradition and contemporary elegance.",
  keywords: [
    "custom embroidery",
    "personalized gifts",
    "embroidered tote bags",
    "name embroidery",
    "handmade gifts India",
    "luxury embroidery",
    "NaamKi_Doori",
  ],
  openGraph: {
    title: "NaamKi_Doori — Every Stitch Tells A Story",
    description:
      "Bespoke embroidered pieces that transform your name into timeless textile art.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
