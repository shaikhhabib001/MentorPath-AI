# MentorPath - AI-Powered Career Mentor Platform

## Overview
MentorPath is an AI-powered career mentorship platform that helps professionals accelerate their career growth through personalized guidance, skill gap analysis, and interview preparation.

**Current State**: Fully configured and running on Replit
**Last Updated**: October 19, 2025

## Features
- **CV Analysis**: Upload and analyze resumes with AI-powered insights
- **Skill Gap Analysis**: Identify missing skills and get recommendations
- **Interview Preparation**: AI chatbot for interview practice and guidance
- **Job Recommendations**: Personalized job matching based on skills

## Project Architecture

### Technology Stack
- **Frontend**: React 19.1 + Vite 7.1 + Tailwind CSS 4.1
- **Backend**: Node.js 20 + Express 5.1
- **Database**: MongoDB 7.0
- **AI Service**: Google Gemini AI (OpenAI-compatible API)

### Directory Structure
```
mentorpath/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── contexts/      # React contexts
│   │   └── utils/         # Utility functions
│   ├── package.json
│   └── vite.config.js
├── server/                # Express backend API
│   ├── controllers/       # Request handlers
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── services/         # Business logic
│   ├── middleware/       # Express middleware
│   ├── package.json
│   └── server.js
└── data/                 # MongoDB data directory
```

## Environment Configuration

### Required Environment Variables
The following environment variables are configured:

**Backend** (`server/.env`):
- `OPENAI_API_KEY`: Google Gemini API key (stored in Replit Secrets)
- `MONGODB_URI`: mongodb://localhost:27017/mentorpath
- `NODE_ENV`: development
- `PORT`: 3001
- `JWT_SECRET`: mentorpath_jwt_secret_key_replace_in_production
- `UPLOAD_PATH`: ./uploads
- `MAX_FILE_SIZE`: 52428800 (50MB)

### API Keys Setup
- **Gemini API**: Get your API key from [Google AI Studio](https://aistudio.google.com/apikey)
  - The key is stored as `OPENAI_API_KEY` in Replit Secrets
  - Used for CV analysis, chatbot, and skill extraction

## Running the Application

### Development Workflows
The application has two workflows configured:

1. **Frontend** (Port 5000)
   - Command: `cd client && npm run dev`
   - Serves the React application with hot module reloading
   - Configured to accept all hosts for Replit's iframe proxy

2. **Backend** (Port 3001)
   - Command: `mkdir -p data/db && mongod --dbpath=./data/db --port 27017 --fork --logpath ./data/mongodb.log && cd server && node server.js`
   - Starts MongoDB and Express server
   - API endpoints available at `http://localhost:3001/api`

### Accessing the Application
- Frontend: Available in the webview (Replit automatically proxies port 5000)
- Backend API: http://localhost:3001/api/health
- MongoDB: Running on port 27017 (localhost only)

## Recent Changes

### Replit Environment Setup (October 19, 2025)
- Installed Node.js 20 and project dependencies
- Installed MongoDB 7.0 as system package
- Updated frontend Vite config:
  - Changed port from 3000 to 5000
  - Added host: '0.0.0.0' for Replit compatibility
  - Updated proxy to point to backend on port 3001
  - Configured HMR for Replit's iframe environment
- Updated backend CORS configuration:
  - Added support for Replit domains
  - Configured to accept requests from all origins in development
  - Added REPLIT_DEV_DOMAIN environment variable support
- Created workflows for frontend and backend
- Configured deployment settings for VM deployment

## API Endpoints

### Health Check
- `GET /api/health` - Server health status

### CV Analysis
- `POST /api/cv/upload` - Upload and analyze CV
- `GET /api/cv/:id` - Get CV analysis
- `GET /api/cv` - Get user's CVs

### Chat/Interview Prep
- `POST /api/chat/message` - Send message to AI mentor
- `GET /api/chat/sessions/:id` - Get chat session
- `GET /api/chat/sessions` - Get user's sessions
- `POST /api/chat/questions/generate` - Generate interview questions

### Jobs
- `GET /api/jobs` - Get job listings
- `GET /api/jobs/recommended` - Get recommended jobs
- `GET /api/jobs/:id` - Get job details
- `GET /api/jobs/stats` - Get job statistics

## Development Notes

### Frontend Configuration
The Vite development server is configured to:
- Bind to `0.0.0.0:5000` (required for Replit)
- Proxy API requests to backend (`/api` -> `http://localhost:3001`)
- Enable HMR with correct client port for Replit's iframe

### Backend Configuration
- CORS is configured to accept requests from Replit domains
- MongoDB starts automatically with the Backend workflow
- Authentication is currently disabled (no sign-in required)
- File uploads limited to 50MB
- Rate limiting: 100 requests per 15 minutes per IP

### MongoDB
- Runs as a forked process on port 27017
- Data stored in `./data/db` directory
- No authentication configured (development only)
- Automatically starts with Backend workflow

## Deployment

### Production Configuration
The application is configured for VM deployment with:
- **Build step**: Builds the Vite frontend (`npm run build` in client/)
- **Run command**: Starts MongoDB, backend server, and serves built frontend
- **Deployment type**: VM (for persistent MongoDB and WebSocket support)

### Pre-deployment Checklist
- [ ] Update `JWT_SECRET` to a secure random value
- [ ] Configure production CORS origins in `server/app.js`
- [ ] Set `NODE_ENV=production`
- [ ] Configure MongoDB authentication for production
- [ ] Review rate limiting settings
- [ ] Test all API endpoints
- [ ] Verify file upload functionality

## User Preferences
- No specific coding preferences documented yet

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running: `ps aux | grep mongod`
- Check MongoDB logs: `cat data/mongodb.log`
- Restart Backend workflow to restart MongoDB

### Frontend Not Loading
- Verify workflow is running on port 5000
- Check that Vite config has `host: '0.0.0.0'`
- Clear browser cache and hard reload

### API Connection Issues
- Verify backend is running on port 3001
- Check CORS configuration in `server/app.js`
- Test health endpoint: `curl http://localhost:3001/api/health`

### AI Features Not Working
- Verify `OPENAI_API_KEY` is set in Replit Secrets
- Check server logs for AI service errors
- Ensure API key is valid for Gemini AI

## Additional Resources
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)
- [Express Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Google AI Studio](https://aistudio.google.com/)
