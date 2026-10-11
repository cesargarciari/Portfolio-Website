import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { useLenis } from "lenis/react"
import { canMorph, MORPH_NAME, waitForMorphTarget, type MorphState } from "@/lib/viewTransition"

/** A second click mid-transition would name the source again while the new page's mark exists. */
let inFlight = false

/**
 * Opens a page so the clicked element travels into it: the browser snapshots
 * `source`, the route swaps underneath, and the element glides to the new
 * page's mark. Falls back to a plain navigation where unsupported or when the
 * reader prefers reduced motion.
 */
export function useMorphNavigate() {
  const navigate = useNavigate()
  const lenis = useLenis()

  return useCallback(
    (to: string, source: HTMLElement | null) => {
      if (inFlight) return
      if (!source || !canMorph()) {
        navigate(to)
        return
      }

      source.style.viewTransitionName = MORPH_NAME
      const state: MorphState = { morph: true }

      inFlight = true
      const transition = document.startViewTransition(async () => {
        // The old snapshot is taken; two elements can't share the name in the new one.
        source.style.viewTransitionName = ""
        navigate(to, { state })
        await waitForMorphTarget()
        // The route swap skips AnimatePresence's exit, so its scroll reset never runs.
        if (lenis) lenis.scrollTo(0, { immediate: true, force: true })
        else window.scrollTo(0, 0)
      })
      // `finished` rejects only if the update callback throws; the browser reports that itself.
      const release = () => {
        inFlight = false
      }
      transition.finished.then(release, release)
    },
    [navigate, lenis],
  )
}
