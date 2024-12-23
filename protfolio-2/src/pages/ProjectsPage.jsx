import React from 'react'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Sidebar from '../components/Sidebar'

export default function ProjectsPage() {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
          <div className='fixed top-0 -z-10 h-full w-full'>
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          </div>
          <div className="container mx-auto px-8">
          <Navbar />
          
            <div className="flex h-full">
           
              <div className="flex-shrink-0 mr-2 border-r border-neutral-500">
                <Sidebar />
              </div>
    
             
              <div className="flex-grow ml-5">
                <Projects />
                <Contact />
            
            </div>
        </div>
      </div>
    </div>
  )
}
