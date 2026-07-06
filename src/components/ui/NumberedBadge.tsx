import { cn } from "@/lib/cn";

type NumberedBadgeProps = {
  number: number | string;
  className?: string;
};

/**
 * Small circular numbered badge used in the hero's "what we install" list.
 */
export function NumberedBadge({ number, className }: NumberedBadgeProps) {
  return (
    <span
      className={cn(
        "bg-tpg-blue flex h-[23px] w-[23px] flex-none items-center justify-center rounded-full font-mono text-[11.5px] font-medium text-white",
        className,
      )}
    >
      {number}
    </span>
  );
}
