import React from 'react'
import { BLOGS } from '../constants';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Contact from '../components/Contact';

export default function BlogPage() {
    const { id } = useParams();
    const blog = BLOGS.find(blog => blog.link === `/blog/${id}`);

  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
          <div className='fixed top-0 -z-10 h-full w-full'>
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          </div>
          <div className="container mx-auto px-8 border-b pb-20 border-neutral-600">
          <Navbar />
          
            <div className="flex h-full">
            
              <div className="flex-shrink-0 mr-2 border-r border-neutral-700">
                <Sidebar />
              </div>
    
              
              <div className="flex-grow ml-4">
                <h1 className='text-6xl text-center my-4 py-6'>{blog.title}</h1>
                <h2 className='text-lg mb-4'>{blog.date}</h2>
                <div className='flex flex-col justify-center items-center flex-nowrap'>
                  <img src={blog.image} className='p-10 items-center rounded-lg'/>
                  <p className='mt-6'>{blog.description}</p>
                </div>
              </div>
            </div>
          </div>
           <Contact />
        </div>
  )
}
