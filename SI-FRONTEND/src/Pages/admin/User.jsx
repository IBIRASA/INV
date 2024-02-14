import React, { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar2 from "../../Layouts/Sidebar2";
import "../../styles/dashbaord.css";
import "../../styles/index.css";
import Contents from "./Contents";
function User() {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
         <div className="dashboard-1 w-1/5 mr-0" >
        <Sidebar2 userRole={localStorage.getItem("role")} />

        <div className="dashboard-content shadow-2xl h-screen">
          <div className="users">
            <Contents />
            <div className="users-main">
              <button
                className="btn-user mt-14 delay-[300ms] duration-[600ms] text-sm  mr-32 mb-20"
                data-aos="fade-down"
                onClick={openModal}
              >
                Add New User
              </button>
            </div>

            <table className="finance-table mt-1  bg-gray-800 ">
              <thead>
                <tr data-aos="fade-up">
                  <th>Full names</th>
                  <th>Position</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr data-aos="zoom-in-down">
                  <td>Lorem</td>
                  <td>Operationg manager</td>
                  <td>
                    <button className="bg-red-900 text-white rounded-full py-2 px-8 text-sm">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr data-aos="zoom-in-down">
                  <td>Lorem</td>
                  <td>Operationg manager</td>
                  <td>
                    <button className="bg-red-900 text-white rounded-full py-2 px-8 text-sm">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr data-aos="zoom-in-down">
                  <td>Lorem</td>
                  <td>Operationg manager</td>
                  <td>
                    <button className="bg-red-900 text-white rounded-full py-2 px-8 text-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      Fill the Form
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        <form className="form mx-4 md:mx-0">
                          <input
                            className="input-field mb-6 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 text-black"
                            id="username"
                            type="text"
                            placeholder="Username"
                            data-aos="fade-down"
                          />
                          <input
                            className="input-field mb-6 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 blackk text-black" 
                            id="password"
                            type="password"
                            placeholder="Position"
                            data-aos="fade-down"
                          />

                          <button
                            className="home-button mb-6 bg-blue-900 text-white rounded-full px-8 py-3 font-bold hover:bg-blue-700 hover:text-white transition duration-300"
                            data-aos="fade-down"
                          >
                            Add new user
                          </button>
                        </form>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={closeModal}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-900 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default User;
