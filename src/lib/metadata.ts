import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "NW Premium Design LLC | Cabinet Installer & Kitchen Remodeler Seattle",
    template: "%s | NW Premium Design LLC",
  },
  description:
    "Seattle's trusted cabinet installer and kitchen remodeler serving Bellevue, Tacoma, Kirkland, Redmond, Renton, Auburn, Kent & the greater Puget Sound area. IKEA, European & custom cabinets. Free estimates.",
  keywords: [
    "cabinet installer Seattle",
    "kitchen remodeler Seattle",
    "IKEA cabinet installation Seattle",
    "kitchen remodel Seattle WA",
    "bathroom remodel Seattle",
    "cabinet installer near me",
    "kitchen remodeler near me",
    "NW Premium Design",
    "kitchen renovation Seattle",
    "cabinet supply Seattle",
    "remodeling contractor Seattle",
    "cabinet installer Bellevue",
    "kitchen remodel Bellevue WA",
    "cabinet installer Tacoma",
    "kitchen remodel Tacoma",
    "cabinet installer Kirkland",
    "kitchen remodel Redmond WA",
    "cabinet installer Renton",
    "kitchen remodel Auburn WA",
    "cabinet installer Kent WA",
    "IKEA cabinet installer Puget Sound",
    "kitchen remodel Federal Way",
    "bathroom remodel Bellevue",
    "cabinet installation Sammamish",
    "kitchen renovation Issaquah",
    "remodeling contractor Puget Sound",
    "kitchen cabinet installer greater Seattle area",
  ],
  authors: [{ name: "NW Premium Design LLC" }],
  creator: "NW Premium Design LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "NW Premium Design LLC",
    title:
      "NW Premium Design LLC | Cabinet Installer & Kitchen Remodeler Seattle",
    description:
      "Seattle & greater Puget Sound's trusted cabinet installer and kitchen remodeler. Serving Bellevue, Tacoma, Kirkland, Redmond & more. Free estimates.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NW Premium Design LLC — Seattle Kitchen Remodeling & Cabinet Installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NW Premium Design LLC | Seattle Cabinet Installer",
    description:
      "Seattle's trusted cabinet installer and kitchen remodeler. Free estimates.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
      "x-default": SITE_URL,
    },
  },
};

export function buildPageMetadata(overrides: Partial<Metadata>): Metadata {
  return {
    ...defaultMetadata,
    ...overrides,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...(overrides.openGraph ?? {}),
    },
  };
}
