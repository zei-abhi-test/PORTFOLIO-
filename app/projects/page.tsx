import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ProjectGrid } from "@/components/sections/projects";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected AI, full stack, and developer tool projects by Abhishek BK.",
};

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="Projects"
          title="Product-minded software across AI, commerce, and developer tools."
          description="Every project is framed around usability, maintainability, and a clear reason to exist."
        />
        <ProjectGrid />
      </main>
      <Footer />
    </>
  );
}
