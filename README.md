<!--Flask API di Python-->
python app.py
<!--Flask API akan berjalan di port 5001-->

<!-- Express.js di Backend -->
node backend/server.js
<!-- Backend Express akan berjalan di port 5000 -->

<!-- React di Frontend -->
npm start dev atau npm run dev
<!-- Frontend React akan berjalan di port 3000 -->

<!-- Masuk Virtual Environment -->
.\venv\Scripts\activate
<!-- Keluar Virtual Environment -->
deactivate


<!-- SUSUNAN FOLDER DAN FILE PROJECT -->
/capstone-project                    # Root folder proyek
│
├── /frontend                         # Folder untuk aplikasi React (Frontend)
│   ├── /public                       # Berisi file statis untuk frontend (gambar, favicon, dll)
│   │   └── index.html                # Halaman HTML utama React
│   ├── /src                          # Kode React Anda (komponen, assets, dll)
│   │   ├── /components               # Folder untuk komponen (Hero, FeatureCards, AboutUs, Dashboard, dll)
│   │   │   ├── Hero.jsx              # Komponen Hero (Bagian pertama di halaman utama)
│   │   │   ├── FeatureCards.jsx      # Komponen Feature Cards (Bagian Cards di halaman utama)
│   │   │   ├── AboutUs.jsx           # Komponen About Us (Deskripsi aplikasi)
│   │   │   ├── Dashboard.jsx         # Komponen Dashboard di Home (Ringkasan data)
│   │   │   ├── CarbonPrediction.jsx  # Komponen untuk mengirimkan data dan menampilkan prediksi karbon
│   │   │   └── DashboardPage.jsx     # Halaman Dashboard sesungguhnya (menampilkan data lebih lengkap)
│   │   ├── App.jsx                   # File utama aplikasi React dengan routing
│   │   ├── index.js                  # File utama React (menghubungkan App.js ke DOM)
│   │   ├── index.css                 # Styling kustom untuk frontend
│   │   └── .gitignore                # Menyaring file yang tidak diinginkan dari Git
│   ├── package.json                  # Konfigurasi proyek React
│   ├── .gitignore                    # Menyaring file yang tidak diinginkan dari Git (frontend)
│   └── README.md                     # Penjelasan proyek frontend
│
├── /backend                          # Folder untuk aplikasi Express.js (Backend)
│   ├── /controllers                  # Menyimpan file untuk menangani request API
│   │   ├── carbonController.js       # Controller untuk menangani data karbon
│   │   └── predictionController.js   # Controller untuk prediksi emisi karbon
│   ├── /models                       # Menyimpan model untuk data (misalnya, tabel di PostgreSQL)
│   │   └── CarbonModel.js             # Model untuk data karbon di database (misalnya, Sequelize atau ORM lainnya)
│   ├── /routes                       # Menyimpan rute API untuk backend
│   │   ├── carbonRoutes.js           # Routes untuk API karbon
│   │   └── predictionRoutes.js       # Routes untuk API prediksi
│   ├── /services                     # Menyimpan logika backend lainnya
│   │   ├── carbonService.js          # Logika untuk mengambil data karbon dan melakukan prediksi
│   │   └── predictionService.js      # Logika untuk melakukan prediksi menggunakan model ML
│   ├── /config                       # Konfigurasi untuk database dan lainnya
│   │   └── database.js               # Koneksi ke database PostgreSQL atau konfigurasi lainnya
│   ├── server.js                     # File utama untuk menjalankan backend Express
│   ├── package.json                  # Konfigurasi dependensi backend (Express, body-parser, cors, axios)
│   ├── .gitignore                    # Menyaring file yang tidak diinginkan dari Git (backend)
│   └── README.md                     # Penjelasan proyek backend
│
├── /backend-python                   # Folder untuk API Python yang menggunakan Flask
│   ├── app.py                        # API Flask yang menjalankan model machine learning (prediksi)
│   └── model.pkl                     # Model machine learning yang disimpan dengan joblib/pickle (gunakan path yang sesuai)
│
├── /node_modules                     # Folder dependensi untuk frontend dan backend
├── package.json                      # Konfigurasi proyek utama (untuk frontend dan backend)
├── .gitignore                        # File Git ignore untuk proyek secara keseluruhan
└── README.md                         # Penjelasan proyek secara keseluruhan
