import { useEffect, useRef, useState } from "react"
import { Play } from "lucide-react"
import { pill } from "@/components/ui/pill"
import type { StudyVideo as StudyVideoData } from "@/data/case-studies/types"
import { cn } from "@/lib/utils"

interface StudyVideoProps {
  video: StudyVideoData
}

function Player({ video }: StudyVideoProps) {
  const [playing, setPlaying] = useState(false)
  const frameRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // The focused button unmounts, so move focus to the player.
    if (playing) frameRef.current?.focus()
  }, [playing])

  if (playing) {
    return (
      <iframe
        ref={frameRef}
        src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.youtubeId)}?autoplay=1&rel=0&playsinline=1`}
        title={video.title}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className="aspect-video w-full rounded-2xl border-0 bg-black shadow-(--shadow-1)"
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Watch the demo: ${video.title}, ${video.duration}`}
      className="group relative block aspect-video w-full cursor-pointer overflow-hidden rounded-2xl bg-black shadow-(--shadow-1)"
    >
      <img
        src={video.poster}
        alt=""
        width={1280}
        height={720}
        decoding="async"
        className="size-full object-cover opacity-90 transition-opacity duration-260 group-hover:opacity-100"
      />
      <span aria-hidden className="absolute inset-0 flex items-center justify-center">
        <span className={cn(pill({ variant: "primary" }), "shadow-(--shadow-1)")}>
          <Play strokeWidth={1.75} className="size-4 fill-current" />
          Watch the demo
          <span className="tabular-nums opacity-70">{video.duration}</span>
        </span>
      </span>
    </button>
  )
}

export default function StudyVideo({ video }: StudyVideoProps) {
  return (
    <section aria-labelledby="video-title" className="wrap pb-section">
      <h2 id="video-title" className="sr-only">
        The demo
      </h2>
      <figure className="m-0 max-w-5xl">
        <div className="rounded-[40px] bg-raised p-6">
          <Player video={video} />
        </div>
        <figcaption className="t-small mt-4 max-w-[52ch] text-ink-45">{video.caption}</figcaption>
      </figure>
    </section>
  )
}
