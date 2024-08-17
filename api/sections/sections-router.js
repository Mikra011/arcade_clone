const express = require('express')
const router = express.Router()
const sectionController = require('./sections-conroller')

// GET all sections:
router.get('/', sectionController.getAllSections)

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: "something wrong in router",
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router