import React from 'react'
import TypeWriteEffect from './helper/TypeWriteEffect';
import Image from 'next/image';

const Hero = () => {
    return (
    <div className="custom-bg w-[100vw] pt-[4vh] md:pt-[12vh] h-[85vh] md:h-[100vh] sm:mb-2" id='home'>
    <div className="flex justify-center flex-col w-[80%] h-[100%] mx-auto ">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center">
    <div>
    <h1 className="text-[#c4cfde] mb-[1.3rem]">WELCOME TO MY WORLD</h1>
    <h1 className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-semibold leading-[2.4rem] text-white pb-4">
    Hi, I&apos;m <span className="text-yellow-300">Prabina</span> 
    </h1>
    {/* TypewriterEffect */}
    <TypeWriteEffect/>
   
    <p className="mt-[1.2rem] text-[15px] md:text-[17px] text-[#c4cfde]">
     A motivated and detail-oriented student pursuing a Master of Computer Applications (MCA)
      with a passion for software development and problem-solving. I bring a blend of academic
       excellence and am eager to leverage my skills to contribute to dynamic and innovative projects.
        </p>
     <div className="mt-[2rem] flex items-center space-x-6 flex-wrap gap-4 ">
     <a href="https://www.linkedin.com/in/prabina-swain/" target="_blank" rel="noopener noreferrer">
        <button className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
        <span className="relative z-10">Hire Me</span>
       </button>
    </a>
    <a href="https://drive.google.com/file/d/1DAAty0cCdbCuRyojpAhA9bOl6c5KyCKc/view?usp=sharing" target="_blank" rel="noopener noreferrer">
      <button className="relative h-12 w-40 overflow-hidden bg-orange-600 text-white font-semibold shadow-2xl before:absolute before:left-0 before:ml-[-2px] before:h-48 before:w-48 
                          before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-green-700 before:transition-all before:duration-300
                           hover:text-white hover:shadow-black hover:before:rotate-180 ">
        <span className="relative z-10">View CV</span>
     </button>
    </a>
    </div>
  </div>

  <div className='hidden md:block w-1000'>
    <Image
     src={"/images/hero.png"}
     alt='hero'
     width={650}
     height={600}
     className='object-contain'
    />
  </div>

    </div>
    </div>
    </div>
)}
export default Hero;