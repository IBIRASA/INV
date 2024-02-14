import React, { useEffect } from "react";
import "../styles/dashbaord.css";
import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logout } from "../services/ApiServices";
import {
  faHome,
  faUsers,
  faClipboardList,
  faCodePullRequest,
  faCartShopping,
  faAdd,
  faUser,
  faReceipt,
  faShop,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

const Sidebar2 = ({ userRole }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const roleLinks = {
    admin: [
      // { to: "/home", label: "home", icon: faHome },
      { to: "/user", label: "user", icon: faUsers },
      { to: "/Report", label: "Report", icon: faClipboardList },
      { to: "/Finance", label: "Finance", icon: faHome },
      { to: "/Manager", label: "Manager", icon: faHome },
    ],
    finance: [
      // { to: "/home", label: "home", icon: faHome },
      { to: "/Request", label: "Requests", icon: faCodePullRequest },
      { to: "/accounts", label: "Accounts", icon: faCartShopping },
      { to: "/Upload", label: "Upload", icon: faCartShopping },
      { to: "/Report", label: "reports", icon: faCartShopping },
    ],
    manager: [
      // { to: "/home", label: "home", icon: faHome },
      { to: "/Request", label: "Requests", icon: faAdd },
      { to: "/Report", label: "reports", icon: faReceipt },
      { to: "/stock", label: "Stock", icon: faShop },
    ],
  };

  const renderLinks = (links) =>
    links.map((link, index) => (
      <Link
        key={index}
        to={link.to}
        className={`item delay-[${index * 300}ms] duration-[600ms]`}
        data-aos="fade-down"
      >
        <FontAwesomeIcon icon={link.icon} size="" className=" icon" />
        {link.label}
      </Link>
    ));

  return (
    <div className="menu md:w-52 lg:w-52 px-7">
      <Link to="/Login">
        <div
          className="logo delay-[300ms] duration-[600ms] mt-8  shadow-lg w-72  border-blue-50"
          data-aos="fade-up"
        >
         
          <h1 className="text-white font-semibold text-xl">
           Inventory Management
          </h1>
        </div>
      </Link>

      <div className="menu--list">
        <Link
          to="/Home"
          className="item active delay-[100ms] duration-[600ms]"
          data-aos="fade-down"
        >
          <FontAwesomeIcon icon={faHome} size="" className=" icon" />
          Dashboard
        </Link>

        {userRole && roleLinks[userRole] && renderLinks(roleLinks[userRole])}
        <Link to="/Login">
          <button
            className="item delay-[900ms] duration-[600ms] "
            data-aos="fade-down"
            onClick={logout}
          >
            <FontAwesomeIcon icon={faSignOut} size="" className=" icon" />
            Logout
          </button>
        </Link>
      </div>

      <div className="flex flex-row">
        <FontAwesomeIcon
          icon={faUser}
          size="lg"
          className="absolute top-4 right-4  mr-24  mt-4 basis-1"
        />
        <p className=" basis-1 absolute top-4 right-8  ml-32 mt-4 ">
          {userRole}
        </p>
      </div>
    </div>
  );
};

export default Sidebar2;
