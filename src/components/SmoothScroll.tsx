import type { ReactNode } from "react"
import { ReactLenis } from "lenis/react"

interface SmoothScrollProps {
  children: ReactNode
}

/**
 * One smooth-scroll engine for the whole site. Lenis drives the native scroll
 * position, so `position: sticky` and Motion's `useScroll` keep working.
 * Wheel input glides; touch stays native. Reduced motion turns smoothing off.
 */
export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: true,
        anchors: { offset: -24 },
        stopInertiaOnNavigate: true,
        respectReducedMotion: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}
