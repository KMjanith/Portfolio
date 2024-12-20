import React from 'react'
import aboutImage from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'


export default function About() {
  return (
    <div className="border-b border-neutral-700 pb-4">
        <h2 className='my-20 text-center text-4xl'>
            About <span className='text-neutral-500'>Me</span>
        </h2>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className='rounded-2xl' src={aboutImage} alt="" />
                </div>
            </div>

            <div className='w-full lg:w-1/2'>
                <div className='flex justify-center items-center'>
                    <p className='max-w-xl lg:p-8'>{ABOUT_TEXT}</p>
                </div>
            </div>
        </div>

    </div>
  )
}
