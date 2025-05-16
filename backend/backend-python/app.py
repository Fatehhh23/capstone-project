# backend-python/app.py
from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# Muat model machine learning (pastikan Anda mengganti path ke model Anda)
model = joblib.load('model.pkl')

@app.route('/api/carbon/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()  # Mengambil data JSON dari frontend
        input_data = np.array([data['feature1'], data['feature2']])  # Sesuaikan dengan input fitur model Anda

        # Prediksi menggunakan model
        prediction = model.predict([input_data])
        return jsonify({'prediction': prediction.tolist()})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)  # Flask API berjalan di port 5001
