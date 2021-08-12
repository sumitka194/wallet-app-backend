import { Schema, model } from 'mongoose';

const walletSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Wallet = model('Wallet', walletSchema);

export default Wallet;
