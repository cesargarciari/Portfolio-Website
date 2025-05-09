import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className=''>
    
    <nav className='navbar'>

    <div className='absolute'>
    <Link to="/" className='text-white font-semibold ml-2 px-50'>César García</Link>  
    </div>
      
    <div className="mx-auto flex items-center justify-between gap-10">
        <Link to="/about" className="text-white">About</Link>
        <Link to="/projects" className="text-white">Projects</Link>
        <Link to="/experience" className="text-white">Experience</Link>
        <Link to="/contact" className="text-white">Contact Me</Link>
    </div>
 
    </nav>
    </header>
  )
}

export default NavBar