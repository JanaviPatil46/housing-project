const mongoose = require('mongoose');

const InvoiceHeaderSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  invoiceNumber: { type: Number, required: true, unique: true },
  invoiceDate: { type: Date, required: true },
  memberId: { type: Number, required: true },
  period: { type: String, required: true, maxlength: 50 },
  dueDate: { type: Date, required: true },
  narration: { type: String, required: true, maxlength: 200 }
}, { timestamps: true });

module.exports = mongoose.model('InvoiceHeader', InvoiceHeaderSchema);


