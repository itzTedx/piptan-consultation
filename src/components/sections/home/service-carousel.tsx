"use client";

import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import { IconShield } from "@/assets/icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
        <h2 className="text-4xl">
          Smart, Scalable <br />
          Solutions for All Investors
        </h2>
        <p className="mt-2 mb-6 max-w-prose">
          Whether you're an individual building your future or a corporation
          scaling globally, Piptan delivers actionable financial solutions
          backed by data, expertise, and results.
        </p>

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
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">{data.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <IconShield className="size-16" />
                      <h3 className="mt-3 text-2xl font-medium">
                        {data.title}
                      </h3>
                      <p className="mt-2 font-light">{data.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex items-center justify-center gap-12">
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
