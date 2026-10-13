export const MORPH_NAME = "project-mark"

export const MORPH_TARGET_ATTR = "data-morph-target"

export interface MorphState {
  morph: true
}

export function isMorphState(state: unknown): state is MorphState {
  return typeof state === "object" && state !== null && (state as { morph?: unknown }).morph === true
}

// Chrome abandons a view transition whose update takes 4s.
const TARGET_TIMEOUT_MS = 1500

// Polls with timers: requestAnimationFrame is paused while a view transition waits for its update.
export function waitForMorphTarget(): Promise<void> {
  return new Promise((resolve) => {
    const started = performance.now()
    const check = () => {
      const found = document.querySelector(`[${MORPH_TARGET_ATTR}]`)
      if (found || performance.now() - started > TARGET_TIMEOUT_MS) resolve()
      else window.setTimeout(check, 16)
    }
    check()
  })
}

export function canMorph() {
  return "startViewTransition" in document && !window.matchMedia("(prefers-reduced-motion: reduce)").matches
}
