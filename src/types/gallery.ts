export type GalleryCategory =
  | "kitchen"
  | "bathroom"
  | "cabinets"
  | "repairs";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  projectTitle: string;
  width: number;
  height: number;
  featured: boolean;
  order: number;
}
