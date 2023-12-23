// BuyNow.js
import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './buynow.css';

const BuyNow = () => {
  const location = useLocation();
  const { state } = location;
  const mobileDetails = state && state.mobileDetails;

  // State for form data
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
  });

  if (!mobileDetails) {
    return <p>No mobile details available</p>;
  }

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission (mock implementation)
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Perform payment processing here (e.g., connect to a payment gateway)
    console.log('Processing payment...', formData);
  };

  return (
    <div className="buy-now">
      <div className='buypage'>
        <h2>Buy Now Page</h2>
        <img src={mobileDetails.imageUrl} alt={mobileDetails.model} />
        <p>Model: {mobileDetails.model}</p>
        <p>Company: {mobileDetails.company}</p>
        <p>Price: {mobileDetails.price}</p>
        {/* Add other details as needed */}
      </div>

      <div className='payment'>
        <h3>Payment Details</h3>
        <form onSubmit={handlePaymentSubmit}>
          <label>
            Card Number:
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Expiry Date:
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            CVV:
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Cardholder Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Proceed to Payment</button>
        </form>
      </div>
    </div>
  );
};

export default BuyNow;
