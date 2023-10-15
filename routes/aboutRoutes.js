import express from 'express';
import { createAbout, deleteAbout, getAllAbout, getByIdAbout, updateAbout } from '../controllers/aboutController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', verifyToken, getAllAbout)
router.get('/:id', verifyToken, getByIdAbout)
router.post('/', verifyToken, createAbout)
router.put('/:id', verifyToken, updateAbout)
router.delete('/:id', verifyToken, deleteAbout)


export default router;