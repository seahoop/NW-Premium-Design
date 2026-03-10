"use client";

import { GALLERY_CATEGORIES } from "@/data/gallery";
import type { GalleryCategory } from "@/types/gallery";
import { cn } from "@/lib/utils";

interface GalleryFilterProps {
  active: GalleryCategory | "all";
  onChange: (cat: GalleryCategory | "all") => void;
}

export function GalleryFilter({ active, onChange }: GalleryFilterProps) {
  return (
    <div className="flex gap-2 flex-wrap justify-center mb-10">
      {GALLERY_CATEGORIES.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onChange(value)}
          className={cn(
            "rounded-full px-5 py-2 text-sm font-medium transition-all",
            active === value
              ? "bg-navy text-cream shadow-sm"
              : "bg-white text-navy border border-cream-darker hover:border-navy/30 hover:bg-cream"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
