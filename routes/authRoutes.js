import express from 'express';
import { loginAndGenerateToken } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', loginAndGenerateToken);

export default router;
