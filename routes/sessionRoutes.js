// /routes/sessionRoutes.js
const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController');

router.post('/create', sessionController.createSession);
router.get('/all', sessionController.getSessions);

module.exports = router;
