"use client";

import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import { IconShield } from "@/assets/icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SERVICES } from "@/data/constants";

export const ServiceCarousel = () => {
  return (
    <section className="bg-background text-foreground">
      <div className="container py-20">
        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
            WheelGesturesPlugin(),
          ]}
        >
          <CarouselContent className="-ml-1">
            {SERVICES.map((data, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full p-1">
                  <IconShield />
                  {data.title}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex items-center gap-12">
            <div className="relative flex gap-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};
