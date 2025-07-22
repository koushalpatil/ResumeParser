# Deployment Guide for Render

## Prerequisites
1. Create a [Render account](https://render.com)
2. Get a Google Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

## Deployment Steps

### Option 1: Using render.yaml (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repository to Render
3. Render will automatically detect the `render.yaml` file
4. Set the following environment variables in Render dashboard:
   - **Backend service:**
     - `AI_API_KEY`: Your Google Gemini API key
     - `ALLOWED_ORIGINS`: Your frontend URL (will be provided after frontend deployment)
   - **Frontend service:**
     - `VITE_API_URL`: Your backend URL (will be provided after backend deployment)

### Option 2: Manual Setup
1. **Deploy Backend:**
   - Create a new Web Service
   - Connect your repository
   - Set build command: `cd backend && npm install`
   - Set start command: `cd backend && npm start`
   - Add environment variables as listed above

2. **Deploy Frontend:**
   - Create a new Static Site
   - Connect your repository
   - Set build command: `cd frontend/project && npm install && npm run build`
   - Set publish directory: `frontend/project/dist`
   - Add environment variable: `VITE_API_URL`

### Environment Variables Setup
After both services are deployed:
1. Update `ALLOWED_ORIGINS` in backend with your frontend URL
2. Update `VITE_API_URL` in frontend with your backend URL
3. Redeploy both services

### Important Notes
- Backend will be available at: `https://your-backend-name.onrender.com`
- Frontend will be available at: `https://your-frontend-name.onrender.com`
- Free tier services may spin down after inactivity
- Make sure to set all required environment variables before deployment

## Local Development
1. Copy `.env.example` files to `.env` in respective directories
2. Fill in your API keys and URLs
3. Run backend: `cd backend && node app.js`
4. Run frontend: `cd frontend/project && npm run dev`