const express = require('express');
const router = express.Router();
const Topic = require('./topics-model');

// Get all topics
router.get('/', () => {
  next()
})

// Get topics by section ID
router.get('/sections/:sectionId/topics', () => {
  next()
})

// Get topic by ID
router.get('/:id', () => {
  next()
})

// Create a new topic
router.post('/', () => {
  next()
})

// Update an existing topic
router.put('/:id', () => {
  next()
})

// Delete a topic
router.delete('/:id', () => {
  next()
})

module.exports = router
