import React from 'react'
import { EXPERIENCES } from '../constants'

export default function Experiance() {
  return (
    <div className='border-b border-neutral-700 pb-24'>
         <h2 className='my-20 text-center text-4xl'>Experiance</h2>
        <div>
            {
             EXPERIENCES.map((experiance, index)=>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className='w-full lg:w-1/4' >
                        <p className='mb-4 text-sm text-neutral-400'>{experiance.year}</p>
                        
                    </div>
                    <div className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>{experiance.role}-{' '} <span className='text-sm text-purple-100'>{experiance.company}</span></h6>
                    <p className='mb-4 text-neutral-400'>{experiance.description}</p>
                        {
                            experiance.technologies.map((tech,index)=> (
                                <span className='mx-2 mt-2 rounded-md bg-neutral-700 px-2 py-1 text-sm font-medium text-purple-300' key={index}>{tech}</span>
                            ))
                        }
                    </div>
                </div>
             ))
            }
        </div>
    </div>
  )
}
