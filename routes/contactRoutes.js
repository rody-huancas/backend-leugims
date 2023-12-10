import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';
import { createContact, deleteContact, getAllContact } from '../controllers/contactController.js';

const router = express.Router();

router.get('/', verifyToken, getAllContact)
router.post('/', createContact)
router.delete('/:id', verifyToken, deleteContact)

export default router;