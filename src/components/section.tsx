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
      className={cn("scroll-mt-20 py-20 sm:py-24", className)}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-5xl px-5 sm:px-6 lg:px-8",
          containerClassName,
        )}
      >
        {(eyebrow || title || description) && (
          <FadeIn className="mb-10 max-w-2xl sm:mb-14">
            {eyebrow && (
              <p className="mb-2 text-sm font-medium tracking-wide text-brand uppercase">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
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
