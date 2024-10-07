const express = require('express')
const router = express.Router()
const { getUserInfo }= require('./users-controller')

// GET challenge description by ID
router.get('/', getUserInfo)

module.exports = router