import { experiences } from "@/lib/site-data";
import { MotionSection } from "@/components/motion/motion-section";
import { SectionHeading } from "@/components/sections/section-heading";

export function ExperienceTimeline() {
  return (
    <MotionSection>
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience"
          title="A timeline built for forward motion."
          description="Structured so new roles, internships, launches, and product milestones can be added without redesigning the page."
        />
        <div className="mx-auto max-w-3xl">
          {experiences.map((item, index) => (
            <div key={item.title} className="relative grid grid-cols-[88px_1fr] gap-6 pb-10 last:pb-0">
              {index !== experiences.length - 1 ? (
                <div className="absolute left-[43px] top-9 h-full w-px bg-border" aria-hidden />
              ) : null}
              <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card font-mono text-xs text-accent">
                {item.year}
              </div>
              <div className="premium-border rounded-xl bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
