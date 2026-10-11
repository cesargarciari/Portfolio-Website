import type { CSSProperties, Ref } from "react"
import type { ProjectIcon } from "@/data/projects"
import { cn } from "@/lib/utils"

interface ProjectMarkProps {
  icon: ProjectIcon
  className?: string
  style?: CSSProperties
  ref?: Ref<HTMLSpanElement>
}

/**
 * Each project's own app icon. Its colours are the product's identity, like a
 * poster, so they sit outside the site palette. Sources are 320px crops of the
 * originals in public/, trimmed to the icon's edges: twice the largest size the
 * mark is shown at (the case study hero).
 */
const MARKS: Record<ProjectIcon, string> = {
  chipy: "/chipy-logo-320.png",
}

export default function ProjectMark({ icon, className, style, ref }: ProjectMarkProps) {
  return (
    <span
      ref={ref}
      aria-hidden
      style={style}
      className={cn("block shrink-0", className)}
    >
      <img src={MARKS[icon]} alt="" width={320} height={320} decoding="async" className="size-full object-cover" />
    </span>
  )
}
