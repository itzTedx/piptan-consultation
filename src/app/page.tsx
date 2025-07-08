import { Cta } from "@/components/sections/cta";
import { AboutSection } from "@/components/sections/home/about";
import { FaqSection } from "@/components/sections/home/faq";
import { HeroSection } from "@/components/sections/home/hero";
import { IndustriesSection } from "@/components/sections/home/industries";
import { ServiceCarousel } from "@/components/sections/home/service-carousel";
import { WhyChooseUsSection } from "@/components/sections/home/why-choose-us";

export default function Home() {
  return (
    <main className="-z-1">
      <HeroSection />
      <WhyChooseUsSection />
      <AboutSection />
      <ServiceCarousel />
      <IndustriesSection />
      <Cta />
      <FaqSection />
    </main>
  );
}
