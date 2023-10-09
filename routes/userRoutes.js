import express from "express";
// controllers
import {
    getAllUsers,
    registerUser,
    updateUser,
    loginUser,
    deleteUser,
    getUserById
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", registerUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/login", loginUser);

export default router;
