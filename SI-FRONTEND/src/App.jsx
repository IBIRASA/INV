// App.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"; // Import the Navbar component
import homevector from "./assets/homee.png";
import homeevector from "./assets/about.png";
import {faCheck, faHome,faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./styles/index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Textarea } from "flowbite-react";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
    <div className="relative">
      <Navbar /> 
      <div className="w-full h-32 px-52 py-40 items-center justify-center relative overflow-hidden img-container">
  {/* Overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75"></div>
  
  <div className="relative items-center justify-center z-10">
    <div className="md:h-24 md:w-24 rounded-full bg-transparent "></div>
    <div className="text-center md:text-left md:mt-20 text-white z-10">
      <h1 className="text-white font-bold text-4xl md:text-5xl mb-4 md:mb-8 data delay-[200ms] duration-[600ms]" data-aos="fade-down">
        <h1 className="text-7xl">Grow Your Business</h1>
        <h3 className="text-5xl mt-4">Inventory Management</h3>
      </h1>
      <p className="text-gray-300 text-lg mb-8 delay-[800ms] duration-[600ms] mr-32" data-aos="fade-down">
        <span className="font-semibold text-blue-400">Organize,</span>{" "}
        <span className="font-semibold text-blue-400">track </span>and{" "}
        <span className="font-semibold text-blue-400">manage</span> your stock
      </p>
      <Link to="/Login">
        <button className="bg-blue-950 hover:bg-blue-600 text-white rounded-full px-8 py-4 mr-32 font-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105 ">
          Sign In to your account
        </button>
      </Link>
    </div>
  </div>
</div>

    </div>
      <div className="About-us w-full h-92 bg-gray-200" id="about">
        <div className="px-72 py-32">
        <div className="flex ">
          <div className="flex-1  w-full ">
<img
            src={homeevector}
            className=" vectormt-8  w-7/12 md:mt-8 md:mr-20 delay-[400ms] duration-[600ms]"
            alt="home vector"
            data-aos="fade-up"
          />
          </div>
          <div className="flex-1 mt-20">
            <p className="text-4xl font-bold  text-blue-950">How does it work?</p>
            <p className="mt-4 leading-loose ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur blanditiis fugit eum sint ipsam rem qui dicta aliquam hic consectetur temporibus, vero dolores magnam ipsum nostrum non! Optio, dolore rem?</p>
            <Link to="/get-started">
            <button className="rounded-full text-white font-bold  py-2 px-8 bg-blue-950 hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 mt-4">Watch a video</button>
          </Link>
            </div>
        </div>
      </div>
      </div>

      <div className="About-us w-full h-92 bg-gray-100" id="service">
      <h1 className="text-4xl text-gray-900 text-center font-bold  py-20">Our Services</h1>
      <div className="py-12 flex items-center justify-center">
     
        <div className="flex-1 text-center mb-20">
          <div className="circle bg-gray-900 ml-64 flex items-center justify-center">
            <FontAwesomeIcon icon={faCheck} className="text-white fa-2xl" />
          </div>
          <p className="mt-8 mr-12">Stock Management</p>
        </div>
        <div className="flex-1 text-center mb-20">
          <div className="circle bg-gray-900 ml-64 flex items-center justify-center">
            <FontAwesomeIcon icon={faCheck} className="text-white fa-2xl" />
          </div>
          <p className="mt-8  mr-12">Organize Your Stock</p>
        </div>
        <div className="flex-1 text-center mb-20">
          <div className="circle bg-gray-900 ml-64 flex items-center justify-center">
            <FontAwesomeIcon icon={faCheck} className="text-white fa-2xl" />
          </div>
          <p className="mt-8 mr-12">Track Your Stock</p>
        </div>
      </div>
    </div>

    <div className="About-us w-full  bg-blue-950" id="contact">
    <h1 className="text-4xl text-gray-100 text-center font-bold  py-24">Contact Us</h1>
      <div className="py-4 flex items-center justify-center px-32">
       

      
      <div className="flex-1 items-center" >
      <form className="mx-4 md:mx-0">
        <h1 className="text-white text-3xl ml-12 font-bold mb-12"> Reach out to us</h1>
            <input
              className="input-field mb-6 p-3 rounded-md w-4/5 ml-12 transition duration-300 text-white" 
              id="username"
              type="text"
              placeholder="Username"
              data-aos="fade-down"
             
            />
            <input
              className="input-field mb-6 p-3 rounded-md w-4/5 ml-12 focus:outline-none transition duration-300 whiteee text-white"
              id="password"
              type="text"
              placeholder="Your Email"
              data-aos="fade-down"
          
            />
            <textarea   className="input-field mb-6 p-3 rounded-md w-4/5 ml-12 focus:outline-none transition duration-300 whiteee text-white"
              id="password"
              type="text"
              placeholder="Your Messsage"
              data-aos="fade-down">

            </textarea>
             
            <button
              className="b-6 ml-12 bg-white text-blue-800 rounded-full px-8 py-3 font-bold hover:bg-blue-700 hover:text-white transition duration-300'>"
            
             
            >
              Submit
            </button>
           
          </form>
  </div>
    
  <div className="flex-1">
  
  </div>
    </div>
  </div>
  
     </>
  );
};

export default App;
