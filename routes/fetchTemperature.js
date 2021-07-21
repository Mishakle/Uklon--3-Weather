const express = require('express');

const {
  getCurrentTemperature,
  getCurrentTemperatureByParams,
} = require('../controllers/fetchTemperature');

const router = express.Router();

// fetch current temperature
router.get('/current-temperature', getCurrentTemperature);

// fetch current temperature by params
router.get('/current-temperature-in/:city', getCurrentTemperatureByParams);

module.exports = router;
