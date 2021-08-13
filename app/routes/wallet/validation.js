import httpStatus from 'http-status';

import ApiError from '../../helpers/ApiError';

export default {
  setup: (req, res, next) => {
    const { balance, name } = req?.body;
    if (!balance || !name) {
      next(new ApiError(httpStatus.BAD_REQUEST, 'balance and name are required'));
    }
    if (typeof balance !== 'number') {
      next(new ApiError(httpStatus.BAD_REQUEST, 'balance should be a valid number'));
    }
    next();
  },

  updateWallet: (req, res, next) => {
    const { walletId } = req?.params;
    const { amount } = req?.body;
    if (!walletId) {
      next(new ApiError(httpStatus.BAD_REQUEST, 'walletId is required'));
    }
    if (typeof amount !== 'number') {
      next(new ApiError(httpStatus.BAD_REQUEST, 'amount should be a valid number'));
    }
    next();
  },

  getTransactions: (req, res, next) => {
    const {
      walletId, skip, limit, sortByDate, sortByAmount,
    } = req?.query;
    if (!walletId) {
      next(new ApiError(httpStatus.BAD_REQUEST, 'walletId is required'));
    }
    if (sortByDate && sortByDate !== 'asc' && sortByDate !== 'desc') {
      next(new ApiError(httpStatus.BAD_REQUEST, 'sortByDate should be either asc or desc'));
    }
    if (sortByAmount && sortByAmount !== 'asc' && sortByAmount !== 'desc') {
      next(new ApiError(httpStatus.BAD_REQUEST, 'sortByAmount should be either asc or desc'));
    }
    // eslint-disable-next-line no-restricted-globals
    if ((skip && isNaN(skip)) || (limit && isNaN(limit))) {
      next(new ApiError(httpStatus.BAD_REQUEST, 'skip or limit should be valid number'));
    }
    next();
  },

  getWalletDetails: (req, res, next) => {
    const { id } = req?.params;
    if (!id) {
      next(new ApiError(httpStatus.BAD_REQUEST, 'walletId is required'));
    }
    next();
  },
};
