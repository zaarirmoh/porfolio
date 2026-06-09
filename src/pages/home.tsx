import { Hero } from "@/components/sections/hero"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { TechStack } from "@/components/sections/tech-stack"
import { Experience } from "@/components/sections/experience"
import { About } from "@/components/sections/about"
import { Education } from "@/components/sections/education"
import { Contact } from "@/components/sections/contact"
import { useDocumentTitle } from "@/hooks/use-document-title"

export function HomePage() {
  useDocumentTitle()
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <TechStack />
      <Experience />
      <About />
      <Education />
      <Contact />
    </>
  )
}
