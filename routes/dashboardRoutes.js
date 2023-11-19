import express from 'express';
import { getCountOfItems, getRecentProducts, getRecentServices } from '../controllers/dashboardController.js';

const router = express.Router();

router.get('/', getCountOfItems);
router.get('/lastProducts', getRecentProducts);
router.get('/lastServices', getRecentServices);

export default router;
