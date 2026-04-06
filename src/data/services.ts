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
    seoTitle: "Kitchen Remodeling Seattle & Greater Puget Sound | NW Premium Design LLC",
    seoDescription:
      "Expert kitchen remodeling in Seattle, Bellevue, Tacoma, Kirkland & the greater Puget Sound area. Quality craftsmanship and premium cabinetry. Free estimates.",
    ctaText: "Get a Kitchen Remodel Estimate",
    featured: true,
    order: 1,
    faqs: [
      {
        question: "How long does a kitchen remodel take in Seattle?",
        answer: "Most kitchen remodels take 2–4 weeks depending on scope. A simple cabinet replacement may take a few days, while a full gut-and-rebuild with layout changes typically takes 3–4 weeks.",
      },
      {
        question: "Do you handle IKEA kitchen installations?",
        answer: "Yes — we specialize in IKEA SEKTION cabinet systems. Alex handles the full process including planning, assembly, and precision installation.",
      },
      {
        question: "Can you work with cabinets I've already purchased?",
        answer: "Absolutely. Whether you've bought IKEA, custom, or semi-custom cabinets, we can install them. We also offer a cabinet supply service if you need help sourcing.",
      },
      {
        question: "Do you offer free kitchen remodel estimates?",
        answer: "Yes, we provide free in-home estimates for all kitchen remodeling projects across the greater Seattle and Puget Sound area.",
      },
    ],
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
    seoTitle: "Bathroom Remodeling Seattle, Bellevue & Puget Sound | NW Premium Design LLC",
    seoDescription:
      "Professional bathroom remodeling in Seattle, Bellevue, Redmond, Kirkland & greater Puget Sound. Complete renovations by NW Premium Design LLC. Free estimates.",
    ctaText: "Get a Bathroom Estimate",
    featured: true,
    order: 2,
    faqs: [
      {
        question: "What does a bathroom remodel include?",
        answer: "Our bathroom remodels can include vanity and cabinet installation, tile work, fixture replacement, wainscoting, and full gut-and-rebuild renovations. We tailor the scope to your needs and budget.",
      },
      {
        question: "Can you make my bathroom ADA-accessible?",
        answer: "Yes, we offer ADA-friendly bathroom upgrades including grab bar installation, accessible vanity heights, and barrier-free shower modifications.",
      },
      {
        question: "How much does a bathroom remodel cost in Seattle?",
        answer: "Costs vary based on scope — a vanity swap starts at a lower price point, while a full master bath renovation is a larger investment. Contact us for a free estimate tailored to your project.",
      },
    ],
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
    seoTitle: "Cabinet Installation Seattle, Bellevue & Puget Sound | IKEA & Custom | NW Premium Design",
    seoDescription:
      "Expert cabinet installation in Seattle, Bellevue, Tacoma & greater Puget Sound. IKEA, European frameless & custom cabinets. Free estimates.",
    ctaText: "Get a Cabinet Install Estimate",
    featured: true,
    order: 3,
    faqs: [
      {
        question: "What types of cabinets do you install?",
        answer: "We install IKEA SEKTION systems, European frameless cabinets, and fully custom cabinetry. Every install is leveled, plumbed, and built to last.",
      },
      {
        question: "Can you assemble and install IKEA cabinets?",
        answer: "Yes — IKEA cabinet assembly and installation is one of our core specialties. Alex has deep experience with the IKEA SEKTION system and handles the full process.",
      },
      {
        question: "Do you install soft-close hinges and hardware?",
        answer: "Yes, we install soft-close hinges, drawer slides, pull-out shelves, organizers, crown molding, and all cabinet hardware as part of our installation service.",
      },
      {
        question: "What areas do you serve for cabinet installation?",
        answer: "We serve Seattle, Bellevue, Tacoma, Kirkland, Redmond, Renton, Auburn, Kent, and the entire greater Puget Sound area.",
      },
    ],
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
    seoTitle: "Cabinet Supply Seattle & Greater Puget Sound | NW Premium Design",
    seoDescription:
      "NW Premium Design LLC sources and supplies IKEA, semi-custom & custom cabinets across Seattle, Bellevue, Tacoma & greater Puget Sound. Free estimates.",
    ctaText: "Ask About Cabinet Supply",
    featured: true,
    order: 4,
    faqs: [
      {
        question: "Can you help me choose the right cabinets?",
        answer: "Yes — Alex works with you to understand your budget, style, and space, then sources cabinets from IKEA, semi-custom vendors, or custom cabinet makers to find the best fit.",
      },
      {
        question: "Do you offer supply-and-install packages?",
        answer: "Yes, we offer full supply-and-install packages. We handle sourcing, delivery coordination, and professional installation — a complete one-stop solution.",
      },
      {
        question: "Is it cheaper to buy cabinets through you?",
        answer: "We compare prices across multiple suppliers to find the best value for your project. Our sourcing service saves you time and often helps you avoid costly ordering mistakes.",
      },
    ],
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
    seoTitle: "Kitchen & Cabinet Repairs Seattle, Bellevue & Puget Sound | NW Premium Design LLC",
    seoDescription:
      "Professional kitchen cabinet repairs and interior repairs in Seattle, Bellevue, Kirkland & greater Puget Sound. NW Premium Design LLC. Free estimates.",
    ctaText: "Get a Repair Estimate",
    featured: false,
    order: 5,
    faqs: [
      {
        question: "What kind of interior repairs do you handle?",
        answer: "We handle cabinet door and hinge repairs, drawer slide replacement, water damage restoration, cabinet modification and refacing, countertop edge repair, and general kitchen and bathroom repairs.",
      },
      {
        question: "Do I need a full remodel or just a repair?",
        answer: "Not every project needs a full remodel. If your cabinets are structurally sound but have damaged doors, worn hardware, or minor water damage, a targeted repair is often the smarter and more affordable solution.",
      },
      {
        question: "Do you offer free estimates for repair work?",
        answer: "Yes, we provide free in-home estimates for all repair projects. Alex will assess the damage and recommend the most cost-effective solution.",
      },
    ],
  },
];

export const featuredServices = services.filter((s) => s.featured);

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
