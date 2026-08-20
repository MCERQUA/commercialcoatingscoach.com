import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { StickyMobileCTA } from "@/components/shared/StickyMobileCTA";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.businessName} — Business Coaching for Commercial Coatings Contractors`,
    template: `%s | ${site.businessName}`,
  },
  description:
    "Business coaching for commercial and roof coatings contractors: sales, estimating, crew operations, marketing, and scaling systems. Book a free strategy call.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.businessName,
    title: `${site.businessName} — Business Coaching for Commercial Coatings Contractors`,
    description:
      "Business coaching for commercial and roof coatings contractors: sales, estimating, crew operations, marketing, and scaling systems.",
    images: [
      {
        url: "/images/hero-coach-consulting.jpg",
        width: 1200,
        height: 630,
        alt: site.businessName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.businessName} — Business Coaching for Commercial Coatings Contractors`,
    description:
      "Business coaching for commercial and roof coatings contractors: sales, estimating, crew operations, marketing, and scaling systems.",
    images: ["/images/hero-coach-consulting.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.businessName,
  description:
    "Business coaching and consulting for owners of commercial and roof coatings contracting companies — sales, estimating, crew operations, marketing, and scaling.",
  url: site.url,
  telephone: site.phoneDigits,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  areaServed: "US",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <SmoothScroll>
          {children}
          <StickyMobileCTA />
        </SmoothScroll>
      </body>
    </html>
  );
}
