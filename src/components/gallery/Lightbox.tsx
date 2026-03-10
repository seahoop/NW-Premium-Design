"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { GalleryItem } from "@/types/gallery";

interface LightboxProps {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const isOpen = index !== null;
  const item = index !== null ? items[index] : null;

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && index !== null && index > 0)
        onNavigate(index - 1);
      if (e.key === "ArrowRight" && index !== null && index < items.length - 1)
        onNavigate(index + 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, index, items.length, onClose, onNavigate]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && item && (
        <motion.div
          key="lightbox-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/95 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          {/* Image container */}
          <motion.div
            className="relative max-h-[90vh] max-w-5xl w-full"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-contain"
                quality={90}
              />
            </div>

            {/* Caption */}
            <div className="mt-3 flex items-center justify-between px-1">
              <div>
                <p className="text-sm font-semibold text-cream">
                  {item.projectTitle}
                </p>
                <p className="text-xs text-cream/55 capitalize">{item.category}</p>
              </div>
              <p className="text-xs text-cream/40">
                {index! + 1} / {items.length}
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          {index! > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 flex size-11 items-center justify-center rounded-full bg-cream/10 text-cream backdrop-blur-sm transition-colors hover:bg-cream/20"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(index! - 1);
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="size-6" />
            </button>
          )}
          {index! < items.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 flex size-11 items-center justify-center rounded-full bg-cream/10 text-cream backdrop-blur-sm transition-colors hover:bg-cream/20"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(index! + 1);
              }}
              aria-label="Next image"
            >
              <ChevronRight className="size-6" />
            </button>
          )}

          {/* Close */}
          <button
            className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-cream/10 text-cream backdrop-blur-sm transition-colors hover:bg-cream/20"
            onClick={onClose}
            aria-label="Close lightbox"
          >
            <X className="size-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
