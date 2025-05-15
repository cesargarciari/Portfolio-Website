import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=''>
    
    <nav className='navbar'>

    <Link to="/" className="text-white text-lg font-bold">
          César García
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/about" className="text-white hover:text-gray-300 transition">About</Link>
          <Link to="/projects" className="text-white hover:text-gray-300 transition">Projects</Link>
          <Link to="/experience" className="text-white hover:text-gray-300 transition">Experience</Link>
          <Link to="/contact" className="text-white hover:text-gray-300 transition">Contact Me</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-opacity-90 px-4 pb-4 flex flex-col gap-4">
          <Link to="/about" className="text-white" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/projects" className="text-white" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/experience" className="text-white" onClick={() => setIsOpen(false)}>Experience</Link>
          <Link to="/contact" className="text-white" onClick={() => setIsOpen(false)}>Contact Me</Link>
        </div>
      )}
    </header>
  )
}

export default NavBar