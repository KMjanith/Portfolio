import React from 'react'
import { CONTACT } from '../constants'

export default function Contact() {
  return (
    <div className="border-b border-neutral-700 pb-4">
    <h2 className='mt-20 mb-10 text-center text-4xl'>
    Get In Touch
  </h2> 
    <div className='text-center tracking-tighter'>
      <p className='my-1'>{CONTACT.address}</p>
      <p className='my-1'>{CONTACT.phoneNo}</p>
      <a href="#">{CONTACT.email}</a>

    </div>
  </div>
  )
}
