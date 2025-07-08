import Image from "next/image";

import { IconShield } from "@/assets/icons";
import { IconLogo } from "@/assets/logo";
import { VALUES } from "@/data/constants";

export const AboutSection = () => {
  return (
    <section className="bg-background py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl px-28 py-16">
          <div className="grid grid-cols-4 items-center gap-3">
            <div className="z-10 col-span-3 space-y-3">
              <h2 className="font-aloevera text-5xl">
                Experts in Investment <br />
                Advisory & Financial Strategy
              </h2>
              <p className="text-xl font-light text-balance">
                Piptan Consulting empowers clients to build long-term wealth
                through strategic financial planning, risk management, and
                market intelligence. With over 9 years of experience, our firm
                is built on trust, results, and a passion for performance.
              </p>
            </div>
            <div className="z-10 col-span-1 mix-blend-soft-light">
              <IconLogo className="blur-[2px]" />
            </div>
          </div>
          <div className="prose prose-invert prose-p:text-xl relative z-10 mt-12">
            <h3>Our Mission</h3>
            <p>
              To simplify financial complexity and deliver real, measurable
              results through personalized solutions.
            </p>

            <h3>Our Vision</h3>
            <p>
              To be the most trusted and data-driven financial consulting
              partner for growth-focused individuals and organizations.
            </p>
          </div>
          <ul className="relative z-10 mt-16 grid grid-cols-4 gap-12">
            {VALUES.map((service, i) => (
              <li
                key={`${service.title}-${i + 1}`}
                className="flex flex-col gap-3"
              >
                <IconShield />
                <h3 className="text-3xl font-medium">{service.title}</h3>
              </li>
            ))}
          </ul>
          <Image
            src="/images/bg-dark.webp"
            fill
            alt=""
            className="pointer-events-none -z-0 object-cover brightness-90"
          />
        </div>
      </div>
    </section>
  );
};
