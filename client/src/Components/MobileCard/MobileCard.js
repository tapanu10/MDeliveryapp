// MobileCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../CartContext'; // Import the useCart hook
import {Link} from 'react-router-dom'
import './M.css';

const MobileCard = ({ mobile }) => {
  const { Model_name, company, price, imageUrl,battery,os } = mobile;
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Use the addToCart function from useCart hook

  const handleAddToCart = () => {
    addToCart({
      id: mobile.id,
      model: Model_name,
      company,
      price,
      imageUrl,
    });
  };

  const handleBuyNow = () => {
    navigate('/buy-now', {
      state: {
        mobileDetails: {
          id: mobile.id,
          model: Model_name,
          company,
          price,
          imageUrl,
        },
      },
    });
  };

  return (
    <div className="mobile-card">
      <img src={imageUrl} alt={Model_name} />
      <div className="details">
        <h3>{Model_name}</h3>
        <p>{company}</p>
        <p>{price}</p>
        <p>{os}</p>
        <p>{battery}</p>
        <div className="buttons">
          <button onClick={handleAddToCart}>Add to Cart</button>
          <Link to={{ pathname: '/buy-now', state: { mobileDetails: mobile } }}>
      
          </Link>
          <button onClick={handleBuyNow}>Buy Now</button>
          <Link to={{ pathname: '/buy-now', state: { mobileDetails: mobile } }}>
         
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
