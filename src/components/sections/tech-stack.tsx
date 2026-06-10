import { Cloud, Code2, Database, FlaskConical, Server, Smartphone } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/section"
import { FadeIn } from "@/components/fade-in"
import { Card } from "@/components/ui/card"
import { SkillLogo } from "@/components/skill-logo"
import { techStack } from "@/data/portfolio"
import type { SkillGroup } from "@/data/portfolio"

const ICONS: Record<SkillGroup["icon"], LucideIcon> = {
  server: Server,
  code: Code2,
  cloud: Cloud,
  database: Database,
  mobile: Smartphone,
  testing: FlaskConical,
}

export function TechStack() {
  return (
    <Section
      id="stack"
      eyebrow="Toolbox"
      title="Tech Stack"
      description="Production-tested tools across the whole stack, from data modeling and APIs to the interface and the pipelines that ship it."
      className="bg-muted/30"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {techStack.map((group, i) => {
          const Icon = ICONS[group.icon]
          return (
            <FadeIn key={group.label} delay={i * 0.06} className="h-full">
              <Card className="group/stack h-full gap-5 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-brand/30 sm:p-7">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-xl bg-brand/10 text-brand transition-transform duration-300 group-hover/stack:scale-110 group-hover/stack:rotate-3">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-heading text-lg font-semibold">
                      {group.label}
                    </h3>
                  </div>
                  <span className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted-foreground tabular-nums">
                    {group.items.length}
                  </span>
                </div>

                {/* Uniform logo tiles */}
                <ul className="grid grid-cols-3 gap-2.5 sm:grid-cols-4">
                  {group.items.map((item, j) => (
                    <FadeIn
                      as="li"
                      key={item}
                      delay={i * 0.05 + j * 0.03}
                      y={10}
                      className="h-full"
                    >
                      <span className="group/tile flex h-full flex-col items-center justify-center gap-2 rounded-xl border border-border bg-background/60 px-2 py-3.5 text-center transition-all duration-200 hover:-translate-y-1 hover:border-brand/40 hover:bg-brand/5 hover:shadow-md">
                        <SkillLogo
                          name={item}
                          className="size-6 shrink-0 text-muted-foreground transition-all duration-200 group-hover/tile:scale-110 group-hover/tile:text-brand"
                        />
                        <span className="text-xs leading-tight font-medium">
                          {item}
                        </span>
                      </span>
                    </FadeIn>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          )
        })}
      </div>
    </Section>
  )
}
