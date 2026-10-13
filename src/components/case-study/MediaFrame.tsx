import ArchDiagram from "@/components/diagram/ArchDiagram"
import type { Media, ScreenMedia } from "@/data/case-studies/types"
import { cn } from "@/lib/utils"

interface MediaFrameProps {
  media: Media
  variant: "rail" | "inline"
  focusable?: boolean
}

interface ScreenProps {
  media: ScreenMedia
  variant: MediaFrameProps["variant"]
}

function Screen({ media, variant }: ScreenProps) {
  return (
    <img
      src={media.src}
      alt={media.alt}
      width={media.width}
      height={media.height}
      loading="lazy"
      decoding="async"
      className={cn("h-auto w-full rounded-2xl shadow-[var(--shadow-1)]", variant === "rail" && "max-h-full w-auto max-w-full")}
    />
  )
}

export default function MediaFrame({ media, variant, focusable = true }: MediaFrameProps) {
  return (
    <figure className={cn("m-0 flex flex-col", variant === "rail" && "h-full")}>
      <div
        className={cn(
          "flex items-center justify-center rounded-[40px] bg-raised p-6",
          variant === "rail" && "min-h-0 flex-1 [&_svg]:max-h-[calc(80svh-15rem)]",
          // Centring would push the overflowing left edge out of reach.
          variant === "inline" && media.kind === "diagram" && "block overflow-x-auto",
        )}
      >
        {media.kind === "screen" ? (
          <Screen media={media} variant={variant} />
        ) : (
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
