import { Schema, model } from 'mongoose';

/**
 * Wallet Schema
 */
/**
 * @swagger
 * definitions:
 *   WalletPost:
 *     properties:
 *       name:
 *         type: string
 *       balance:
 *         type: number
 *   WalletUpdate:
 *     properties:
 *       amount:
 *         type: number
 *       description:
 *         type: string
 *   WalletSetupResponse:
 *     properties:
 *       name:
 *         type: string
 *       id:
 *         type: string
 *       transactionId:
 *         type: string
 *       balance:
 *         type: number
 *       date:
 *         type: string
 *   WalletResponse:
 *     properties:
 *       name:
 *         type: string
 *       id:
 *         type: string
 *       balance:
 *         type: number
 *       date:
 *         type: string
 *   WalletUpdateResponse:
 *     properties:
 *       balance:
 *         type: number
 *       transactionId:
 *         type: string
 */
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
