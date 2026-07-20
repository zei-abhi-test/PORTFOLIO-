import type { Metadata } from "next";
import { Download, Mail } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { owner, techGroups } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume summary for Abhishek BK.",
};

export default function ResumePage() {
  return (
    <>
      <SiteHeader />
      <main className="container-page py-20 md:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              Resume
            </p>
            <h1 className="text-4xl font-semibold tracking-normal text-foreground md:text-6xl">
              {owner.name}
            </h1>
            <p className="mt-5 text-xl text-foreground">{owner.role}</p>
            <p className="mt-5 text-pretty leading-8 text-muted">{owner.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href={owner.email} variant="primary">
                <Mail className="h-4 w-4" aria-hidden />
                Email
              </LinkButton>
              <LinkButton href="/Abhishek-BK-Resume.pdf" variant="secondary">
                <Download className="h-4 w-4" aria-hidden />
                Download PDF
              </LinkButton>
            </div>
          </div>
          <Card className="p-7 md:p-9">
            <h2 className="text-2xl font-semibold text-foreground">Profile</h2>
            <p className="mt-4 leading-8 text-muted">
              Software product engineering student focused on building polished AI
              products, full stack applications, and developer tools with strong
              foundations in frontend systems, backend APIs, and deployment workflows.
            </p>
            <h2 className="mt-9 text-2xl font-semibold text-foreground">Core Skills</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {techGroups.slice(0, 6).map((group) => (
                <div key={group.title} className="rounded-[16px] border border-border bg-zinc-950 p-4">
                  <p className="font-medium text-foreground">{group.title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{group.items.join(", ")}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
