import { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import type { PanInfo } from "framer-motion"
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Project } from "@/data/portfolio"

/** Brand-tinted placeholder shown when a project has no images yet. */
function Placeholder({ domain }: { domain: string }) {
  return (
    <div className="flex size-full items-center justify-center bg-gradient-to-br from-brand/20 via-brand/5 to-background">
      <div className="flex flex-col items-center gap-2 text-brand/60">
        <ImageIcon className="size-8 transition-transform duration-500 group-hover/card:scale-110" />
        <span className="text-[0.7rem] font-medium tracking-wide uppercase">
          {domain}
        </span>
      </div>
    </div>
  )
}

/** Single card thumbnail: first screenshot, or the branded placeholder. */
export function ProjectThumbnail({ project }: { project: Project }) {
  const img = project.screenshots?.[0]
  if (!img) return <Placeholder domain={project.domain} />
  return (
    <img
      src={img}
      alt={`${project.name} preview`}
      loading="lazy"
      className="size-full object-cover transition-transform duration-500 group-hover/card:scale-[1.03]"
    />
  )
}

const slide = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
}

/**
 * Detail-page media: a horizontal carousel (arrows, dots, swipe) for multiple
 * images, a plain frame for one, and the branded placeholder for none.
 */
export function ProjectGallery({ project }: { project: Project }) {
  const imgs = project.screenshots ?? []
  const reduce = useReducedMotion()
  const [[index, dir], setIndex] = useState<[number, number]>([0, 0])

  if (imgs.length === 0) {
    return (
      <div className="group/card overflow-hidden rounded-2xl border border-border">
        <div className="aspect-[16/9] w-full">
          <Placeholder domain={project.domain} />
        </div>
      </div>
    )
  }

  if (imgs.length === 1) {
    return (
      <div className="overflow-hidden rounded-2xl border border-border bg-muted/40">
        <img
          src={imgs[0]}
          alt={`${project.name} preview`}
          className="aspect-[16/9] w-full object-contain"
        />
      </div>
    )
  }

  const go = (delta: number) =>
    setIndex(([i]) => [(i + delta + imgs.length) % imgs.length, delta])

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) go(1)
    else if (info.offset.x > 60) go(-1)
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-muted/40">
      <div className="relative aspect-[16/9] w-full">
        <AnimatePresence initial={false} custom={dir}>
          <motion.img
            key={index}
            src={imgs[index]}
            alt={`${project.name} preview ${index + 1} of ${imgs.length}`}
            custom={dir}
            variants={reduce ? undefined : slide}
            initial={reduce ? false : "enter"}
            animate="center"
            exit={reduce ? undefined : "exit"}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            drag={reduce ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={onDragEnd}
            className="absolute inset-0 size-full cursor-grab object-contain active:cursor-grabbing"
          />
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous image"
        className="absolute top-1/2 left-3 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-background/70 text-foreground backdrop-blur-sm transition-all hover:bg-background hover:text-brand focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next image"
        className="absolute top-1/2 right-3 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-background/70 text-foreground backdrop-blur-sm transition-all hover:bg-background hover:text-brand focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* Dots */}
      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
        {imgs.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex([i, i > index ? 1 : -1])}
            aria-label={`Go to image ${i + 1}`}
            aria-current={i === index}
            className={cn(
              "h-2 rounded-full transition-all focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
              i === index ? "w-5 bg-brand" : "w-2 bg-background/70 hover:bg-background",
            )}
          />
        ))}
      </div>
    </div>
  )
}
