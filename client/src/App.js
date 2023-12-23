// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import BuyNow from './Components/BuyNow'; // Adjust the path accordingly
import Dashboard from './Components/Dashboard'; // Assuming you have a Dashboard component
import Navbar from './Components/Navbar/Navbar';
import Cart from './Components/Cart'; // Import the Cart component
import { CartProvider } from './CartContext'; // Import the CartProvider
import Log from './Components/Login/Login'

const stripePromise = loadStripe('');

function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/buy-now" element={<BuyNow />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Login" element={<Log />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
