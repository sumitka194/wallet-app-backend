import { Schema, model, ObjectId } from 'mongoose';

const transactionSchema = new Schema({
  walletId: {
    type: ObjectId,
    ref: 'Wallet',
  },
  amount: {
    type: Number,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['CREDIT', 'DEBIT'],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Transaction = model('Transaction', transactionSchema);

export default Transaction;
