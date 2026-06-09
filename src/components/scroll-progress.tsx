import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion"

/**
 * Thin gradient bar across the very top of the viewport showing reading
 * progress. Purely decorative; hidden for reduced-motion users.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 40,
    mass: 0.4,
  })
  const reduce = useReducedMotion()

  if (reduce) return null

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-brand via-fuchsia-500 to-brand"
    />
  )
}
