import { Router } from 'express';

import validation from './validation';
import walletController from './walletController';

const router = Router();

/**
 * @swagger
 * /setup:
 *   post:
 *     tags:
 *       - Wallet
 *     description: Setup new wallet
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         description: wallet data
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/WalletPost'
 *     responses:
 *       200:
 *         description: Wallet Response
 *         schema:
 *           $ref: '#/definitions/WalletSetupResponse'
 */
router.post('/setup', validation.setup, walletController.setup);

/** amount, description
 * @swagger
 * /transact/{walletId}:
 *   post:
 *     tags:
 *       - Wallet
 *     description: Update Wallet
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: walletId
 *         description: wallet id
 *         in: path
 *         required: true
 *       - name: body
 *         description: wallet data
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/WalletUpdate'
 *     responses:
 *       200:
 *         description: Wallet Response
 *         schema:
 *           $ref: '#/definitions/WalletUpdateResponse'
 */
router.post('/transact/:walletId', validation.updateWallet, walletController.updateWallet);

/**
 * @swagger
 * /transactions:
 *   get:
 *     tags:
 *       - Transactions
 *     description: Get all transactions for a Wallet
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: walletId
 *         in: query
 *         type: string
 *       - name: skip
 *         in: query
 *         type: number
 *       - name: limit
 *         in: query
 *         type: number
 *       - name: sortByDate
 *         in: query
 *         type: string
 *         enum: [asc, desc]
 *       - name: sortByAmount
 *         in: query
 *         type: string
 *         enum: [asc, desc]
 *     responses:
 *       200:
 *         description: Transaction Response
 *         schema:
 *           $ref: '#/definitions/TransactionArraySuccess'
 */
router.get('/transactions', validation.getTransactions, walletController.getTransactions);

/**
 * @swagger
 * /wallet/{id}:
 *   get:
 *     tags:
 *       - Wallet
 *     description: Get Wallet details
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: wallet id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Wallet Response
 *         schema:
 *           $ref: '#/definitions/WalletResponse'
 */
router.get('/wallet/:id', validation.getWalletDetails, walletController.getWalletDetails);

export default router;
