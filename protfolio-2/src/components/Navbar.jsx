import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between
    py-5 px-5'>
        <Link to="/" className='flex flex-shrink-0 items-center'>
            <img src={logo} alt="" className='mx-2 w-11'/>
        </Link>

        <div className='m-8 flex items-center justify-between gap-4 text-2xl'>
          <Link to='/about' className='text-lg font-semibold'>
            About
          </Link>
          <Link to='/projects'  className='text-lg font-semibold'>
            Projects
          </Link >
          <Link to='/blog' className='text-lg font-semibold'>
            Blog
          </Link >
          <Link to='/achievements' className='text-lg font-semibold'>
            Achevements
          </Link >
           
        </div>
    </nav>
  )
}
