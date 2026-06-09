import { Cloud, Code2, Database, Server } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/section"
import { FadeIn } from "@/components/fade-in"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { techStack } from "@/data/portfolio"
import type { SkillGroup } from "@/data/portfolio"

const ICONS: Record<SkillGroup["icon"], LucideIcon> = {
  server: Server,
  code: Code2,
  cloud: Cloud,
  database: Database,
}

export function TechStack() {
  return (
    <Section
      id="stack"
      eyebrow="Toolbox"
      title="Tech Stack"
      description="Comfortable across the whole stack — I build the interface and the engine behind it."
      className="bg-muted/30"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {techStack.map((group, i) => {
          const Icon = ICONS[group.icon]
          return (
            <FadeIn key={group.label} delay={i * 0.06}>
              <Card className="group/stack h-full gap-5 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-brand/30">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-xl bg-brand/10 text-brand transition-transform duration-300 group-hover/stack:scale-110 group-hover/stack:rotate-3">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-heading text-lg font-semibold">
                    {group.label}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Badge
                        variant="secondary"
                        className="cursor-default px-3 py-1.5 text-[0.95rem] font-normal transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand/15 hover:text-brand"
                      >
                        {item}
                      </Badge>
                    </li>
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
