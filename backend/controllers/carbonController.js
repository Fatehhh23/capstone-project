// backend/controllers/carbonController.js
const { getRawCarbonData, postCarbonPrediction } = require('../services/carbonService');

// Controller untuk GET /carbon/raw
const getCarbonData = async (req, res) => {
  try {
    const data = await getRawCarbonData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching carbon data", error });
  }
};

// Controller untuk POST /carbon/predict
const postCarbonPrediction = async (req, res) => {
  try {
    const prediction = await postCarbonPrediction(req.body); // Memproses data dari body
    res.status(200).json(prediction);
  } catch (error) {
    res.status(500).json({ message: "Error predicting carbon emissions", error });
  }
};

module.exports = { getCarbonData, postCarbonPrediction };
