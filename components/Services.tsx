import React from "react";
import ServiceCard from "./helper/ServiceCard";
import { services } from "@/constants";

const Services = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#0b0c13] " id="services">
      <div className="text-center">
        <p className="heading_mini">Popular Services</p>
        <h1 className="heading_primary">
          My Special <span className="text-yellow-300">Services</span> For You
        </h1>
      </div>
      <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
      {
        services.map((service,index) => (
          <div key={index}>
          <ServiceCard service={service}/>
        </div>
        ))
      }
     
    </div>
    </div>
  );
};

export default Services;
