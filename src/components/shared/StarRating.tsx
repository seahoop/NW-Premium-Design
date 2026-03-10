import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating?: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function StarRating({
  rating = 5,
  max = 5,
  size = "md",
  className,
}: StarRatingProps) {
  const sizeClass = {
    sm: "size-4",
    md: "size-5",
    lg: "size-6",
  }[size];

  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            sizeClass,
            i < rating ? "fill-amber-400 text-amber-400" : "fill-none text-amber-300"
          )}
        />
      ))}
    </div>
  );
}
