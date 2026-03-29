import { HeroSection } from "@/components/home/HeroSection";
import { SocialProofBar } from "@/components/home/SocialProofBar";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { YelpReviews } from "@/components/home/YelpReviews";
import { AboutBlurb } from "@/components/home/AboutBlurb";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <ServicesGrid />
      <YelpReviews />
      <InstagramFeed />
      <AboutBlurb />
      <ContactCTA />
    </>
  );
}
