// Sidebar Component
import React, { useState } from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { BLOGS } from '../constants';
import { Link, useLocation } from 'react-router-dom';
import { BsFillMenuButtonWideFill } from "react-icons/bs";


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  return (
    <div className={`${isOpen ? 'w-64' : 'w-16'} h-scren pr-3 pb-10 text-white flex flex-col transition-all duration-300`}>
      
        <button className='p-2 m-2 rounded-md' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoMdArrowRoundBack className='w-full h-10 ' /> : <BsFillMenuButtonWideFill className='w-full h-10' />}
        </button>
        <div className={isOpen ? `flex flex-col items-center justify-center gap-4 mt-8` : ` hidden md:flex flex-col items-center justify-center gap-4 mt-8`}>

            {
                BLOGS.map((item, index) => {
                    const isActive = location.pathname === item.link;
                    return(
                        <Link
                            to={item.link}
                            className={`text-sm w-full rounded-md border-r border-b border-purple-200 p-1 text-start font-normal my-2 ${
                            isActive ? 'bg-neutral-700' : 'hover:bg-neutral-700'
                            }`}
                            key={index}>
                            {
                            isOpen ? <p>{index + 1}. {item.title}</p> : <p className='text-center'>{index + 1}</p>
                            }
                        </Link>
                    )
                    
                
                    })
            }

        </div>
    </div>
  );
}
