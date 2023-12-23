// routes.js
const express = require('express');
const router = express.Router();
const Mobile = require('./models/mobileModel');

router.get('/api/data', async (req, res) => {
  try {
    const { name, price, type, processor, memory, os } = req.query;

    // Validate request parameters (you can add more validation as needed)
    if (price && (isNaN(parseFloat(price)) || !isFinite(price))) {
      return res.status(400).json({ error: 'Invalid price parameter' });
    }

    // Build a query object based on the extracted parameters
    const query = {};
    if (name) {
      query.Model_name = { $regex: new RegExp(name, 'i') };
    }
    if (price) {
      query.price = { $lte: parseFloat(price) };
    }
    if (type) {
      query.type = { $regex: new RegExp(type, 'i') };
    }
    if (processor) {
      query.processor = { $regex: new RegExp(processor, 'i') };
    }
    if (memory) {
      query.memory = { $regex: new RegExp(memory, 'i') };
    }
    if (os) {
      query.os = { $regex: new RegExp(os, 'i') };
    }

    // Use the query to fetch data
    const data = await Mobile.find(query);
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
