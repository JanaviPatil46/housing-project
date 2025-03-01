const mongoose = require('mongoose');

const parkingSchema = new mongoose.Schema({
  parkingType: {
    type: String,
    enum: ['Public', 'Private', 'Street', 'Garage'],
    required: true
  },
  parkingArea: {
    type: Number, // in square meters
    required: true
  },
  location: {
    type: String,
    required: true
  },
  slotsAvailable: {
    type: Number,
    required: true,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Parking = mongoose.model('Parking', parkingSchema);

module.exports = Parking;
