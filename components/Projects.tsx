import React from "react";
import { projectsData } from "@/constants";
import ProjectCard from "./helper/ProjectCard";

const Project = () => {
  return (
    <div className="pt-[5rem] pb-[5rem] bg-gray-900" id="projects">
      <div className="text-center ">
        <p className="heading_mini">Recent Works</p>
        <h1 className="heading_primary">
          My Best <span className="text-yellow-300">Projects</span>
        </h1>
      </div>
      <div className="mb-[5rem]">
        {
            projectsData.map((project,index)=>(
                <span key={index}>
                    <ProjectCard project={project} />
                </span>
            ))
        } 
        
      </div>
        <div className="text-center"> 
            <h1 className="heading_primary  lg:font-semibold sm:font-normal ">
            More Projects On<span className="text-yellow-300"> GitHub</span>
            </h1>
            <p className="text-[18px] text-white p-5">
               I love to solve business problems & devlop user friendly applications
            </p>
            <a href="https://github.com/prabina123swain" className="inline-block px-7 py-3 bg-yellow-400 text-black font-semibold rounded-full text-center text-[25px] cursor-pointer transition-transform duration-200 hover:bg-yellow-300 hover:transform hover:scale-95">
             GitHub
            </a>

            </div>
    </div>
  );
};

export default Project;
