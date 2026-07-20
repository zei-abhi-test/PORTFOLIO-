import { GitBranch, Github, Star } from "lucide-react";
import { MotionSection } from "@/components/motion/motion-section";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";

const stats = [
  { label: "Product builds", value: "12+", icon: Github },
  { label: "Core stacks", value: "7", icon: GitBranch },
  { label: "Focus", value: "AI", icon: Star },
];

export function GitHubStats() {
  return (
    <MotionSection>
      <div className="container-page">
        <SectionHeading
          eyebrow="GitHub"
          title="A working graph of experiments, launches, and learning."
          description="Numbers are intentionally simple here: the goal is to show direction and consistency without pretending vanity metrics are the product."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="p-7 text-center">
                <Icon className="mx-auto h-5 w-5 text-accent" aria-hidden />
                <p className="mt-5 text-4xl font-semibold text-foreground">{stat.value}</p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
