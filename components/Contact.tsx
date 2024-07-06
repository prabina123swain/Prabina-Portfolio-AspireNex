import React, { useState } from "react";
import SocialMediaLinks from "./helper/SocialMediaLinks";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isValidEmail = (email:string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {

    if (!name || !email || !subject || !message) {
      alert('All fields are required');
      return;
    }
    else if(!isValidEmail(email)){
      alert("Enter valid mail id");
      return;
    }
    setSubmitted(true);
  };

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
        {!submitted ? (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
            <input
                type="text"
                placeholder="Name"
                className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="py-[0.7rem] w-full outline-none text-white bg-gray-800 rounded-md px-4 mt-[1.5rem] mb-[1.5rem]"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <textarea
              placeholder="Message"
              className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button
              onClick={handleSubmit}
              className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-blue-700 hover:bg-blue-800 rounded-md px-4"
            >
              Submit
            </button>
          </div>
        ):(
         <>
              <p className="heading_mini">Query Raised</p>
              <h1 className="heading_primary">
                Thank you for reaching out!
              </h1>
              <p className="text-white text-[15px] mt-1rem opacity-75">
                We have received your query and will get back to you soon.
              </p>
            </>
        )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
