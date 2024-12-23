import React, { useState } from 'react'
import logo from '../assets/kavindujanithLogo.png'
import { Link, NavLink } from 'react-router-dom'


function Navlinks() {
  return (

      <>

          <NavLink to='/about' className='text-lg font-semibold'>
            About
          </NavLink>
          <NavLink to='/projects'  className='text-lg font-semibold'>
            Projects
          </NavLink >
          <NavLink to='/blog' className='text-lg font-semibold'>
            Blog
          </NavLink >
          <NavLink to='/achievements' className='text-lg font-semibold'>
            Achevements
          </NavLink >
      </>
   
           


  )
}

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  const handleNavBar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='flex items-center justify-between flex-wrap  pt-4 pb-7 px-3'>
        <Link to="/" className='flex flex-shrink-0 items-center'>
            <img src={logo} alt="" className='mx-2 w-32'/>
        </Link>

        <div className='hidden m-8 md:flex items-center justify-between gap-4 text-2xl  ' >
          <Navlinks />
           
        </div>
    
        <button className="flex flex-col items-center justify-center space-y-1 md:hidden" onClick={handleNavBar}>
          <div className="w-8 h-1 bg-white rounded"></div>
          <div className="w-8 h-1 bg-white rounded"></div>
          <div className="w-8 h-1 bg-white rounded"></div>
        </button>

        {
          isOpen && (
            <div className='flex flex-col items-center justify-between gap-2 w-full' >
              <Navlinks />
            </div>

          )
        }
    
      
    </nav>
  )
}
