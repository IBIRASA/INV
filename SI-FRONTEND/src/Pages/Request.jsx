import React, { useState, useEffect, useRef } from "react";
import { Dropdown } from "flowbite-react";
import Sidebar2 from "../Layouts/Sidebar2";
import "../styles/dashbaord.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCancel, faCross } from "@fortawesome/free-solid-svg-icons";

import Contents from "./Contents";
import {
  getAllProducts,
  addRequest,
  getAllRequest,
  approveRequest,
} from "../services/ApiServices";
function Request() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editModel, setEditmodel] = useState(false);
  const [productNames, setProductNames] = useState([]);
  const [requests, setRequests] = useState([]);
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [rowId, setRowId] = useState("");
  const modalRef = useRef();
  const [unitPrice, setUnitPrice] = useState("");

  useEffect(() => {
    const fetchProductNames = async () => {
      const names = await getAllProducts();
      setProductNames(names);
    };
    const fetchRquests = async () => {
      const names = await getAllRequest();
      setRequests(names.data.requests);
    };

    fetchRquests();

    fetchProductNames();
  }, []);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleEdit = () => {
    setEditmodel(!editModel);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const selectedProducts = products.map((product) => ({
      product: product.productName,
      quantity: product.quantity,
      price: product.unitPrice,
    }));

    const finance = localStorage.getItem("username");

    const payload = {
      finance: finance,
      products: selectedProducts,
    };

    await addRequest(payload);

    setProducts([]);
    setProductName("");
    setQuantity("");
    setUnitPrice("");
  };

  const handleAddMore = (e) => {
    e.preventDefault();
    setProducts([...products, { productName, quantity, unitPrice }]);
    setProductName("");
    setQuantity("");
    setUnitPrice("");
  };

  const handleEditFns = async (id) => {
    console.log(id);
    setEditmodel(!editModel);
    await setRowId(id);
  };

  const handleActionSelect = async (action) => {
    await approveRequest(rowId, action, description);
    setEditmodel(!editModel);
  };
  return (
    <div>
       <div className="flex">
    <div className=" flex-none w-2/12 h-screen bg-gray-800 ">
    <Sidebar2 userRole={localStorage.getItem("role")} />
    </div>
    
      <div className="flex-grow dashboard-content shadow-2xl">
        <div className="users">
            <Contents />
            {localStorage.getItem("role") === "manager" && (
              <button
                className="btn-user mt-12 delay-[300ms] duration-[600ms] text-sm  mr-32 mb-12 bg-gray-800 rounded-md"
                data-aos="fade-down"
                onClick={openModal}
              >
                Send a request
              </button>
            )}
           <div className=" mt-8 ml-8 mr-8   h-screen-h justify-center  bg-gray-100 rounder-lg  shadow-2xl" >
              
              <table className=" border   w-full mt-4  ml-8 finance-table py-20 ">
                
              <thead>
                <tr data-aos="fade-up" className="bg-gray-800  text-grey-100 "> 
                  <th>Finance</th>
                  <th>Products Requested</th>
                  <th>Total Amount</th>
                  <th>Create At</th>
                  <th>Description</th>
                  <th>Status</th>
                  {localStorage.getItem("role") === "finance" && (
                    <th>Actions</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {requests &&
                  requests.map((data) => (
                    <React.Fragment key={data.id}>
                      <tr data-aos="zoom-in-down">
                        <td>{data.username}</td>
                        <td colSpan="0">
                          {" "}
                          {data.products.map((product, index) => (
                            <React.Fragment key={index}>
                              <tr>
                                <td className="border p px-1 py-1 font-bold">{product.product}</td>
                                <td className="border p px-1 py-1 font-bold">{product.quantity}</td>
                                <td className="border p px-1 py-1 font-bold">{product.price}</td>
                                <td className="border p px-1 py-1 font-bold">{product.totalprice}</td>
                              </tr>
                            </React.Fragment>
                          ))}
                        </td>
                        <td className="border p px-1 py-1 font-bold">{data.totalAmount}</td>
                        <td className="border p px-1 py-1 font-bold">{data.createdAt}</td>
                        <td className="border p px-1 py-1 font-bold">{data.description}</td>
                        <td>
                          <button
                            className={`rounded-full py-2 px-8 text-sm ${
                              data.status === "pending"
                                ? "bg-gray-700"
                                : data.status === "approved"
                                ? "bg-stone-600"
                                : data.status === "rejected"
                                ? "	bg-amber-700"
                                : "bg-blue-900"
                            } text-white`}
                          >
                            {data.status}
                          </button>
                        </td>
                        {localStorage.getItem("role") === "finance" && (
                          <td>
                            <button onClick={() => handleEditFns(data._id)}>
                              <FontAwesomeIcon icon={faEdit} size="2x" />
                            </button>
                          </td>
                        )}
                      </tr>
                    </React.Fragment>
                  ))}
              </tbody>
            </table>
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
                                {products.map((product, index) => (
                                  <div key={index}>
                                    <p>{`Product ${index + 1}: ${
                                      product.productName
                                    }, Quantity: ${
                                      product.quantity
                                    }, Unit Price: ${product.unitPrice}`}</p>
                                  </div>
                                ))}
                                <select
                                  className="input-field mb-6 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
                                  id="role"
                                  name="role"
                                  placeholder="role"
                                  data-aos="fade-down"
                                  onChange={(e) =>
                                    setProductName(e.target.value)
                                  }
                                  value={productName.id}
                                >
                                  {productNames.map((product, index) => (
                                    <option key={index} value={product.id}>
                                      {product.name}
                                    </option>
                                  ))}
                                </select>

                                <input
                                  className="input-field mb-6 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
                                  id="quantity"
                                  type="text"
                                  placeholder="Quantity"
                                  data-aos="fade-down"
                                  onChange={(e) => setQuantity(e.target.value)}
                                  value={quantity}
                                />
                                <input
                                  className="input-field mb-6 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
                                  id="unitPrice"
                                  type="text"
                                  placeholder="Unit Price"
                                  data-aos="fade-down"
                                  onChange={(e) => setUnitPrice(e.target.value)}
                                  value={unitPrice}
                                />
                                <div className="flex justify-between">
                                  <button
                                    className="home-button mb-6 bg-blue-900 text-white rounded-full px-8 py-3 font-bold hover:bg-blue-700 hover:text-white transition duration-300"
                                    data-aos="fade-down"
                                    onClick={handleSubmit}
                                  >
                                    Add Product
                                  </button>
                                  <button
                                    className="home-button mb-6 bg-green-900 text-white rounded-full px-8 py-3 font-bold hover:bg-green-700 hover:text-white transition duration-300"
                                    data-aos="fade-down"
                                    onClick={handleAddMore}
                                  >
                                    Add More Products
                                  </button>
                                </div>
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
          </div>
        </div>
      </div>
      {editModel && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div
            className="flex justify-center items-center h-screen bg-black bg-opacity-50"
            ref={modalRef}
            onClick={(e) => {
              if (modalRef.current === e.target) {
                setEditmodel(false);
              }
            }}
          >
            <div className="bg-white w-full max-w-lg p-8 rounded-lg">
              <button className="" onClick={() => setEditmodel(false)}>
                <FontAwesomeIcon icon={faCancel} color="red" />
              </button>
              <div className="text-center">
                <input
                  type="text"
                  placeholder="description"
                  className="p-3 border-none"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="flex justify-center mt-3">
                <button
                  className="mr-4 px-6 py-3 bg-blue-900 text-white rounded-full font-bold hover:bg-blue-700 transition duration-300"
                  onClick={() => handleActionSelect("approved")}
                >
                  Approve
                </button>
                <button
                  className="px-6 py-3 bg-red-900 text-white rounded-full font-bold hover:bg-red-700 transition duration-300"
                  onClick={() => handleActionSelect("rejected")}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Request;
