import React from "react";
import SkillCard from "./helper/SkillCard";
import {skillsData} from "@/constants";
import Image from "next/image";
import { SkillItem } from "@/Types";

const Skills = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black" id="skills">
      <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center">
        <div className="col-span-3">
          <p className="heading_mini">My Skills</p>
          <h1 className="heading_primary">
            Let&apos;s Explore Popular <span className="text-yellow-300">Skills</span> & Experience
          </h1>
          <p className="text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]">
          Explore essential skills and gain valuable experience in the technology sector, empowering yourself with knowledge and expertise.
          </p>
          {/* <button className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-blue-500 text-white shadow-md transition-all duration-300 hover:bg-blue-600">
            <span className="relative z-10">Learn More</span>
          </button> */}
        </div>

        <div className="col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center">

                {skillsData.map((skill: SkillItem, index: number) => (
                  <div key={index}>
                     <SkillCard
                      title={skill.title}
                      image={skill.image}
                      percent={skill.percent}
                      />
                  </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
