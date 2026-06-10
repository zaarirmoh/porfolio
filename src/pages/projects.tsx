import { Section } from "@/components/section"
import { FadeIn } from "@/components/fade-in"
import { ProjectCard } from "@/components/project-card"
import { useDocumentTitle } from "@/hooks/use-document-title"
import { projects } from "@/data/portfolio"

export function ProjectsPage() {
  useDocumentTitle("Projects")

  return (
    <Section
      eyebrow="Portfolio"
      title="All Projects"
      description="Full-stack platforms I've built end to end. Each one follows the same case-study format: problem, architecture, frontend, key decisions, trade-offs, and outcomes."
      className="pt-32 sm:pt-36"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={(i % 3) * 0.08} className="h-full">
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
