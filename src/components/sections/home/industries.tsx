import Image from "next/image";

import { IconChevronRight } from "@tabler/icons-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const IndustriesSection = () => {
  return (
    <section className="bg-background text-foreground">
      <div className="container max-w-7xl space-y-2 py-20">
        <div>
          <h2 className="text-4xl">
            Industries <br />
            We Serve
          </h2>
          <p className="text-xl">
            Expertise Across Sectors. Solutions That Scale.
          </p>
        </div>
        <div className="mt-12">
          <Tabs
            defaultValue="tab-1"
            orientation="vertical"
            className="grid w-full grid-cols-2 flex-row items-start gap-4"
          >
            <TabsList className="h-auto w-full flex-col items-start gap-2 bg-transparent py-0">
              <TabsTrigger
                value="tab-1"
                className="data-[state=active]:bg-muted w-full justify-between data-[state=active]:shadow-none"
              >
                Technology & Life Sciences{" "}
                <IconChevronRight className="text-muted-foreground size-4" />
              </TabsTrigger>
              <TabsTrigger
                value="tab-2"
                className="data-[state=active]:bg-muted w-full justify-between data-[state=active]:shadow-none"
              >
                Financial Services{" "}
                <IconChevronRight className="text-muted-foreground size-4" />
              </TabsTrigger>
              <TabsTrigger
                value="tab-3"
                className="data-[state=active]:bg-muted w-full justify-between data-[state=active]:shadow-none"
              >
                Real Estate & Development{" "}
                <IconChevronRight className="text-muted-foreground size-4" />
              </TabsTrigger>
              <TabsTrigger
                value="tab-4"
                className="data-[state=active]:bg-muted w-full justify-between data-[state=active]:shadow-none"
              >
                Manufacturing & Engineering{" "}
                <IconChevronRight className="text-muted-foreground size-4" />
              </TabsTrigger>
              <TabsTrigger
                value="tab-5"
                className="data-[state=active]:bg-muted w-full justify-between data-[state=active]:shadow-none"
              >
                NGOs & Charities{" "}
                <IconChevronRight className="text-muted-foreground size-4" />
              </TabsTrigger>
              <TabsTrigger
                value="tab-6"
                className="data-[state=active]:bg-muted w-full justify-between data-[state=active]:shadow-none"
              >
                Government & Regulatory Bodies{" "}
                <IconChevronRight className="text-muted-foreground size-4" />
              </TabsTrigger>
            </TabsList>
            <div className="grow rounded-md text-start">
              <TabsContent value="tab-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Technology & Life Sciences</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative aspect-video">
                      <Image src="/images/service.webp" alt="" fill />
                    </div>
                    <h4 className="font-aloevera mb-2 text-xl font-medium">
                      Fueling innovation with strategic financial planning.
                    </h4>
                    <p className="text-xl">
                      From emerging startups to established biotech firms, we
                      support tech-forward companies in managing capital,
                      scaling responsibly, and staying ahead of fast-changing
                      markets.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="tab-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Technology & Life Sciences</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative aspect-video">
                      <Image src="/images/service.webp" alt="" fill />
                    </div>
                    <h4 className="font-aloevera mb-2 text-xl font-medium">
                      Fueling innovation with strategic financial planning.
                    </h4>
                    <p className="text-xl">
                      From emerging startups to established biotech firms, we
                      support tech-forward companies in managing capital,
                      scaling responsibly, and staying ahead of fast-changing
                      markets.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="tab-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Technology & Life Sciences</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative aspect-video">
                      <Image src="/images/service.webp" alt="" fill />
                    </div>
                    <h4 className="font-aloevera mb-2 text-xl font-medium">
                      Fueling innovation with strategic financial planning.
                    </h4>
                    <p className="text-xl">
                      From emerging startups to established biotech firms, we
                      support tech-forward companies in managing capital,
                      scaling responsibly, and staying ahead of fast-changing
                      markets.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="tab-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Technology & Life Sciences</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative aspect-video">
                      <Image src="/images/service.webp" alt="" fill />
                    </div>
                    <h4 className="font-aloevera mb-2 text-xl font-medium">
                      Fueling innovation with strategic financial planning.
                    </h4>
                    <p className="text-xl">
                      From emerging startups to established biotech firms, we
                      support tech-forward companies in managing capital,
                      scaling responsibly, and staying ahead of fast-changing
                      markets.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="tab-5">
                <Card>
                  <CardHeader>
                    <CardTitle>Technology & Life Sciences</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative aspect-video">
                      <Image src="/images/service.webp" alt="" fill />
                    </div>
                    <h4 className="font-aloevera mb-2 text-xl font-medium">
                      Fueling innovation with strategic financial planning.
                    </h4>
                    <p className="text-xl">
                      From emerging startups to established biotech firms, we
                      support tech-forward companies in managing capital,
                      scaling responsibly, and staying ahead of fast-changing
                      markets.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="tab-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Technology & Life Sciences</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative aspect-video">
                      <Image src="/images/service.webp" alt="" fill />
                    </div>
                    <h4 className="font-aloevera mb-2 text-xl font-medium">
                      Fueling innovation with strategic financial planning.
                    </h4>
                    <p className="text-xl">
                      From emerging startups to established biotech firms, we
                      support tech-forward companies in managing capital,
                      scaling responsibly, and staying ahead of fast-changing
                      markets.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
