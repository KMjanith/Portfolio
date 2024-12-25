import React from 'react'
import { motion } from 'framer-motion';
import aboutImage from '../../assets/aboutme.jpg'
import { ABOUT_TEXT } from '../../constants'

export default function AboutHero() {
  return (
        <div className="border-b border-neutral-700 pb-12">
              <div className='flex justify-center flex-col items-center'>
              <motion.h2 
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: .5}}
                className=' text-center text-4xl md:text-6xl border-b border-neutral-700 pb-4'>
                I'm <span className='text-cyan-500'>H.M. Kavindu Janith</span>
              </motion.h2>
              <motion.h2 
                  whileInView={{opacity: 1, y: 0}}
                  initial={{opacity: 0, y: -100}}
                  transition={{duration: .5}}
                  className='mb-10 text-center text-sm md:text-lg mt-1'>
                  <span className='text-cyan-500'>Software Engineering</span> Undergraduate
              </motion.h2>
                </div>
            
              <div className='flex flex-wrap '>
                  <motion.div 
                      whileInView={{opacity: 1, x: 0}}
                      initial={{opacity: 0, x: -100}}
                      transition={{duration: .5}}
                  className='w-full lg:w-1/2 lg:p-8'>
                      <div className='flex items-center justify-center'>
                          <img className='rounded-2xl mb-4' src={aboutImage} alt="" />
                      </div>
                  </motion.div>
          
                  <div className='w-full lg:w-1/2 '>
                      <motion.div 
                          whileInView={{opacity: 1, x: 0}}
                          initial={{opacity: 0, x: 100}}
                          transition={{duration: .5}}
                      className='flex justify-center items-center flex-col'>
                        {
                          ABOUT_TEXT.map((item, index) => (
                            <p 
                              className='max-w-xl lg:p-8 pb-3' 
                              key={index}
                              dangerouslySetInnerHTML={{ __html: item }}
                            />
                          ))
                        }
                          
                      </motion.div>
                      
                  </div>
            </div>  
        </div>


  )
}
