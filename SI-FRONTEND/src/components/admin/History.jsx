import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/dashbaord.css'
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const financeHistory = [
  {
    image: <FontAwesomeIcon icon={faCartArrowDown} />,
    name: 'Fans',
    Quantity: '2',
    cost: '$250',
    date: '4/5/2023',
  },
  {
    image: <FontAwesomeIcon icon={faCartArrowDown} />,
    name: 'Water',
    Quantity: '4',
    cost: '$20',
    date: '4/1/2024',
  },
  {
    image: <FontAwesomeIcon icon={faCartArrowDown} />,
    name: 'White boards',
    Quantity: '4',
    cost: '$20',
    date: '2/1/2024',
  },
  {
    image: <FontAwesomeIcon icon={faCartArrowDown} />,
    name: 'Markers',
    Quantity: '4',
    cost: '$20',
    date: '2/1/2024',
  },
  {
    image: <FontAwesomeIcon icon={faCartArrowDown} />,
    name: 'Computers',
    Quantity: '4',
    cost: '$20',
    date: '2/1/2024',
  },



];
const History = () => {
  return (
    <>

    <div className='finance-history-table px-4 bg-gray-100 py-6 shadow-2xl rounded-lg mt-20 '>
      <table className=' fin-table mt-8 bg-gray-950 '>
        <thead>
          <tr data-aos="fade-up">
            <th>Item</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {financeHistory.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}  >
              <td data-aos="zoom-in-down" className='icon-cell text-gray-700 border-b-2 '>{item.image}</td>
              <td data-aos="zoom-in-down" className='text-gray-700 border-b-2 '>{item.name}</td>
              <td data-aos="zoom-in-down" className='text-gray-700 border-b-2 '>{item.Quantity}</td>
              <td data-aos="zoom-in-down" className='text-gray-700 border-b-2 '> {item.cost}</td>
              <td data-aos="zoom-in-down" className='text-gray-700 border-b-2 '>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
   <Link  to='/Report' > <button className='bg-gray-950  text-bold rounded-lg py-2 px-8 mt-8 text-gray-100  delay-[300ms] duration-[600ms] text-sm  ml-12 mb-4' >View more...</button></Link>
    </div>
    </>
  );
};
export default History;