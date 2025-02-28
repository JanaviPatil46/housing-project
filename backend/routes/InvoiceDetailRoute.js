const express = require('express');
const {
    createInvoiceDetail,
  getAllInvoiceDetails,
  getInvoiceDetailById,
  updateInvoiceDetail,
  deleteInvoiceDetail,
} = require('../controllers/InvoiceDetailController');

const router = express.Router();

router.post('/', createInvoiceDetail);
router.get('/', getAllInvoiceDetails);
router.get('/:id', getInvoiceDetailById);
router.patch('/:id', updateInvoiceDetail);
router.delete('/:id', deleteInvoiceDetail);

module.exports = router;



