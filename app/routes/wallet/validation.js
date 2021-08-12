export default {
  setup: (req, res, next) => {
    const { balance, name } = req?.body;
    if (!balance || !name) {
      next('balance and name are required');
    }
    if (typeof balance !== 'number') {
      next('balance should be a valid number');
    }
    next();
  },

  updateWallet: (req, res, next) => {
    const { walletId } = req?.params;
    const { amount } = req?.body;
    if (!walletId) {
      next('walletId is required');
    }
    if (typeof amount !== 'number') {
      next('amount should be a valid number');
    }
    next();
  },

  getTransactions: (req, res, next) => {
    const { walletId, skip, limit } = req?.query;
    if (!walletId) {
      next('walletId is required');
    }
    if (typeof skip !== 'number' || typeof limit !== 'number') {
      next('skip or limit should be valid number');
    }
    next();
  },

  getWalletDetails: (req, res, next) => {
    const { id } = req?.params;
    if (!id) {
      next('walletId is required');
    }
    next();
  },
};
