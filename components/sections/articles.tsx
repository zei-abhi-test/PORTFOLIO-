import { ArrowRight } from "lucide-react";
import { articles } from "@/lib/site-data";
import { MotionSection } from "@/components/motion/motion-section";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";

export function LatestArticles() {
  return (
    <MotionSection>
      <div className="container-page">
        <SectionHeading
          eyebrow="Writing"
          title="Notes on products, systems, and engineering craft."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {articles.map((article) => (
            <Card key={article} className="group p-6">
              <p className="text-lg font-medium leading-7 text-foreground">{article}</p>
              <div className="mt-8 flex items-center gap-2 text-sm text-muted">
                Coming soon
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
