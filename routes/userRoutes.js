import express from "express";
import { verifyToken } from '../middleware/authMiddleware.js';

// controllers
import {
    getAllUsers,
    registerUser,
    updateUser,
    deleteUser,
    getUserById
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", verifyToken, registerUser);
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);
// router.post("/login", verifyToken, loginUser);

export default router;
