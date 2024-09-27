const express = require('express');
const { recordProgress } = require('./progress-conroller');
const authenticate = require('../auth/auth-middleware');

const router = express.Router();

// Route to record user progress on a challenge
router.post('/record', authenticate, recordProgress);

module.exports = router;