import React from "react";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

const Contact = () => {
  return (
    <section className="min-h-screen">
        <Navbar />
        


        <form className=" md:w-1/2 w-full mx-auto flex justify-center flex-col p-4  md:mt-10 md:mb-10">
<div className="flex flex-col left-0 justify-center items-center w-full gap-1 md:mb-10">
          <h2 className="text-3xl font-semibold ">Contact us</h2>
          <p className="text-black">Contact the help team</p>
          
        </div>

          <div className="flex flex-col justify-center mb-3">
            <label className="mb-2 text-gray-800" htmlFor="help">
              What can we help you with?
            </label>
            <input className="border-2 px-2 py-2" type="text" name="" id="" />
          </div>
          <div className="flex flex-col justify-center mb-3">
            <label className="text-gray-800 mb-2" htmlFor="name">
              Your name:
            </label>
            <input
              placeholder="Example: Roger Mozbot"
              className="border-2 px-2 py-2"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col justify-center mb-3">
            <label className="text-gray-800 mb-2" htmlFor="name">
              E-mail address associated with your Moz account:
            </label>
            <input
              placeholder="Example: roger@moz.com"
              className="border-2 px-2 py-2"
              type="email"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col justify-center mb-3">
            <label className="text-gray-800 mb-2" htmlFor="name">
              Subject:
            </label>
            <input
              placeholder="Example: Roger Mozbot"
              className="border-2 px-2 py-2"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col justify-center mb-3">
            <label className="text-gray-800 mb-2" htmlFor="name">
              Details:
            </label>
            <textarea
              placeholder="Please write your question or a descripion of the problem you are trying to solve here"
              className="border-2 px-2 py-2 h-20"
              type="text"
              name=""
              id=""
            />
          </div>
          <button className="px-2 py-3 bg-[#169987] capitalize text-lg font-medium">Submit</button>

        </form>
      
<Footer />
        
    
    </section>
  );
};

export default Contact;
