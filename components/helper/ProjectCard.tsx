// components/ProjectCard.tsx
import React from "react";
import Image from "next/image";
import { Project } from "@/Types";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
   <div className="grid w-[80%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center ">
    <div className="p-4 rounded-xl relative cursor-pointer hover:-rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md">
      <Image
        src={project.image}
        alt={project.title}
        width={500}
        height={500}
        className="object-contain rounded-xl mx-auto shadow-md"
      />
    </div>
    <div>
  <h1 className="text-3xl text-white flex items-center">{project.title} 
    <a href={project.link} target="blank" className="heading_mini p-4 flex items-center gap-2">
      Live <FaExternalLinkAlt/>
    </a> </h1>
  <p className="text-white opacity-65 text-[15px] mt-4">
   {project.description}
  </p>
  <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
    <h1 className="px-4 py-3 bg-blue-700 text-white rounded-lg text-center">{project.tech1}</h1>
    <h1 className="px-4 py-3 bg-white text-black rounded-lg text-center">{project.tech2}</h1>
    <h1 className="px-4 py-3 bg-sky-500 text-black rounded-lg text-center">{project.tech3}</h1>
    <h1 className="px-4 py-3 bg-blue-500 text-white rounded-lg text-center">{project.tech4}</h1>
  </div>
</div>

  </div>
  );
};

export default ProjectCard;
