import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Rcomponent from "./Rcomponent";
import {
  faCodePullRequest,
  faCartShopping,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
// import Contents from "./Contents";
import Contents from "./Contents";
import Pie from "./Pie";
import { Link } from "react-router-dom";
function Financemenu() {
  return (
    <div className="dashboard">
      <div className="dashboard-content shadow-xl ">
        <div className="dash-menu">
          <Contents />
          <div className=" flex flex-row w-11/12 bg-gray-100 rounded-xl py-8 shadow-lg ml-12 mt-12">
            <div className="basis-1/4 ml-24">
              <div
                className="circle-menu w-12 h-12 shadow-xl flex items-center justify-center delay-[300ms] duration-[600ms] bg-blue-900"
                data-aos="fade-down"
              >
                <span className="">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCodePullRequest}
                    className="text-white shadow-2xl"
                  />
                </span>
              </div>
              <Link to="/Request">
                <p
                  className="text-gray-600 mt-4 delay-[200ms] duration-[600ms]"
                  data-aos="fade-up"
                >
                  Request
                </p>
              </Link>
            </div>
            <div className="basis-1/4 ml-24">
              <div
                className="circle-menu w-12 h-12 shadow-xl flex items-center justify-center delay-[300ms] duration-[600ms] bg-blue-900"
                data-aos="fade-down"
              >
                <span className="">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="text-white shadow-2x"
                  />
                </span>
              </div>
              <Link to="/Report">
                <p
                  className="text-gray-600 mt-4 delay-[200ms] duration-[600ms]"
                  data-aos="fade-up"
                >
                  Report
                </p>
              </Link>
            </div>
            <div className="basis-1/4 ml-24">
              <div
                className="circle-menu w-12 h-12 shadow-xl flex items-center justify-center delay-[300ms] duration-[600ms] bg-blue-900"
                data-aos="fade-down"
              >
                <span className="">
                  {" "}
                  <FontAwesomeIcon
                    icon={faMoneyBill}
                    className="text-white shadow-2x"
                  />
                </span>
              </div>
              <Link to="/Account">
                <p
                  className="text-gray-600 mt-4 delay-[200ms] duration-[600ms]"
                  data-aos="fade-up"
                >
                  Remainder
                </p>
              </Link>
            </div>
          </div>

          <Rcomponent />
          <Pie />
        </div>
      </div>
    </div>
  );
}

export default Financemenu;
