import React from "react";
import SocialMediaLinks from "./helper/SocialMediaLinks";

const Contact = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
        <div>
          <p className="heading_mini">Get in Touch</p>
          <h1 className="heading_primary">
            Let&apos;s make your <span className="text-yellow-400">Brand</span> brilliant
          </h1>
          <p className="text-white text-[15px] mt-1rem opacity-75">
          Let&apos;s elevate your brand to new heights together! Contact me and 
          let&apos;s bring your vision to life with creativity and precision.
          </p>
          <h1 className="mt-[1rem] mb-[1rem] text-[20px] text-yellow-300 underline font-bold">+91 1234567890</h1>
          <SocialMediaLinks/>
        </div>
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
            <input
                type="text"
                placeholder="Name"
                className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
            />
            <input
                type="email"
                placeholder="Email"
                className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
            />
            </div>
          <input
            type="text"
            placeholder="Subject"
            className="py-[0.7rem] w-full outline-none text-white bg-gray-800 rounded-md px-4 mt-[1.5rem] mb-[1.5rem]"
          />
          <textarea
            placeholder="Message"
            className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
            rows={4}
          ></textarea>
          <button className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-blue-700 hover:bg-blue-800 rounded-md px-4">
            Submit
          </button>
          </div>
      </div>
    </div>
  );
};

export default Contact;
 