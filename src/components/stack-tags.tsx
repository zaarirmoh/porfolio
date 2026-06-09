import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type StackTagsProps = {
  items: string[]
  className?: string
  /** Cap the number shown and append a "+N" pill (used on compact cards). */
  max?: number
}

export function StackTags({ items, className, max }: StackTagsProps) {
  const shown = max ? items.slice(0, max) : items
  const remaining = max ? items.length - shown.length : 0

  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {shown.map((item) => (
        <li key={item}>
          <Badge variant="outline" className="font-normal text-muted-foreground">
            {item}
          </Badge>
        </li>
      ))}
      {remaining > 0 && (
        <li>
          <Badge variant="outline" className="font-normal text-muted-foreground">
            +{remaining}
          </Badge>
        </li>
      )}
    </ul>
  )
}
