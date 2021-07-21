const express = require('express');

const { getCurrentTempareture } = require('../controllers/fetchTemperature');

const router = express.Router();

// fetch current temperature
router.get('/current-temperature', getCurrentTempareture);

module.exports = router;
