import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar2 from "../Layouts/Sidebar2";
import "../styles/dashbaord.css";
import "../styles/index.css";
import Contents from "./admin/Contents";
import instance from "../config/Axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userSignUp } from "../services/ApiServices";
import axios from "axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    // bottom: 'auto',
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
function User() {
  const [isModalOpen, setModalOpen] = useState(false);

  const [isFormVisible, setFormVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await instance.get("/users");
        setUserData(response.data.allUsers);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllUsers();
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const openForm = () => {
    setFormVisible(true);
  };
  const closeForm = () => {
    setFormVisible(false);
  };
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // const response = await userSignUp(username, email, password, role);
    // if (response) {
    //   toast.success("Registration successful");
    // }
    // toast.error(response.data);

    axios.post("http://localhost:3000/api/v1/addUser", {
      username: username,
      email: email,
      password: password,
      role: role,
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("Registration successful");
          toast.success("Registration successful");
          setTimeout(() => {
            window.location.href = "/User";
          }, 2000);
        } else if (response.status === 409) {
          toast.error("Username or email already exists");
        } else if (response.status === 404) {
          toast.error("Endpoint not found");
        } else {
          console.log("Unexpected status code:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error during registration:", error);
        toast.error("Registration failed. Check the console for details.");
      });

    // await instance
    //   .post("/addUser", {
    //     username: username,
    //     email: email,
    //     password: password,
    //     role: role,
    //   })
    //   .then((response) => {
    //     if (response.status === 200) {
    //       console.log("Registration successful");
    //       toast.success("Registration successful");
    //       setTimeout(() => {
    //         window.location.href = "/User";
    //       }, 2000);
    //     } else if (response.status === 409) {
    //       toast.error("Username or email already exists");
    //     } else if (response.status === 404) {
    //       toast.error("Endpoint not found");
    //     } else {
    //       console.log("Unexpected status code:", response.status);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error during registration:", error);
    //     toast.error("Registration failed. Check the console for details.");
    //   });
  };

  const handleDeleteUser = async (userId) => {
    try {
      const response = await instance.delete(`/delete?_id=${userId}`);
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const [roleOptions] = useState(["admin", "manager", "finance"]);
  return (
    <>
      <div className="flex">
        <div className=" flex-none w-2/12 h-screen bg-gray-800 ">
          <Sidebar2 userRole={localStorage.getItem("role")} />
        </div>

        <div className="flex-grow dashboard-content shadow-2xl">
          <div className="users">
            <Contents />
            <p className="text-gray-950 font-normal  text-2xl ml-12  mb-8 mt-4">All Users</p>
            <div className="users-main">
              <button
                className="btn-user mt-12 delay-[300ms] duration-[600ms] text-sm  mr-14 mb-8 bg-gray-800 rounded-md"
                data-aos="fade-down"
                onClick={openModal}
              >
                Add New User
              </button>
              <Modal
                isOpen={isFormVisible}
                onRequestClose={closeForm}
                style={customStyles}
                contentLabel="Add New User Form"
              ></Modal>
            </div>
            <div className=" mt-8 ml-8 mr-8   h-screen-h justify-center  bg-gray-100 rounder-lg  shadow-2xl" >

              <table className=" border   w-full mt-12 ml-8 finance-table ">
                <thead>
                  <tr className=" bg-gray-800   text-gray-800">
                    <th className="border px-1 py-1">User Name</th>
                    <th className="border px-1 py-1">Email</th>
                    <th className="border px-1 py-1">Role</th>
                    <th className="border px-1 py-1">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {userData &&
                    userData.map((user) => (
                      <tr key={user._id} className="p-1 ">
                        <td className="border p px-1 py-1 font-bold" data-aos="zoom-in-down ">{user.username}</td>
                        <td className="border  px-1 py-1" data-aos="zoom-in-down ">{user.email}</td>
                        <td className=" px-1 py-1" data-aos="zoom-in-down ">{user.role}</td>
                        <td className="border  px-1 py-1" data-aos="zoom-in-down ">
                          <center>
                            <button
                              className=" bg-red-900 text-white py-1 px-4  rounded-md "
                              onClick={() => handleDeleteUser(user._id)}
                            >
                              Delete
                            </button>
                          </center>

                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
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
                        <form
                          className="form mx-4 md:mx-0"
                          onSubmit={handleSubmit}
                        >
                          <input
                            className="input-field mb-6 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 text-black"
                            id="username"
                            type="text"
                            placeholder="Username"
                            data-aos="fade-down"
                            onChange={(e) => setUsername(e.target.value)}
                          />
                          <input
                            className="input-field mb-6 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 bg-white text-black"
                            id="email"
                            type="email"
                            placeholder="email"
                            data-aos="fade-down"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <input
                            className="input-field mb-6 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 black text-black"
                            id="password"
                            type="password"
                            placeholder="Password"
                            data-aos="fade-down"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <select
                            className="input-field mb-6 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
                            id="role"
                            name="role"
                            placeholder="role"
                            data-aos="fade-down"
                            onChange={(e) => setRole(e.target.value)}
                          >
                            <option value="" disabled selected>
                              Select Role
                            </option>
                            {roleOptions.map((role) => (
                              <option key={role} value={role}>
                                {role}
                              </option>
                            ))}
                          </select>
                          <button
                            className="home-button mb-6 bg-blue-900 text-white rounded-full px-8 py-3 font-bold hover:bg-blue-700 hover:text-white transition duration-300"
                            data-aos="fade-down"
                            type="submit"
                            onClick={handleSubmit}
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
                {/* <input type="text" className="border-none border-b-grey">
                  Username
                </input> */}
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
