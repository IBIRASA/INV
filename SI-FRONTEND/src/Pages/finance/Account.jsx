import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar2 from "../../Layouts/Sidebar2";
import TableCash from "./TableCash";
import Contents from "./Contents";

function Account() {
  return (
    <>
      <div className="flex">
<div className=" flex-none w-2/12 h-screen bg-gray-800 ">
<Sidebar2 userRole={localStorage.getItem("role")} />
</div>

  <div className="flex-grow dashboard-content shadow-2xl">
    <div className="users">
            <Contents />
            <div className="">
              <TableCash />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
