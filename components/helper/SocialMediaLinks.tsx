import React from 'react'
import { BsLinkedin , BsFacebook, BsInstagram, BsTwitter, BsGithub} from "react-icons/bs";


const SocialMediaLinks = () => {
  return (
    <div className='flex justify-items-start gap-7'>
    <a href='https://www.linkedin.com/in/prabina-swain/' target='blank' className="text-yellow-400 hover:text-yellow-500 transition-colors duration-300 ">
     <BsLinkedin  size={35} />
    </a>
    <a href='https://github.com/prabina123swain' className="text-yellow-400 hover:text-yellow-500 transition-colors duration-300 ">
     <BsGithub  size={35} />
    </a>    
    <a href='https://www.facebook.com/prabina.swain.7731/' target='blank' className="text-yellow-400 hover:text-yellow-500 transition-colors duration-300 ">
     <BsFacebook  size={35} />
    </a>
    <a href='https://www.instagram.com/prabin.7120/' target='blank' className="text-yellow-400 hover:text-yellow-500 transition-colors duration-300 ">
     <BsInstagram  size={35} />
    </a>
    </div>
  )
}

export default SocialMediaLinks