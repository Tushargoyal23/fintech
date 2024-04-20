const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['credit', 'debit','other']
  },
  // Payment method used (upi/cash)
  paymentMethod: {
    type: String,
    required: true,
    enum: ['upi', 'cash']
  },
  // Date of trans
  date: {
    type: Date,
    required: true
  },
  // Description of the transaction
  description: {
    type: String
    // required: true
  },
});

// Optionally, include timestamps for automatic creation and update timestamps
transactionSchema.timestamps = true;

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
