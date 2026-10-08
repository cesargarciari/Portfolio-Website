import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useState, type ReactNode } from "react"

type Theme = "dark" | "light" | "system"
type ResolvedTheme = "dark" | "light"

interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

interface ThemeProviderState {
  theme: Theme
  resolvedTheme: ResolvedTheme
  setTheme: (theme: Theme) => void
}

const DARK_QUERY = "(prefers-color-scheme: dark)"

const systemTheme = (): ResolvedTheme => (window.matchMedia(DARK_QUERY).matches ? "dark" : "light")

function readStoredTheme(storageKey: string, fallback: Theme): Theme {
  try {
    return (localStorage.getItem(storageKey) as Theme | null) ?? fallback
  } catch {
    return fallback
  }
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)

export function ThemeProvider({ children, defaultTheme = "system", storageKey = "vite-ui-theme" }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => readStoredTheme(storageKey, defaultTheme))
  const [system, setSystem] = useState<ResolvedTheme>(systemTheme)

  useEffect(() => {
    const media = window.matchMedia(DARK_QUERY)
    const onChange = () => setSystem(media.matches ? "dark" : "light")
    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [])

  const resolvedTheme = theme === "system" ? system : theme

  // Layout effect so a flushSync'd theme change is in the DOM before a view transition snapshots it.
  useLayoutEffect(() => {
    const root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(resolvedTheme)
    const ground = getComputedStyle(root).getPropertyValue("--brand-ground").trim()
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", ground)
  }, [resolvedTheme])

  const setTheme = useCallback(
    (next: Theme) => {
      try {
        localStorage.setItem(storageKey, next)
      } catch {
        // Storage can be unavailable (private mode); the choice still applies for this visit.
      }
      setThemeState(next)
    },
    [storageKey],
  )

  const value = useMemo(() => ({ theme, resolvedTheme, setTheme }), [theme, resolvedTheme, setTheme])

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
