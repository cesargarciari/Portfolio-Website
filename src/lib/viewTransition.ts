/** The one shared element name: the clicked project's mark and the case study hero's mark. */
export const MORPH_NAME = "project-mark"

/** Set on the destination mark so the transition knows the new page is in the DOM. */
export const MORPH_TARGET_ATTR = "data-morph-target"

export interface MorphState {
  morph: true
}

export function isMorphState(state: unknown): state is MorphState {
  return typeof state === "object" && state !== null && (state as { morph?: unknown }).morph === true
}

/** Chrome abandons a view transition whose update takes 4s; give up well before that. */
const TARGET_TIMEOUT_MS = 1500

/**
 * Resolves once the destination mark has mounted. Polls with timers, not
 * requestAnimationFrame, because frames are suppressed while a view transition
 * waits for its update callback.
 */
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
