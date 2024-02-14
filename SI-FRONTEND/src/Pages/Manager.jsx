

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodePullRequest,
  faCartShopping,
  faMoneyBill,faClipboardList ,
} from "@fortawesome/free-solid-svg-icons";
import Contents from "./Contents";
import Sidebar2 from "../Layouts/Sidebar2";
import Chartt from "./Chartt";
import { Link } from "react-router-dom";
function Manager() {
  const userRole = localStorage.getItem("role");
  return (
    <div className="flex">
    <div className=" flex-none w-2/12 h-screen bg-gray-800 ">
    <Sidebar2 userRole={localStorage.getItem("role")} />
    </div>
    
      <div className="flex-grow dashboard-content shadow-2xl">
        <div className="users">
          <Contents />
          <div className=" flex flex-row w-11/12 bg-gray-100 rounded-xl py-8 shadow-lg ml-12 mt-12">
            <div className="flex-1">

            </div>
            <div className="flex-1 ">
              <div
                className="circle-menu w-12 h-12 shadow-xl flex items-center justify-center delay-[300ms] duration-[600ms] bg-gray-200 ml-8"
                data-aos="fade-down"
              >
                <span className="">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCodePullRequest}
                    className="text-gray-800 shadow-2x"
                  />
                </span>
              </div>
              <Link to="/Request">
                <p
                  className="text-gray-600 mt-4 ml-4 delay-[200ms] duration-[600ms]"
                  data-aos="fade-up"
                >
                  Request
                </p>
              </Link>
            </div>
            <div className="flex-1 ">
              <div
                className="circle-menu w-12 h-12 shadow-xl flex items-center justify-center delay-[300ms] duration-[600ms] bg-gray-200 ml-8"
                data-aos="fade-down"
              >
                <span className="">
                  {" "}
                  <FontAwesomeIcon
                    icon={faClipboardList }
                    className="text-gray-800 shadow-2x"
                  />
                </span>
              </div>
              <Link to="/Report">
                <p
                  className="text-gray-600 mt-4 delay-[200ms] duration-[600ms] ml-8"
                  data-aos="fade-up"
                >
                  Report
                </p>
              </Link>
            </div>
            <div className="flex-1 ">
              <div
                className="circle-menu w-12 h-12 shadow-xl flex items-center justify-center delay-[300ms] duration-[600ms] bg-gray-200 ml-8"
                data-aos="fade-down"
              >
                <span className="">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="text-gray-800 shadow-2x"
                  />
                </span>
              </div>
              <Link to="/stock">
                <p
                  className="text-gray-600 mt-4 delay-[200ms] duration-[600ms] ml-8"
                  data-aos="fade-up"
                >
                  Stock
                </p>
              </Link>
            </div>
          </div>
          <div>
          <div className='flex justify-center py-6 mt-8 shadow-2xl bg-gray-800'><br />
           <h1 className='white-me text-1xl   text-semibold' data-aos="zoom-in-down">Welcome to Operations Dashboard</h1>
        </div>
    </div>
          <Chartt />
        </div>
      </div>
    </div>
  );
}

export default Manager;

