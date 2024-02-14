import React, { useEffect, useState } from "react";
import vector from "../assets/home-vector.png";
import { resetUserPassword } from "../services/ApiServices";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const Reset = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const handleResetPassword = async (e) => {
    e.preventDefault();
    await resetUserPassword(username);
  };
  return (
    <>
      <div className="main-div main-container w-full h-screen flex flex-col md:flex-row items-center justify-center  ">
        <div className="register-form basics-1/2 w-full md:w-5/12 min-h-40 shadow-2xl bg-gradient-to-r from-gray-900 to-gray-950 p-8 md:p-12 z-8">
          
          <h1
            className="text-white  mt-18 font-bold text-3xl md:text-4xl mb-4 md:mb-8 ml-4 md:ml-1 delay-[400ms] duration-[600ms]"
            data-aos="fade-down"
          >
            Reset Password
          </h1>
          <form className="form mx-4 md:mx-0">
            <input
              className="input-field text-white mb-6 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
              id="username"
              type="text"
              placeholder="Username"
              data-aos="fade-down"
              onChange={(e) => setUsername(e.target.value)}
            />
            <button
              className="home-button  mt-4 bg-gray-800 hover:bg-blue-600 text-white rounded-full px-8 py-3 font-bold transition duration-300"
              data-aos="fade-down"
              onClick={handleResetPassword}
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Reset;
