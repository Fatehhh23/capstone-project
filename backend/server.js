// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const carbonRoutes = require('./routes/carbonRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());  // Mengizinkan permintaan lintas domain
app.use(bodyParser.json());  // Untuk mem-parsing JSON

// Menyambungkan routes untuk API karbon
app.use('/api/carbon', carbonRoutes);

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
