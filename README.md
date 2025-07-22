# 📄 Resume Analyzer & Feedback Generator

Welcome to the **Resume Analyzer & Feedback Generator** – an intelligent, user-friendly web application that allows users to upload their resume (PDF/DOCX) and get insightful feedback based on its content. Leveraging the power of AI and modern web technologies, this tool helps candidates enhance their resumes with targeted suggestions and analysis.

---

## 🚀 Features

✅ Upload resumes in PDF or DOCX format  
✅ Extracts text and key information from the document  
✅ Uses a Large Language Model (LLM) to analyze your resume  
✅ Provides detailed feedback including:

- Strengths of the resume
- Areas for improvement
- Missing key skills or sections
- Tone, formatting, and grammar suggestions  
  ✅ Easy-to-use, responsive user interface  
  ✅ Built with scalability and performance in mind

---

## 🖼️ Demo

![Demo GIF or Screenshot here](captures/cap-1.png)
![Demo GIF or Screenshot here](captures/cap-2.png)
![Demo GIF or Screenshot here](captures/cap-3.png)

---

## 🛠️ Tech Stack

**Frontend:**

- React.js / Next.js
- Tailwind CSS or Bootstrap
- Axios for API integration

**Backend:**

- Node.js with Express.js
- Multer for file uploads
- PDF-Parse / Mammoth for text extraction
- Integration with Gemini API / OpenAI / Google PaLM (any free LLM)

**Others:**

- dotenv for environment config
- fs, path modules
- CORS & error-handling middleware

---

## 🧠 How it Works

1. **Upload Resume**  
   Users upload their resume in `.pdf` or `.docx` format.

2. **Text Extraction**  
   The backend extracts text content using `pdf-parse` or `mammoth`.

3. **AI Analysis**  
   The extracted text is sent to an LLM (like Gemini or OpenAI) which returns a structured analysis.

4. **Display Results**  
   The frontend displays the feedback in a clean, readable format with sections like:
   - 📌 Highlights
   - ❗ Suggestions
   - 🚀 Opportunities to Improve

---

## 💡 Use Cases

- Job seekers wanting to optimize their resume
- Resume review tools for placement cells
- HR & Recruitment automation
- Resume parsing for applicant tracking systems

---
