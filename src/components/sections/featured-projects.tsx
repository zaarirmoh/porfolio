import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/section"
import { FadeIn } from "@/components/fade-in"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { featuredProjects } from "@/data/portfolio"

export function FeaturedProjects() {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Featured Projects"
      description="A few products I've built end-to-end — each one spans the interface, the API, and the data underneath."
    >
      <div className="grid gap-7 sm:grid-cols-2">
        {featuredProjects.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 0.08}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-12 flex justify-center">
        <Button
          variant="outline"
          size="lg"
          asChild
          className="h-12 px-6 text-base transition-transform hover:-translate-y-0.5 [&_svg]:size-5"
        >
          <Link to="/projects">
            See all projects
            <ArrowRight className="transition-transform group-hover/button:translate-x-1" />
          </Link>
        </Button>
      </FadeIn>
    </Section>
  )
}
