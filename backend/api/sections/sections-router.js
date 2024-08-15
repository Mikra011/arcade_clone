const express = require('express')
const router = express.Router()
const Section = require('./sections-model')

// Get all sections
router.get('/', () => {
  next()
})

// Get section by ID
router.get('/:id', () => {
  next()
})

// Create a new section
router.post('/', () => {
  next()
})

// Update an existing section
router.put('/:id', () => {
  next()
})

// Delete a section
router.delete('/:id', () => {
  next()
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: "something wrong in router",
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router