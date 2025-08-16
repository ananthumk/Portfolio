import React from 'react'

export const About = () => {
  return (
    <div id="about" className='bg-neutral-900 py-6 px-6 md:p-9 text-center flex flex-col gap-4'>
        <h2 className='text-4xl md:text-5xl text-transparent bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text font-bold overflow-hidden'>About Me</h2>
        <p className="text-md md:text-[22px] text-neutral-400 self-center font-medium md:w-[55%]">Passionate MERN stack developer with a keen eye for detail and a drive for excellence</p>
        <div className='mt-3 flex flex-col gap-4 text-left md:w-[60%] self-center'>
            <h4 className='text-2xl font-bold'>Building the Future, One Line of Code at a Time</h4>
            <p className='text-[16px] font-medium'>Hi! I’m a passionate MERN Stack Developer with a strong foundation in building responsive and scalable web applications 
                using MongoDB, Express.js, React, and Node.js.
                 I love crafting seamless user experiences and enjoy solving complex challenges through code.</p>
            <p className="text-[16px] font-medium">
                As a fresher, I have worked on several projects that helped me sharpen my skills in front-end and back-end development,
                 and I’m continuously exploring new technologies to enhance my toolkit. 
                I’m excited to contribute to innovative projects and collaborate with a team to create impactful software solutions.
            </p>
            <p className="text-[16px] font-medium"> believe in writing clean, maintainable code and staying updated with the latest technologies.
                 My approach combines technical expertise with creative thinking to deliver exceptional user experiences.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 self-center'>
        <div className='p-4 cursor-pointer rounded-md bg-neutral-900/90 hover:bg-neutral-800 border-2 border-neutral-600 md:w-[200px] font-medium flex flex-col items-center justify-center gap-2 mt-5'>
          <h2 className='text-4xl text-blue-800 overflow-hidden'>
              3+
          </h2>
          <p className='text-xl text-neutral-500'>Projects</p>
        </div>
        <div className='p-4 cursor-pointer rounded-md bg-neutral-900/90 hover:bg-neutral-800 border-2 border-neutral-600  w-[200px] font-medium flex flex-col items-center justify-center gap-2 mt-5'>
          <p className='text-xl text-neutral-500'>Active Building Since</p>
          <h2 className='text-4xl text-blue-800 overflow-hidden'>
              2024
          </h2>   
        </div>
        </div>
        <div className='self-center mt-4 text-left md:w-[60%]'>
           <h5 className="text-2xl mb-2 font-bold">Core Values</h5>
           <ul className='list-disc text-neutral-400 text-[17px] font-medium '>
            <li className='flex items-start'>
                <span className='w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3'></span>
                <span>Clean, maintainable code architecture</span></li>
            <li className='flex items-start'>
                <span className='w-2 h-2 bg-violet-500 rounded-full mt-2 mr-3'></span>
                User-centered design approach</li>
            <li className='flex items-start'>
                <span className='w-2 h-2 bg-green-500 rounded-full mt-2 mr-3'></span>Continuous learning and improvement</li>
            <li className='flex items-start'><span className='w-2 h-2 bg-red-500 rounded-full mt-2 mr-3'></span>Collaborative team environment</li>
           </ul>
        </div>
    </div>
  )
}
