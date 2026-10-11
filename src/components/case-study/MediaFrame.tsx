import { ImagePlus } from "lucide-react"
import ArchDiagram from "@/components/diagram/ArchDiagram"
import type { Media, ScreenMedia } from "@/data/case-studies/types"
import { cn } from "@/lib/utils"

interface MediaFrameProps {
  media: Media
  /** "rail" fills the sticky column's height; "inline" sizes to its content on small screens. */
  variant: "rail" | "inline"
  /** Passed to diagrams; see ArchDiagram. */
  focusable?: boolean
}

interface ScreenProps {
  media: ScreenMedia
  variant: MediaFrameProps["variant"]
}

/**
 * Stands in for a screenshot that hasn't been added yet, at the image's real
 * proportions, and says exactly which file to drop in.
 */
function PendingScreen({ media, variant }: ScreenProps) {
  return (
    <div
      role="img"
      aria-label={`Screenshot to come: ${media.alt}`}
      style={{ aspectRatio: `${media.width} / ${media.height}` }}
      className={cn(
        "flex w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-line-mid px-6 text-center",
        variant === "rail" && "max-h-full",
      )}
    >
      <ImagePlus aria-hidden strokeWidth={1.5} className="size-7 text-ink-45" />
      <p className="t-small max-w-[32ch] text-ink-65">{media.alt}</p>
      <p className="t-micro font-normal text-ink-45">public{media.src}</p>
    </div>
  )
}

function Screen({ media, variant }: ScreenProps) {
  if (media.pending) return <PendingScreen media={media} variant={variant} />
  return (
    <img
      src={media.src}
      alt={media.alt}
      width={media.width}
      height={media.height}
      loading="lazy"
      decoding="async"
      className={cn("h-auto w-full rounded-2xl shadow-[var(--shadow-1)]", variant === "rail" && "max-h-full w-auto")}
    />
  )
}

/**
 * The surface a section's picture sits on: one raised field with a large
 * radius. Its 24px padding keeps the inner 16px corners concentric with the 40px frame.
 */
export default function MediaFrame({ media, variant, focusable = true }: MediaFrameProps) {
  return (
    <figure className={cn("m-0 flex flex-col", variant === "rail" && "h-full")}>
      <div
        className={cn(
          "flex items-center justify-center rounded-[40px] bg-raised p-6",
          // Leaves room under the drawing for its note and the caption on short screens.
          variant === "rail" && "min-h-0 flex-1 [&_svg]:max-h-[calc(80svh-15rem)]",
          // Centring would push the overflowing left edge out of reach, so inline diagrams start at the left.
          variant === "inline" && media.kind === "diagram" && "block overflow-x-auto",
        )}
      >
        {media.kind === "screen" ? (
          <Screen media={media} variant={variant} />
        ) : (
          // Below the rail breakpoint the diagram keeps a readable size and scrolls inside its frame.
          <ArchDiagram
            spec={media.spec}
            focusable={focusable}
            className={cn(variant === "inline" ? "min-w-[34rem]" : "max-w-[40rem]")}
          />
        )}
      </div>
      <figcaption className="t-small mt-4 max-w-[52ch] text-ink-45">
        {media.caption}
        {variant === "inline" && media.kind === "diagram" && (
          <span className="sm:hidden"> Swipe sideways to see all of it.</span>
        )}
      </figcaption>
    </figure>
  )
}
