const express = require('express');
const router = express.Router();
const challengeController = require('./challenges-controller');

// GET challenge description by ID
router.get('/:id', challengeController.getChallengeDescriptionById)

// POST challange code for testing
router.post('/code', challengeController.runCode)

module.exports = router
