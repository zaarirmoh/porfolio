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
              <Card className="h-full gap-4 p-6">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-lg bg-brand/10 text-brand">
                    <Icon className="size-[1.15rem]" />
                  </span>
                  <h3 className="font-heading text-base font-semibold">
                    {group.label}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Badge
                        variant="secondary"
                        className="px-2.5 py-1 text-sm font-normal"
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
