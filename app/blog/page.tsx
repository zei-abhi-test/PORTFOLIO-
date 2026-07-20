import type { Metadata } from "next";
import { PenLine } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing by Abhishek BK on product engineering and AI applications.",
};

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main className="container-page flex min-h-[68vh] items-center py-20">
        <Card className="mx-auto max-w-2xl p-10 text-center md:p-14">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-[14px] border border-border bg-zinc-950">
            <PenLine className="h-5 w-5 text-accent" aria-hidden />
          </div>
          <h1 className="mt-8 text-3xl font-semibold text-foreground md:text-5xl">
            Essays are being shaped.
          </h1>
          <p className="mt-5 text-pretty leading-8 text-muted">
            A focused writing space for product engineering notes, AI interface lessons,
            and production checklists is coming soon.
          </p>
        </Card>
      </main>
      <Footer />
    </>
  );
}
