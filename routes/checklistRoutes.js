// /routes/checklistRoutes.js
const express = require('express');
const router = express.Router();
const checklistController = require('../controllers/checklistController');

router.post('/create', checklistController.createChecklist);
router.get('/:session_id', checklistController.getChecklists);

module.exports = router;
