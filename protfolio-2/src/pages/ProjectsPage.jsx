import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Sidebar from '../components/Sidebar'
import { PROJECTS } from '../constants'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion';

export default function ProjectsPage() {

  const { id } = useParams();
  const project = PROJECTS.find(project => project.link === `/projects/${id}`);


  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
          <div className='fixed top-0 -z-10 h-full w-full'>
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          </div>
          <div className="container mx-auto px-8 border-b pb-20 border-neutral-600 ">
          <Navbar />
          
            <div className="flex h-full justify-between items-center ">
            
              <div className="absolute top-20 left-19 md:flex-shrink md:relative bg-gradient-to-br from-slate-950 to-slate-800 px-2 rounded-lg mb-10 mr-2">
                <Sidebar data={PROJECTS}/>
              </div>
              <div className="flex-grow ml-2 relative z-[-2] top-6">
                
                <h1 className='text-3xl md:text-5xl text-center my-4 py-6'>{project.title}</h1>
                
                <div className='flex flex-col items-center flex-nowrap'>
                  <img src={project.image} className=' rounded-lg mb-5'/>
                  <div className='flext flex-row justify-between items-center'>
                  {project.technologies.map((tech, index)=> (
                    <motion.span 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{ opacity: 0, x:100}}
                    transition={{
                        duration: 0.5,
                        delay: index/5 ,
                    }}
                    key={index} className='mr-2 rounded 
                    bg-neutral-700 px-2 py-1 text-sm font-medium text-purple-300'>{tech}</motion.span>
                    
                  ))}
                  </div>
                    <p className='mt-6'>{project.description}</p>
                  </div>
              </div>
            </div>
          </div>
         <Contact />
        </div>
  )
}
