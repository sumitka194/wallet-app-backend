import Transaction from '../models/transaction';

export const createTransaction = async (transaction) => Transaction.create(transaction);

export const queryTransaction = async (walletId, {
  skip, limit, sort,
}) => Transaction
  .find({ walletId })
  .skip(skip)
  .limit(limit)
  .sort(sort);
