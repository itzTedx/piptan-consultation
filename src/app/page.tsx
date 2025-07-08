import Image from "next/image";

import { IconShield } from "@/assets/icons";
import { Cta } from "@/components/sections/cta";
import { AboutSection } from "@/components/sections/home/about";
import { FaqSection } from "@/components/sections/home/faq";
import { HeroSection } from "@/components/sections/home/hero";
import { IndustriesSection } from "@/components/sections/home/industries";
import { ServiceCarousel } from "@/components/sections/home/service-carousel";
import { WhyChooseUsSection } from "@/components/sections/home/why-choose-us";
import { Card, CardContent } from "@/components/ui/card";
import { WHO_WORKS } from "@/data/constants";

export default function Home() {
  return (
    <main className="-z-1">
      <HeroSection />
      <WhyChooseUsSection />
      <AboutSection />
      <ServiceCarousel />
      <section className="bg-secondary text-secondary-foreground relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="container py-12">
          <h2 className="text-2xl">
            How We
            <br />
            Works
          </h2>
          <p>A Strategic Process That Delivers</p>

          <ul className="mt-12 grid grid-cols-4 gap-6">
            {WHO_WORKS.map((step) => (
              <li className="group" key={step.id}>
                <Card className="bg-primary-foreground/80 h-full">
                  <CardContent className="h-full border-t-0 p-0 px-4 pb-4">
                    <div className="mb-3 flex h-12 items-end gap-2 overflow-hidden border-b">
                      <span className="text-primary-foreground group-hover:text-primary translate-y-4 text-5xl font-medium transition-[transform_color] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-y-0">
                        0{step.id}
                      </span>
                      <h4 className="text-muted-foreground font-aloevera">
                        {step.label}
                      </h4>
                    </div>
                    <div className="relative aspect-4/3">
                      <Image
                        src={step.image}
                        alt=""
                        fill
                        className="rounded-md object-cover"
                      />
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <IconShield className="size-9" />
                      <div>
                        <h4 className="font-medium">{step.title}</h4>
                        <p className="text-[10px]">{step.heading}</p>
                      </div>
                    </div>

                    <p className="mt-2 text-sm text-balance">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <IndustriesSection />
      <Cta />
      <FaqSection />
    </main>
  );
}
