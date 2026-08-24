const express = require('express');
const router = express.Router();
const cvController = require('../controllers/cvController');
const { upload, handleUploadErrors } = require('../middleware/upload');

// Upload CV
router.post('/upload', upload.single('cv'), handleUploadErrors, cvController.uploadCV);

// Get all CV analyses
router.get('/', cvController.getAllCVs);

// Get CV analysis by session ID
router.get('/session/:sessionId', cvController.getCVAnalysis);

// Get all CVs for a session
router.get('/session/:sessionId/cvs', cvController.getSessionCVs);

// Delete CV analysis
router.delete('/session/:sessionId/cv/:cvId', cvController.deleteCVAnalysis);

// Backwards-compatible detail endpoint
router.get('/:sessionId', cvController.getCVAnalysis);

module.exports = router;