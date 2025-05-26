import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import NotFound from "./pages/404"

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
      
    
    </>
    
  )
}

export default App