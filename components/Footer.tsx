import { navItems } from "@/constants";
import { EnvelopeIcon, MapIcon } from "@heroicons/react/20/solid";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1rem] border-b-1.4px pb-5 border-gray-600 border-opacity-40">
        <div>
          <div className="font-logo text-white text-18px">
            <span className="text-[30px] md:text-[40px] text-yellow-400">PRABINA SWAIN</span>
          </div>
          <h1 className="text-14px mt-0.5rem text-white opacity-70">
          As a Master of Computer Applications (MCA) student, I am driven by a relentless pursuit of excellence in software development and 
          a deep commitment to delivering impactful solutions. My journey is fueled by a passion for innovation and a relentless pursuit of knowledge, 
          empowering me to contribute effectively to dynamic and forward-thinking projects.       
          </h1>
        </div>
        <div className="md:mx-auto">
        <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">Quick Links</h1>
        {
            navItems.map((item,index) => (
            <p  className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300" key={index}>
                <a href={item.link}> {item.title} </a>
            </p>
            ))
        }

        </div>
        <div className="1g:mx-auto">
        <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">Address</h1>
        <div className="flex items-center mt-[1rem] space-x-2">
            <MapIcon className="w-[1rem] h-[1rem] text-yellow-300" />
            <p className="text-[17px] font-normal text-white opacity-75">Bhubaneswar, Odisha , India</p>
        </div>
        <div className="flex items-center mt-[1rem] space-x-2">
            <EnvelopeIcon className="w-[1rem] h-[1rem] text-yellow-300" />
            <p className="text-[17px] font-normal text-white opacity-75">swainprabina2001@email.com</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
