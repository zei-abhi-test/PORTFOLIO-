import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/site-data";
import { Badge, Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { MotionSection } from "@/components/motion/motion-section";
import { SectionHeading } from "@/components/sections/section-heading";

export function ProjectGrid({ featured = false }: { featured?: boolean }) {
  const visibleProjects = featured ? projects.slice(0, 3) : projects;

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {visibleProjects.map((project) => (
        <Card key={project.title} className="flex min-h-[330px] flex-col p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-semibold tracking-normal text-foreground">
              {project.title}
            </h3>
            <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-accent">
              0{projects.indexOf(project) + 1}
            </span>
          </div>
          <p className="mt-5 flex-1 text-pretty leading-7 text-muted">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <LinkButton href={project.github} external variant="secondary" className="h-10 min-h-10">
              <Github className="h-4 w-4" aria-hidden />
              GitHub
            </LinkButton>
            <LinkButton href={project.demo} external variant="secondary" className="h-10 min-h-10">
              <ExternalLink className="h-4 w-4" aria-hidden />
              Live Demo
            </LinkButton>
          </div>
        </Card>
      ))}
    </div>
  );
}

export function FeaturedProjects() {
  return (
    <MotionSection>
      <div className="container-page">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work with a product-quality finish."
          description="A concise set of projects spanning AI, commerce, portfolio systems, and developer workflows."
        />
        <ProjectGrid featured />
        <div className="mt-10 text-center">
          <LinkButton href="/projects" variant="primary">
            View all projects
          </LinkButton>
        </div>
      </div>
    </MotionSection>
  );
}
