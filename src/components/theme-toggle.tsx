import { Moon, Sun } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/use-theme"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()
  const reduce = useReducedMotion()
  const isDark = theme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn("relative size-10 overflow-hidden", className)}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={reduce ? false : { y: -18, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={reduce ? undefined : { y: 18, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {isDark ? <Moon className="size-5" /> : <Sun className="size-5" />}
        </motion.span>
      </AnimatePresence>
    </Button>
  )
}
