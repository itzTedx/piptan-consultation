import Link from "next/link";

import { IconArrowUp } from "@tabler/icons-react";

import { Logo } from "@/assets/logo";

export const Footer = () => {
  return (
    <footer>
      <div className="container grid grid-cols-3 gap-3 py-12">
        <div>
          <Link href="/">
            <Logo />
          </Link>
          <h4 className="font-aloevera mt-8 text-2xl font-medium">
            Head Office
          </h4>
          <p className="mt-3">
            Piptan Consulting, World Trade Centre,
            <br /> Office No. 2407, Level 24 <br />
            Sheikh Zayed Road, Dubai, UAE
          </p>
          <h4 className="font-aloevera mt-8 text-2xl font-medium">
            Follow us on
          </h4>
          <ul className="mt-3 flex items-center gap-4">
            <li>I</li>
            <li>F</li>
            <li>Y</li>
          </ul>
        </div>
      </div>
      <div className="text-primary-foreground/60 border-muted-foreground/50 container flex items-center justify-between border-t py-3">
        <Link href="/privacy" className="text-primary-foreground/60">
          Terms & Conditions
        </Link>

        <Link href="#" className="flex items-center gap-2">
          Scroll to top{" "}
          <IconArrowUp className="text-primary-foreground/60 size-4 shrink-0" />
        </Link>
      </div>
    </footer>
  );
};
