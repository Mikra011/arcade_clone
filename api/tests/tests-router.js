const express = require('express');
const router = express.Router();
const Test = require('./test-model');

// Get all tests
router.get('/', () => {
  next()
})

// Get tests by challenge ID
router.get('/challenges/:challengeId/tests', () => {
  next()
})

// Get test by ID
router.get('/:id', () => {
  next()
})

// Create a new test case
router.post('/', () => {
  next()
})

// Update an existing test case
router.put('/:id', () => {
  next()
})

// Delete a test case
router.delete('/:id', () => {
  next()
})

module.exports = router
