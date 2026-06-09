import { useMemo, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Section } from "@/components/section"
import { FadeIn } from "@/components/fade-in"
import { ProjectCard } from "@/components/project-card"
import { useDocumentTitle } from "@/hooks/use-document-title"
import { allTags, projects } from "@/data/portfolio"
import { cn } from "@/lib/utils"

export function ProjectsPage() {
  useDocumentTitle("Projects")
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const reduce = useReducedMotion()

  const filtered = useMemo(
    () =>
      activeTag
        ? projects.filter((p) => p.stack.includes(activeTag))
        : projects,
    [activeTag],
  )

  const filters = ["All", ...allTags]

  return (
    <Section
      eyebrow="Portfolio"
      title="All Projects"
      description="Every project below follows the same case-study format: problem, architecture, frontend, key decisions, trade-offs, and outcomes."
      className="pt-32 sm:pt-36"
    >
      {/* Tag filter */}
      <FadeIn className="mb-8">
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter projects by technology"
        >
          {filters.map((tag) => {
            const isActive =
              tag === "All" ? activeTag === null : activeTag === tag
            return (
              <button
                key={tag}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveTag(tag === "All" ? null : tag)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-sm transition-all duration-200 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
                  isActive
                    ? "border-brand bg-brand text-brand-foreground shadow-sm"
                    : "border-border bg-card text-muted-foreground hover:-translate-y-0.5 hover:border-brand/40 hover:text-foreground",
                )}
              >
                {tag}
              </button>
            )
          })}
        </div>
      </FadeIn>

      {/* Count */}
      <p className="mb-6 text-sm text-muted-foreground" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        {activeTag && (
          <>
            {" "}
            using <span className="font-medium text-foreground">{activeTag}</span>
          </>
        )}
      </p>

      {/* Grid — cards animate in/out and re-flow when the filter changes */}
      <motion.div layout={!reduce} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  )
}
