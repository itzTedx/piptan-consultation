import Link from "next/link";

import { IconArrowUp } from "@tabler/icons-react";

export const Footer = () => {
  return (
    <div className="text-primary-foreground/60 container flex items-center justify-between py-3">
      <Link href="/privacy" className="text-primary-foreground/60">
        Terms & Conditions
      </Link>

      <Link href="#" className="flex items-center gap-2">
        Scroll to top{" "}
        <IconArrowUp className="text-primary-foreground/60 size-4 shrink-0" />
      </Link>
    </div>
  );
};
