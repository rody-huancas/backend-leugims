import express from "express";
import {
    createConfig,
    deleteConfig,
    getAllConfig,
    getByIdConfig,
    updateConfig,
} from "../controllers/configController.js";

const router = express.Router();

router.get("/", getAllConfig);
router.get("/:id", getByIdConfig);
router.post("/", createConfig);
router.put("/:id", updateConfig);
router.delete("/:id", deleteConfig);

export default router;
