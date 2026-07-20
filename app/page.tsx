import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { ExperienceTimeline } from "@/components/sections/experience";
import { FeaturedProjects } from "@/components/sections/projects";
import { GitHubStats } from "@/components/sections/github-stats";
import { Hero } from "@/components/sections/hero";
import { LatestArticles } from "@/components/sections/articles";
import { TechStack } from "@/components/sections/tech-stack";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <ExperienceTimeline />
        <FeaturedProjects />
        <TechStack />
        <GitHubStats />
        <LatestArticles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
