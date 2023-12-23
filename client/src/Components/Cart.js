// Cart.js
import React from 'react';
import { useCart } from './../CartContext'; // Import the useCart hook
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const { state: cartState } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = (item) => {
    navigate('/buy-now', {
      state: {
        mobileDetails: item,
      },
    });
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartState.cartItems.map((item) => (
        <div key={item.id}>
          <img src={item.imageUrl} alt={item.model} />
          <p>Model: {item.model}</p>
          <p>Company: {item.company}</p>
          <p>Price: {item.price}</p>
          <button onClick={() => handleBuyNow(item)}>
          
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
