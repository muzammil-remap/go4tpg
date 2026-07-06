import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowLabelProps = {
  children: ReactNode;
  className?: string;
  color?: "blue" | "blue-tint" | "white" | "navy" | "cta" | "subtle";
};

const colorClassMap: Record<NonNullable<EyebrowLabelProps["color"]>, string> = {
  blue: "text-tpg-blue",
  "blue-tint": "text-tpg-blue-tint",
  white: "text-white/70",
  navy: "text-tpg-navy",
  cta: "text-tpg-cta",
  subtle: "text-tpg-subtle",
};

/**
 * Small monospace, wide-tracking label used above section headlines
 * ("THE OFFERS", "HOW WE WORK", etc).
 */
export function EyebrowLabel({ children, className, color = "blue" }: EyebrowLabelProps) {
  return (
    <div
      className={cn(
        "font-mono text-[12px] font-medium tracking-[0.2em] uppercase",
        colorClassMap[color],
        className,
      )}
    >
      {children}
    </div>
  );
}
