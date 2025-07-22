import path from "path";
import PdfService from "../services/pdfService.js";
import AiService from "../services/aiService.js";
import { cleanupFile } from "../utils/fileUtils.js";

class ResumeController {
  constructor() {
    this.aiService = new AiService();
  }

  async extractText(req, res) {
    try {
      const file = req.file;

      if (!file) {
        return res.status(400).json({
          error: "No file uploaded.",
        });
      }

      const filePath = path.resolve(file.path);

      const extractedText = await PdfService.extractTextFromPdf(filePath);

      const analysis = await this.aiService.analyzeResume(extractedText);

      await cleanupFile(filePath);

      res.status(200).json({
        success: true,
        fileName: file.originalname,
        fileSize: file.size,
        extractedText,
        analysis,
      });
    } catch (error) {
      console.error("Error processing resume analysis:", error);

      if (req.file && req.file.path) {
        await cleanupFile(path.resolve(req.file.path));
      }

      res.status(500).json({
        error: error.message || "Failed to process resume analysis.",
        timestamp: new Date().toISOString(),
      });
    }
  }

  async healthCheck(req, res) {
    res.json({
      status: "healthy",
      timestamp: new Date().toISOString(),
      service: "Resume Analyzer API",
    });
  }
}

export default new ResumeController();
