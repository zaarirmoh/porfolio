import { ArrowRight, Download } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SocialLinks } from "@/components/social-links"
import { profile } from "@/data/portfolio"

export function Hero() {
  const reduce = useReducedMotion()

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: 0.05 },
    },
  }
  const item = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 16 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
        },
      }

  return (
    <section className="relative overflow-hidden">
      {/* Soft accent backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl dark:bg-brand/15" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,var(--background))]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pt-32 pb-20 sm:px-6 sm:pt-40 sm:pb-28 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Copy */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                Available for remote roles
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 text-base font-medium text-brand sm:text-lg"
            >
              {profile.positioning}
            </motion.p>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg"
            >
              {profile.valueProp}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button size="lg" asChild>
                <a href="#work">
                  View Projects
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={profile.cv} download>
                  <Download className="size-4" />
                  Download CV
                </a>
              </Button>
              <SocialLinks className="ml-1" />
            </motion.div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto hidden w-full max-w-xs lg:block"
          >
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-brand/10 blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
              <img
                src={profile.heroImage}
                alt={profile.name}
                className="aspect-[4/5] size-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
