import React from 'react'
import { useRef } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

function project() {
  const scrollRef = useRef(null);
  const scrollRef1 = useRef(null);


  const handleScroll = () => {
    const scrollAmount = window.innerWidth * 0.45 ; // 20vw
    scrollRef.current.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  };
  

  const handlenext = () => {
    const scrollAmount = window.innerWidth * 0.45; // 20vw
  scrollRef.current.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
  }



  const handleScroll1 = () => {
    const scrollAmount = window.innerWidth * 0.45 ; // 20vw
    scrollRef1.current.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  };
  

  const handlenext1 = () => {
    const scrollAmount = window.innerWidth * 0.45; // 20vw
  scrollRef1.current.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
  }

  return (
    <div className='w-full mt-15 max-sm:mt-10 flex justify-center flex-col items-center overflow-x-hidden'>


<div className='w-full flex justify-around items-center my-3 lg:hidden' >
<h1 style={{ fontFamily: "Roboto", fontWeight: "500" }} className='text-blue-500 text-3xl max-sm:text-2xl'>Projects</h1>
<div className='flex gap-3'>
<div onClick={handleScroll1} className=' w-[25px] h-[25px] flex justify-center items-center rounded-[30px] bg-white'><NavigateBeforeIcon style={{fontSize:"35px",}}/></div>
<div onClick={handlenext1} className=' w-[25px] h-[25px] flex justify-center items-center rounded-[30px] bg-white '><NavigateNextIcon style={{fontSize:"35px",}}/></div></div>
</div>
       <div className='w-full flex justify-center  ' >
      <div ref={scrollRef1} className='py-2 w-[78%]  flex  gap-12 max-sm:gap-3 items-center  px-9 ml-30 max-lg:ml-0   overflow-x-auto scroll-smooth max-sm:px-1 max-sm:w-[84%] hide-scrollbar' >

      <a href="https://car-sell-delta.vercel.app/" target="_blank" rel="noopener noreferrer">
      <div className=' hover:bg-[rgba(255,165,0,0.1)] w-[255px]  h-[340px] max-sm:w-[140px] max-sm:h-[190px]  border-1 border-orange-500  flex flex-col p-1 max-sm:p-1  rounded-[15px] hover:scale-[1.02] transition duration-500' >
      <div className="bg-[url('/medium-shot-man-working-as-valet.jpg')] bg-cover bg-center w-[245px] h-[230px] max-sm:w-[130px] max-sm:h-[150px] rounded-[10px] flex flex-col justify-center text-center"></div>
      <div className='flex flex-wrap p-1 max-sm:p-0    gap-2 max-sm:gap-1'>
      <div className='w-[40px]  h-[18px] max-sm:w-[28px] max-sm:h-[13px] rounded-[5px] hover:bg-[rgba(255,165,0,0.1)] text-orange-500 bg-transpernt border-1 border-orange-500 mt-1 text-[9px] max-sm:text-[7px] flex justify-center items-center '>HTML</div>
      <div className='w-[40px]  h-[18px] max-sm:w-[28px] max-sm:h-[13px] rounded-[5px] hover:bg-[rgba(59,130,246,0.1)] text-blue-500 bg-transpernt border-1 border-blue-500 mt-1 text-[9px] max-sm:text-[7px]  flex justify-center items-center'>CSS</div>
      <div className='w-[40px] h-[18px] max-sm:w-[30px] max-sm:h-[13px] rounded-[5px] hover:bg-[rgba(234,179,8,0.1)] text-yellow-500 bg-transpernt border-1 border-yellow-500 mt-1 text-[8px] max-sm:text-[5px] flex justify-center items-center'>JavaScript</div>
      <div className='w-[43px] h-[18px] max-sm:w-[30px] max-sm:h-[13px] mt-1 rounded-[5px] hover:bg-[rgba(59,130,246,0.1)] text-blue-500 bg-transpernt border-1 border-blue-500  text-[8px]  max-sm:text-[5px] flex justify-center items-center'>Responsive</div>
      </div>
        <p style={{fontFamily:'Lexend'}} className='text-orange-700 text-[20px] max-sm:text-[12px] max-sm:mt-0  ml-1'>Car sell</p>
        <p style={{ fontFamily: "Lexend", fontWeight: "100" }} className='text-[#afb3b3] text-[13px] max-sm:text-[7px] pb-1 ml-1'>
        Car Sell is designed to simplify and streamline the process of buying and selling cars online.</p>
      </div>
      </a>


      <a href="https://todu-front.vercel.app/" target="_blank" rel="noopener noreferrer">
      <div className=' hover:bg-[rgba(59,130,246,0.1)]  w-[255px]  h-[340px] max-sm:w-[140px] max-sm:h-[190px]  border-1 border-blue-500  flex flex-col p-1 max-sm:p-1  rounded-[15px] hover:scale-[1.02] transition duration-500' >
      <div className="bg-[url('/todu-front.vercel.png')] bg-cover bg-center w-[245px] h-[230px] max-sm:w-[130px] max-sm:h-[150px] rounded-[10px] flex flex-col justify-center text-center"></div>
      <div className='flex flex-wrap p-1 max-sm:p-0   gap-2 max-sm:gap-1 '>
      <div className='w-[40px]  h-[18px] max-sm:w-[28px] max-sm:h-[13px] rounded-[5px] hover:bg-[rgba(255,165,0,0.1)] text-blue-700 bg-transpernt border-1 border-blue-700 mt-1 text-[9px] max-sm:text-[8px] flex justify-center items-center '>React</div>
      <div className='w-[40px]  h-[18px] max-sm:w-[28px] max-sm:h-[13px] rounded-[5px] hover:bg-[rgba(59,130,246,0.1)] text-blue-500 bg-transpernt border-1 border-blue-500 mt-1 text-[9px] max-sm:text-[8px]  flex justify-center items-center max-sm:hidden'>CSS</div>
      <div className='w-[40px] h-[18px] max-sm:w-[28px] max-sm:h-[13px] rounded-[5px] hover:bg-[rgba(34,197,94,0.15)] text-green-500 bg-transpernt border-1 border-green-500 mt-1 text-[9px] max-sm:text-[6px] flex justify-center items-center'>Node js</div>
      <div className='w-[40px] h-[18px] max-sm:w-[28px] max-sm:h-[13px] rounded-[5px] hover:bg-[rgba(255,255,255,0.12)] text-white bg-transpernt border-1 border-white  text-[8px] max-sm:text-[6px] flex justify-center items-center mt-1'>Express</div>
      <div className='w-[40px] h-[18px] max-sm:w-[28px] max-sm:h-[13px] rounded-[5px] hover:bg-[rgba(34,197,94,0.15)] text-green-500 bg-transpernt border-1 border-green-500  text-[8px] max-sm:text-[5px] flex justify-center items-center mt-1'>MongoDB</div>
      </div>
        <p style={{fontFamily:'Lexend'}} className='text-blue-700 text-[20px] max-sm:text-[12px] max-sm:mt-0  ml-1'>Todu</p>
        <p style={{ fontFamily: "Lexend", fontWeight: "100" }} className='text-[#afb3b3] text-[13px] pb-1 ml-1 max-sm:text-[7px]'>
        Todu is a task management app designed to enhance productivity and organize your daily goals.</p>
      </div>
      </a>


      <a href="https://portfolio-tau-ten-23.vercel.app/" target="_blank" rel="noopener noreferrer">
      <div className=' hover:bg-[rgba(255,215,0,0.1)] w-[255px]  h-[340px] max-sm:w-[140px] max-sm:h-[190px]   border-1 border-[#FFD700]  flex flex-col p-1 max-sm:p-1  rounded-[15px] hover:scale-[1.02] transition duration-500' >
      <div className="bg-[url('/pexels-tavarruk-1247509-2416871.jpg')] bg-cover bg-center w-[245px] h-[230px] max-sm:w-[130px] max-sm:h-[150px] rounded-[10px] flex flex-col justify-center text-center"></div>
      <div className='flex flex-wrap p-1 max-sm:p-0   gap-2 max-sm:gap-1 '>
      <div className='w-[40px]  h-[18px] max-sm:w-[28px] max-sm:h-[13px] rounded-[5px] hover:bg-[rgba(255,165,0,0.1)] text-orange-500 bg-transpernt border-1 border-orange-500 mt-1 text-[9px] max-sm:text-[7px] flex justify-center items-center '>HTML</div>
      <div className='w-[40px]  h-[18px] max-sm:w-[28px] max-sm:h-[13px] rounded-[5px] hover:bg-[rgba(59,130,246,0.1)] text-blue-500 bg-transpernt border-1 border-blue-500 mt-1 text-[9px] max-sm:text-[7px]  flex justify-center items-center'>CSS</div>
      <div className='w-[40px] h-[18px] max-sm:w-[28px] max-sm:h-[13px] rounded-[5px] hover:bg-[rgba(255,0,0,0.1)] text-red-500 bg-transpernt border-1 border-red-500  text-[8px]  max-sm:text-[5px] mt-1 flex justify-center items-center'>Non-Resp</div>
      </div>
        <p style={{fontFamily:'Lexend'}} className='text-yellow-700 text-[20px] max-sm:text-[12px] max-sm:mt-0  ml-1'>Temp portfolio</p>
        <p style={{ fontFamily: "Lexend", fontWeight: "100" }} className='text-[#afb3b3] text-[13px] pb-1 ml-1 max-sm:text-[7px]'>
        A portfolio website to showcase your skills, projects, and professional journey with a modern design.</p>
      </div>
      </a>


      
    
    

</div>
</div>













<div className='w-full flex justify-around items-center my-3 lg:hidden mt-10' >
<h1 style={{ fontFamily: "Roboto", fontWeight: "500" }} className='text-black text-3xl max-sm:text-xl'>Explore More</h1>
<div className='flex gap-3'>
<div onClick={handleScroll} className=' w-[25px] h-[25px] flex justify-center items-center rounded-[30px] bg-white'><NavigateBeforeIcon style={{fontSize:"35px",}}/></div>
<div onClick={handlenext} className=' w-[25px] h-[25px] flex justify-center items-center rounded-[30px] bg-white '><NavigateNextIcon style={{fontSize:"35px",}}/></div></div>
</div>
       <div className='w-full flex justify-center mt-7 max-sm:mt-0 ' >
      <div ref={scrollRef} className='py-2 w-[78%] flex  gap-12 max-sm:gap-3 items-center  px-9 ml-30 max-lg:ml-0   overflow-x-auto scroll-smooth max-sm:px-1 max-sm:w-[84%] hide-scrollbar' >


      <a href="https://cake-amber.vercel.app/" target="_blank" rel="noopener noreferrer">
      <div className=' hover:bg-[rgba(255,215,0,0.1)] w-[255px]  h-[340px] max-sm:w-[140px] max-sm:h-[190px]   border-1 border-[#FFD700]  flex flex-col p-1 max-sm:p-1  rounded-[15px] hover:scale-[1.02] transition duration-500' >
      <div className="bg-[url('/items3.jpg.webp')] bg-cover bg-center w-[245px] h-[230px] max-sm:w-[130px] max-sm:h-[150px] rounded-[10px] flex flex-col justify-center text-center"></div>
      <div className='flex flex-wrap p-1 max-sm:p-0   gap-2 max-sm:gap-1'>
      <div className='w-[40px]  h-[18px] max-sm:w-[28px] max-sm:h-[13px] rounded-[5px] hover:bg-[rgba(255,165,0,0.1)] text-blue-700 bg-transpernt border-1 border-blue-700 mt-1 text-[9px] max-sm:text-[7px] flex justify-center items-center '>React </div>
      <div className='w-[40px]  h-[18px] max-sm:w-[28px] max-sm:h-[13px] rounded-[5px] hover:bg-[rgba(59,130,246,0.1)] text-blue-500 bg-transpernt border-1 border-blue-500 mt-1 text-[9px] max-sm:text-[7px]  flex justify-center items-center'>CSS</div>
      <div className='w-[40px] h-[18px] max-sm:w-[28px] max-sm:h-[13px] rounded-[5px] hover:bg-[rgba(255,0,0,0.1)] text-red-500 bg-transpernt border-1 border-red-500  text-[8px]  max-sm:text-[5px] mt-1 flex justify-center items-center'>Non-Resp</div>
      </div>
        <p style={{fontFamily:'Lexend'}} className='text-yellow-700 text-[20px] max-sm:text-[12px] max-sm:mt-0  ml-1'>Cake</p>
        <p style={{ fontFamily: "Lexend", fontWeight: "100" }} className='text-[#afb3b3] text-[13px] pb-1 ml-1 max-sm:text-[7px]'>
        Cake Web is an online platform for ordering and selling custom cakes and desserts.</p>
      </div>
      </a>

      <a href="https://mini-weather-nu.vercel.app/" target="_blank" rel="noopener noreferrer">
      <div className=' hover:bg-[rgba(255,255,255,0.12)] w-[255px]  h-[340px] max-sm:w-[140px] max-sm:h-[190px]   border-1 border-white  flex flex-col p-1 max-sm:p-1  rounded-[15px] hover:scale-[1.02] transition duration-500' >
      <div className="bg-[url('/download.png')] bg-cover bg-center w-[245px] h-[230px] max-sm:w-[130px] max-sm:h-[150px] rounded-[10px] flex flex-col justify-center text-center"></div>
      <div className='flex flex-wrap p-1  max-sm:p-0  gap-2 max-sm:gap-1 '>
      <div className='w-[40px]  h-[18px] max-sm:w-[28px] max-sm:h-[13px] rounded-[5px] hover:bg-[rgba(255,165,0,0.1)] text-blue-700 bg-transpernt border-1 border-blue-700 mt-1 text-[9px] max-sm:text-[7px] flex justify-center items-center '>React </div>
      <div className='w-[40px]  h-[18px] max-sm:w-[28px] max-sm:h-[13px] rounded-[5px] hover:bg-[rgba(59,130,246,0.1)] text-blue-500 bg-transpernt border-1 border-blue-500 mt-1 text-[9px] max-sm:text-[7px]  flex justify-center items-center'>CSS</div>
      </div>
        <p style={{fontFamily:'Lexend'}} className='text-white text-[20px] max-sm:text-[12px] max-sm:mt-0  ml-1'>Weather</p>
        <p style={{ fontFamily: "Lexend", fontWeight: "100" }} className='text-[#afb3b3] text-[13px] pb-1 ml-1 max-sm:text-[7px]'>
        City Web is a platform that provides essential local information, events, and services for your city.</p>
      </div>
      </a>


</div>
</div>




    </div>
  )
}

export default project