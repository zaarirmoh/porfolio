import { ArrowRight, Download } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SocialLinks } from "@/components/social-links"
import { Typewriter } from "@/components/typewriter"
import { heroPhrases, profile } from "@/data/portfolio"

export function Hero() {
  const reduce = useReducedMotion()

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: 0.05 },
    },
  }
  const item = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
        },
      }

  return (
    <section className="relative overflow-hidden">
      {/* Soft accent backdrop with a faint blueprint grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:56px_56px] opacity-50 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_30%,black_25%,transparent_75%)] dark:opacity-30" />
        <div className="absolute -top-32 left-1/2 size-[46rem] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl dark:bg-brand/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,var(--background))]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pt-36 pb-24 sm:px-6 sm:pt-44 sm:pb-32 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.45fr_1fr]">
          {/* Copy */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-muted-foreground">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                Open to new opportunities
              </span>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-7 text-lg font-medium text-muted-foreground sm:text-xl"
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-1 font-heading text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
            >
              {profile.name}
            </motion.h1>

            {/* Animated job title */}
            <motion.div variants={item} className="mt-4">
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                <span className="animate-gradient-text bg-gradient-to-r from-brand via-fuchsia-500 to-brand bg-clip-text text-transparent">
                  {profile.role}
                </span>
              </h2>
              <p className="mt-2 text-lg text-muted-foreground sm:text-xl">
                <Typewriter words={heroPhrases} className="font-medium text-foreground" />
              </p>
              {/* Full positioning for assistive tech & SEO */}
              <span className="sr-only">{profile.positioning}</span>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl"
            >
              {profile.valueProp}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Button
                size="lg"
                asChild
                className="h-12 px-6 text-base transition-transform hover:-translate-y-0.5 [&_svg]:size-5"
              >
                <a href="#work">
                  View Projects
                  <ArrowRight className="transition-transform group-hover/button:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-12 px-6 text-base transition-transform hover:-translate-y-0.5 [&_svg]:size-5"
              >
                <a href={profile.cv} download={profile.cvFileName}>
                  <Download />
                  Download CV
                </a>
              </Button>
              <SocialLinks className="ml-1" />
            </motion.div>
          </motion.div>

          {/* Portrait with rotating accent ring */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="group relative mx-auto hidden w-full max-w-xs lg:block"
          >
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-brand/15 blur-2xl transition-all duration-500 group-hover:bg-brand/25" />
            {/* Rotating gradient ring */}
            <div className="relative overflow-hidden rounded-[1.75rem] p-[2.5px]">
              <div
                aria-hidden
                className="animate-spin-slow absolute inset-[-40%] bg-[conic-gradient(from_0deg,var(--brand),transparent_25%,transparent_75%,var(--brand))] opacity-70"
              />
              <div className="relative overflow-hidden rounded-[1.6rem] border border-border bg-card">
                <img
                  src={profile.heroImage}
                  alt={profile.name}
                  className="aspect-[4/5] size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
