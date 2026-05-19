"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AppHeader } from "@/components/app-header";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/records", label: "Track Records" },
  { href: "/gallery", label: "Gallery" },
] as const;

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <AppHeader onMenuClick={() => setOpen(true)} />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-[min(100%,280px)] border-border bg-card p-0">
          <SheetHeader className="border-b border-border px-6 py-6 text-left">
            <SheetTitle className="text-lg font-extrabold tracking-wide text-primary uppercase">
              Ninja
            </SheetTitle>
            <p className="text-caption text-muted-foreground">Track Racing</p>
          </SheetHeader>
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1 p-4">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
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
        </SheetContent>
      </Sheet>
    </>
  );
}
