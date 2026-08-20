import { Manrope, Inter } from "next/font/google";

// Font pairing locked by the Stitch design system (ai/research/design-system.md)
export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const headingFont = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  display: "swap",
});
