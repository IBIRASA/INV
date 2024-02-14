import React from 'react';
import { Bar } from 'react-chartjs-2';
const Chartt = () => {
  const datas = {
    labels: ['January','February','March','April'],
    datasets: [
      {
        label: 'data',
        backgroundColor:'#5A5A5A',
        borderColor: '#2c5282',
        borderWidth: 1,
        hoverBackgroundColor: '#3182ce',
        hoverBorderColor: '#2c5282',
        data: [9, 9, 11, 18],
      },
   
    ],
  };
  const datass = {
    labels: ['January','February','March','April'],
    datasets: [
      {
        label: 'data',
        backgroundColor:'#5A5A5A',
        borderColor: '#2c5282',
        borderWidth: 1,
        hoverBackgroundColor: '#3182ce',
        hoverBorderColor: '#2c5282',
        data: [4, 5, 9, 10],
      },
   
    ],
  };
  const datasss = {
    labels: ['January','February','March','April'],
    datasets: [
      {
        label: 'data',
        backgroundColor: '#5A5A5A',
        borderColor: '#2c5282',
        borderWidth: 1,
        hoverBackgroundColor: '#3182ce',
        hoverBorderColor: '#2c5282',
        data: [9, 9, 31, 40],
      },
   
    ],
  };
  const optionss = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        grid: {
          color: '#a0aec0',
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
  <div className='finance-history-table px-4  py-6 rounded-lg mt-8 mb-4 '>
  <p className="text-gray-950 font-normal  text-2xl ml-12  mb-8">Request-Status</p>
  <h1 className='header--title  delay-[300ms] duration-[600ms]  mt-0   mb-4   ml-12 text-gray-900  font-semi-medium'  data-aos="fade-down"></h1>
  <div className=' flex flex-row  '>
    
        <div className=' px-4 bg-gray-300 py-6 shadow-2xl rounded-lg mt-2 w-4/12  h-5/5 mr-8'>
        <h1 className='header--title  delay-[300ms] duration-[600ms]  mt-0   mb-4    text-gray-900  font-bold '  data-aos="fade-down">Pendings</h1>
        <div className="w-11/12 md:w-11/12 mx-auto mt-8 h-5/5">
      <Bar data={datas} options={optionss} />
     </div>
     </div>
     <div className=' px-4 bg-gray-300 py-6 shadow-2xl rounded-lg mt-2 w-4/12  h-5/5 mr-8'>
        <h1 className='header--title  delay-[300ms] duration-[600ms]  mt-0   mb-4    text-gray-900  font-bold'  data-aos="fade-down">Approved</h1>
        <div className="w-11/12 md:w-11/12 mx-auto mt-8 h-5/5">
      <Bar data={datass} options={optionss} />
     </div>
     </div>
     <div className=' px-4 bg-gray-300 py-6 shadow-2xl rounded-lg mt-2 w-4/12  h-5/5'>
        <h1 className='header--title  delay-[300ms] duration-[600ms]  mt-0   mb-4    text-gray-900  font-bold'  data-aos="fade-down">Rejected</h1>
        <div className="w-11/12 md:w-11/12 mx-auto mt-8 h-5/5">
      <Bar data={datasss} options={optionss} />
     </div>
     </div>
     </div>
   </div>

  );
};

export default Chartt;
