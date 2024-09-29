const express = require('express');
const { recordProgress, getUserProgressBySections } = require('./progress-conroller');
const authenticate = require('../auth/auth-middleware');

const router = express.Router();

router.post('/record', recordProgress);
router.get('/get', getUserProgressBySections);

module.exports = router;