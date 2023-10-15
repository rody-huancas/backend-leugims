import express from 'express';
import {
    createService,
    getAllServices,
    getServiceById,
    updateService,
    deleteService,
    getServicesByCategory,
} from '../controllers/serviceController.js';

const router = express.Router();

router.post('/', createService);
router.get('/', getAllServices);
router.get('/:id', getServiceById);
router.put('/:id', updateService);
router.delete('/:id', deleteService);
router.get('/byCategory/:id', getServicesByCategory);


export default router;
