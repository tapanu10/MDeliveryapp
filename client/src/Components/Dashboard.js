// Dashboard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MobileCard from '../Components/MobileCard/MobileCard';
import { useCart } from '../CartContext';

import './D.css';
const baseurl="https://mobileserver-nlau.onrender.com"
const Dashboard = () => {
  const [mobileData, setMobileData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nameFilter, setNameFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  const { state: cartState } = useCart();



  useEffect(() => {
    const fetchMobileData = async () => {
      try {
        const response = await axios.get(`${baseurl}/api/data`, {
          params: {
            name: nameFilter,
            price: priceFilter,
          },
        });
        const data = response.data;
        setMobileData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching mobile data:', error);
        setLoading(false);
      }
    };

    fetchMobileData();
  }, [nameFilter, priceFilter]);

  const handleFilterReset = () => {
    setNameFilter('');
    setPriceFilter('');
  };

  return (
    <div className="dashboard">
      <div className="filter-container">
        <label>
          Mobile Phones 
          <br />
          <input
            type="radio"
            name="filter"
            checked={nameFilter === 'Samsung'} // Customize based on your values
            onChange={() => setNameFilter('Samsung')}
          />
          Samsung
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            checked={nameFilter === 'iPhone'} // Customize based on your values
            onChange={() => setNameFilter('iPhone')}
          />
          iPhone
        </label>
        {/* Add more radio buttons for other filters */}
        <button onClick={handleFilterReset}>Reset Filters</button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {mobileData.map((mobile, index) => (
            index % 3 === 0 ? (
              <div key={index} className="row">
                <MobileCard mobile={mobile} />
              </div>
            ) : (
              <MobileCard key={index} mobile={mobile} />
            )
          ))}
        </>
      )}
   
    </div>
  );
};

export default Dashboard;
