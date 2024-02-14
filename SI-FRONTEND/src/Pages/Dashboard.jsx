import React from "react";
import "../styles/dashbaord.css";
import Sidebar2 from "../Layouts/Sidebar2";
import Content from "./Content";
import AdminContent from "./admin/Content";
import FinanceContent from "./finance/Content";

function Dashboard() {
  const userRole = localStorage.getItem("role");
  return (
    <div className="dashboard">
     
      <div className="dashboard-content shadow-2xl">
        {userRole === "admin" && <AdminContent />}
        {userRole === "finance" && <FinanceContent />}
        {userRole === "manager" && <Content />}
      </div>
    </div>
  );
}

export default Dashboard;
