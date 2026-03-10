export const BUSINESS = {
  name: "NW Premium Design LLC",
  shortName: "NW Premium Design",
  phone: "+12065550100",
  phoneDisplay: "(206) 555-0100",
  email: "info@nwpremiumdesign.com",
  address: {
    city: "Seattle",
    state: "WA",
    country: "US",
    display: "Seattle, WA & Greater Puget Sound",
  },
  geo: {
    lat: 47.6062,
    lng: -122.3321,
  },
  social: {
    instagram: "https://www.instagram.com/nw_premium_design/",
    google: "https://maps.app.goo.gl/yssrBdLhjwdgmi989",
    yelp: "", // placeholder — add when Yelp page is created
    facebook: "", // placeholder
    tiktok: "", // placeholder
  },
  googleRating: 5.0,
  googleReviewCount: 5,
  license: "", // WA contractor license — add when available
} as const;

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nwpremiumdesign.com";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
