import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className=' mb--20 flex items-center justify-between
    py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo} alt="" className='mx-2 w-11'/>
        </div>

        <div className='m-8 flex items-center justify-between gap-4 text-2xl'>
            <FaGithub />
            <FaLinkedin />
            <FaInstagram />
            <FaYoutube />
        </div>
    </nav>
  )
}
