import express from 'express';
// controllers
import { registerUser, profileUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/', registerUser)
router.get('/profile', profileUser)


export default router;