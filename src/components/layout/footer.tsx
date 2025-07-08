import Link from "next/link";

import { IconArrowUp } from "@tabler/icons-react";

import { LogoFull } from "@/assets/logo";

export const Footer = () => {
  return (
    <footer>
      <div className="container grid grid-cols-5 gap-12 py-20">
        <div className="col-span-2">
          <Link href="/">
            <LogoFull />
          </Link>

          <p className="mt-3 text-lg font-light text-balance">
            Empowering individuals and businesses with strategic investment
            advice, risk management, and financial planning to achieve long-term
            growth and stability.
          </p>
        </div>

        <nav>
          <h4 className="font-aloevera border-muted-foreground/30 border-b text-xl font-medium">
            Quick Links
          </h4>
          <ul className="mt-5">
            <li>
              <Link href="/" className="block py-2">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="block py-2">
                Services
              </Link>
            </li>

            <li>
              <Link href="/contact" className="block py-2">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <nav>
          <h4 className="font-aloevera border-muted-foreground/30 border-b text-xl font-medium">
            Essentials
          </h4>
          <ul className="mt-5">
            <li>
              <Link href="/" className="block py-2">
                Brochure
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2">
                Articles
              </Link>
            </li>
            <li>
              <Link href="/services" className="block py-2">
                Case Studies
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h4 className="font-aloevera border-muted-foreground/30 border-b text-xl font-medium">
            Head Office
          </h4>
          <p className="mt-5">
            Piptan Consulting, World Trade Centre,
            <br /> Office No. 2407, Level 24 <br />
            Sheikh Zayed Road, Dubai, UAE
          </p>
          <h4 className="font-aloevera mt-8 text-xl font-medium">
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
