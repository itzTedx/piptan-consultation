import type { Metadata } from "next";

import { aloevera, helvetica } from "@/assets/fonts";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { cn } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = {
  title:
    "Piptan Consulting | Strategic Investment & Financial Advisory in Dubai",
  description:
    "Empowering individuals and businesses with strategic investment advice, risk management, and financial planning for long-term growth and stability.",
  openGraph: {
    title:
      "Piptan Consulting | Strategic Investment & Financial Advisory in Dubai",
    description:
      "Empowering individuals and businesses with strategic investment advice, risk management, and financial planning for long-term growth and stability.",
    url: "https://piptan.ae",
    siteName: "Piptan Consulting",
    images: [
      {
        url: "/images/business-man.webp", // Add a real image here
        width: 1200,
        height: 630,
        alt: "Piptan Consulting - Strategic Investment Advisory",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Piptan Consulting | Strategic Investment & Financial Advisory in Dubai",
    description:
      "Empowering individuals and businesses with strategic investment advice, risk management, and financial planning for long-term growth and stability.",
    images: ["/images/business-man.webp"], // Add a real image here
    creator: "@yourtwitterhandle", // Optional
  },
  metadataBase: new URL("https://piptan.ae"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          helvetica.className,
          aloevera.variable,
          "bg-foreground text-background relative antialiased"
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
