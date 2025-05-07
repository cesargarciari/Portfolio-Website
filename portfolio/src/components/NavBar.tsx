import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='flex shadow justify-around items-center bg-black py-3 fixed top-0 w-full'>
      
      <span className='flex items-center'>
        <img src="/logo-round.png" alt="Logo" className='w-12 h-12 rounded-full' />
        <span className='text-white text-2xl font-semibold ml-2'>
            César García
        </span>
      </span>
      
      <Link to="/" className='text-white'>Home</Link>  
      <Link to="/about" className='text-white'>About</Link>
      <Link to="/projects" className='text-white'>Projects</Link>
      <Link to="/experience" className='text-white'>Experience</Link>
      <Link to="/contact" className='text-white'>Contact Me</Link>
    </nav>
  )
}

export default NavBar