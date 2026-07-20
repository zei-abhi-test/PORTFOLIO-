import { MotionSection } from "@/components/motion/motion-section";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";

const principles = [
  "Product thinking before implementation detail",
  "Interfaces that are fast, readable, and accessible",
  "Systems designed for iteration, not demos alone",
];

export function About() {
  return (
    <MotionSection id="about">
      <div className="container-page">
        <SectionHeading
          eyebrow="About"
          title="Engineering with taste, structure, and a strong product instinct."
          description="I care about the whole product surface: the interface, the backend contracts, the reliability story, and the small decisions that make software feel composed."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {principles.map((principle) => (
            <Card key={principle} className="p-6">
              <p className="text-lg font-medium leading-7 text-foreground">{principle}</p>
            </Card>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
