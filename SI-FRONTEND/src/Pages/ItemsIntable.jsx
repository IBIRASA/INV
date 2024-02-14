import React from "react";
import Sidebar2 from "../Layouts/Sidebar2";
import "../styles/dashbaord.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Contents from "./Contents";
function Reportt() {
  return (
    <div>
      <div className="dashboard">
        <Sidebar2 userRole={localStorage.getItem("role")} />

        <div className="dashboard-content shadow-2xl">
          <div className="w-full">
            <Contents />

            <div className="flex">
              <table className="finance-table mt-24">
                <thead>
                  <tr data-aos="fade-up">
                    <th>Date</th>
                    <th>Time</th>
                    <th>Item-name</th>
                    <th>Quantity</th>
                    <th>Unit-Price</th>
                    <th>TOtal-Price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr data-aos="zoom-in-down">
                    <td>20/12/2023</td>
                    <td>15:00 pm</td>
                    <td>Fans</td>
                    <td>5</td>
                    <td>$3000</td>
                    <td>$1500</td>
                    <td>
                      <button className="bg-blue-900 text-white rounded-full py-2 px-8 text-sm mr-4">
                        Available
                      </button>
                    </td>{" "}
                  </tr>
                  <tr data-aos="zoom-in-down">
                    <td>20/12/2023</td>
                    <td>15:00 pm</td>
                    <td>Fans</td>
                    <td>5</td>
                    <td>$3000</td>
                    <td>$1500</td>
                    <td>
                      <button className="bg-blue-900 text-white rounded-full py-2 px-8 text-sm mr-4">
                        Removed
                      </button>
                    </td>
                  </tr>
                  <tr data-aos="zoom-in-down">
                    <td>20/12/2023</td>
                    <td>15:00 pm</td>
                    <td>Fans</td>
                    <td>5</td>
                    <td>$3000</td>
                    <td>$1500</td>
                    <td>
                      <button className="bg-blue-900 text-white rounded-full py-2 px-8 text-sm mr-4">
                        Available
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reportt;
