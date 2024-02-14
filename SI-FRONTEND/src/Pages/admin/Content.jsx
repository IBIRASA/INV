import React from "react";
import Contents from "./Contents";
import Cards from "../../components/admin/Cards";
import History from "../../components/admin/History";
import "../../styles/dashbaord.css";
import Sidebar2 from "../../Layouts/Sidebar2";

function AdminContent() {
  const userRole = localStorage.getItem("role");
  return (
    <>
    <div className="dashboard-1 w-1/5 mr-0" >
      <Sidebar2 userRole={userRole} />
    </div>
    <div className="content">
      <Contents />
      <Cards />
      <p className="text-gray-950 font-normal  text-2xl ml-12  mb-8">Items-In</p>
      <History />
    </div>
    </>
  );
}

export default AdminContent;
