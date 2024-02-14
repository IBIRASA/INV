import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


  function Navbar() {
    const [navbarStyle, setNavbarStyle] = useState({
      backgroundColor: 'transparent',
      textColor: 'text-gray-300'
    });
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const threshold = 100; // Adjust this value as needed
        const newBackgroundColor = scrollPosition > threshold ? 'white' : 'transparent';
        const newTextColor = scrollPosition > threshold ? 'text-blue-950' : 'text-gray-300';
        setNavbarStyle({ backgroundColor: newBackgroundColor, textColor: newTextColor });
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup function to remove the event listener
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <nav  style={{ backgroundColor: navbarStyle.backgroundColor }}  className="fixed top-0 left-0 right-0 z-50">
      <div className="container flex items-center justify-between py-2 mx-auto">
        <div className="flex items-center ">
          <div className=''>
            <a href="/" className={`py-4 mr-12 font-semibold hover:text-gray-300 ${navbarStyle.textColor}`} data-aos="fade-up">Home</a>
            <a  href='#service' className={`py mr-12 font-semibold hover:text-gray-300 ${navbarStyle.textColor}`} data-aos="fade-up">About</a>
            <a href="#about" className={`py mr-12 font-semibold hover:text-gray-300 ${navbarStyle.textColor}`} data-aos="fade-up">Services</a>
            <a href="#contact"className={`py mr-12 font-semibold hover:text-gray-300 ${navbarStyle.textColor}`} data-aos="fade-up">Contact Us</a>
          </div>
        </div>
        <div className="ml-auto  py-9">
          <Link to="/get-started">
            <button className="rounded-full text-white font-bold py-2 px-8 bg-blue-950 hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105" data-aos="fade-up">Get started</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
