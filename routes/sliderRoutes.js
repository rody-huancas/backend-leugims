import express from "express";
import { createSlider, deleteSlider, getAllSlider, getByIdSlider, updateSlider } from "../controllers/sliderController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", verifyToken, getAllSlider);
router.get("/:id", verifyToken, getByIdSlider);
router.post("/", verifyToken, createSlider);
router.put("/:id", verifyToken, updateSlider);
router.delete("/:id", verifyToken, deleteSlider);

export default router;
