import { Route, Routes, useLocation } from "react-router-dom"
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

function Shell() {
  const location = useLocation()
  const lenis = useLenis()

  // Jump to the top while the old page is already invisible, and through Lenis
  // so its internal scroll position doesn't glide back to where it was.
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
      {/* mode="wait" fully unmounts the old page before the new one mounts,
          so two pages of very different heights are never on screen at once. */}
      <AnimatePresence mode="wait" onExitComplete={resetScroll}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
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
