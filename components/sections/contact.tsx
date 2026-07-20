import Link from "next/link";
import { contactLinks } from "@/lib/site-data";
import { MotionSection } from "@/components/motion/motion-section";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";

export function Contact() {
  return (
    <MotionSection>
      <div className="container-page">
        <Card className="p-8 md:p-12">
          <SectionHeading
            eyebrow="Contact"
            title="Have an ambitious product idea or engineering role?"
            description="I’m interested in teams building useful software with high standards for product quality, user experience, and technical depth."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {contactLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-center gap-3 rounded-[14px] border border-border bg-zinc-950 px-5 py-4 text-sm font-medium text-foreground transition-colors hover:border-zinc-700 hover:bg-zinc-900"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <Icon className="h-4 w-4 text-accent" aria-hidden />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </Card>
      </div>
    </MotionSection>
  );
}
