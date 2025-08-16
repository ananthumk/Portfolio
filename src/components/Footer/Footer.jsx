import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className='flex gap-2 justify-center items-center bg-neutral-800/80 py-5 px-3 sm:px-7 
    font-medium md:p-8 text-neutral-400 w-full border-t-2 border-neutral-400
    text-sm sm:text-md md:text-lg'>
          <span className="text-md md:text-2xl">
            <FaRegCopyright  />
          </span>
         2025 Ananthu K M. Build with React, Tailwind and CSS
    </div>
  )
}
