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
    <div className={`${isOpen ? 'w-64' : 'w-10 md:w-14'} sm:mr-1 md:mr-5 md:p-1 text-white flex flex-col justify-center items-center transition-all duration-300`}>
      
        <button className='p-2 m-2 rounded-md' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoMdArrowRoundBack className='w-10 h-10 ' /> : <BsFillMenuButtonWideFill className='w-4 h-10' />}
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
