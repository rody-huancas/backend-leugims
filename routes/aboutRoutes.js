import express from 'express';
import { createAbout, deleteAbout, getAllAbout, getByIdAbout, updateAbout } from '../controllers/aboutController.js';

const router = express.Router();

router.get('/', getAllAbout)
router.get('/:id', getByIdAbout)
router.post('/', createAbout)
router.put('/:id', updateAbout)
router.delete('/:id', deleteAbout)


export default router;