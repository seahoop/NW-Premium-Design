"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Expand } from "lucide-react";
import type { GalleryItem, GalleryCategory } from "@/types/gallery";
import { galleryItems, getGalleryByCategory } from "@/data/gallery";
import { GalleryFilter } from "@/components/gallery/GalleryFilter";
import { Lightbox } from "@/components/gallery/Lightbox";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<
    GalleryCategory | "all"
  >("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = getGalleryByCategory(activeCategory);

  // For lightbox navigation, use filtered list
  const handleOpen = (filteredIndex: number) => {
    setLightboxIndex(filteredIndex);
  };

  return (
    <>
      <GalleryFilter active={activeCategory} onChange={setActiveCategory} />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {filtered.map((item, i) => (
            <motion.button
              key={item.id}
              className={cn(
                "group relative overflow-hidden rounded-xl bg-cream-dark aspect-square cursor-pointer",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
              )}
              onClick={() => handleOpen(i)}
              aria-label={`View ${item.projectTitle}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.04, duration: 0.35 }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-xs font-semibold text-cream leading-tight">
                  {item.projectTitle}
                </p>
                <p className="text-xs text-cream/60 capitalize mt-0.5">
                  {item.category}
                </p>
              </div>
              <div className="absolute right-2 top-2 flex size-8 items-center justify-center rounded-full bg-cream/20 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <Expand className="size-4 text-cream" />
              </div>
            </motion.button>
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <p className="py-20 text-center text-navy/50">
          No photos in this category yet — check back soon!
        </p>
      )}

      <Lightbox
        items={filtered}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}
