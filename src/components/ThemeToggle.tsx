import { flushSync } from "react-dom"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { pill } from "@/components/ui/pill"
import { cn } from "@/lib/utils"

const iconBase =
  "absolute size-[18px] transition-[opacity,scale] duration-[180ms] ease-out motion-reduce:transition-opacity"

/** Switches between the basalt and flag-white palettes with a calm whole-page crossfade. */
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const next = resolvedTheme === "dark" ? "light" : "dark"

  const toggle = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce || !("startViewTransition" in document)) {
      setTheme(next)
      return
    }
    document.startViewTransition(() => flushSync(() => setTheme(next)))
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to the ${next} theme`}
      title={`Switch to the ${next} theme`}
      className={cn(pill({ variant: "tertiary", size: "sm", icon: true }), "relative")}
    >
      <Sun
        aria-hidden
        strokeWidth={1.5}
        className={cn(iconBase, resolvedTheme === "dark" ? "scale-100 opacity-100" : "scale-75 opacity-0")}
      />
      <Moon
        aria-hidden
        strokeWidth={1.5}
        className={cn(iconBase, resolvedTheme === "light" ? "scale-100 opacity-100" : "scale-75 opacity-0")}
      />
    </button>
  )
}
