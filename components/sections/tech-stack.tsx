import { techGroups } from "@/lib/site-data";
import { MotionSection } from "@/components/motion/motion-section";
import { Badge, Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";

export function TechStack() {
  return (
    <MotionSection>
      <div className="container-page">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Modern tools for fast, reliable product development."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((group) => {
            const Icon = group.icon;
            return (
              <Card key={group.title} className="p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-border bg-zinc-950">
                    <Icon className="h-5 w-5 text-accent" aria-hidden />
                  </div>
                  <h3 className="font-semibold text-foreground">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
