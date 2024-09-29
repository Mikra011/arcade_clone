const express = require('express')
const router = express.Router()
const { runCode, getChallengeById }= require('./challenges-controller')
const { challengeAvailabilityMiddleware } = require('./challenges-middleware')

// GET challenge description by ID
router.get('/:id', challengeAvailabilityMiddleware, getChallengeById)

// POST challange code for testing
router.post('/code', runCode)

module.exports = router
