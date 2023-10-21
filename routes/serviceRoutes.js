import express from 'express';
import {
    createService,
    getAllServices,
    getServiceById,
    updateService,
    deleteService,
    getServicesByCategory,
} from '../controllers/serviceController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getAllServices);
router.get('/byCategory/:id', getServicesByCategory);
router.get('/:id', getServiceById);
router.post('/', verifyToken, createService);
router.put('/:id', verifyToken, updateService);
router.delete('/:id', verifyToken, deleteService);


export default router;
