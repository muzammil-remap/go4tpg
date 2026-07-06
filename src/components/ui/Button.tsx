import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant =
  "cta" | "navy" | "outline-blue" | "outline-navy" | "outline-cta" | "white-on-cta" | "text-navy";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded font-semibold text-[13.5px] transition-colors duration-150 whitespace-nowrap";

const variantClassMap: Record<ButtonVariant, string> = {
  cta: "bg-tpg-cta text-white px-[30px] py-[15px] text-[15.5px] hover:bg-tpg-cta-hover",
  navy: "bg-tpg-navy text-white px-[14px] py-3",
  "outline-blue":
    "border-[1.5px] border-tpg-blue text-tpg-blue px-[14px] py-[11px] hover:bg-tpg-blue hover:text-white",
  "outline-navy":
    "border-[1.5px] border-tpg-navy text-tpg-navy px-[14px] py-[11px] hover:bg-tpg-navy hover:text-white",
  "outline-cta":
    "border-[1.5px] border-tpg-cta text-tpg-cta px-[14px] py-[11px] hover:bg-tpg-cta hover:text-white",
  "white-on-cta":
    "bg-white text-tpg-cta-hover px-9 py-4 text-base font-bold hover:bg-tpg-navy hover:text-white",
  "text-navy": "text-tpg-navy font-semibold text-[15.5px] hover:text-tpg-blue",
};

/**
 * Anchor-styled call-to-action button. Every CTA in this design links to an
 * external booking flow or an on-page anchor, so this always renders an
 * `<a>` rather than a `<button>`.
 */
export function Button({ children, variant = "cta", className, ...rest }: ButtonProps) {
  return (
    <a className={cn(base, variantClassMap[variant], className)} {...rest}>
      {children}
    </a>
  );
}
