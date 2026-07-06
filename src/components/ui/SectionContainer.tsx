import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionContainerProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Inner content max-width. Defaults to a comfortable reading/layout width. */
  innerClassName?: string;
  as?: "section" | "div";
};

/**
 * Shared horizontal padding + section spacing wrapper. Mirrors the
 * reference design's `.tpg-pad` rule: 56px side padding on desktop,
 * collapsing to 24px at the 720px breakpoint.
 */
export function SectionContainer({
  id,
  children,
  className,
  innerClassName,
  as = "section",
}: SectionContainerProps) {
  const Tag = as;
  return (
    <Tag id={id} className={cn("px-6 sm:px-8 md:px-14", className)}>
      <div className={cn("mx-auto max-w-[1200px]", innerClassName)}>{children}</div>
    </Tag>
  );
}
