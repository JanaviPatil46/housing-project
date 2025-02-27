const mongoose = require("mongoose");

const WingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    totalUnits: {
      type: Number,
      required: true,
      min: 1,
    },
    unitTypes: [
      {
        type: String,
       
        required: true,
      },
    ],
    parking: {
      type: Number,
      required: true,
    },
   
      parkingType: [
        {
          type: String,
         
          required: true,
        },
      ],
    
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Wing", WingSchema);
