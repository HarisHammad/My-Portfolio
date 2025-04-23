import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiGithub, SiVite } from "react-icons/si";


function Skills() {
  return (
    <div className='w-full flex justify-center flex-wrap gap-20 max-lg:gap-y-6 overflow-x-hidden'>
<div className='  p-4 w-[400px] mt-42 max-lg:mt-6 max-lg:w-[550px] max-sm:mt-15'>
  <h1 style={{ fontFamily: "Lexend", fontWeight: "500" }} className='text-blue-500 text-3xl max-sm:text-3xl'>Experience</h1>
  <p style={{ fontFamily: "Lexend", fontWeight: "100" }} className='text-[#afb3b3] text-sm mt-7 max-sm:text-xs max-lg:mt-2'>
    Learning MERN Stack and React Native for the past 9 months through structured training and applied development exercises, enhancing my understanding of web and mobile app development.
  </p>
</div>

<div className=' flex flex-wrap w-[425px]  max-sm:w-[335px] mt-28 max-lg:mt-0 gap-4 max-sm:mt-4  justify-center max-lg:gap-3 p-1.5 '>
<div className='experience-box border-1 border-blue-500 p-4 w-[90px] h-[90px] max-sm:w-[65px] max-sm:h-[65px]  rounded-[10px]  flex flex-col justify-center items-center hover:bg-[rgba(0,123,255,0.08)] hover:scale-[1.1] transition duration-500' >
  <p><FaHtml5 title="HTML5" className="text-orange-600 text-[50px] max-sm:text-[35px]" /></p>  
    <p style={{ fontFamily: "Lexend", fontWeight: "100" }} className='text-white text-sm max-sm:text-[10px]'>HTML</p>
    </div>

<div className='experience-box2 border-1 border-blue-500 p-4 w-[90px] h-[90px] max-sm:w-[65px] max-sm:h-[65px]  rounded-[10px]  flex flex-col justify-center items-center hover:bg-[rgba(0,123,255,0.08)] hover:scale-[1.1] transition duration-500' >
  <p><FaCss3Alt title="CSS" className="text-blue-600 text-[50px] max-sm:text-[35px]" /></p>  
    <p style={{ fontFamily: "Lexend", fontWeight: "100" }} className='text-white text-sm max-sm:text-[10px]'>CSS</p>
    </div>

<div className='experience-box2 border-1 border-blue-500 p-4 w-[90px] h-[90px] max-sm:w-[65px] max-sm:h-[65px]  rounded-[10px]  flex flex-col justify-center items-center hover:bg-[rgba(0,123,255,0.08)] hover:scale-[1.1] transition duration-500' >
  <p><FaJs title="HTML5" className="text-yellow-500 text-[50px] max-sm:text-[35px]" /></p>  
    <p style={{ fontFamily: "Lexend", fontWeight: "100" }} className='text-white text-[13px] max-sm:text-[9px] mt-[2px]'>JavaScript</p>
    </div>

<div className='experience-box3 border-1 border-blue-500 p-4 w-[90px] h-[90px] max-sm:w-[65px] max-sm:h-[65px] rounded-[10px]  flex flex-col justify-center items-center hover:bg-[rgba(0,123,255,0.08)] hover:scale-[1.1] transition duration-500' >
  <p><SiTypescript title="HTML5" className="text-blue-700 text-[50px] max-sm:text-[35px]" /></p>  
    <p style={{ fontFamily: "Lexend", fontWeight: "100" }} className='text-white text-[13px] max-sm:text-[9px] mt-1'>TypeScript</p>
    </div>

<div className='experience-box border-1 border-blue-500 ml-13  max-sm:ml-9 p-2 w-[90px] h-[90px] max-sm:w-[65px] max-sm:h-[65px]  rounded-[10px]  flex flex-col justify-center items-center hover:bg-[rgba(0,123,255,0.08)] hover:scale-[1.1] transition duration-500' >
  <p><FaReact title="HTML5" className="text-blue-600 text-[50px] max-sm:text-[35px]" /></p>  
    <p style={{ fontFamily: "Lexend", fontWeight: "100" }} className='text-white text-[12px] max-sm:text-[10px]'>React js</p>
    </div>

<div className=' border-1 border-blue-500 p-0 w-[90px] h-[90px] max-sm:w-[65px] max-sm:h-[65px]  rounded-[10px]  flex flex-col justify-center items-center hover:bg-[rgba(0,123,255,0.08)] hover:scale-[1.1] transition duration-500' >
  <p><FaReact title="HTML5" className="text-blue-600 text-[50px] max-sm:text-[35px]" /></p>  
    <p style={{ fontFamily: "Lexend", fontWeight: "100" }} className='text-white text-[11px] max-sm:text-[9px]'>React Native</p>
    </div>

<div className='experience-box3 border-1 border-blue-500 mr-13  max-sm:mr-9   p-2 w-[90px] h-[90px] max-sm:w-[65px] max-sm:h-[65px]  rounded-[10px]  flex flex-col justify-center items-center hover:bg-[rgba(0,123,255,0.08)] hover:scale-[1.1] transition duration-500' >
  <p><FaNodeJs title="HTML5" className="text-green-600 text-[50px] max-sm:text-[35px]" /></p>  
    <p style={{ fontFamily: "Lexend", fontWeight: "100" }} className='text-white text-[13px] max-sm:text-[10px]'>Node js </p>
    </div>

<div className='experience-box border-1 border-blue-500 p-1 w-[90px] h-[90px] max-sm:w-[65px] max-sm:h-[65px]  rounded-[10px]  flex flex-col justify-center items-center hover:bg-[rgba(0,123,255,0.08)] hover:scale-[1.1] transition duration-500' >
  <p><SiExpress title="HTML5" className="text-gray-400 text-[50px] max-sm:text-[35px]" /></p>  
    <p style={{ fontFamily: "Lexend", fontWeight: "100" }} className='text-white text-[13px] max-sm:text-[10px]'>Express js </p>
    </div>

<div className='experience-box4 border-1 border-blue-500 p-2 w-[90px] h-[90px] max-sm:w-[65px] max-sm:h-[65px]  rounded-[10px]  flex flex-col justify-center items-center hover:bg-[rgba(0,123,255,0.08)] hover:scale-[1.1] transition duration-500' >
  <p><SiMongodb title="HTML5" className="text-green-700 text-[50px] max-sm:text-[35px]" /></p>  
    <p style={{ fontFamily: "Lexend", fontWeight: "100" }} className='text-white text-[13px] max-sm:text-[10px]'>Mongodb </p>
    </div>

<div className='experience-box4 border-1 border-blue-500 p-2 w-[90px] h-[90px] max-sm:w-[65px] max-sm:h-[65px]  rounded-[10px]  flex flex-col justify-center items-center hover:bg-[rgba(0,123,255,0.08)] hover:scale-[1.1] transition duration-500' >
  <p><SiTailwindcss title="HTML5" className="text-blue-600 text-[50px] max-sm:text-[35px]" /></p>  
    <p style={{ fontFamily: "Lexend", fontWeight: "100" }} className='text-white text-[13px] max-sm:text-[10px]'>Tailwind </p>
    </div>

<div className='experience-box3 border-1 border-blue-500 p-2 w-[90px] h-[90px] max-sm:w-[65px] max-sm:h-[65px]  rounded-[10px]  flex flex-col justify-center items-center hover:bg-[rgba(0,123,255,0.08)] hover:scale-[1.1] transition duration-500' >
  <p><SiGithub title="HTML5" className="text-white text-[50px] max-sm:text-[35px]" /></p>  
    <p style={{ fontFamily: "Lexend", fontWeight: "100" }} className='text-white mt-1 text-[13px] max-sm:text-[10px]'>Github </p>
    </div>




    </div>
    </div>
  )
}

export default Skills