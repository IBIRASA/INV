import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import Contents from './Contents';
import Sidebar2 from '../Layouts/Sidebar2';
import History from '../components/admin/History';

const InventoryReport = () => {
  const userRole = localStorage.getItem("role");
  return (
    <div className="flex">

    
    <div className=" flex-none w-2/12 h-screen bg-gray-800 ">
    <Sidebar2 userRole={localStorage.getItem("role")} />
    </div>

      <div className="flex-grow dashboard-content shadow-2xl">
        <div className="users">
          <Contents />
          
            <div className='bg-gray-800 w-screen-w py-2 mb-8'>
              <h1 className="text-1xl ml-12 text-white">Monthly Report</h1>
            </div>
            <History/>
          </div>
        </div>
      </div>
  );
};

export default InventoryReport;
