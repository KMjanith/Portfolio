import React from 'react'
import aboutImage from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';



export default function About() {
  return (
    <div className="border-b border-neutral-700 pb-4">
        <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: .5}}
            className='my-20 text-center text-4xl'>
            About <span className='text-neutral-500'>Me</span>
        </motion.h2>
        <div className='flex flex-wrap'>
            <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: .5}}
            className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className='rounded-2xl mb-5' src={aboutImage} alt="" />
                </div>
            </motion.div>
    
            <div className='w-full lg:w-1/2 flex flex-col items-center justify-center gap-4 pb-12'>
                <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: .5}}
                className='flex justify-center items-center'>
                    <p className='max-w-xl lg:p-8 md:text-lg'>{ABOUT_TEXT[0]}</p>
                </motion.div>

                <button type="button" className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-purple-500 p-2 lg:p-3 rounded-lg text-black font-bold">
                DOWNLOAD CV
                </button>
                
            </div>
        </div>  
        <div 
            className='text-xl text-blue-300  mt-4  w-full flex justify-end items-end'>
            <a 
                className='bg-neutral-700 p-2 rounded-xl hover:bg-neutral-600 cursor-pointer' href='#'>
                    <Link to='about' >
                        <FaExternalLinkAlt /> 
                    </Link>
     
            </a>
                        
        </div>
    </div>
  )
}
