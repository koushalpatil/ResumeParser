// backend/routes/resumeRoutes.js
import express from "express";
import resumeController from "../controllers/resumeController.js";
import { upload } from "../config/multer.js";

const router = express.Router();

router.get("/health", (req, res) => {
  resumeController.healthCheck(req, res);
});

router.post("/extract-text", upload.single("file"), (req, res) => {
  resumeController.extractText(req, res);
});

export default router;
