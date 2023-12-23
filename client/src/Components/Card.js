// src/Components/Card.js
import React from 'react';
import './cd.css'
const Card = ({ mobileData }) => {
  const {
    Model_name,
    company,
    price,
    processor,
    os,
    imageUrl,
    battery,
  } = mobileData;

  return (
    <div className="card">
      <img src={imageUrl} alt={Model_name} />
      <div className="card-body">
        <h3>{Model_name}</h3>
        <p>{company}</p>
        <p>{`Price: $${price}`}</p>
        <p>{`Processor: ${processor}`}</p>
        <p>{`OS: ${os}`}</p>
        <p>{`Battery: ${battery}`}</p>
      </div>
    </div>
  );
};

export default Card;
