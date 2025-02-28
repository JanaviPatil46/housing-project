const mongoose = require('mongoose');

const InvoiceDetailSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  invoiceId: {
    type: Number,
    required: true
  },
  serviceId: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
}, { timestamps: true });

const InvoiceDetail = mongoose.model('InvoiceDetail', InvoiceDetailSchema);

module.exports = InvoiceDetail;
