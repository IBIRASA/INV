import React, { useState, useEffect } from 'react';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const course = [
  {
    nbr: 200,
    title: 'Items-In',
    icon: <FontAwesomeIcon icon={faCartArrowDown} className='text-gray-300 text-3xl' />,
    chartColor: 'rgba(255,255,255,0.6)',
  },
  {
    nbr: 10,
    title: 'Items-Out',
    icon: <FontAwesomeIcon icon={faCartShopping} className='text-gray-300 text-3xl' />,
    chartColor: 'rgba(255,255,255,0.9)',
  },
  {
    nbr: 100,
    title: 'All-items',
    icon: <FontAwesomeIcon icon={faCartArrowDown} className='text-gray-300 text-3xl' />,
    chartColor: 'rgba(255,255,255,0.4)',
  },
  {
    nbr: 20,
    title: 'Categories',
    icon: <FontAwesomeIcon icon={faCartShopping} className='text-gray-300  text-3xl' />,
    chartColor: 'rgba(255,255,255,0.4)',
  },
];

const Cards = () => {
  const [countupNumbers, setCountupNumbers] = useState(Array(course.length).fill(0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCountupNumbers(prevNumbers =>
        prevNumbers.map((number, index) => (number < course[index].nbr ? number + 1 : number))
      );
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const chartData = {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'transparent',
        borderColor: course.map(item => item.chartColor),
        borderWidth: 2,
        pointBackgroundColor: 'white',
        pointBorderColor: course.map(item => item.chartColor),
        pointBorderWidth: 2,
        pointRadius: 4,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: [{ display: false }],
      y: [{ display: false }],
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
<div className='card-container flex justify-center items-center gap-4 py-4'>

  {course.map((item, index) => (
    <div key={index} className='card bg-gray-800 shadow-lg rounded-lg overflow-hidden mb-4'>
      <div className='p-4'>
        <div className='flex justify-between items-center mb-2'>
          <h2 className='text-sm font-semibold text-gray-200'>{item.title}</h2>
          <div className='text-xl text-gray-200 font-bold'>{countupNumbers[index]}</div>
        </div>
        <div className='flex justify-center items-center'>{item.icon}</div>
        <div className='h-16'>
          <Line data={chartData} options={chartOptions} />
        </div>
      
      </div>
    </div>
  ))}
</div>


  );
};

export default Cards;
