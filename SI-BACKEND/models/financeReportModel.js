const mongoose = require("mongoose");

const financeReportSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    required: true,
    type: String,
    enum: {
      values: ["Approved", "Denied"],
    },
  },
  created_at: { type: Date, default: Date.now() },
});

const FinanceRequest = mongoose.model("FinanceRequest", financeReportSchema); 
module.exports = FinanceRequest;
