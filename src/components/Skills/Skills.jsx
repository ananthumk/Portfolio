import React from 'react'
import { RiGlobalLine } from "react-icons/ri";
import { AiFillDatabase } from "react-icons/ai";

export const Skills = () => {

  const frontendSkills = [
    {name: 'React', level: '90%'},
    {name: 'JavaScript', level: '85%'},
    {name: 'HTML', level: '95%'},
    {name: 'CSS', level: '90%'},
    {name: 'Tailwind CSS', level: '80%'},
    {name: 'Bootstrap', level: '75%'},
  ]

    const backendSkills = [
        {name: 'Node.js', level: '80%'},
        {name: 'Express.js', level: '75%'},
        {name: 'MongoDB', level: '70%'},
        {name: 'SQL', level: '65%'},
        {name: 'Python', level: '70%'},
        {name: 'Sqlite3', level: '75%'}
    ];



  return (
    <div id='skills' className='bg-neutral-950 text-white px-6 md:px-10 py-15'>
        <h2 className="text-3xl md:text-4xl font-bold text-center overflow-hidden bg-clip-text bg-gradient-to-r
         from-blue-500 to-violet-500 text-transparent ">Technical Skills</h2>
        <p className="text-lg md:text-2xl text-neutral-500 text-center mt-3 font-medium">
            A comprehensive toolkit for building modern, scalable web applications
        </p>
        <div className="flex flex-col md:flex-row mx-auto justify-center p-10 gap-20 mt-10">
            <div className="py-3 px-6 md:w-60 bg-neutral-700 rounded-lg hover:shadow-blue-500 hover:scale-105   shadow-xl">
                <h2 className="text-white text-xl font-semibold">
                    <RiGlobalLine size={44} className="inline-block text-blue-500 mr-2 bg-black p-2 rounded-xl" />
                    Frontend
                </h2>
                {frontendSkills.map(({name, level}, idx) => (
                    
                        <div key={idx} className="relative py-1">
                    <p className="flex justify-between font-medium text-white mt-2 mb-1">
                        <span>{name}</span> <span>{level}</span>
                    </p>
                    <p className='absolute w-[100%] h-2 rounded-lg bg-neutral-800'></p>
                    <p style={{width: `${level}`}} className="relative h-2 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500"></p>
                </div>
                    )
                )}

                
            </div>
             <div className="py-3 px-6 md:w-60 bg-neutral-700 rounded-lg hover:shadow-blue-500 hover:scale-105   shadow-xl">
                <h2 className="text-white text-xl font-semibold">
                    <AiFillDatabase size={44} className="inline-block text-violet-500 mr-2 bg-black p-2 rounded-xl" />
                    Backend
                </h2>
                {backendSkills.map(({name, level}, idx) => (
                    
                        <div key={idx} className="relative py-1">
                    <p className="flex justify-between font-medium text-white mt-2 mb-1">
                        <span>{name}</span> <span>{level}</span>
                    </p>
                    <p className='absolute w-[100%] h-2 rounded-lg bg-neutral-800'></p>
                    <p style={{width: `${level}`}} className="relative h-2 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500"></p>
                </div>
                    )
                )}

                
            </div>
        </div>
        <h3 className="text-2xl md:text-3xl font-medium text-center mt-15 overflow-hidden ">Also Experienced With</h3>
        <div className="md:w-[70%] mx-auto mt-5 text-center text-sm font-medium flex flex-wrap justify-center gap-5">
            <p className="py-2 px-3 bg-black/40 rounded-lg">Styled Components</p>
            <p className="py-2 px-3 bg-black/40 rounded-lg">Git & Github</p>
            <p className="py-2 px-3 bg-black/40 rounded-lg">Mongoose</p>
            <p className="py-2 px-3 bg-black/40 rounded-lg">Authentication</p>
            <p className="py-2 px-3 bg-black/40 rounded-lg">RESTful APIs</p>
            <p className="py-2 px-3 bg-black/40 rounded-lg">Figma</p>
        </div>
    </div>
  )
}
