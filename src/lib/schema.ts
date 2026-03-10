import { BUSINESS, SITE_URL } from "@/lib/constants";
import type { Service } from "@/types/service";

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    alternateName: BUSINESS.shortName,
    description:
      "Seattle's premier cabinet installer and kitchen remodeler. NW Premium Design LLC offers kitchen remodeling, bathroom remodeling, cabinet installation, and cabinet supply services throughout the greater Seattle area.",
    url: SITE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    areaServed: [
      { "@type": "City", name: "Seattle" },
      { "@type": "City", name: "Bellevue" },
      { "@type": "City", name: "Kirkland" },
      { "@type": "City", name: "Redmond" },
      { "@type": "City", name: "Renton" },
      { "@type": "City", name: "Shoreline" },
      { "@type": "City", name: "Bothell" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home Remodeling Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Kitchen Remodeling" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Bathroom Remodeling" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Cabinet Installation" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Cabinet Supply" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Interior Repairs" },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(BUSINESS.googleRating),
      reviewCount: String(BUSINESS.googleReviewCount),
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      BUSINESS.social.instagram,
      BUSINESS.social.google,
    ].filter(Boolean),
    image: `${SITE_URL}/og-image.jpg`,
    priceRange: "$$",
  };
}

export function buildServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: { "@type": "City", name: "Seattle" },
    url: `${SITE_URL}/services/${service.slug}`,
    name: service.title,
    description: service.description[0],
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
