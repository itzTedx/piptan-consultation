import Link from "next/link";

import { IconMail, IconPhone } from "@tabler/icons-react";

export const Cta = () => {
  return (
    <section className="bg-primary">
      <div className="container grid grid-cols-2 gap-6 py-12">
        <h3 className="font-aloevera text-6xl font-medium">
          Let&apos;s Grow your Business Together
        </h3>
        <div className="grid grid-cols-2 gap-6">
          <Link
            href="tel:+971987654321"
            className="group bg-primary-foreground text-foreground flex items-center justify-center gap-3 rounded-md border border-white shadow-xl transition-shadow hover:shadow-lg"
          >
            <div className="bg-primary text-primary-foreground grid size-16 place-content-center rounded-full">
              <IconPhone className="size-9 stroke-1" />
            </div>
            <div>
              <h4 className="font-aloevera text-xl">Call us now!</h4>
              <p className="group-hover:text-primary text-2xl font-semibold tracking-wide">
                +971 54 454 5454
              </p>
            </div>
          </Link>
          <Link
            href="mailto:info@piptan.ae"
            className="group bg-primary-foreground text-foreground flex items-center justify-center gap-3 rounded-md border border-white shadow-xl transition-shadow hover:shadow-lg"
          >
            <div className="bg-primary text-primary-foreground grid size-16 place-content-center rounded-full">
              <IconMail className="size-9 stroke-1" />
            </div>
            <div>
              <h4 className="font-aloevera text-xl">Mail us anytime!</h4>
              <p className="group-hover:text-primary text-2xl font-semibold tracking-wide">
                consult@piptan.ae
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
