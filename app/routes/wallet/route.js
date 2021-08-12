import { Router } from 'express';

import validation from './validation';
import walletController from './walletController';

const router = Router();

router.post('/setup', validation.setup, walletController.setup);

router.post('/transact/:walletId', validation.updateWallet, walletController.updateWallet);

router.get('/transactions', validation.getTransactions, walletController.getTransactions);

router.get('/wallet/:id', validation.getWalletDetails, walletController.getWalletDetails);

export default router;
