// backend/services/carbonService.js
const axios = require('axios');

// Fungsi untuk mengambil data karbon dari API Flask
const getRawCarbonData = async () => {
  const data = await axios.get('http://localhost:5001/api/carbon/raw');  // Misalnya API Flask untuk data karbon
  return data.data;
};

// Fungsi untuk memproses prediksi karbon dengan mengirimkan request ke API Flask
const postCarbonPrediction = async (inputData) => {
  try {
    const response = await axios.post('http://localhost:5001/api/carbon/predict', inputData);
    return response.data.prediction;  // Mengembalikan hasil prediksi dari API Flask
  } catch (error) {
    throw new Error('Error predicting from Python API');
  }
};

module.exports = { getRawCarbonData, postCarbonPrediction };
