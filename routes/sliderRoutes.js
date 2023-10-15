import express from "express";
import { createSlider, deleteSlider, getAllSlider, getByIdSlider, updateSlider } from "../controllers/sliderController.js";

const router = express.Router();

router.get("/", getAllSlider);
router.get("/:id", getByIdSlider);
router.post("/", createSlider);
router.put("/:id", updateSlider);
router.delete("/:id", deleteSlider);

export default router;
