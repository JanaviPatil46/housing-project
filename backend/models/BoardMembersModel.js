const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for Board Members
const boardMemberSchema = new Schema({
  name: {
    type: String,
    required: true, // Name is required
  },
  position: {
    type: String,
    enum: ['President', 'Vice President', 'Secretary', 'Treasurer', 'Member'],
    required: true, // Position is required
  },
  contactNumber: {
    type: String,
    required: true, // Contact number is required
  },
  email: {
    type: String,
    required: true,
    unique: true, // Email should be unique
  },
  address: {
    type: String,
    required: true, // Address is required
  },
  wingName: {
    type: String,
    required: true, // Wing name is required
  },
  flatNumber: {
    type: String,
    required: true, // Flat number is required
  },
  startDate: {
    type: Date,
    required: true, // Start date is required
  },
  endDate: {
    type: Date, // End date (optional if still serving)
  },
  isActive: {
    type: Boolean,
    default: true, // Default is active
  },
});

// Create the model from the schema
const BoardMember = mongoose.model('BoardMember', boardMemberSchema);

module.exports = BoardMember;
