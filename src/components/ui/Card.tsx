import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardAccent = "blue" | "navy" | "cta";
type CardTone = "light" | "dark";

type CardProps = {
  children: ReactNode;
  accent?: CardAccent;
  tone?: CardTone;
  className?: string;
};

const accentBorderClassMap: Record<CardAccent, string> = {
  blue: "border-t-tpg-blue",
  navy: "border-t-tpg-navy",
  cta: "border-t-tpg-cta",
};

/**
 * Offer / pricing card shell. `tone="dark"` renders the flagship-style card
 * (navy background, white text) used for the Revenue Operations Sprint.
 */
export function Card({ children, accent = "blue", tone = "light", className }: CardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-[9px] border-t-[3px] px-6 py-7 sm:px-[26px] sm:py-7",
        accentBorderClassMap[accent],
        tone === "light"
          ? "border-tpg-border-strong border border-t-[3px] bg-white"
          : "border-tpg-navy bg-tpg-navy border-[1.5px] shadow-[0_20px_48px_-26px_rgba(15,44,76,0.7)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
