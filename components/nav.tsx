"use client"

import { navItems } from '@/constants';
import { Bars3CenterLeftIcon } from '@heroicons/react/20/solid';
import React, { useEffect, useState } from 'react'

interface Props {
   openNav:()=>void
}

const Nav = ({openNav}:Props) => {

    const [navSticky , setNavstiky ]=useState(false);

    useEffect(()=>{
        const handler = ()=>{
            if(window.scrollY > 90){
                setNavstiky(true);
            }
            if(window.screenY < 90){
                setNavstiky(false);
            }
        }

        window.addEventListener("scroll",handler);
    },[])

    const stickyStyle = navSticky ?'bg-[#212428] shadow-grap-900 shadow-sm':''

  return (
    <div className={`fixed w-[100%] ${stickyStyle}  z-[1000] bg-gray-800`}>
      <div className='flex items-center h-[12vh] justify-between w-[80%] mx-auto'>
        <div className='font-logo text-white text-[18px'>
            <span className='text-[30px] md:text-[40px] text-yellow-400'>
                Prabina Swain
            </span>
        </div>
        <ul className="md:flex hidden items-center space-x-10">
        {
        navItems.map((item,index)=>(
          <li key={index} className='nav_item'>
          <a className="nav_link" href={item.link}>{item.title}</a>
        </li>
         ))
        }
	        </ul>
        <Bars3CenterLeftIcon onClick={openNav} className='w-[2.3rem] h-[2.3] md:hidden rotate-180 text-white'/>
      </div>
    </div>
  )
}

export default Nav;