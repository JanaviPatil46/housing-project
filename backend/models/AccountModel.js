const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  accountId: { type: Number, required: true, unique: true },
  accountName: { type: String, required: true },
  groupId: { type: Number, required: true },
  subGroupId: { type: Number, required: true },
  opening: { type: Number, required: true, default: 0 },
  drOrCr: { type: String, enum: ['DR', 'CR'], required: true },
  typeCode: {
    type: String,
    enum: ['Balance Sheet', 'Profit and Loss Account', 'Trading Account'],
    required: true
  }
}, { timestamps: true });

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
