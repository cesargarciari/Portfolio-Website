import { Route, Routes, useLocation } from "react-router-dom"
import NavBar from "./components/NavBar"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import NotFound from "./pages/404"
import { ThemeProvider } from "./components/theme-provider"
import { useEffect } from "react"

const App = () => {

  function ScrollToTopOnRouteChange() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  return null;
}
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ScrollToTopOnRouteChange />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </ThemeProvider>
    
  )
}

export default App