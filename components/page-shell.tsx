import { BottomNav } from "@/components/bottom-nav";
import { MobileNav } from "@/components/mobile-nav";
import { SidebarNav } from "@/components/sidebar-nav";
import { cn } from "@/lib/utils";

type PageShellProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageShell({ children, className }: PageShellProps) {
  return (
    <div className="flex min-h-full flex-col bg-background lg:flex-row">
      <SidebarNav />
      <div className="flex min-h-full flex-1 flex-col">
        <MobileNav />
        <main
          className={cn(
            "flex-1 px-page-mobile pb-24 pt-6 lg:px-page-desktop lg:pb-8 lg:pt-8",
            className
          )}
        >
          {children}
        </main>
        <BottomNav />
      </div>
    </div>
  );
}
