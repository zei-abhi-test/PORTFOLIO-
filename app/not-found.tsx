import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="container-page flex min-h-[68vh] items-center py-20">
        <Card className="mx-auto max-w-xl p-10 text-center md:p-14">
          <p className="font-mono text-sm text-accent">404</p>
          <h1 className="mt-5 text-4xl font-semibold text-foreground md:text-6xl">
            Page not found.
          </h1>
          <p className="mt-5 leading-8 text-muted">
            This route is not part of the portfolio surface.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-[14px] bg-foreground px-5 py-3 text-sm font-medium text-background"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back home
          </Link>
        </Card>
      </main>
      <Footer />
    </>
  );
}
