import React from 'react'
import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Contact() {

  const [data, setdata] = useState({name:"", email:"", message:""})

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setdata({...data, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setdata({name:"", email:"", message:""})
  }
  return (
    <>
    <h1 style={{ fontFamily: "Lexend", fontWeight: "500" }} className='mt-5 text-blue-500 text-4xl max-sm:text-3xl text-center'>Contact Me</h1>
    <div className='w-full flex  flex-wrap justify-center mt-5'>


      <div className= "w-[500px] mt-8 max-lg:mt-0   p-5 pl-20 max-lg:pl-[16%]">
      <p style={{fontFamily:"Lexend", fontWeight:"100"}} className='text-[#afb3b3] text-[13px] mt-3 '><LocationPinIcon style={{fontSize:"30px"}} className='text-blue-500 mr-2 mb-1'/>Islamabad</p>
      <p style={{fontFamily:"Lexend", fontWeight:"100"}} className='text-[#afb3b3] text-[13px] mt-3'><CallIcon style={{fontSize:"30px"}} className='text-blue-500 mr-2 mb-1'/>+92 310 5296649</p>
      <p style={{fontFamily:"Lexend", fontWeight:"100"}} className='text-[#afb3b3] text-[13px] mt-3 '><EmailIcon style={{fontSize:"30px"}} className='text-blue-500 mr-2 mb-1'/>harishammadpak1@gmail.com</p>
       <div className=' mt-3 flex gap-3 '>
       <a href="https://github.com/HarisHammad" target="_blank" rel="noopener noreferrer">
         <div className='w-[32px] h-[32px] bg-transparent text-blue-500 flex justify-center items-center border border-blue-500 rounded-full transition duration-1000 hover:rotate-y-[180deg]'>
           <GitHubIcon style={{fontSize:'20px'}} />
         </div>
       </a>
       
       
       <a href="https://wa.me/923105296649?" target="_blank" rel="noopener noreferrer">
         <div className='w-[32px] h-[32px] bg-transparent text-blue-500 flex justify-center items-center border border-blue-500 rounded-full transition duration-1000 hover:rotate-y-[180deg]'>
           <WhatsAppIcon style={{fontSize:'20px'}} />
         </div>
       </a>
       
        <a href="https://www.linkedin.com/in/haris-hammad-9401b8311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
           <div className='w-[32px] h-[32px] bg-transparent text-blue-500 flex justify-center items-center border border-blue-500 rounded-full transition duration-1000 hover:rotate-y-[180deg]'>
             <LinkedInIcon style={{fontSize:'20px'}} />
           </div>
         </a>
       
       </div>
       <a
  href="https://wa.me/923105296649?text=Hi%20I%20saw%20your%20portfolio%2C%20I'm%20interested%20in%20offering%20you%20an%20internship!"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    style={{ marginTop: '30px', borderRadius: '10px',fontSize:"12px" }}
    className="w-37 h-10 rounded-[70px]"
    variant="outlined"
  >
    Hire Me as Intern
  </Button>
</a>
      </div>

      <div className= "w-[600px] mt-10 max-lg:mt-0  max-lg:ml-[20%] max-sm:ml-[1%]  p-2 max-sm:px-3  max-lg:w-[100%] ">
        
     <form onSubmit={handleSubmit} >
      <input type="text" 
      required
      name="name"
      onChange={handleChange}
      value={data.name}
      placeholder='Enter Your Name' 
      className="w-[90%] max-lg:w-[75%]  max-sm:w-[100%] bg-[#2c2c2c] h-[40px] text-white p-3 border border-blue-500 focus:outline-none focus:ring-1 border-none focus:ring-blue-500 rounded-[4px] text-[14px]" />


      <input type="Email" 
      required
      name='email'
      onChange={handleChange}
      value={data.email}
      placeholder='Enter Your Email ' 
      className="w-[90%] max-lg:w-[75%] max-sm:w-[100%] mt-4 bg-[#2c2c2c] h-[40px] text-white p-3 border border-blue-500 focus:outline-none focus:ring-1 border-none focus:ring-blue-500 rounded-[4px] text-[14px]" />



      <textarea type="text" 
      required
      name='message'
      onChange={handleChange}
      value={data.message}
      placeholder='Your Message' 
      className="w-[90%] max-lg:w-[75%] max-sm:w-[100%] mt-4 bg-[#2c2c2c] h-[160px] text-white pl-3 pt-2 border border-blue-500 focus:outline-none focus:ring-1 border-none focus:ring-blue-500 rounded-[4px] text-[14px]" /> <br />
      <Button
      type="submit"
    style={{ marginTop: '15px', borderRadius: '6px' }}
    className="w-30 h-[35px] rounded-[70px]"
    variant="outlined"
  >
    Submit
  </Button>
        </form>
      </div>









    </div>
    </>
  )
}

export default Contact
