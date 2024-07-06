import React from 'react'
import {TypeAnimation} from "react-type-animation"

const TypeWriteEffect = () => {
  return (
    <TypeAnimation 
    sequence={[
        // Same substring at the start will only be typed out once, initially
        "a Software Engineer",
        1000,
        "a Full Stack Developer",
        1000,
        "a React Developer",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "a Next JS Developer",
        1000,
        "a Mern Stack Developer",
        1000,
   
      ]}
    wrapper="span"
    speed={50}
    className="xl:text-[40px] lg:text-[30px] sm:text-[25px] text-[15px] font-medium mt-4 text-white"
    repeat={Infinity}
    />
  )
}

export default TypeWriteEffect