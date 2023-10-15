import express from 'express';
import {
    createCategoryService,
    getAllCategoryServices,
    getCategoryServiceById,
    updateCategoryService,
    deleteCategoryService,
} from '../controllers/categoryServiceContoller.js';

const router = express.Router();

router.post('/', createCategoryService);
router.get('/', getAllCategoryServices);
router.get('/:id', getCategoryServiceById);
router.put('/:id', updateCategoryService);
router.delete('/:id', deleteCategoryService);

export default router;
