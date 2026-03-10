import type { GalleryItem, GalleryCategory } from "@/types/gallery";

export const galleryItems: GalleryItem[] = [
  // Kitchens
  {
    id: "kitchen-01",
    src: "/images/gallery/kitchens/kitchen-01.jpg",
    alt: "Modern white shaker kitchen remodel in Seattle",
    category: "kitchen",
    projectTitle: "Modern Shaker Kitchen",
    width: 1200,
    height: 900,
    featured: true,
    order: 1,
  },
  {
    id: "kitchen-02",
    src: "/images/gallery/kitchens/kitchen-02.jpg",
    alt: "Dark cabinet kitchen renovation Seattle",
    category: "kitchen",
    projectTitle: "Dark Cabinet Kitchen",
    width: 1200,
    height: 900,
    featured: true,
    order: 2,
  },
  {
    id: "kitchen-03",
    src: "/images/gallery/kitchens/kitchen-03.jpg",
    alt: "Open concept kitchen remodel with island",
    category: "kitchen",
    projectTitle: "Open Concept with Island",
    width: 1200,
    height: 900,
    featured: false,
    order: 3,
  },
  {
    id: "kitchen-04",
    src: "/images/gallery/kitchens/kitchen-04.jpg",
    alt: "White IKEA kitchen installation Seattle",
    category: "kitchen",
    projectTitle: "IKEA SEKTION Kitchen",
    width: 1200,
    height: 900,
    featured: true,
    order: 4,
  },
  {
    id: "kitchen-05",
    src: "/images/gallery/kitchens/kitchen-05.jpg",
    alt: "Custom kitchen cabinetry and countertops",
    category: "kitchen",
    projectTitle: "Custom Cabinetry Kitchen",
    width: 1200,
    height: 900,
    featured: false,
    order: 5,
  },
  // Bathrooms
  {
    id: "bathroom-01",
    src: "/images/gallery/bathrooms/bathroom-01.jpg",
    alt: "Master bathroom remodel with double vanity",
    category: "bathroom",
    projectTitle: "Master Bath Renovation",
    width: 1200,
    height: 900,
    featured: true,
    order: 6,
  },
  {
    id: "bathroom-02",
    src: "/images/gallery/bathrooms/bathroom-02.jpg",
    alt: "Modern bathroom with floating vanity",
    category: "bathroom",
    projectTitle: "Floating Vanity Bathroom",
    width: 1200,
    height: 900,
    featured: false,
    order: 7,
  },
  {
    id: "bathroom-03",
    src: "/images/gallery/bathrooms/bathroom-03.jpg",
    alt: "Bathroom tile and cabinet installation",
    category: "bathroom",
    projectTitle: "Tile & Cabinet Update",
    width: 1200,
    height: 900,
    featured: false,
    order: 8,
  },
  {
    id: "bathroom-04",
    src: "/images/gallery/bathrooms/bathroom-04.jpg",
    alt: "Guest bathroom remodel Seattle",
    category: "bathroom",
    projectTitle: "Guest Bath Refresh",
    width: 1200,
    height: 900,
    featured: false,
    order: 9,
  },
  {
    id: "bathroom-05",
    src: "/images/gallery/bathrooms/bathroom-05.jpg",
    alt: "Full bathroom renovation with storage",
    category: "bathroom",
    projectTitle: "Full Bath Renovation",
    width: 1200,
    height: 900,
    featured: false,
    order: 10,
  },
  // Cabinets
  {
    id: "cabinets-01",
    src: "/images/gallery/cabinets/cabinets-01.jpg",
    alt: "Custom cabinet installation Seattle",
    category: "cabinets",
    projectTitle: "Custom Cabinet Install",
    width: 1200,
    height: 900,
    featured: true,
    order: 11,
  },
  {
    id: "cabinets-02",
    src: "/images/gallery/cabinets/cabinets-02.jpg",
    alt: "European frameless cabinet installation",
    category: "cabinets",
    projectTitle: "European Frameless Cabinets",
    width: 1200,
    height: 900,
    featured: false,
    order: 12,
  },
  {
    id: "cabinets-03",
    src: "/images/gallery/cabinets/cabinets-03.jpg",
    alt: "IKEA cabinet installation with hardware",
    category: "cabinets",
    projectTitle: "IKEA Cabinet System",
    width: 1200,
    height: 900,
    featured: false,
    order: 13,
  },
  {
    id: "cabinets-04",
    src: "/images/gallery/cabinets/cabinets-04.jpg",
    alt: "Built-in shelving and cabinet system",
    category: "cabinets",
    projectTitle: "Built-In Shelving System",
    width: 1200,
    height: 900,
    featured: false,
    order: 14,
  },
  {
    id: "cabinets-05",
    src: "/images/gallery/cabinets/cabinets-05.jpg",
    alt: "Pantry cabinet installation with organizers",
    category: "cabinets",
    projectTitle: "Pantry Organization System",
    width: 1200,
    height: 900,
    featured: false,
    order: 15,
  },
  // Repairs
  {
    id: "repairs-01",
    src: "/images/gallery/repairs/repairs-01.jpg",
    alt: "Cabinet door replacement and repair",
    category: "repairs",
    projectTitle: "Cabinet Door Repair",
    width: 1200,
    height: 900,
    featured: false,
    order: 16,
  },
  {
    id: "repairs-02",
    src: "/images/gallery/repairs/repairs-02.jpg",
    alt: "Kitchen cabinet refacing and modification",
    category: "repairs",
    projectTitle: "Cabinet Refacing",
    width: 1200,
    height: 900,
    featured: false,
    order: 17,
  },
];

export const featuredGalleryItems = galleryItems
  .filter((item) => item.featured)
  .sort((a, b) => a.order - b.order)
  .slice(0, 6);

export function getGalleryByCategory(
  category: GalleryCategory | "all"
): GalleryItem[] {
  if (category === "all") return galleryItems;
  return galleryItems.filter((item) => item.category === category);
}

export const GALLERY_CATEGORIES: {
  value: GalleryCategory | "all";
  label: string;
}[] = [
  { value: "all", label: "All Projects" },
  { value: "kitchen", label: "Kitchen" },
  { value: "bathroom", label: "Bathroom" },
  { value: "cabinets", label: "Cabinets" },
  { value: "repairs", label: "Repairs" },
];
