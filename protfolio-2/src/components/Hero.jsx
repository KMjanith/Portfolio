import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/kevinRushProfile.jpg'
import { motion } from 'motion/react'

export default function Hero() {

    const container = (delay) => ({
        hidden: {x: -100 , opacity:0},
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: delay
            }
        }
    })

  return (
    <div className='border-b border-neutral-700 pb-4 lg:mb-35'>
        <div className='flex flex-wrap lg:flex-nowrap  justify-between items-center'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col item-center lg:items-start'>
                    <motion.h1
                    variants={container(0)}
                    initial='hidden'
                    animate='visible'
                    className='pb-14 text-7xl font-thin tracking-tight lg:text-7xl '>
                        Kavindu Janith</motion.h1 >
                    <motion.span
                    variants={container(0.2)}
                    initial='hidden'
                    animate='visible'
                    
                    className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl mb-3
                    tracking-tight text-transparent '>Full Stack Developer</motion.span>
                    <motion.p 
                    variants={container(0.3)}
                    initial='hidden'
                    animate='visible'
                    className='my-2 max-w-xl font-light tracking-tighter'>{HERO_CONTENT}</motion.p>
                </div> 
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-between'>
                    <motion.img 
                    initial={{x:100, opasity:0}}
                    animate={{x:0, opasity:1}}
                    transition={{duration:0.5}}
                    src={profilePic} alt="" />
                </div>
            </div>
        </div>
        
    </div>
  )
}
