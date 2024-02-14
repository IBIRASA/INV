import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { addAmount, getReportFinance } from "./../../services/ApiServices";
import Sidebar2 from "../../Layouts/Sidebar2";
import Contents from "../Contents";
const TableCash = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [balance, setBalance] = useState("");
  const [data, setData] = useState([]);
  const [rowsToShow, setRowsToShow] = useState(2); 

  useEffect(() => {
    AOS.init({ duration: 2000 });
    fetchReport();
  }, []);

  const fetchReport = async () => {
    try {
      const response = await getReportFinance();
      const newData = response.data.data || [];
      setData(newData);
    } catch (error) {
      console.error("Error fetching report:", error);
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const AddBalance = async (e) => {
    e.preventDefault();
    try {
      await addAmount(balance);
      fetchReport();
    } catch (error) {
      console.error("Error adding balance:", error);
    }
  };

  const formatDate = (toDate) => {
    const date = new Date(toDate.createdAt);
    const formattedDate = date.toLocaleDateString("en-US", { timeZone: "UTC" });
    return formattedDate;
  };

  const loadMoreRows = () => {
    setRowsToShow(rowsToShow + 2);
  };

  return (
    <>

<div className="flex">
<div className=" flex-none w-2/12 h-screen bg-gray-800 ">
<Sidebar2 userRole={localStorage.getItem("role")} />
</div>

  <div className="flex-grow dashboard-content shadow-2xl">
    <div className="users">
              <Contents />
      <div className="w-full">
        <button
          className="button-request bg-gray-800 text-white rounded-md py-2 px-8  text-sm mt-14 mr-32 mb-8"
          data-aos="zoom-in-down"
          onClick={openModal}
        >
          Add balance
        </button>
        <div className="mt-12 ml-8 mr-8   h-screen-h justify-center  bg-gray-100 rounded-lg  shadow-2xl">
        <table className="finance-table mt-12 ">
          <thead>
            <tr data-aos="fade-up" className="bg-gray-800">
              <th>Date</th>
              <th>Username</th>
              <th>Money Used</th>
              <th>Balance</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, rowsToShow).map((row) => (
              <tr data-aos="zoom-in-down" key={row.id}>
                <td>{formatDate(row)}</td>
                <td>{row.name}</td>
                <td>{row.moneyUsed}</td>
                <td>{row.balance}</td>
                <td>{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        {data.length > rowsToShow && (
          <center>
            <button
              onClick={loadMoreRows}
              className="bg-gray-800 text-white rounded-md py-2 px-8 mt-4"
            >
              Load More
            </button>
          </center>
        )}
      </div>
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
                            className="input-field mb-6 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 bg-white"
                            id="username"
                            type="number"
                            placeholder="Money on account"
                            data-aos="fade-down"
                            onChange={(e) =>
                              setBalance(parseInt(e.target.value))
                            }
                          />

                          <button
                            className="home-button mb-6 bg-gray-800 text-white rounded-full px-8 py-3 font-bold hover:bg-blue-700 hover:text-white transition duration-300"
                            data-aos="fade-down"
                            onClick={AddBalance}
                          >
                            Add balance
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
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-800 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
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
};

export default TableCash;
