import Image from "next/image";

import {
  IconChevronRight,
  IconSparkles,
  IconUser,
  IconUsers,
} from "@tabler/icons-react";

import { ShieldIcon, ShieldIcon2 } from "@/assets/card-icons";
import { HeroChart } from "@/assets/chart";
import { NumberCounter } from "@/components/atom/number-flow";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="-z-1">
      <section className="relative mx-6 mt-1 mb-7">
        <div className="relative container rounded-2xl md:overflow-hidden">
          <div className="grid items-center gap-4 py-9 md:grid-cols-12 md:py-16">
            <div className="flex flex-col gap-8 md:col-span-7">
              <p className="font-aloevera flex w-fit items-center gap-3 rounded-full border bg-white/10 p-1 text-sm backdrop-blur-lg md:text-base">
                <span className="bg-primary-foreground text-primary inline-block rounded-full px-3 py-1">
                  Leading
                </span>
                Providers of Investment Advisory Solutions
                <IconChevronRight className="mr-2 size-4" />
              </p>
              <h1 className="font-aloevera text-3xl font-bold text-balance md:text-6xl">
                Empowering Financial Growth Through Strategic Advisory
              </h1>
              <p className="text-balance">
                We help individuals and enterprises make informed financial
                decisions, build strong portfolios, and manage risk with
                confidence.
              </p>
              <div className="space-x-4">
                <Button size="lg" variant="secondary">
                  Get Started
                  <span className="bg-primary text-primary-foreground grid size-10 place-content-center rounded-full">
                    <IconSparkles className="size-6" />
                  </span>
                </Button>
                <Button variant="outline" size="lg">
                  Talk to an expert
                </Button>
              </div>
              <ul className="flex w-fit items-center gap-6 rounded-md border bg-gradient-to-b from-white/10 to-transparent p-4 text-sm backdrop-blur-lg md:gap-8 md:p-6 md:text-base">
                <li className="flex items-center gap-2">
                  <IconUser className="size-4" /> <p>Individual</p>
                </li>
                <li className="flex items-center gap-2">
                  <IconUsers className="size-4" /> <p>Scaling Companies</p>
                </li>
                <li className="flex items-center gap-2">
                  <IconUser className="size-4" /> <p>Enterprise</p>
                </li>
              </ul>
            </div>
            <div className="relative flex flex-col md:col-span-5">
              <div className="absolute top-1/2 -left-1/2 z-10 w-fit translate-x-1/2 -translate-y-1/4 rounded-xl border border-white bg-white/80 shadow-xl backdrop-blur-xl">
                <p className="px-3 py-1 text-xs text-black/40">
                  Monthly Growth
                </p>
                <HeroChart />
              </div>
              <div className="grid gap-2">
                <div className="bg-primary relative row-span-4 aspect-6/4 overflow-hidden rounded-xl">
                  <Image
                    src="/images/business-man.webp"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-primary relative row-span-3 aspect-6/3 overflow-hidden rounded-xl">
                  <Image
                    src="/images/man-charts.webp"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/images/hero-bg.webp"
            fill
            alt=""
            className="-z-1 object-cover brightness-90"
          />
        </div>
      </section>
      <section className="bg-background text-foreground rounded-t-4xl py-12">
        <div className="container grid gap-3 md:grid-cols-2">
          <h2 className="text-4xl">
            Why <br />
            Choose us
          </h2>
          <div className="space-y-4">
            <h3 className="text-xl">Trusted by Clients Across Industries</h3>
            <ul className="flex items-center gap-6">
              <li>Logo 1</li>
              <li>Logo 2</li>
              <li>Logo 3</li>
              <li>Logo 4</li>
              <li>Logo 5</li>
              <li>Logo 6</li>
            </ul>
          </div>
        </div>
        <div className="container my-20 grid items-end gap-3 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-4xl">
              We help{" "}
              <span className="text-primary">Individuals and Enterprises</span>{" "}
              make informed Financial Decisions,{" "}
              <span className="text-muted-foreground">
                build strong portfolios, and manage risk with confidence.
              </span>
            </h3>
            <Button
              size="lg"
              className="from-primary to-foreground bg-gradient-to-tr"
            >
              Learn more about us{" "}
              <span className="bg-primary text-primary-foreground grid size-10 place-content-center rounded-full">
                <IconSparkles className="size-6" />
              </span>
            </Button>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Investment Strategy Development</CardTitle>
              </CardHeader>
              <CardContent className="pb-40">
                <p>
                  We combine expert insight with advanced analytics to deliver
                  smarter investment decisions and consistent portfolio growth.
                </p>
                <ShieldIcon className="absolute bottom-0 left-0 h-auto w-full" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Risk Management That Works</CardTitle>
              </CardHeader>
              <CardContent className="pb-40">
                <p>
                  Our proactive risk frameworks protect your assets and optimize
                  outcomes - no guesswork, just results.
                </p>
                <ShieldIcon2 className="absolute bottom-0 left-0 h-auto w-full" />
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex items-center justify-center gap-20">
          <div className="flex flex-col items-center justify-center">
            <NumberCounter
              value={9}
              className="text-6xl font-medium"
              suffix="+"
            />
            <h3>Years of Excellence</h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <NumberCounter
              value={2.6}
              className="text-6xl font-medium"
              suffix="K+"
            />
            <h3>Clients Served</h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <NumberCounter
              value={840}
              className="text-6xl font-medium"
              suffix="B+"
            />
            <h3>Assets Under Advisement</h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <NumberCounter
              value={18}
              className="text-6xl font-medium"
              suffix="%"
            />
            <h3>Monthly Growth</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
