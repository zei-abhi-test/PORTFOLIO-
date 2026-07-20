import Link from "next/link";
import { Github } from "lucide-react";
import { navItems, owner } from "@/lib/site-data";
import { LinkButton } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/92 backdrop-blur supports-[backdrop-filter]:bg-background/78">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-normal text-foreground">
          Abhishek BK
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <LinkButton href={owner.github} external variant="secondary" className="h-10 min-h-10 px-4">
          <Github className="h-4 w-4" aria-hidden />
          <span className="hidden sm:inline">GitHub</span>
        </LinkButton>
      </div>
    </header>
  );
}
