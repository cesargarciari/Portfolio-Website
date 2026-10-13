import { lazy, Suspense, useState } from "react"
import { Route, Routes, useLocation, useNavigationType } from "react-router-dom"
import { AnimatePresence, MotionConfig } from "motion/react"
import { useLenis } from "lenis/react"
import Header from "./components/Header"
import Dock from "./components/Dock"
import Footer from "./components/Footer"
import ScrollProgress from "./components/ScrollProgress"
import SmoothScroll from "./components/SmoothScroll"
import PageTransition from "./components/PageTransition"
import { ThemeProvider } from "./components/theme-provider"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import Contact from "./pages/Contact"
import NotFound from "./pages/404"
import { isMorphState } from "./lib/viewTransition"

const CHUNK_RELOAD_KEY = "case-study-chunk-reload"

// After a deploy, a tab opened earlier requests a chunk that no longer exists: reload once.
const CaseStudy = lazy(() =>
  import("./pages/CaseStudy").then(
    (module) => {
      sessionStorage.removeItem(CHUNK_RELOAD_KEY)
      return module
    },
    (error: unknown) => {
      if (sessionStorage.getItem(CHUNK_RELOAD_KEY)) throw error
      sessionStorage.setItem(CHUNK_RELOAD_KEY, "1")
      window.location.reload()
      return new Promise<never>(() => {})
    },
  ),
)

function Shell() {
  const location = useLocation()
  const lenis = useLenis()
  const navigationType = useNavigationType()

  // Inside <Routes location> the navigation type is always POP, so a stale morph flag is cleared here.
  const morphPush = navigationType === "PUSH" && isMorphState(location.state)
  const routeLocation = isMorphState(location.state) && !morphPush ? { ...location, state: null } : location

  // A counter, not location.key: returning to a morph's origin reuses its key and would skip the crossfade.
  const [route, setRoute] = useState({ key: 0, path: location.pathname })
  if (route.path !== location.pathname) {
    setRoute({ key: morphPush ? route.key : route.key + 1, path: location.pathname })
  }

  const resetScroll = () => {
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true })
    else window.scrollTo(0, 0)
  }

  return (
    <>
      <a
        href="#main"
        className="pill pill-primary pill-sm fixed left-4 top-4 z-50 -translate-y-24 focus-visible:translate-y-0"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Header />
      <AnimatePresence mode="wait" onExitComplete={resetScroll}>
        <Routes location={routeLocation} key={route.key}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
          <Route
            path="/projects/:slug"
            element={
              <PageTransition>
                <Suspense fallback={null}>
                  <CaseStudy />
                </Suspense>
              </PageTransition>
            }
          />
          <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <Dock />
    </>
  )
}

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MotionConfig reducedMotion="user">
        <SmoothScroll>
          <Shell />
        </SmoothScroll>
      </MotionConfig>
    </ThemeProvider>
  )
}

export default App
