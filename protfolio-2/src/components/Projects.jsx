import React from 'react'
import {PROJECTS} from '../constants/index.js'
import { FaExternalLinkAlt } from "react-icons/fa";


export default function Projects() {
  return (
   <div className="border-b border-neutral-700 pb-4">
      <h2 className='my-20 text-center text-4xl'>
        Projects
      </h2>
      <div>
        {
          PROJECTS.map((project, index) => (
            <div key={index} className='mb-8 flex flex-wrap border p-5 rounded-2xl border-neutral-500  lg:justify-center ' >

              <div className='w-full lg:w-1/4'>
              <img src={project.image} width={180} height={180} alt={project.title} className='mb-4 rounded'/>
              </div>

              <div className='w-full max-w-xl lg:w-3/4'>
                <h3 className='mb-4 font-semibold'>{project.title}</h3>
                <p className='mb-4 text-neutral-400'>{project.description}</p>
                {project.technologies.map((tech, index)=> (
                  <span key={index} className='mr-2 rounded
                   bg-neutral-700 px-2 py-1 text-sm font-medium text-purple-300'>{tech}</span>
                  
                ))}

                <div className='text-xl text-blue-300  mt-4 w-full flex justify-end items-end'>
                <a className='bg-neutral-700 p-2 rounded-lg hover:bg-neutral-600 cursor-pointer' href='#'>

                  <FaExternalLinkAlt /> 
                  
                </a>
                  
                </div>

                
              </div>

              

  
            </div>

          ))
        }
      </div>
           
   
    </div>
  )
}
