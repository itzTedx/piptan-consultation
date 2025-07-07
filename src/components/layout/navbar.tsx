import Link from "next/link";

import { IconPhone } from "@tabler/icons-react";

import { Logo } from "@/assets/logo";
import { NAV_LINKS } from "@/data/constants";

import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <header className="font-aloevera sticky top-0 z-100 py-3">
      <div className="z-100 container mx-auto flex items-center justify-between">
        <Link href="/">
          <Logo className="z-9999 mix-blend-difference" />
        </Link>
        <nav className="bg-foreground/80 relative z-999 overflow-hidden rounded-full px-4 py-2 backdrop-blur-md">
          <ul className="relative z-10 flex items-center gap-6">
            {NAV_LINKS.map((nav) => (
              <li key={nav.id}>
                <Link href={nav.href} className="inline-block px-2 py-1.5">
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button className="">
          <IconPhone />
          Contact
        </Button>
      </div>
    </header>
  );
};
