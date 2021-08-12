import httpStatus from 'http-status';

import ApiError from '../helpers/ApiError';
import Wallet from '../models/wallet';

export const createWallet = async (wallet) => Wallet.create(wallet);

export const getWalletById = async (id) => Wallet.findById(id);

export const updateWallet = async (id, { amount }) => {
  const wallet = await Wallet.findById(id);
  if (!wallet) {
    throw new ApiError(httpStatus.NOT_FOUND, 'wallet not found');
  }
  const { balance } = wallet;
  const newBalance = balance + amount;
  Object.assign(wallet, { balance: newBalance });
  wallet.save();
  return wallet;
};
