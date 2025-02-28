const InvoiceDetail = require('../models/InvoiceDetailModel');

// Create a new Invoice Detail
const createInvoiceDetail = async (req, res) => {
  try {
    const invoiceDetail = new InvoiceDetail(req.body);
    await invoiceDetail.save();
    res.status(201).json(invoiceDetail);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Invoice Details
const getAllInvoiceDetails = async (req, res) => {
  try {
    const invoiceDetails = await InvoiceDetail.find();
    res.status(200).json(invoiceDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single Invoice Detail by ID
const getInvoiceDetailById = async (req, res) => {
  try {
    const invoiceDetail = await InvoiceDetail.findById(req.params.id);
    if (!invoiceDetail) {
      return res.status(404).json({ message: 'Invoice Detail not found' });
    }
    res.status(200).json(invoiceDetail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an Invoice Detail
const updateInvoiceDetail = async (req, res) => {
  try {
    const invoiceDetail = await InvoiceDetail.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!invoiceDetail) {
      return res.status(404).json({ message: 'Invoice Detail not found' });
    }
    res.status(200).json(invoiceDetail);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an Invoice Detail
const deleteInvoiceDetail = async (req, res) => {
  try {
    const invoiceDetail = await InvoiceDetail.findByIdAndDelete(req.params.id);
    if (!invoiceDetail) {
      return res.status(404).json({ message: 'Invoice Detail not found' });
    }
    res.status(200).json({ message: 'Invoice Detail deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Export all functions
module.exports = {
  createInvoiceDetail,
  getAllInvoiceDetails,
  getInvoiceDetailById,
  updateInvoiceDetail,
  deleteInvoiceDetail,
};
