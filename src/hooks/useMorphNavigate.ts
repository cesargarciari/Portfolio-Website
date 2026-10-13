import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { useLenis } from "lenis/react"
import { canMorph, MORPH_NAME, waitForMorphTarget, type MorphState } from "@/lib/viewTransition"

let inFlight = false

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
        // Two elements can't share a view-transition name in the new snapshot.
        source.style.viewTransitionName = ""
        navigate(to, { state })
        await waitForMorphTarget()
        // The swap skips AnimatePresence's exit, so App's scroll reset never runs.
        if (lenis) lenis.scrollTo(0, { immediate: true, force: true })
        else window.scrollTo(0, 0)
      })
      const release = () => {
        inFlight = false
      }
      transition.finished.then(release, release)
    },
    [navigate, lenis],
  )
}
