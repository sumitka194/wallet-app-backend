import { Schema, model, ObjectId } from 'mongoose';

/**
 * Transaction Schema
 */
/**
 * @swagger
 * definitions:
 *   TransactionResponse:
 *     properties:
 *       walletId:
 *         type: string
 *       _id:
 *         type: string
 *       description:
 *         type: string
 *       type:
 *         type: string
 *         enum: [CREDIT, DEBIT]
 *       amount:
 *         type: number
 *       balance:
 *         type: number
 *       date:
 *         type: string
 *   TransactionArraySuccess:
 *     type: array
 *     items:
 *       $ref: '#/definitions/TransactionResponse'
 */
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
  },
  type: {
    type: String,
    enum: ['CREDIT', 'DEBIT'],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Transaction = model('Transaction', transactionSchema);

export default Transaction;
