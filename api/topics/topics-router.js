const express = require('express');
const router = express.Router();
const { getTopicsBySection } = require('./topics-controller');

// GET topics by section:
router.get('/:sectionName', getTopicsBySection)

module.exports = router
