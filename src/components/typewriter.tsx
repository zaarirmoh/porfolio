import { useEffect, useState } from "react"
import { useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

type TypewriterProps = {
  words: string[]
  className?: string
  /** ms per character while typing */
  typeSpeed?: number
  /** ms per character while deleting */
  deleteSpeed?: number
  /** ms to hold a fully-typed word before deleting */
  holdTime?: number
}

/**
 * Cycles through `words` with a type/delete effect and a blinking caret.
 * Decorative: the animated text is aria-hidden and the full list is exposed
 * once to assistive tech. With reduced motion it simply shows the first word.
 */
export function Typewriter({
  words,
  className,
  typeSpeed = 80,
  deleteSpeed = 40,
  holdTime = 1500,
}: TypewriterProps) {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduce || words.length === 0) return
    const current = words[index % words.length]

    // Finished typing → pause, then start deleting.
    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), holdTime)
      return () => clearTimeout(t)
    }
    // Finished deleting → advance to next word.
    if (deleting && subIndex === 0) {
      const t = setTimeout(() => {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      }, deleteSpeed)
      return () => clearTimeout(t)
    }
    const t = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? deleteSpeed : typeSpeed,
    )
    return () => clearTimeout(t)
  }, [subIndex, deleting, index, words, reduce, typeSpeed, deleteSpeed, holdTime])

  if (reduce) {
    return <span className={className}>{words[0]}</span>
  }

  return (
    <span className={cn("inline-flex", className)}>
      <span aria-hidden="true">{words[index % words.length].substring(0, subIndex)}</span>
      <span
        aria-hidden="true"
        className="animate-caret ml-0.5 inline-block w-[2px] -translate-y-[2px] self-stretch bg-current"
      />
      <span className="sr-only">{words.join(", ")}</span>
    </span>
  )
}
