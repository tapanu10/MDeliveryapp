// Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../../images/cartIcon.png';
import { useCart } from '../../CartContext'; // Import the useCart hook
import navlogo from '../../images/navlogo.png'
import './Navbar.css';

const Navbar = () => {
  const { state: cartState } = useCart();
  const [searchQuery, setSearchQuery] = useState('');


  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <Link to='/'>
          <img src={navlogo} width="150" alt="Logo"></img>
        </Link>
      </div>
      {/* ... other left-aligned elements */}
     
      <div className='nav-cart'>
        <Link to='/cart'>
          <img src={cartIcon} alt='cart-icon' className='cart-icon' />
          <span className='cart-count'>{cartState.cartItems.length}</span>
        </Link>
      </div>
      <div className='nav-login'>
        <Link to='/login'>
          <button>Login</button>
        </Link>
      </div>
      <div className='nav-signup'>
        <Link to='/signup'>
          <button>Signup</button>
        </Link>
      </div>
      {/* ... other right-aligned elements */}
    </div>
  );
};

export default Navbar;
