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

router.post('/', verifyToken, createService);
router.get('/', verifyToken, getAllServices);
router.get('/:id', verifyToken, getServiceById);
router.put('/:id', verifyToken, updateService);
router.delete('/:id', verifyToken, deleteService);
router.get('/byCategory/:id', verifyToken, getServicesByCategory);


export default router;
