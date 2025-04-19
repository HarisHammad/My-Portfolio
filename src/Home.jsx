import React from 'react'
import Typewriter from 'react-typewriter-effect'
import Button from '@mui/material/Button';
import {NavLink} from 'react-router-dom'

function Home() {
  return (
    <>
    <div className='body2 '>
    <div  className=' w-full flex flex-wrap justify-center gap-20 '>
        
      <div className=' w-[755px]  ml-[-35px] mt-58 max-sm:mt-50 max-lg:pl-14 max-lg:mt-50 pr-4 '>
        <h1 style={{fontFamily:"Lexend", fontWeight:"600"}} className='text-white text-4xl max-sm:text-3xl'>Hi, I'm <span className='text-blue-500'> Haris</span> </h1>
        <div className="text-white text-2xl max-sm:text-xl font-semibold font-[Lexend]">
      {/* <span>I'm a&nbsp;</span> */}
      <span className="inline-block align-middle text-blue-500 mt-[-5px]">
        <Typewriter
          startDelay={100}
          cursorColor="blue"
          multiText={[
            'Web Developer',
            'App Developer',
            'MERN Stack Developer',
            'React Native Developer',
          ]}
          multiTextDelay={1000}
          typeSpeed={70}
          multiTextLoop={true}
        />
      </span>
    </div>
    
    <p style={{fontFamily:"Lexend", fontWeight:"100"}} className='text-[#afb3b3] text-sm mt-7 max-sm:text-xs'>I am a MERN Stack and React Native Developer, currently learning MongoDB, Express.js, React, Node.js, and React Native. Passionate about web and mobile app development, I continuously enhance my skills through real-world projects. My goal is to build efficient, scalable, and user-friendly applications.</p>

    <a
  href="https://wa.me/923105296649?text=Hi%20I%20saw%20your%20portfolio%2C%20I%20want%20to%20hire%20you!"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    style={{ marginTop: '30px', borderRadius: '10px' }}
    className="w-40 rounded-[70px]"
    variant="outlined"
  >
    Hire Me
  </Button>
</a>

      </div>




      <div
  // style={{ backgroundImage: "url('/WhatsApp Image 2025-04-05 at 3.01.46 AM (4).jpeg')" }}
  className="relative mb-15 overflow-hidden bg-cover bg-center w-[287px] h-[380px] max-sm:w-[207px] max-sm:h-[280px]  text-white mt-42 max-lg:mt-[-35px] border-[#242323] mx-4 border-2 rounded-[18px] hover:border-transparent hover:opacity-90 transition-all duration-300"

>
  {/* Overlay */}
  {/* <div className="absolute inset-0 bg-black/0 z-0"></div> */}
  <img
  className=" rounded-[20px] overflow-hidden w-full h-full mix-blend-soft-light opacity-100 brightness-110 contrast-110 saturate-150 transition-all duration-500 max-sm:mix-blend-normal hover:mix-blend-normal hover:translate-y-2"
  src="/WhatsApp Image 2025-04-05 at 3.01.46 AM (4) (2).jpg"
  alt=""
/>

 
 
</div>

  
        </div>
        </div>
    </>
  )
}

export default Home