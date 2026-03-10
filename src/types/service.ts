export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string[];
  highlights: string[];
  imageSrc: string;
  imageAlt: string;
  icon: string;
  seoTitle: string;
  seoDescription: string;
  ctaText: string;
  featured: boolean;
  order: number;
}
