import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import homevector from './assets/home-vector.png'
import './styles/index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
const App= () =>{
    useEffect(()=>{
        AOS.init({duration:2000})
    },
    [])
    return(
        <div className='main-container-landing w-full h-screen flex flex-col md:flex-row items-center justify-center relative overflow-hidden'>
            <div className="absolute top-0 left-0 w-full h-full opacity-50"></div>
            <div className="relative flex flex-col md:flex-row items-center justify-center z-10">
                <div className="md:h-24 md:w-24 rounded-full bg-transparent from-blue-500 to-blue-800"></div>
                <img src={homevector} className='w-full md:w-1/3 mt-8 md:mt-20 md:mr-12 delay-[400ms] duration-[600ms]' alt='home vector' data-aos="fade-up"/>
                <div className='flex-auto text-center md:text-left md:w-1/2 md:mt-20 text-white z-10'>
                <h1 className='text-white font-bold text-4xl md:text-5xl mb-4 md:mb-8 data delay-[200ms] duration-[600ms]' data-aos="fade-down">
                    Welcome to SheCanCode Inventory System
                </h1>
                <p className='text-gray-300 text-lg mb-8 delay-[800ms] duration-[600ms]' data-aos="fade-down">
                    <span className='font-semibold text-blue-400'>Organize,</span> <span className='font-semibold text-blue-400'>track </span>and <span className='font-semibold text-blue-400'>manage</span> your stock
                </p>
                <Link to="/Login">
                    <button className='bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-4 font-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105 '>
                        Create Account
                     </button>
                </Link>
            </div>
        </div>
    <div className="absolute top-0 left-0 w-full h-full z-0">
    {Array.from({ length: 20 }, (_, index) => (
      <div
        key={index}
        className="absolute bg-gradient-to-r from-blue-900 to-blue-999 rounded-full"
        style={{
            width: '40px',
            height: '40px',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 6 + 2}s linear infinite`,
        }}
      ></div>
    ))}
  </div>
</div>
    )
}
export default App