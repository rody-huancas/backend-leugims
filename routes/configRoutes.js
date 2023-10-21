import express from "express";
import {
    createConfig,
    deleteConfig,
    getAllConfig,
    getByIdConfig,
    updateConfig,
} from "../controllers/configController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllConfig);
router.get("/:id", getByIdConfig);
router.post("/", verifyToken, createConfig);
router.put("/:id", verifyToken, updateConfig);
router.delete("/:id", verifyToken, deleteConfig);

export default router;
