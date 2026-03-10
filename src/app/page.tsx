import { HeroSection } from "@/components/home/HeroSection";
import { SocialProofBar } from "@/components/home/SocialProofBar";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { AboutBlurb } from "@/components/home/AboutBlurb";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <ServicesGrid />
      <GalleryPreview />
      <AboutBlurb />
      <ContactCTA />
    </>
  );
}
