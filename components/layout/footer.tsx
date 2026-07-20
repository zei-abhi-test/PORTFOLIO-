import Link from "next/link";
import { contactLinks, navItems } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border/80 py-10">
      <div className="container-page flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-foreground">Abhishek BK</p>
          <p className="mt-2 text-sm text-muted">
            Building AI products, full stack applications, and developer tools.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-muted">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
          {contactLinks.slice(0, 3).map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
