import express from 'express';
import {
    createCategoryService,
    getAllCategoryServices,
    getCategoryServiceById,
    updateCategoryService,
    deleteCategoryService,
} from '../controllers/categoryServiceContoller.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getAllCategoryServices);
router.get('/:id', getCategoryServiceById);
router.post('/', verifyToken, createCategoryService);
router.put('/:id', verifyToken, updateCategoryService);
router.delete('/:id', verifyToken, deleteCategoryService);

export default router;
