// LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
const Chartt= () => {
  const chartData = {
    labels: ['January', 'February', 'March', 'April','May','June','July','August','Sepetember','October','December'],
    datasets: [
      {
        label: 'Money',
        data: [10000, 20000, 80000, 8100,10000, 20000, 80000, 8100,20000, 80000, 20000],
        fill: false,
        borderColor: '#5A5A5A',
      },
    ],
  };
  const chartDataa = {
    labels: ['January','February','March','April'],
    datasets: [
      {
        label: 'data',
        backgroundColor: '#5A5A5A',
        borderColor: '#2c5282',
        borderWidth: 1,
        hoverBackgroundColor: '#3182ce',
        hoverBorderColor: '#2c5282',
        data: [9, 9, 11, 18],
      },
   
    ],
  };
  const Data = {
    labels: ['Used', 'Left'],
    datasets: [
      {
        label: 'Money-Used/',
        data: [400000, 1000000],
        backgroundColor: ['#5A5A5A', '#141414'],
      },
    ],
  };
  const chartOptions = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const chartOptionss = {
    scales: {
      x: {
        display: false, // Hide x-axis
        grid: {
          display: false,
        },
      },
      y: {
        display: false, // Hide y-axis
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };
  const chartOptionsss = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className='finance-history-table px-4 bg-transpared py-6 rounded-lg  mb-4 flex flex-row'>
    <div className='flex bg-gray-100 h-full'>
    <div className=" w-66/12  bg-gray- transparent mt-4  ml-20 mr-20 flex-1">
    <p className='header--title  delay-[300ms] duration-[600ms]  ml-12  text-gray-900  font-bold text-lg mt-8'  data-aos="fade-down">Money Used per Month</p>
      <div className="w-full h-64  mt-14">
        <Line data={chartData} options={chartOptions}  className='w-full h-64'/>
      </div>
    </div>
    <div className=" w-66/12  bg-gray- transparent mt-4  ml-20 mr-20 flex-1">
    <p className='header--title  delay-[300ms] duration-[600ms]  ml-12  text-gray-900  font-bold text-lg mt-8'  data-aos="fade-down">Money Used Annualy</p>
      <div className="w-full h-64  mt-14">
        <Bar data={chartDataa} options={chartOptionsss}  className='w-full h-64'/>
      </div>
    </div>
    <div className=" w-66/12  bg-gray- transparent mt-4  ml-20 mr-20 flex-1">
  
    <p className='header--title  delay-[300ms] duration-[600ms]  ml-12  text-gray-900  font-bold text-lg mt-8'  data-aos="fade-down">Money On the Account</p>
     <div className="w-72 ml-12">
     <Doughnut data={Data} options={chartOptionss} />
        </div>
        </div>
    </div>
  </div>

    
  );
};

export default Chartt;
