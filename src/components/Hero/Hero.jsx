import React from 'react'
import banner from '../../assets/banner3.jpg';
import { MdOutlineKeyboardArrowDown, MdFileDownload, MdOutlineMailOutline } from "react-icons/md";
import './Hero.css'

const Hero = () => {

  const handleDownload = () => {
    fetch("https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/ccbp_prod/media/resume_generated/Ananthu_2025-07-16-114047.pdf")
    .then(res => res.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url 
      a.download = "Ananthu_Resume.pdf"
      document.body.appendChild(a)
      a.click()
      a.remove()
      window.URL.revokeObjectURL(url)
    })
  }

  return (
    <div id='hero' style={{backgroundImage: `url(${banner})`}} 
    className='hero-section w-full p-5 text-center flex flex-col items-center justify-center gap-6'>
         <h1 className='heading text-2xl md:text-5xl lg:text-9xl font-extrabold mb-2 overflow-hidden'>Hi, I'm <br/>
         <span className=" bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">Ananthu K M</span></h1>
         <h2 className="text-xl md:text-4xl overflow-hidden font-semibold text-gray-400">MERN Stack Developer</h2>
         <p className='text-md md:text-2xl md:w-[45%] font-medium'>Crafting scalable web applications with modern technologies. 
          Passionate about creating seamless user experiences and robust backend solutions.</p>
          <div className='btns flex flex-col md:flex-row justify-center items-center gap-10 mt-5 text-sm font-medium'> 
             <a href="#projects"><button className='group bg-gradient-to-r  from-blue-500 to-violet-500 rounded-md py-3 px-6 transition-all duration-300 hover:shadow-lg shadow-blue-500'>View My Work
               <MdOutlineKeyboardArrowDown size={20} className='transition-transform duration-300 group-hover:translate-y-1'/> </button></a>
             <button className='py-3 px-6 rounded-md bg-transparent border-2 border-blue-500 text-blue-500
             hover:bg-blue-500 hover:text-black' onClick={handleDownload}> <MdFileDownload size={20} /> Download Resume </button>
             <a href="#contact"><button className='bg-transparent py-3 px-6 rounded-md hover:bg-blue-300/30'> <MdOutlineMailOutline /> 
             Contact Me </button></a>
          </div>
          <a href="#about">
          <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer text-white text-lg'>
            <MdOutlineKeyboardArrowDown size={30} className='up-down-animation' />
            </div>
          </a>
    </div>
  )
}

export default Hero