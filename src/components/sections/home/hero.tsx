import Image from "next/image";
import Link from "next/link";

import {
  IconChevronRight,
  IconSparkles,
  IconUser,
  IconUsers,
  IconUsersGroup,
} from "@tabler/icons-react";

import { HeroChart } from "@/assets/chart";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <header className="relative mx-6 mt-1 mb-7" aria-label="Hero section">
      <div className="relative container rounded-2xl md:overflow-hidden">
        <div className="grid items-center gap-4 py-9 md:grid-cols-12 md:py-16">
          <div className="flex flex-col gap-8 md:col-span-7">
            <h2
              className="font-aloevera flex w-fit items-center gap-3 rounded-full border bg-white/10 p-1 text-sm backdrop-blur-lg md:text-base"
              id="hero-subtitle"
            >
              <span className="bg-primary-foreground text-primary inline-block rounded-full px-3 py-1">
                Leading
              </span>
              Providers of Investment Advisory Solutions
              <IconChevronRight className="mr-2 size-4" />
            </h2>
            <h1
              className="font-aloevera text-3xl font-bold text-balance md:text-6xl"
              id="hero-title"
            >
              Empowering Financial Growth Through Strategic Advisory
            </h1>
            <p
              className="leading-relaxed text-balance"
              aria-describedby="hero-title"
            >
              We help individuals and enterprises make informed financial
              decisions, build strong portfolios, and manage risk with
              confidence.
            </p>
            <nav className="space-x-4" aria-label="Primary actions">
              <Button
                asChild
                size="lg"
                variant="secondary"
                aria-label="Get Started"
              >
                <Link href="/get-started">
                  Get Started
                  <span className="bg-primary text-primary-foreground grid size-10 place-content-center rounded-full">
                    <IconSparkles className="size-6" />
                  </span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                aria-label="Talk to an expert"
              >
                <Link href="/contact">Talk to an expert</Link>
              </Button>
            </nav>
            <ul
              className="flex w-fit items-center gap-6 rounded-md border bg-gradient-to-b from-white/10 to-transparent p-4 text-sm backdrop-blur-lg md:gap-8 md:p-6 md:text-base"
              aria-label="Client types"
            >
              <li className="flex items-center gap-2">
                <IconUser className="size-4" aria-hidden="true" />{" "}
                <span>Individual</span>
              </li>
              <li className="flex items-center gap-2">
                <IconUsers className="size-4" aria-hidden="true" />{" "}
                <span>Scaling Companies</span>
              </li>
              <li className="flex items-center gap-2">
                <IconUsersGroup className="size-4" aria-hidden="true" />{" "}
                <span>Enterprise</span>
              </li>
            </ul>
          </div>
          <div className="relative flex flex-col md:col-span-5">
            <div className="absolute top-1/2 -left-1/2 z-10 w-fit translate-x-1/2 -translate-y-1/4 rounded-xl border border-white bg-white/80 shadow-xl backdrop-blur-xl">
              <p className="px-3 py-1 text-xs text-black/40">Monthly Growth</p>
              <HeroChart />
            </div>
            <div className="grid gap-2">
              <div className="bg-primary relative row-span-4 aspect-6/4 overflow-hidden rounded-xl">
                <Image
                  src="/images/business-man.webp"
                  alt="Businessman smiling in an office setting"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="bg-primary relative row-span-3 aspect-6/3 overflow-hidden rounded-xl">
                <Image
                  src="/images/man-charts.webp"
                  alt="Man analyzing financial charts on a screen"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/images/hero-bg.webp"
          fill
          alt="Abstract financial background with charts and graphs"
          className="pointer-events-none -z-1 object-cover brightness-90"
          priority
        />
      </div>
    </header>
  );
};
