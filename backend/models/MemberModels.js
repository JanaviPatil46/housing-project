const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for Members
const memberSchema = new Schema({
  name: {
    type: String,
    required: true, // Name is required
  },
  email: {
    type: String,
    required: true,
    unique: true, // Email should be unique
  },
  contactNumber: {
    type: String,
    required: true, // Contact number is required
  },
  address: {
    type: String,
    required: true, // Address is required
  },
  wingName: {
    type: String,
    required: true, // Wing name is required
  },
  unitType: {
    type: String,
    required: true, // Unit type (e.g., 1BHK, 2BHK, Office, Shop)
  },
  flatNumber: {
    type: String,
    required: true, // Flat number is required
  },
  propertyType: {
    type: String,
    enum: ['residential', 'commercial'], // Only residential or commercial
    required: true,
  },
  parking: {
    twoWheeler: {
      type: Number,
      default: 0, // Default 0 if no two-wheeler parking
    },
    fourWheeler: {
      type: Number,
      default: 0, // Default 0 if no four-wheeler parking
    }
  },
  isActive: {
    type: Boolean,
    default: true, // Member is active by default
  },
});

// Create the model from the schema
const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
