import { motion, useReducedMotion } from "framer-motion"
import { MapPin } from "lucide-react"
import { Section } from "@/components/section"
import { experience } from "@/data/portfolio"
import { cn } from "@/lib/utils"

/** "Northwind Systems" → "NS" */
function initials(company: string) {
  return company
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

const EASE = [0.22, 1, 0.36, 1] as const

export function Experience() {
  const reduce = useReducedMotion()

  return (
    <Section
      id="experience"
      eyebrow="Track record"
      title="Experience"
      description="Impact first — what shipped and what it moved."
      className="bg-muted/30"
    >
      <div className="relative">
        {/* Continuous rail: left on mobile, centered on md+ */}
        <div
          aria-hidden
          className="absolute top-6 bottom-0 left-6 w-px -translate-x-1/2 bg-gradient-to-b from-brand via-brand/35 to-transparent md:left-1/2"
        />

        <ol className="space-y-12 md:space-y-16">
          {experience.map((job, i) => {
            const cardOnLeft = i % 2 === 0
            const isCurrent = i === 0

            return (
              <li
                key={`${job.company}-${job.period}`}
                className="relative pl-16 md:grid md:grid-cols-2 md:gap-x-16 md:pl-0"
              >
                {/* Node on the rail */}
                <motion.span
                  initial={reduce ? false : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.15 }}
                  className="absolute top-0 left-6 z-10 size-12 -translate-x-1/2 md:left-1/2"
                >
                  <span className="absolute inset-0 rounded-xl bg-background ring-4 ring-background" />
                  <span className="absolute inset-0 grid place-items-center rounded-xl border border-brand/30 bg-brand/10 font-heading text-sm font-bold text-brand">
                    {initials(job.company)}
                  </span>
                  {isCurrent && (
                    <span className="absolute -top-1 -right-1 flex size-3.5">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex size-3.5 rounded-full border-2 border-background bg-emerald-500" />
                    </span>
                  )}
                </motion.span>

                {/* Connector from rail to card (desktop) */}
                <span
                  aria-hidden
                  className={cn(
                    "absolute top-6 hidden h-px w-10 bg-gradient-to-r from-brand/40 to-transparent md:block",
                    cardOnLeft
                      ? "right-[calc(50%+1.75rem)] rotate-180"
                      : "left-[calc(50%+1.75rem)]",
                  )}
                />

                {/* Period / meta — opposite side of the card on desktop */}
                <motion.div
                  initial={reduce ? false : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className={cn(
                    "hidden md:row-start-1 md:flex md:flex-col md:gap-1 md:pt-2",
                    cardOnLeft
                      ? "md:col-start-2 md:items-start md:pl-12"
                      : "md:col-start-1 md:items-end md:pr-12 md:text-right",
                  )}
                >
                  <span className="font-heading text-xl font-semibold tracking-tight tabular-nums">
                    {job.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="size-3.5" />
                    {job.location}
                  </span>
                  {isCurrent && (
                    <span className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                      <span className="size-1.5 rounded-full bg-current" />
                      Current role
                    </span>
                  )}
                </motion.div>

                {/* Card — slides in from its side */}
                <motion.div
                  initial={reduce ? false : { opacity: 0, x: cardOnLeft ? -36 : 36 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, ease: EASE }}
                  className={cn(
                    "md:row-start-1",
                    cardOnLeft ? "md:col-start-1" : "md:col-start-2",
                  )}
                >
                  <div className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5">
                    <h3 className="font-heading text-lg leading-snug font-semibold">
                      {job.role}
                    </h3>
                    <p className="mt-0.5 font-medium text-brand">{job.company}</p>

                    {/* Mobile-only meta (desktop shows it beside the rail) */}
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground md:hidden">
                      <span className="tabular-nums">{job.period}</span>
                      <span aria-hidden>·</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="size-3.5" />
                        {job.location}
                      </span>
                      {isCurrent && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                          Current
                        </span>
                      )}
                    </div>

                    <ul className="mt-4 space-y-2.5 border-t border-border pt-4">
                      {job.points.map((point) => (
                        <li
                          key={point}
                          className="relative pl-5 text-sm text-muted-foreground before:absolute before:top-2.5 before:left-0 before:size-1.5 before:rounded-full before:bg-brand/60"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </li>
            )
          })}
        </ol>
      </div>
    </Section>
  )
}
