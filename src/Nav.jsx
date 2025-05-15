import React, { useState } from 'react'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import {NavLink} from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import AssignmentIcon from '@mui/icons-material/Assignment'
import HomeIcon from '@mui/icons-material/Home';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { MdEngineering } from 'react-icons/md';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';



function Nav() {
  const [open, setOpen] = useState(false);
   const location = useLocation();

  const isActive = location.hash === '#skill';
  const isActive2 = location.hash === '#home';
  return (
    <div className='w-[75%] max-lg:w-[90%]  bg-[rgba(255,255,255,0.2)] text-white  mx-auto mt-[20px] rounded-[15px] fixed top-0 left-0 right-0 z-50'>
      <nav className='flex justify-between p-4  px-12 items-center max-sm:p-2'>
      <h1 style={{ fontFamily: 'Lexend' }} className="relative group text-blue-500 text-[1.6rem] inline-block cursor-pointer">
  <span className="relative z-10 px-2 py-1">Haris</span>

  {/* Top Border */}
  <span className="absolute left-0 top-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
  {/* Right Border */}
  <span className="absolute right-0 top-0 h-0 w-[2px] bg-blue-500 transition-all duration-500 group-hover:h-full delay-100"></span>
  {/* Bottom Border */}
  <span className="absolute right-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full delay-200"></span>
  {/* Left Border */}
  <span className="absolute left-0 bottom-0 h-0 w-[2px] bg-blue-500 transition-all duration-500 group-hover:h-full delay-300"></span>
</h1>
      <ul style={{fontFamily:'Lexend'}} className='display flex gap-8 pr-4 max-sm:hidden mt-[5px]'>

      {/* <NavLink
  to="/"
  className={({ isActive }) => `
    relative 
    pb-1
    before:content-[''] 
    before:absolute 
    before:bottom-[0px] 
    before:left-0 
    before:h-[2px] 
    before:bg-blue-500
    before:transition-all 
    before:duration-500 
    ${isActive ? 'before:w-0 hover:before:w-full text-blue-500' : 'before:w-0 hover:before:w-full'}
  `}
>
  Home
</NavLink> */}



 <HashLink
        smooth
        to="/#home"
        className={`
          relative pb-1 
          before:content-[''] before:absolute before:bottom-[0px] before:left-0 
          before:h-[2px] before:bg-blue-500 before:transition-all before:duration-500 
          before:w-0 hover:before:w-full
          ${isActive2 ? 'text-blue-500' : ''}
        `}
      >
        Home
      </HashLink>



 <HashLink
        smooth
        to="/#skill"
        className={`
          relative pb-1 
          before:content-[''] before:absolute before:bottom-[0px] before:left-0 
          before:h-[2px] before:bg-blue-500 before:transition-all before:duration-500 
          before:w-0 hover:before:w-full
          ${isActive ? 'text-blue-500' : ''}
        `}
      >
        Skills
      </HashLink>




        <NavLink to={'/project'} className={({ isActive }) => `
    relative 
    pb-1
    before:content-[''] 
    before:absolute 
    before:bottom-[0px] 
    before:left-0 
    before:h-[2px] 
    before:bg-blue-500
    before:transition-all 
    before:duration-500 
    ${isActive ? 'before:w-0 hover:before:w-full text-blue-500' : 'before:w-0 hover:before:w-full'}
  `} >Project</NavLink> 



        <NavLink to={'/contact'} className={({ isActive }) => `
    relative 
    pb-1
    before:content-[''] 
    before:absolute 
    before:bottom-[0px] 
    before:left-0 
    before:h-[2px] 
    before:bg-blue-500
    before:transition-all 
    before:duration-500 
    ${isActive ? 'before:w-0 hover:before:w-full text-blue-500' : 'before:w-0 hover:before:w-full'}
  `} >Contact</NavLink> 

 </ul>


       <p className="block sm:hidden" onClick={() => setOpen(!open)}>
          <FormatAlignRightIcon />
        </p>
      </nav>

      {/* Mobile Slider Menu */}
      <div className={`fixed top-0 right-0 h-full w-24 bg-[rgba(255,255,255,0.1)] backdrop-blur-xl text-white  shadow-lg transform transition-transform duration-300 z-50 sm:hidden ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <ul className='p-5  flex flex-col gap-4 text-[1.2rem] text-center text-[17px]' style={{ fontFamily: 'Lexend' }}>
          <p onClick={()=>setOpen(false)} className='cursor-pointer ml-[70%]'><CloseIcon/></p>
          <NavLink to='/' onClick={() => setOpen(false)} className={({ isActive }) =>`text-[16px] p-1.5 rounded-[7px]  bg-[rgba(255,255,255,0.1)] ${isActive ? 'text-blue-700' : ''}`}> <HomeIcon/><br /><p className='text-[9px]'>Home</p>   </NavLink>
          <NavLink to="/skills" onClick={() => setOpen(false)} className={({ isActive }) => `text-[16px] p-1.5 mt-[-7px] rounded-[7px] bg-[rgba(255,255,255,0.1)] flex flex-col items-center justify-center`}>{({ isActive }) => (<> <MdEngineering className={`text-3xl ml-1.5 ${  isActive ? 'text-blue-700' : 'text-white' }`}/> <p className={`text-[9px] ${isActive ? 'text-blue-700' : 'text-white'}`}> Skills </p></>)}</NavLink>
          <NavLink to='/project' onClick={() => setOpen(false)} className={({ isActive })=>`text-[16px] p-1.5 mt-[-9px] rounded-[7px]  bg-[rgba(255,255,255,0.1)] ${ isActive ? 'text-blue-700' : ''}`}><AssignmentIcon/><br /><p className='text-[9px]'>Project</p></NavLink>
          <NavLink to='/contact' onClick={() => setOpen(false)} className={({ isActive }) =>`text-[16px] p-1.5 mt-[-9px] rounded-[7px]  bg-[rgba(255,255,255,0.1)] ${isActive ? 'text-blue-700' : ''}`}> <AddIcCallIcon/><br /><p className='text-[9px]'>Contact</p></NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Nav