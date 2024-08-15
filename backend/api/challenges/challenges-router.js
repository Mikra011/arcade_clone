const express = require('express');
const router = express.Router();
const Challenge = require('./challenges-model');

// Get all challenges
router.get('/', () => {
  next()
}) 

// Get challenges by topic ID
router.get('/topics/:topicId/challenges', () => {
  next()
}) 

// Get challenge by ID
router.get('/:id', () => {
  next()
}) 

// Create a new challenge
router.post('/', () => {
  next()
}) 

// Update an existing challenge
router.put('/:id', () => {
  next()
}) 

// Delete a challenge
router.delete('/:id', () => {
  next()
}) 

module.exports = router
