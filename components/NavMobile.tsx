import { navItems } from '@/constants';
import { XMarkIcon } from '@heroicons/react/20/solid';
import React from 'react';

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const NavMobile = ({ showNav, closeNav }: Props) => {
  const openNavStyle = showNav ? 'translate-x-0' : 'translate-x-[-100%]';
  return (
    <div>
      <div className={`fixed top-0 ${openNavStyle} transform transition-all duration-500 z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-[100vw] h-[100vh]`}>
      </div>
      <ul className={`text-white ${openNavStyle} fixed flex items-center flex-col justify-center h-[100%] transform transition-all duration-300 delay-300 w-[60%]
                       bg-red-600 space-y-14 z-[10006]`}>
       {
        navItems.map((item,index)=>(
          <li key={index}>
          <a className="nav_link text-[25px] sm:text-[30px]" href={item.link}>{item.title}</a>
         </li>
        ))
      }
        <XMarkIcon 
        onClick={closeNav} 
        className='absolute top-4 right-4 w-9 h-9 text-white cursor-pointer' 
      />
      </ul>

    </div>
  );
}

export default NavMobile;
