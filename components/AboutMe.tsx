import { CheckIcon } from '@heroicons/react/20/solid'

import React from 'react'
import { FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import SocialMediaLinks from './helper/SocialMediaLinks';

const AboutMe = () => {
  return (
    <div className="mt-[-4rem] bg-black pb-[3rem] " id="about">
  <div className="w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]">
    <div>
      <p className="heading_mini">About Me</p>
      <h1 className="heading_primary">
        Professional <span className="text-yellow-400">Website</span> for your business
      </h1>
      <div className="mt-[2rem] space-y-3">
      <div className="flex items-center space-x-4">
          <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
          <p className="text-[18px] text-white">Software Development</p>
        </div>
        <div className="flex items-center space-x-4">
          <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
          <p className="text-[18px] text-white">Frontend Development</p>
        </div>
        <div className="flex items-center space-x-4">
          <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
          <p className="text-[18px] text-white">Backend Development</p>
        </div>
        <div className="flex items-center space-x-4">
          <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
          <p className="text-[18px] text-white">Web Development</p>
        </div>
        <div className="flex items-center space-x-4">
          <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
          <p className="text-[18px] text-white">MERN Development</p>
        </div>
      </div>
      <p className="text-[15px] mt-[1.3rem] mb-[1rem] text-white opacity-75">
        Find me on
      </p>
      <SocialMediaLinks/>
    </div>
    
    <div className="lg:ml-auto">
      <h1 className="text-[25px] relative z-[1] text-white mb-[1rem] font-semibold">
       Coding Profile Ratings
      </h1>      
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]">
        <div className="p-6 text-center bg-yellow-500">
          <p className="text-[40px] text-black font-bold"><span className='flex items-center'>3 <FaStar size={20} /> <FaStar size={20} /> <FaStar size={20} /></span> </p>
          <p className="text-[20px] text-black font-semibold flex items-center gap-2">
             <span> On CodeChef  </span>
             <a href='https://www.codechef.com/users/swainprabina20' target='blank'><FaExternalLinkAlt size={15}/></a>
           </p>
        </div>
        <div className="p-6 text-center bg-yellow-500">
          <p className="text-[40px] text-black font-bold">1800+</p>
          <p className="text-[20px] text-black font-semibold flex items-center gap-2">
             <span> On LeetCode  </span>
             <a href='https://leetcode.com/prabina123_swain/' target='blank'><FaExternalLinkAlt size={15}/></a>
           </p>       
        </div>
      </div>
      <div className='mt-[2.5rem]'>
        <h1 className="text-[25px] relative z-[1] text-white mb-[1rem] font-semibold">
         Education
        </h1>  
        <div className='text-[18px] text-white pl-5'>
          <h2 className='text-[18px] text-white'>MASTER OF COMPUTER APPLICATION (MCA) </h2>
          <p className="text-[15px] mt-[0.5rem] text-white opacity-75 font-semibold">
            NATIONAL INSTITUTE OF TECHNOLOGY KARNATAKA (NITK), SURATHKAL ,India
          </p>
          <p className="text-[15px] mt-[0.5rem] text-white opacity-75">
            CGPA - 8.89 out of 10
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default AboutMe