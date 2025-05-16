// backend/routes/carbonRoutes.js
const express = require('express');
const { getCarbonData, postCarbonPrediction } = require('../controllers/carbonController');

const router = express.Router();

// Route untuk mendapatkan data karbon
router.get('/raw', getCarbonData);

// Route untuk memprediksi emisi karbon
router.post('/predict', postCarbonPrediction);

module.exports = router;
