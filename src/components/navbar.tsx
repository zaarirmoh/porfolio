import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { profile } from "@/data/portfolio"

/** Section anchors on the landing page. */
const NAV_LINKS = [
  { label: "Work", hash: "work" },
  { label: "Stack", hash: "stack" },
  { label: "Experience", hash: "experience" },
  { label: "About", hash: "about" },
  { label: "Contact", hash: "contact" },
] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Subtle elevation once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto grid h-20 w-full max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          to="/"
          className="group flex w-fit items-center gap-3 rounded-md font-heading text-base font-semibold tracking-tight focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          aria-label={`${profile.name} — home`}
        >
          <span className="grid size-10 place-items-center rounded-xl bg-brand text-sm font-bold text-brand-foreground tabular-nums shadow-sm transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
            {initials}
          </span>
          <span className="hidden lg:inline">{profile.name}</span>
        </Link>

        {/* Desktop nav — centered */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.hash}
              to={{ pathname: "/", hash: link.hash }}
              className="group relative px-3.5 py-2 text-[0.95rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-brand transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center justify-end gap-1">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="size-10 md:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-3">
              {NAV_LINKS.map((link) => (
                <Button
                  key={link.hash}
                  variant="ghost"
                  asChild
                  className="h-12 justify-start text-base"
                >
                  <Link to={{ pathname: "/", hash: link.hash }}>
                    {link.label}
                  </Link>
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
