import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    id: "kitchen-remodel",
    slug: "kitchen-remodel",
    title: "Kitchen Remodeling",
    shortTitle: "Kitchen",
    tagline: "Complete kitchen transformations from concept to completion",
    description: [
      "Your kitchen is the heart of your home — and NW Premium Design LLC specializes in bringing it to life. We handle full kitchen remodels for Seattle homeowners, from cabinet installation and layout reconfiguration to finishing touches that make the space truly yours.",
      "Whether you're updating an outdated kitchen, maximizing a compact space, or building from scratch after a renovation, Alex brings the craftsmanship and attention to detail that turns your vision into reality.",
    ],
    highlights: [
      "Full kitchen gut and rebuild",
      "Cabinet installation and replacement",
      "Countertop installation coordination",
      "Backsplash tile work",
      "Under-cabinet lighting installation",
      "Layout reconfiguration and island additions",
    ],
    imageSrc: "/images/services/kitchen-remodel.jpg",
    imageAlt: "Completed kitchen remodel in Seattle by NW Premium Design",
    icon: "ChefHat",
    seoTitle: "Kitchen Remodeling Seattle WA | NW Premium Design LLC",
    seoDescription:
      "Expert kitchen remodeling in Seattle, WA. NW Premium Design LLC transforms kitchens with quality craftsmanship and premium cabinetry. Free estimates.",
    ctaText: "Get a Kitchen Remodel Estimate",
    featured: true,
    order: 1,
  },
  {
    id: "bathroom-remodel",
    slug: "bathroom-remodel",
    title: "Bathroom Remodeling",
    shortTitle: "Bathroom",
    tagline: "Elegant bathroom upgrades that add lasting value",
    description: [
      "A beautifully remodeled bathroom adds both comfort and value to your home. NW Premium Design LLC handles bathroom remodels of all sizes — from a simple vanity and cabinet refresh to a full master bath renovation.",
      "We focus on precision installation and clean finishes, ensuring every cabinet, fixture, and tile is perfectly set. The result is a bathroom that looks and functions exactly as you envisioned.",
    ],
    highlights: [
      "Vanity cabinet installation and replacement",
      "Medicine cabinet and storage solutions",
      "Tile work and wainscoting",
      "Fixture and hardware installation",
      "Full bathroom gut and rebuild",
      "Accessible and ADA-friendly upgrades",
    ],
    imageSrc: "/images/services/bathroom-remodel.jpg",
    imageAlt: "Bathroom remodel with custom vanity by NW Premium Design Seattle",
    icon: "Bath",
    seoTitle: "Bathroom Remodeling Seattle WA | NW Premium Design LLC",
    seoDescription:
      "Professional bathroom remodeling in Seattle. Cabinet installation, tile work, and complete renovations by NW Premium Design LLC. Free estimates.",
    ctaText: "Get a Bathroom Estimate",
    featured: true,
    order: 2,
  },
  {
    id: "cabinet-installation",
    slug: "cabinet-installation",
    title: "Cabinet Installation",
    shortTitle: "Cabinets",
    tagline: "Precision installation for IKEA, European, and custom cabinets",
    description: [
      "NW Premium Design LLC specializes in cabinet installation across all major systems — IKEA SEKTION, European frameless cabinets, and fully custom cabinetry. Every install is level, plumb, and built to last.",
      "Alex has deep experience with IKEA kitchen systems, including the full planning and assembly process. If you've purchased IKEA cabinets and need expert installation, we're the team for the job.",
    ],
    highlights: [
      "IKEA SEKTION cabinet assembly and installation",
      "European frameless cabinet installation",
      "Custom and semi-custom cabinet fitting",
      "Cabinet door alignment and soft-close hardware",
      "Crown molding and decorative trim",
      "Pull-out shelf and organizer installation",
    ],
    imageSrc: "/images/services/cabinet-installation.jpg",
    imageAlt: "Cabinet installation in Seattle kitchen by NW Premium Design",
    icon: "Package",
    seoTitle: "Cabinet Installation Seattle WA | IKEA & Custom | NW Premium Design",
    seoDescription:
      "Expert cabinet installation in Seattle. IKEA, European frameless, and custom cabinets. Precision installation by NW Premium Design LLC. Free estimates.",
    ctaText: "Get a Cabinet Install Estimate",
    featured: true,
    order: 3,
  },
  {
    id: "cabinet-supply",
    slug: "cabinet-supply",
    title: "Cabinet Supply & Purchasing",
    shortTitle: "Supply",
    tagline: "Alex sources and delivers the right cabinets for your project",
    description: [
      "Not sure where to buy cabinets, or overwhelmed by the options? NW Premium Design LLC offers a unique cabinet purchasing and supply service — Alex does the sourcing for you.",
      "We work with IKEA, semi-custom vendors, and custom cabinet makers to find the right fit for your budget and style. You get the cabinets you want, delivered and ready for installation — no stress, no guesswork.",
    ],
    highlights: [
      "Cabinet sourcing and procurement",
      "IKEA kitchen planning and ordering",
      "Semi-custom cabinet vendor coordination",
      "Price comparison across suppliers",
      "Delivery coordination and logistics",
      "Full supply-and-install packages available",
    ],
    imageSrc: "/images/services/cabinet-supply.jpg",
    imageAlt: "Custom cabinet supply and installation by NW Premium Design Seattle",
    icon: "Truck",
    seoTitle: "Cabinet Supply Seattle WA | Sourcing & Purchasing | NW Premium Design",
    seoDescription:
      "NW Premium Design LLC sources and supplies IKEA, semi-custom, and custom cabinets in Seattle. Full supply-and-install service. Free estimates.",
    ctaText: "Ask About Cabinet Supply",
    featured: true,
    order: 4,
  },
  {
    id: "interior-repairs",
    slug: "interior-repairs",
    title: "Interior Repairs",
    shortTitle: "Repairs",
    tagline: "Skilled repairs and modifications for kitchens and interiors",
    description: [
      "Sometimes you don't need a full remodel — just the right repair or modification to bring a space back to life. NW Premium Design LLC handles a wide range of interior repair work with the same precision we bring to full installations.",
      "From repairing damaged cabinets and worn countertops to fixing water-damaged areas or modifying existing cabinetry, we get it done right the first time.",
    ],
    highlights: [
      "Cabinet door and hinge repairs",
      "Drawer slide replacement",
      "Water damage repair and restoration",
      "Cabinet modification and refacing",
      "Countertop edge repair",
      "General kitchen and bathroom repairs",
    ],
    imageSrc: "/images/services/interior-repairs.jpg",
    imageAlt: "Interior repair work by NW Premium Design Seattle",
    icon: "Wrench",
    seoTitle: "Kitchen & Cabinet Repairs Seattle WA | NW Premium Design LLC",
    seoDescription:
      "Professional kitchen cabinet repairs and interior repairs in Seattle. NW Premium Design LLC fixes cabinets, drawers, and more. Free estimates.",
    ctaText: "Get a Repair Estimate",
    featured: false,
    order: 5,
  },
];

export const featuredServices = services.filter((s) => s.featured);

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
