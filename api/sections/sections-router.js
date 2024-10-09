const express = require('express')
const router = express.Router()
const sectionController = require('./sections-conroller')

// GET all sections:
router.get('/', sectionController.getAllSections)

module.exports = router