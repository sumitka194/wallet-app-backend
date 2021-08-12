import httpStatus from 'http-status';

import createAsycController from '../../helpers/createAsyncController';
import { createWallet, updateWallet, getWalletById } from '../../services/wallet';
import { createTransaction, queryTransaction } from '../../services/transaction';

export default {
  setup: createAsycController(async (req, res) => {
    const { balance, name } = req.body;
    const wallet = await createWallet({ name, balance });
    const { _id, date } = wallet;
    const transaction = await createTransaction({
      walletId: _id,
      amount: balance,
      balance,
      description: 'Initialize wallet',
      type: Number(balance) < 0 ? 'DEBIT' : 'CREDIT',
    });
    const { _id: transactionId } = transaction;
    const result = {
      id: _id,
      balance,
      transactionId,
      name,
      date,
    };
    res.status(httpStatus.OK).send(result);
  }),

  updateWallet: createAsycController(async (req, res) => {
    const { amount, description } = req.body;
    const { walletId } = req.params;
    const wallet = await updateWallet(walletId, { amount });
    const { balance } = wallet;
    const transaction = await createTransaction({
      walletId,
      amount,
      balance,
      description,
      type: Number(amount) < 0 ? 'DEBIT' : 'CREDIT',
    });
    const { _id: transactionId } = transaction;
    const result = { balance, transactionId };
    res.status(httpStatus.OK).send(result);
  }),

  getTransactions: createAsycController(async (req, res) => {
    const {
      walletId, skip, limit, sortByDate, sortByAmount,
    } = req.query;
    const numSkip = Number(skip);
    const numLimit = Number(limit);
    const sort = {};
    if (sortByDate) {
      sort.date = sortByDate === 'asc' ? 1 : -1;
    }
    if (sortByAmount) {
      sort.amount = sortByAmount === 'asc' ? 1 : -1;
    }
    const transaction = await queryTransaction(walletId, { skip: numSkip, limit: numLimit, sort });
    res.status(httpStatus.OK).send(transaction);
  }),

  getWalletDetails: createAsycController(async (req, res) => {
    const { id } = req.params;
    const wallet = await getWalletById(id);
    res.status(httpStatus.OK).send(wallet);
  }),
};
