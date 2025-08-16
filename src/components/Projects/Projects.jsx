import React from 'react';
import CovidImg from '../../assets/CovidDashboard.PNG';
import NxttrendImg from '../../assets/nxttrend.PNG';
import DeliveryAppImg from '../../assets/FoodDeliveryApp.PNG';
import { RiShareBoxFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import './Projects.css'

export const Projects = () => {

    const covidDashboardLink = import.meta.env.VITE_CovidDashboardUrl 
    const covidDashboardgit = import.meta.env.VITE_CovidDashboardGitRepo
    const nxtTrendsLink = import.meta.env.VITE_NxttrendUrl
    const nxtTrendsGit = import.meta.env.VITE_nxtTrendsGitRepo
    const FoodDeliveryLink = import.meta.env.VITE_FoodDeliveryApp 
    const FoodDeliveryGit = import.meta.env.VITE_FoodDeliveryRepo
    const GithubLink = import.meta.env.VITE_githubLink

    console.log('covid projrct', covidDashboardLink)

    return (
        <div id="projects" className="bg-neutral-900 p-7 md:p-10">
            <h2 className="text-3xl md:ext-5xl p-2 font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent text-center">
                Featured Projects</h2>
            <p className="text-lg text-neutral-500 md:text-2xl font-medium text-center mx-auto mt-2 md:w-[60%]">A showcase of my latest work, demonstrating expertise in modern web technologies</p>

            <div className=" md:w-[80%] mx-auto mt-15 flex flex-col lg:flex-row rounded-md bg-neutral-950/40 hover:shadow-blue-500/50 shadow-md hover:transition-all duration-300 hover:scale-101">
                <div className="group relative cursor-pointer rounded-tl-md 
                bg-gradient-to-r from-blue-500  to-pink-500 p-5 lg:w-1/2 h-[full] mb-10">
                    <img src={CovidImg} alt="covid19Dashboard" className='w-full h-full object-cover' />
                    <div className="absolute inset-0 flex justify-center items-center gap-4 
                        bg-gradient-to-b from-blue-500/30 to-violet-500/30  
                        opacity-0 transition-opacity duration-300 ease-in-out
                        group-hover:opacity-100">
                        <a href={covidDashboardLink} target='_blank'><button className="group btn py-3 w-[150px] text-md font-medium cursor-pointer flex justify-center gap-2 items-center rounded-lg bg-blue-400">
                            <span className="transition-transform duration-300 group-hover:scale-110"> <RiShareBoxFill size={24} /> </span>Live Demo</button></a>
                        <a href={covidDashboardgit} target='_blank'><button className="group py-3 w-[150px] text-md font-medium cursor-pointer flex justify-center gap-2 items-center 
                         rounded-lg bg-black/40">
                           <span className="transition-transform duration-300 group-hover:scale-110"><FaGithub size={24} /> </span> View Code
                        </button></a>
                    </div>
                </div>

                <div className="self-center flex flex-col gap-4 md:gap-6 py-3 px-7 md:py-10 sm:px-7 lg:w-1/2 h-[95%]">
                    <p className='px-2 py-1 w-[160px] text-blue-600 flex items-center  border-1 rounded-3xl border-blue-400 text-sm font-medium '>{`<> Featured Projects`}</p>
                    <h2 className="font-bold text-2xl md:text-3xl text-white overflow-hidden">Covid Dashboard</h2>
                    <p className="text-md md:text-lg font-medium text-neutral-300">Covid-19 tracking platform with state-wise data visualization, smooth React Router navigation,
                        and interactive Recharts graphs. Built with HTML, CSS, JavaScript, React.js, and Figma designs</p>
                    <div className="">
                        <h4 className="text-neutral-200 text-md font-medium">TECH STACK</h4>
                        <div className="flex gap-3 mt-2 flex-wrap text-sm font-medium text-neutral-200">
                            <p className="bg-black/20 py-0.5 px-2 rounded-lg">HTML</p>
                            <p className="bg-black/20 py-0.5 px-2 rounded-lg">CSS</p>
                            <p className="bg-black/20 py-0.5 px-2 rounded-lg">JavaScript</p>
                            <p className="bg-black/20 py-0.5 px-2 rounded-lg">React JS</p>
                            <p className="bg-black/20 py-0.5 px-2 rounded-lg">Recharts</p>
                            <p className="bg-black/20 py-0.5 px-2 rounded-lg">Figma</p>
                        </div></div>
                    <div className="flex items-center gap-5 mt-3">
                        <a href={covidDashboardLink} target='_blank'><button className="group btn py-3 w-[120px] sm:w-[150px] text-sm md:text-md font-medium cursor-pointer flex justify-center gap-2 items-center rounded-lg bg-blue-400">
                            <span className="transition-transform duration-300 group-hover:scale-110"> <RiShareBoxFill size={20} /> </span>Live Demo</button></a>
                        <a href={covidDashboardgit} target='_blank'><button className="group py-3 w-[120px] sm:w-[150px] text-sm md:text-md font-medium cursor-pointer flex justify-center gap-2 items-center 
                         rounded-lg bg-black/40">
                           <span className="transition-transform duration-300 group-hover:scale-105"><FaGithub size={20} /> </span> View Code
                        </button></a>
                    </div>

                </div>
            </div>

            <div className="md:w-[80%] mx-auto mt-15 flex flex-col lg:flex-row rounded-md  bg-neutral-950/40 hover:shadow-blue-500/50 shadow-xl hover:transition-all duration-300 hover:scale-102">
                <div className="group relative lg:order-1 cursor-pointer bg-blue-300 p-5 lg:w-1/2 h-[full] mb-10">
                    <img src={NxttrendImg} alt="Nxttrends" className='w-[full] h-[100%]' />
                    <div className="absolute inset-0 flex justify-center items-center gap-4 
                            bg-gradient-to-b from-blue-500/30 to-violet-500/30  
                            opacity-0 transition-opacity duration-300 ease-in-out
                            group-hover:opacity-100">
                        <a href={nxtTrendsLink} target='_blank'><button className="group btn py-3 w-[150px] text-md font-medium cursor-pointer flex justify-center gap-2 items-center rounded-lg bg-blue-400">
                            <span className="transition-transform duration-300 group-hover:scale-110"> <RiShareBoxFill size={24} /> </span>Live Demo</button></a>
                        <a href={nxtTrendsGit} target='_blank'><button className="group py-3 w-[150px] text-md font-medium cursor-pointer flex justify-center gap-2 items-center 
                         rounded-lg bg-black/40">
                           <span className="transition-transform duration-300 group-hover:scale-105"><FaGithub size={24} /> </span> View Code
                        </button></a>
                    </div>
                </div>
                
                <div className="self-center flex flex-col gap-4 md:gap-6 py-3 md:py-10 px-7 lg:w-1/2">
                    <p className='px-2 py-1 w-[160px] text-blue-600 flex items-center   border-1 rounded-3xl border-blue-400 text-sm font-medium '>{`<> Featured Projects`}</p>
                    <h2 className="font-bold text-2xl md:text-3xl text-white overflow-hidden">Nxt Trendz - ECommerce Clone</h2>
                    <p className="text-md md:text-lg font-medium text-neutral-300">Developed an e-commerce platform with Amazon/Flipkart-style UI, featuring login,
                        product listing, and product detail pages using React Router.
                        Secured with JWT authentication, REST APIs, and local storage. Built with React.js, CSS, Bootstrap, and JavaScript.  </p>
                    <div className="">
                        <h4 className="text-neutral-200 text-md font-medium">TECH STACK</h4>
                        <div className="flex gap-3 mt-2 flex-wrap text-sm font-medium text-neutral-200">
                            <p className="bg-black/20 py-0.5 px-2 rounded-lg">React.js</p>
                            <p className="bg-black/20 py-0.5 px-2 rounded-lg">JavaScript</p>
                            <p className="bg-black/20 py-0.5 px-2 rounded-lg">CSS</p>
                            <p className="bg-black/20 py-0.5 px-2 rounded-lg">Bootstrap</p>
                            <p className="bg-black/20 py-0.5 px-2 rounded-lg">React Router</p>
                            <p className="bg-black/20 py-0.5 px-2 rounded-lg">REST API</p>
                            <p className="bg-black/20 py-0.5 px-2 rounded-lg">JWT Authentication</p>
                            <p className="bg-black/20 py-0.5 px-2 rounded-lg">Authentication & Authorization</p>
                            <p className="bg-black/20 py-0.5 px-2 rounded-lg">Local Storage</p>
                        </div></div>
                    <div className="flex items-center gap-5 mt-3">
                       <a href={nxtTrendsLink} target='_blank'><button className="group btn py-3 w-[120px] md:w-[150px] text-sm md:text-md font-medium cursor-pointer flex justify-center gap-2 items-center rounded-lg bg-blue-400">
                            <span className="transition-transform duration-300 group-hover:scale-110"> <RiShareBoxFill size={24} /> </span>Live Demo</button></a>
                        <a href={nxtTrendsGit} target='_blank'><button className="group py-3 w-[120px] md:w-[150px] text-sm md:text-md font-medium cursor-pointer flex justify-center gap-2 items-center 
                         rounded-lg bg-black/40">
                           <span className="transition-transform duration-300 group-hover:scale-105"><FaGithub size={24} /> </span> View Code
                        </button></a>
                    </div>

                </div>
            </div>

            <div className="md:w-[80%] mx-auto mt-15 flex flex-col lg:flex-row rounded-md  bg-neutral-950/40 hover:shadow-blue-500/50 shadow-xl hover:transition-all duration-300 hover:scale-102">
                <div className="group cursor-pointer relative rounded-tl-md bg-green-300 p-5 lg:w-1/2 h-[full] mb-10">
                    <img src={DeliveryAppImg} alt="deliveryApp" className='w-[full] h-[100%]' />
                    <div className="absolute inset-0 flex justify-center items-center gap-4 
                        bg-gradient-to-b from-blue-500/30 to-violet-500/30  
                        opacity-0 transition-opacity duration-300 ease-in-out
                        group-hover:opacity-100">
                        <a href={FoodDeliveryLink} target='_blank'><button className="group btn py-3 w-[150px] text-md font-medium cursor-pointer flex justify-center gap-2 items-center rounded-lg bg-blue-400">
                            <span className="transition-transform duration-300 group-hover:scale-110"> <RiShareBoxFill size={24} /> </span>Live Demo</button></a>
                        <a href={FoodDeliveryGit} target='_blank'><button className="group py-3 w-[150px] text-md font-medium cursor-pointer flex justify-center gap-2 items-center 
                         rounded-lg bg-black/40">
                           <span className="transition-transform duration-300 group-hover:scale-105"><FaGithub size={24} /> </span> View Code
                        </button></a>
                    </div>
                </div>

                <div className="self-center flex flex-col gap-4 md:gap-6 py-3 md:py-10 px-7 lg:w-1/2 h-[95%]">
                    <p className='px-2 py-1 w-[160px] text-blue-600 flex items-center   border-1 rounded-3xl border-blue-400 text-sm font-medium '>{`<> Featured Projects`}</p>
                    <h2 className="font-bold text-2xl md:text-3xl text-white overflow-hidden">Food Delivering App</h2>
                    <p className="text-md md:text-lg font-medium text-neutral-300">Full-stack food delivery platform with user authentication, menu browsing, cart management, order tracking, and admin panel
                        for product and order management. Built with React, Node.js/Express, MongoDB, and Stripe API.</p>
                    <div className="">
                        <h4 className="text-neutral-200 text-md font-medium">TECH STACK</h4>
                        <div className="flex gap-3 mt-2 flex-wrap text-sm font-medium text-neutral-200">
                            <p className="bg-black/20 py-0.5 px-2 rounded-lg">HTML</p>
                            <p className="bg-black/20 py-0.5 px-2 rounded-lg">CSS</p>
                            <p className="bg-black/20 py-0.5 px-2 rounded-lg">JavaScript</p>
                            <p className="bg-black/20 py-0.5 px-2 rounded-lg">React JS</p>
                            <p className="bg-black/20 py-0.5 px-2 rounded-lg">Node.js</p>
                            <p className="bg-black/20 py-0.5 px-2 rounded-lg">Express.js</p>
                            <p className="bg-black/20 py-0.5 px-2 rounded-lg">MongoDB</p>
                            <p className="bg-black/20 py-0.5 px-2 rounded-lg">Vite</p>
                            <p className="bg-black/20 py-0.5 px-2 rounded-lg">Context API</p>
                            <p className="bg-black/20 py-0.5 px-2 rounded-lg">JWT</p>
                            <p className="bg-black/20 py-0.5 px-2 rounded-lg">Stripe API</p>
                            <p className="bg-black/20 py-0.5 px-2 rounded-lg">RESTful APIs</p>

                        </div></div>
                    <div className="flex items-center gap-5 mt-3">
                        <a href={FoodDeliveryLink} target='_blank'><button className="group btn py-3 w-[120px] md:w-[150px] text-sm md:text-md font-medium cursor-pointer flex justify-center gap-2 items-center rounded-lg bg-blue-400">
                            <span className="transition-transform duration-300 group-hover:scale-110"> <RiShareBoxFill size={24} /> </span>Live Demo</button></a>
                        <a href={FoodDeliveryGit} target='_blank'><button className="group py-3 w-[120px] md:w-[150px] text-sm md:text-md font-medium cursor-pointer flex justify-center gap-2 items-center 
                         rounded-lg bg-black/40">
                           <span className="transition-transform duration-300 group-hover:scale-105"><FaGithub size={24} /> </span> View Code
                        </button></a>
                    </div>

                </div>
            </div>
             
            <a href={GithubLink}><button className="group bg-transparent border-2 border-neutral-500 mx-auto py-2 px-4 flex items-center justify-center mt-10 gap-4 text-md 
            font-medium rounded-md hover:bg-gray-300/10 cursor-pointer">
                <span className="transition-transform duration-300 group-hover:scale-125"><FaGithub size={22} /></span>
                View All Projects in Github
            </button></a>
        </div>
    )
}

