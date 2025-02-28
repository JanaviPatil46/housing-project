// const InvoiceHeader = require('../models/InvoiceHeaderModel');

// // Create a new Invoice
// const createInvoice = async (req, res) => {
//   try {
//     const { id, invoiceNumber, invoiceDate, memberId, period, dueDate, narration } = req.body;
//     const newInvoice = new InvoiceHeader({ id, invoiceNumber, invoiceDate, memberId, period, dueDate, narration });

//     await newInvoice.save();
//     res.status(201).json(newInvoice);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Get all Invoices
// const getAllInvoices = async (req, res) => {
//   try {
//     const invoices = await InvoiceHeader.find();
//     res.status(200).json(invoices);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// const getInvoiceById = async (req, res) => {
//   try {
//     const invoice = await InvoiceHeader.findById(req.params.id);
//     if (!invoice) {
//       return res.status(404).json({ message: 'invoice not found' });
//     }
//     res.status(200).json(invoice);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
// // Update an Invoice
// // const updateInvoice = async (req, res) => {
// //   try {
// //     const updatedInvoice = await InvoiceHeader.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
// //     if (!updatedInvoice) return res.status(404).json({ message: 'Invoice not found' });

// //     res.status(200).json(updatedInvoice);
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // };

// const updateInvoiceHeader= async (req, res) => {
//   try {
//     const InvoiceHeader = await InvoiceHeader.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
//     if (!invoiceHeader) return res.status(404).json({ message: 'InvoiceHeader not found' });
//     res.status(200).json(InvoiceHeader);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Delete an Invoice
// const deleteInvoice = async (req, res) => {
//   try {
//     const deletedInvoice = await InvoiceHeader.findOneAndDelete({ id: req.params.id });
//     if (!deletedInvoice) return res.status(404).json({ message: 'Invoice not found' });

//     res.status(200).json({ message: 'Invoice deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Export all CRUD functions
// module.exports = {
//   createInvoice,
//   getAllInvoices,
//   getInvoiceById,
//   updateInvoiceHeader,
//   deleteInvoice,
// };


const InvoiceHeader = require('../models/InvoiceHeaderModel');

// Create a new invoice header
const createInvoiceHeader = async (req, res) => {
  try {
    const invoiceHeader = new InvoiceHeader(req.body);
    await invoiceHeader.save();
    res.status(201).json(invoiceHeader);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all invoice headers
const getInvoiceHeaders = async (req, res) => {
  try {
    const invoices = await InvoiceHeader.find();
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get an invoice header by ID
const getInvoiceHeaderById = async (req, res) => {
  try {
    const invoice = await InvoiceHeader.findById(req.params.id);
    if (!invoice) return res.status(404).json({ message: 'Invoice header not found' });
    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an invoice header by ID
const updateInvoiceHeader = async (req, res) => {
  try {
    const invoice = await InvoiceHeader.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!invoice) return res.status(404).json({ message: 'Invoice header not found' });
    res.status(200).json(invoice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an invoice header by ID
const deleteInvoiceHeader = async (req, res) => {
  try {
    const invoice = await InvoiceHeader.findByIdAndDelete(req.params.id);
    if (!invoice) return res.status(404).json({ message: 'Invoice header not found' });
    res.status(200).json({ message: 'Invoice header deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createInvoiceHeader,
  getInvoiceHeaders,
  getInvoiceHeaderById,
  updateInvoiceHeader,
  deleteInvoiceHeader
};
