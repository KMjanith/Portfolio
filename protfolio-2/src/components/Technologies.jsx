import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { DiRedis } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGolang } from "react-icons/fa6";

SiMongodb
TbBrandNextjs


export default function Technologies() {
  return (
    <div className='border-b border-neutral-700 pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <div className='flex flex-wrap justify-center items-center gap-4'>
            <div className='border-4 border-neutral-500 rounded-2xl p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'  />
            </div>
            <div className='border-4 border-neutral-500 rounded-2xl p-4'>
                <DiRedis className='text-7xl text-red-400'  />
            </div>
            <div className='border-4 border-neutral-500 rounded-2xl p-4'>
                <SiMongodb className='text-7xl text-green-400'  />
            </div>
            <div className='border-4 border-neutral-500 rounded-2xl p-4'>
                <TbBrandNextjs className='text-7xl text-gray-400'  />
            </div>
            <div className='border-4 border-neutral-500 rounded-2xl p-4'>
                <FaGolang className='text-7xl text-cyan-400'  />
            </div>
            <div className='border-4 border-neutral-500 rounded-2xl p-4'>
                <BiLogoPostgresql className='text-7xl text-blue-500'  />
            </div>
        </div>
    
    </div>
  )
}
