const express = require('express');
const router = express.Router();
const {
  generateFinancialReport,
  createFinanceRequest,
  
} = require('../controllers/financeController');


router.post('/FinancialReport', generateFinancialReport);
router.post('/FinanceRequest', createFinanceRequest);

module.exports = router;
