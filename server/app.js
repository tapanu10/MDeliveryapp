// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const Report = require('./models/mobileModel');
const reportsData = require('./models/data');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://tapanu10:PQLfRrF9A0AXb67x@cluster0.cqozwhd.mongodb.net/',{})
  .then(() => {
    console.log('Connected to MongoDB');

    // Check if data has already been added
    Report.countDocuments()
      .then((count) => {
        if (count === 0) {
          // No data found, so insert the entire reportsData array to the database
          return Report.insertMany(reportsData);
        }
        // Data already exists, return a resolved promise
        return Promise.resolve();
      })
      .then(() => {
        console.log('Reports data check completed');

        // Load routes
        app.use('/', routes);

        // Start the server
        app.listen(PORT, () => {
          console.log(`Server is running on port ${PORT}`);
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  })
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// routes.js
