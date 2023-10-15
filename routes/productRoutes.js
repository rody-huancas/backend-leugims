import express from 'express';
import {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    getProductsByCategory,
} from '../controllers/productController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', verifyToken, createProduct);
router.get('/', verifyToken, getAllProducts);
router.get('/:id', verifyToken, getProductById);
router.put('/:id', verifyToken, updateProduct);
router.delete('/:id', verifyToken, deleteProduct);
router.get('/category/:id', verifyToken, getProductsByCategory);

export default router;
