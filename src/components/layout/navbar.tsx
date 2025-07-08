import Link from "next/link";

import { IconPhone } from "@tabler/icons-react";

import { Logo } from "@/assets/logo";
import { NAV_LINKS } from "@/data/constants";

import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <header className="font-aloevera bg-foreground/70 sticky top-2 z-100 mx-auto flex max-w-4xl items-center justify-between rounded-full px-1 py-1 shadow-lg backdrop-blur-lg">
      <Link href="/" className="px-4">
        <Logo className="z-9999 mix-blend-difference" />
      </Link>
      <nav>
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
      <Button className="" size="lg">
        <IconPhone />
        Contact
      </Button>
    </header>
  );
};
