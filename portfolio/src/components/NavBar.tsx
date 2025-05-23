import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { LuMenu } from 'react-icons/lu';
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
            {isOpen ? <IoClose className="text-white" /> : <LuMenu className="text-white" />}
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