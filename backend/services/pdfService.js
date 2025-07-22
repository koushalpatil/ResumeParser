import pdf from "pdf-parse";
import fs from "fs/promises";
import { cleanupFile } from "../utils/fileUtils.js";

class PdfService {
  static async extractTextFromPdf(filePath) {
    try {
      const dataBuffer = await fs.readFile(filePath);
      const data = await pdf(dataBuffer);

      if (!data.text || data.text.trim().length < 50) {
        throw new Error(
          "Unable to extract sufficient text from the PDF. Please ensure the file contains readable text content."
        );
      }

      return data.text;
    } catch (error) {
      throw new Error(`PDF extraction failed: ${error.message}`);
    }
  }

  static async processAndCleanup(filePath) {
    try {
      const extractedText = await this.extractTextFromPdf(filePath);
      await cleanupFile(filePath);
      return extractedText;
    } catch (error) {
      await cleanupFile(filePath);
      throw error;
    }
  }
}

export default PdfService;
