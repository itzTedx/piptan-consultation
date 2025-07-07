import Image from "next/image";

import { IconShield } from "@/assets/icons";
import { IconLogo } from "@/assets/logo";
import { SERVICES } from "@/data/constants";

export const ServicesSection = () => {
  return (
    <section className="bg-background py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl px-28 py-16">
          <div>
            <div className="grid grid-cols-4 items-center gap-3">
              <div className="z-10 col-span-3 space-y-3">
                <h2 className="font-aloevera text-6xl">
                  Smart, Scalable <br />
                  Solutions for All Investors
                </h2>
                <p className="text-xl font-light text-balance">
                  Whether you&apos;re an individual building your future or a
                  corporation scaling globally, Piptan delivers actionable
                  financial solutions backed by data, expertise, and results.
                </p>
              </div>
              <div className="z-10 col-span-1 mix-blend-soft-light">
                <IconLogo className="blur-[2px]" />
              </div>
            </div>
          </div>
          <ul className="relative z-10 mt-16 grid grid-cols-3 gap-12">
            {SERVICES.map((service, i) => (
              <li key={`${service.title}-${i + 1}`} className="space-y-3">
                <IconShield />
                <h3 className="text-2xl font-medium">{service.title}</h3>
                <p className="text-background/70">{service.description}</p>
              </li>
            ))}
          </ul>
          <Image
            src="/images/bg-dark.webp"
            fill
            alt=""
            className="-z-0 object-cover brightness-90"
          />
        </div>
      </div>
    </section>
  );
};
