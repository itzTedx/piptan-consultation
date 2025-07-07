import { IconSparkles } from "@tabler/icons-react";

import { ShieldIcon, ShieldIcon2 } from "@/assets/card-icons";
import { NumberCounter } from "@/components/atom/number-flow";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const WhyChooseUsSection = () => {
  return (
    <section className="bg-background text-foreground rounded-t-4xl py-20">
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
      <div className="container my-32 grid items-end gap-3 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-4xl leading-snug">
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
            <span className="bg-primary-foreground text-primary grid size-10 place-content-center rounded-full">
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
      <div className="container grid max-w-6xl grid-cols-2 items-center justify-center gap-20 md:grid-cols-4">
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
  );
};
