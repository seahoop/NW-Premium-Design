"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  amount?: number;
  once?: boolean;
  /** Use "image" for a scale-up reveal effect on images/cards */
  variant?: "default" | "image";
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  amount = 0.01,
  once = false,
  variant = "default",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const inView = useInView(ref, { once, amount });
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsShown(true);
    }
  }, [inView]);

  useEffect(() => {
    if (once || !ref.current) {
      return;
    }

    lastScrollY.current = window.scrollY;
    const handleScroll = () => {
      if (!ref.current) {
        return;
      }

      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY.current;
      lastScrollY.current = currentScrollY;
      const rect = ref.current.getBoundingClientRect();

      if (isScrollingUp && rect.bottom <= 0) {
        setIsShown(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [once]);

  if (variant === "image") {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={
          isShown
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.92, y: 20 }
        }
        transition={{
          duration: 0.7,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    );
  }

  const initial = {
    opacity: 0,
    y: direction === "up" ? 32 : 0,
    x: direction === "left" ? -32 : direction === "right" ? 32 : 0,
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isShown ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
