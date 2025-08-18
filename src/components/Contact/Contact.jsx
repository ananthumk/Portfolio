import React, { useRef, useState } from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone, FiGithub, FiSend } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from 'react-toastify'


export const Contact = () => {
 
  const [searching, setSearching] = useState(false)
  const formRef = useRef()

  const githubLink = import.meta.env.VITE_githubLink
  const linkedlnLink = import.meta.env.VITE_linkedln

  const icon = searching ? <AiOutlineLoading3Quarters size={20} /> : <FiSend size={20} />
  const buttonText = !searching ? 'Send Message' : 'Sending...'

  const serviceID = import.meta.env.VITE_SERVICE_ID 
  const templateID = import.meta.env.VITE_TEMPLATE_ID 
  const publicKey = import.meta.env.VITE_PUBLIC_KEY
  
  console.log('formRef', formRef)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearching(true)
    
    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey )
    .then((result) => {
       toast.success('Message Sent Successfully!') 
       setSearching(false)
       formRef.current.reset()
    }, (error) => {
        toast.error('Failed to send, please try again later')
        setSearching(false)
    })
    
    
  }

  return (
    <div id="contact" className='p-10 px-6 md:px-20 bg-neutral-950'>
        <h2 className="text-3xl md:text-4xl text-center p-2 font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">Get In Touch</h2>
            <p className="text-neutral-500 text-md md:text-xl font-medium text-center mx-auto mt-2 md:w-[60%]">
                Have a project in mind or want to discuss opportunities? I'd love to hear from you.</p>
        
        <div className=" relative grid grid-cols-1 lg:grid-cols-2 mt-5 gap-3 md:gap-5 md:mt-10">
            {/* RIGHT SIDE */}
            <div className="p-6 md:px-10 flex flex-col gap-5">
                <h3 className="text-3xl md:text-4xl md:p-2 font-semibold">Let's Connect</h3>
                <p className="md:mt-1 text-md md:text-lg font-medium">I'm always interested in hearing about new opportunities, collaborative projects, or just having a chat about technology.
                    Whether you're a recruiter, fellow developer, or someone with an exciting project idea, don't hesitate to reach out.</p>
                <div className="flex w-full items-center bg-gray-200/10 rounded-md p-4 gap-4 mt-2 md:mt-4">
                <span className="bg-neutral-950 p-2 rounded-xl">
                    <AiOutlineMail size={24} className="text-blue-500" /></span>
                    <div className="">
                        <h4 className="text-lg font-medium text-gray-500">EMAIL</h4>
                        <p className="text-md font-medium">ananthusmk@gmail.com</p>
                    </div>
                </div>
                <div className="flex w-full items-center bg-gray-200/10 rounded-md p-4 gap-4 mt-2 md:mt-4">
                <span className="bg-neutral-950 p-2 rounded-xl">
                    <FiPhone size={24} className="text-blue-500" /></span>
                    <div className="">
                        <h4 className="text-lg font-medium text-gray-500">PHONE</h4>
                        <p className="text-lg font-medium">+91 9567 223605</p>
                    </div>
                </div>
                <div className="flex w-full items-center bg-gray-200/10 rounded-md p-4 gap-4 mt-2 md:mt-4">
                <span className="bg-neutral-950 p-2 rounded-xl">
                    <IoLocationOutline size={24} className="text-blue-500" /></span>
                    <div className="">
                        <h4 className="text-lg font-medium text-gray-500">ADDRESS</h4>
                        <p className="text-md font-medium">Wayanad, Kerala</p>
                    </div>
                </div>
                <h3 className="text-xl md:text-2xl p-2 font-semibold">Follow Me</h3>
                <div className="flex items-center gap-4 p-1">
                    <a href={linkedlnLink} target='_blank' className='p-1'><button className="group cursor-pointer hover:scale-y-105 bg-neutral-300/10 rounded-xl p-2 md:p-3">
                       <FaLinkedinIn size={24} className='text-white transition-transform duration-300 group-hover:scale-y-105' />
                    </button></a>
                    <a href={githubLink} target='_blank' className='p-1'><button className="group overflow-hidden cursor-pointer hover:scale-y-105 bg-neutral-300/10 rounded-xl p-2 md:p-3">
                       <FiGithub size={24} className='text-white  transition-transform duration-300 group-hover:scale-y-105' />
                    </button></a>
                </div>
            </div>
            {/* LEFT SIDE */}
            <div className="p-6 md:px-10 md:max-h-[550px] flex flex-col gap-5 bg-gray-200/10 rounded-md">
                <h3 className="text-xl md:text-3xl text-white font-semibold p-2">Send a Message</h3>
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className='text-md font-medium'>Name *</label>
                            <input type="text" placeholder='your full name' id='name' name="name" className='text-base text-white bg-black/10 
                            border-0 py-1 px-3 outline-0 rounded-md' required /> 
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className='text-md font-medium'>Email *</label>
                            <input type="email" placeholder='your.email@example.com' name="email" className='text-base text-white bg-black/10 
                            border-0 py-1 px-3 outline-0 rounded-md' required />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="subject" className='text-md font-medium'>Subject *</label>
                        <input type="text" id='subject' placeholder={`What's this about`} name='subject' className='text-base text-white bg-black/10 
                            border-0 py-1 px-3 outline-0 rounded-md' required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className='text-md font-medium'>Message *</label>
                        <textarea id="message" rows={5} name="message" placeholder='Tell me about your projects or opportunities...'
                        className='text-base text-white bg-black/10 
                            border-0 py-1 px-3 outline-0 rounded-md' required>
                            
                        </textarea>
                    </div>
                    <button type='submit' className={`group flex items-center cursor-pointer justify-center gap-2 text-black ${searching ? 'bg-blue-300/50': 'bg-blue-500'}  font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300`}>
                        <span className={`text-black transition-transform duration-300 group-hover:scale-z-105 ${searching && 'animate-spin'}`}>{icon}</span> {buttonText}
                    </button>
                </form>
            </div>
            
        </div>
        <ToastContainer position="bottom-right"
            autoClose={5000}  
            hideProgressBar={false}  
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover 
        />
    </div>
  )
}
