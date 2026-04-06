import { BUSINESS, SITE_URL, SERVICE_AREAS } from "@/lib/constants";
import type { Service, FAQ } from "@/types/service";
import type { Review } from "@/data/reviews";

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
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    areaServed: SERVICE_AREAS.map((city) => ({
      "@type": "City" as const,
      name: city,
      containedInPlace: {
        "@type": "State" as const,
        name: "Washington",
      },
    })),
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
      BUSINESS.social.yelp,
    ].filter(Boolean),
    image: `${SITE_URL}/og-image.jpg`,
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    paymentAccepted: "Cash, Credit Card, Check",
    currenciesAccepted: "USD",
  };
}

export function buildServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: SERVICE_AREAS.map((city) => ({
      "@type": "City" as const,
      name: city,
      containedInPlace: {
        "@type": "State" as const,
        name: "Washington",
      },
    })),
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

export function buildFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildReviewSchema(reviews: Review[]) {
  return reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.name,
    },
    datePublished: new Date(review.date).toISOString().split("T")[0],
    reviewBody: review.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(review.rating),
      bestRating: "5",
      worstRating: "1",
    },
    itemReviewed: {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${SITE_URL}/#business`,
      name: BUSINESS.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Yelp",
    },
  }));
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: BUSINESS.name,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#business` },
    inLanguage: "en-US",
  };
}

export function buildItemListSchema(services: Service[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `${SITE_URL}/services/${service.slug}`,
    })),
  };
}
