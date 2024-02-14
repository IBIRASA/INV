import React, { useEffect } from "react";
import "../styles/dashbaord.css";
import AOS from "aos";

import "aos/dist/aos.css";
function Contents() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className=" shadow-sm w-full">
    <h1
            className="header--title delay-[300ms] duration-[600ms] mb-8  ml-12 mr-12 text-gray-900 text-2xl font-bold  py-8 w-full"
            data-aos="fade-down"
          >
            Dashboard-{localStorage.getItem("role")}
          </h1>
    </div>
  );
}

export default Contents;
