import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/kevinRushProfile.jpg'

export default function Hero() {
  return (
    <div className='border-b border-neutral-700 pb-4 lg:mb-35'>
        <div className='flex flex-wrap lg:flex-nowrap  justify-between items-center'>
            <div className='w-full lg:w-1-2'>
                <div className='flex flex-col item-center lg:items-start'>
                    <h1 className='pb-14 text-4xl font-thin tracking-tight lg:mt-14 lg:text-6xl '>Kavindu Janith</h1>
                    <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl 
                    tracking-tight text-transparent '>Full Stack Developer</span>
                    <p className='my-2 max-w-xl font-light tracking-tighter'>{HERO_CONTENT}</p>
                </div> 
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-between'>
                    <img src={profilePic} alt="" />
                </div>
            </div>
        </div>
        
    </div>
  )
}
