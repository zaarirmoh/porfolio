import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

type FadeInProps = {
  children: ReactNode
  className?: string
  /** Stagger helper — seconds to wait before animating in. */
  delay?: number
  /** Pixels to travel upward into place. */
  y?: number
  /** Render as a different element if you need correct semantics. */
  as?: "div" | "li" | "section" | "article"
}

/**
 * Subtle, tasteful scroll-entrance: fades and lifts content into view once.
 * Automatically disabled for users who prefer reduced motion.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  y = 16,
  as = "div",
}: FadeInProps) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as]

  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
