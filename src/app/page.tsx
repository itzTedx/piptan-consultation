import { Cta } from "@/components/sections/cta";
import { HeroSection } from "@/components/sections/home/hero";
import { IndustriesSection } from "@/components/sections/home/industries";
import { ServiceCarousel } from "@/components/sections/home/service-carousel";
import { ServicesSection } from "@/components/sections/home/services";
import { WhyChooseUsSection } from "@/components/sections/home/why-choose-us";

export default function Home() {
  return (
    <main className="-z-1">
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <ServiceCarousel />
      <IndustriesSection />
      <Cta />
    </main>
  );
}
