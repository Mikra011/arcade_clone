const express = require('express');
const router = express.Router();
const topicController = require('./topics-controller');

// GET topics by section:
router.get('/:sectionId', topicController.getTopicsBySection)

module.exports = router
