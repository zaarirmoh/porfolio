import { useEffect, useRef, useState } from "react"
import { animate, useInView, useReducedMotion } from "framer-motion"
import type { Stat } from "@/data/portfolio"

/**
 * Counts up from 0 to the target the first time it scrolls into view.
 * Falls back to the final value immediately when reduced motion is preferred.
 */
export function StatCounter({ value, suffix, label }: Stat) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value, reduce])

  // With reduced motion we skip the count-up and show the final value.
  const shown = reduce ? value : display

  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className="font-heading text-4xl font-semibold tracking-tight tabular-nums sm:text-5xl">
        {shown}
        <span className="text-brand">{suffix}</span>
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  )
}
