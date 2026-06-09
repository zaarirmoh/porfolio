import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { FadeIn } from "@/components/fade-in"

type SectionProps = {
  /** Anchor id for in-page navigation. */
  id?: string
  /** Small uppercase label above the title. */
  eyebrow?: string
  title?: string
  /** Optional supporting line under the title. */
  description?: ReactNode
  children: ReactNode
  className?: string
  /** Constrain inner width; defaults to the standard content column. */
  containerClassName?: string
}

/**
 * Consistent vertical rhythm + heading treatment for every landing section.
 * Keeps spacing and typography decisions in one place.
 */
export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-20 py-24 sm:py-32", className)}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8",
          containerClassName,
        )}
      >
        {(eyebrow || title || description) && (
          <FadeIn className="mb-12 max-w-2xl sm:mb-16">
            {eyebrow && (
              <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-brand uppercase before:h-px before:w-8 before:bg-brand/50">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
                {description}
              </p>
            )}
          </FadeIn>
        )}
        {children}
      </div>
    </section>
  )
}
