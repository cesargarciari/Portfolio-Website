import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence, MotionConfig } from "motion/react"
import NavBar from "./components/NavBar"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import NotFound from "./pages/404"
import PageTransition from "./components/PageTransition"
import { ThemeProvider } from "./components/theme-provider"

const App = () => {
  const location = useLocation()

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MotionConfig reducedMotion="user">
        <NavBar />
        {/* mode="wait" fully unmounts the old page before the new one mounts,
            so two pages of very different heights are never on screen at once.
            Scrolling to top on exit-complete (rather than on pathname change)
            means the jump happens while the old page is already invisible. */}
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
            <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </MotionConfig>
    </ThemeProvider>
  )
}

export default App
