import Link from "next/link";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  actionLabel?: string;
  actionHref?: string;
  onActionClick?: () => void;
  className?: string;
};

export function SectionHeader({
  title,
  actionLabel,
  actionHref,
  onActionClick,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn("flex items-center justify-between gap-4", className)}
    >
      <h2 className="text-h2 font-bold text-foreground">{title}</h2>
      {actionLabel &&
        (actionHref ? (
          <Link
            href={actionHref}
            className="text-label font-semibold text-primary transition-colors hover:text-(--primary-hover) focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            {actionLabel}
          </Link>
        ) : (
          <button
            type="button"
            onClick={onActionClick}
            className="text-label font-semibold text-primary transition-colors hover:text-(--primary-hover) focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            {actionLabel}
          </button>
        ))}
    </div>
  );
}
