const mongoose = require('mongoose');

const mobileSchema = new mongoose.Schema({
  
   Model_name: String,
   company: String,
  price: Number,
  processor: String,
  os: String,
  imageUrl: String,
  launchByDate: String, // Assuming the launch date is a string for simplicity
  front_camera: String,
  back_camera: String,
   battery: String,
   
 
});

const Mobile = mongoose.model('Mobile', mobileSchema);

module.exports = Mobile;
