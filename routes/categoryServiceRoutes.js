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

router.post('/', verifyToken, createCategoryService);
router.get('/', verifyToken, getAllCategoryServices);
router.get('/:id', verifyToken, getCategoryServiceById);
router.put('/:id', verifyToken, updateCategoryService);
router.delete('/:id', verifyToken, deleteCategoryService);

export default router;
