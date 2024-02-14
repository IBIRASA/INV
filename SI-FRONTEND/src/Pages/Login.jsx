import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import vector from "../assets/loginn.jpg";
import { userLogin } from "../services/ApiServices";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await userLogin(username, password);

    if (success) {
      dispatch({ type: "LOGIN", payload: { username } });
      navigate("/Home");
    } else {
      console.error("Login failed");
    }
  };
  return (
    <>
     
    <div className='main-container w-full h-screen flex flex-col md:flex-row items-center justify-center ' >  
    <div className=' vector  bg-white flex-2 w-4/12 h-4/5 shadow-lg shadow-black-500 hidden md:block' style={{ zIndex: 1 }}>
      <img src={vector} className="basics-1/2 w-4/5 h-5/5 md:mt-20 mx-auto md:ml-12  " alt="home vector" data-aos="fade-right" />
    </div>    
    <div className='bg-gradient-to-r from-gray-900 to-gray-950  flex-2  w-4/12 h-4/5  ' style={{ zIndex: 2 }} >
      <h1 className="text-white mt-28 font-bold text-3xl md:text-4xl delay-[400ms] duration-[600ms] ml-12" data-aos="fade-down">
            Login 
      </h1>
          <form className="form mx-4 md:mx-0">
            <input
              className="input-field mb-6 p-3 rounded-md w-4/5 ml-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 text-white" 
              id="username"
              type="text"
              placeholder="Username"
              data-aos="fade-down"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="input-field mb-6 p-3 rounded-md w-4/5 ml-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 whiteee text-white"
           
              type="password"
              placeholder="Password"
              data-aos="fade-down"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="b-6 ml-12 bg-white text-gray-800 rounded-full px-8 py-3 font-bold hover:bg-blue-700 hover:text-white transition duration-300'>"
              data-aos="fade-down"
              onClick={handleLogin}
            >
              Login
            </button>
            <p className="text-white mb-6 ml-12 mt-12">
              Forgot your password?{" "}
              <Link to="/reset" className="text-gray-300 hover:underline">
                Reset your password
              </Link>
            </p>
          </form>
        </div>
      </div>
    
    </>
  );
};
export default Login;
