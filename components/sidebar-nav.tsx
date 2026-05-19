"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActiveNavPath } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/records", label: "Track Records" },
  { href: "/gallery", label: "Gallery" },
] as const;

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-60 shrink-0 flex-col border-r border-border bg-card lg:flex">
      <div className="border-b border-border px-6 py-8">
        <p className="text-lg font-extrabold tracking-wide text-primary uppercase">
          Ninja
        </p>
        <p className="mt-1 text-caption text-muted-foreground">
          Track Racing
        </p>
      </div>
      <nav aria-label="Main navigation" className="flex flex-1 flex-col gap-1 p-4">
        {navItems.map((item) => {
          const isActive = isActiveNavPath(pathname, item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-sm px-3.5 py-3 text-label transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                isActive
                  ? "bg-elevated font-semibold text-primary"
                  : "font-normal text-foreground hover:bg-muted/50"
              )}
            >
              <span
                className={cn(
                  "size-2 shrink-0 rounded-full",
                  isActive ? "bg-primary" : "bg-muted-foreground"
                )}
                aria-hidden="true"
              />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
