import { Instagram, ExternalLink, Star, MessageSquare } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const links = [
  {
    label: "Instagram",
    href: BUSINESS.social.instagram,
    icon: Instagram,
    description: "@nw_premium_design",
    color: "bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737]",
    iconColor: "text-white",
    borderHover: "hover:border-[#E1306C]/40",
  },
  {
    label: "Google",
    href: BUSINESS.social.google,
    icon: Star,
    description: "Google Business · 5.0 ★",
    color: "bg-[#4285F4]",
    iconColor: "text-white",
    borderHover: "hover:border-[#4285F4]/40",
  },
  {
    label: "Yelp",
    href: BUSINESS.social.yelp,
    icon: MessageSquare,
    description: "Reviews on Yelp",
    color: "bg-[#FF1A1A]",
    iconColor: "text-white",
    borderHover: "hover:border-[#FF1A1A]/40",
  },
] as const;

export function SocialLinks() {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold uppercase tracking-widest text-navy/50">
        Find Us Online
      </h3>
      <div className="flex flex-col gap-2">
        {links.map(({ label, href, icon: Icon, description, color, iconColor, borderHover }) =>
          href ? (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-3 rounded-xl border border-cream-darker bg-white px-4 py-3 transition-all hover:shadow-sm ${borderHover}`}
            >
              <div className={`flex size-9 items-center justify-center rounded-full ${color} shrink-0`}>
                <Icon className={`size-4 ${iconColor}`} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-navy">{label}</p>
                <p className="text-xs text-navy/55 truncate">{description}</p>
              </div>
              <ExternalLink className="size-4 text-navy/30 ml-auto shrink-0 group-hover:text-navy/60 transition-colors" />
            </a>
          ) : null
        )}
      </div>
    </div>
  );
}
