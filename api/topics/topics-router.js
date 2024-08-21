const express = require('express');
const router = express.Router();
const topicController = require('./topics-controller');

// GET topics by section:
router.get('/:sectionName', topicController.getTopicsBySection)

module.exports = router
