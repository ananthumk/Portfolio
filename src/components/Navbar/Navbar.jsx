import React, { useEffect, useState } from 'react'
import { TiArrowUnsorted } from "react-icons/ti";
import { IoMenu, IoCloseSharp  } from "react-icons/io5";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)



  useEffect(() => {
     const handleScroll = () => {
        if (window.scrollY > 50){
            setScrolled(true)
        } else {
            setScrolled(false)
        }
     }

     window.addEventListener('scroll', handleScroll)
     return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className="flex flex-col">
    <div className={`${scrolled ? 'bg-black border-b-1 border-b-neutral-400': 'bg-transparent'} fixed w-full overflow-x-hidden top-0 left-0 right-0 z-50 py-4 transition-all duration-300 flex justify-around items-center`}>
      <a href="#hero"> <div className='flex items-center gap-2 text-white linear-gradient-to-r from-blue-500 to-purple-500'>
            <div className="p-2 bg-gradient-to-b from-blue-500 to-purple-500 rounded-md">
                <TiArrowUnsorted size={24} />
            </div>
           
           <h2 className='text-2xl font-extrabold'>Ananthu K M</h2>
        </div>
        </a> 
        <div className="hidden md:flex items-center gap-6 text-lg from-neutral-400">
            <a href="#about"><p className='hover:text-blue-600 cursor-pointer text-white'>About</p></a>
            <a href='#skills'><p className='hover:text-blue-600 cursor-pointer text-white'>Skills</p></a>
            <a href='#projects'><p className='hover:text-blue-600 cursor-pointer text-white'>Projects</p></a>
            <a href='#contact'><p className='hover:text-blue-600 cursor-pointer text-white'>Contact</p></a>
            <a href={import.meta.env.VITE_RESUME_URL}
             target='_blank'>
            <button className= 'hover:bg-gray-400/40 font-medium px-4 py-2 text-white rounded-md cursor-pointer'>Resume</button></a>
        </div>

        <div className='md:hidden text-white bg-neutral-900 p-2 cursor-pointer rounded-md'>
            {!showMenu ? <IoMenu size={24} onClick={() => setShowMenu(true)}/> : <IoCloseSharp size={24} onClick={() => setShowMenu(false)} />}
        </div>
        
       
    </div>
    {showMenu &&
        <div className= 'fixed z-1 md:absolute top-20 right-10 flex flex-col items-start gap-3 py-8 px-10   bg-neutral-900 text-lg rounded-md shadow-lg'>
            <a href="#about"><p className='hover:text-blue-600 text-white cursor-pointer'>About</p></a>
            <a href='#skills'><p className='hover:text-blue-600 text-white cursor-pointer'>Skills</p></a>
            <a href='#projects'><p className='hover:text-blue-600 text-white cursor-pointer'>Projects</p></a>
            <a href='#contact'><p className='hover:text-blue-600 text-white cursor-pointer'>Contact</p></a>
            <a href={import.meta.env.VITE_RESUME_URL} target='_blank'>
            <button className= 'hover:bg-gray-400 w-full text-white font-medium px-4 py-2 rounded-md cursor-pointer'>Resume</button></a>
        </div> }
    </div>
  )
}
