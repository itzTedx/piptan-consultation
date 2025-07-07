"use client";

import { useEffect, useRef, useState } from "react";

import NumberFlow from "@number-flow/react";
import { useInView } from "motion/react";

import { cn } from "@/lib/utils";

export function NumberCounter({
  className,
  suffix,
  value,
  delayInMs = 100,
}: {
  className?: string;
  suffix?: string;
  value: number;
  delayInMs?: number;
}) {
  const [number, setNumber] = useState<number>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -100px 0px", once: true });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setNumber(value), delayInMs);
    } else {
      setNumber(0);
    }
  }, [isInView, value, delayInMs]);

  return (
    <NumberFlow
      ref={ref}
      suffix={suffix}
      value={Number(number)}
      spinTiming={{ duration: 1200, easing: "ease-in-out" }}
      className={cn(className)}
    />
  );
}
