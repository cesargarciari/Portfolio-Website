import { useCallback, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useLenis } from "lenis/react"

/** Space left above a scrolled-to element so it doesn't sit flush against the top edge. */
const TOP_OFFSET = -96

/** Glide to an element by id (or to the top) through Lenis, with a native fallback. */
export function useScrollTo() {
  const lenis = useLenis()

  return useCallback(
    (target: string | "top", offset = TOP_OFFSET) => {
      if (target === "top") {
        if (lenis) lenis.scrollTo(0)
        else window.scrollTo({ top: 0, behavior: "smooth" })
        return
      }
      const element = document.getElementById(target)
      if (!element) return
      if (lenis) lenis.scrollTo(element, { offset })
      else element.scrollIntoView({ behavior: "smooth", block: "start" })
    },
    [lenis],
  )
}

/** On pages with deep links (/projects#chipy), glide to the target once the page has mounted. */
export function useHashScroll() {
  const { hash } = useLocation()
  const scrollTo = useScrollTo()

  useEffect(() => {
    if (!hash) return
    const frame = requestAnimationFrame(() => scrollTo(decodeURIComponent(hash.slice(1))))
    return () => cancelAnimationFrame(frame)
  }, [hash, scrollTo])
}
