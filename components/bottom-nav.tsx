"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActiveNavPath } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dash" },
  { href: "/records", label: "Records" },
  { href: "/gallery", label: "Gallery" },
] as const;

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-0 bottom-0 z-40 flex h-16 items-center justify-around border-t border-border bg-card px-6 lg:hidden"
    >
      {navItems.map((item) => {
        const isActive = isActiveNavPath(pathname, item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center gap-1 rounded-sm px-2 py-1 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
              isActive ? "text-primary" : "text-muted-foreground"
            )}
          >
            <span
              className={cn(
                "size-1.5 rounded-full",
                isActive ? "bg-primary" : "bg-muted-foreground"
              )}
              aria-hidden="true"
            />
            <span
              className={cn(
                "text-caption",
                isActive ? "font-bold" : "font-medium"
              )}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
