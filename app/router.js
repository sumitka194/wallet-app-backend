import { Router } from 'express';

import { walletRoutes } from './routes';

const router = Router();

router.use(walletRoutes);

export default router;
