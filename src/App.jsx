// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import AboutUs from './components/AboutUs';

function App() {
  const features = [
    { icon: '/assets/icon-visual.png', title: 'Visualisasi Data', desc: 'Menyajikan data dalam bentuk grafik dan chart yang informatif.' },
    { icon: '/assets/icon-monitor.png', title: 'Monitoring Realtime', desc: 'Pemantauan kondisi karbon secara langsung dari lapangan.' },
    { icon: '/assets/icon-download.png', title: 'Unduh Data', desc: 'Data pemantauan tersedia untuk diunduh kapan saja.' },
    { icon: '/assets/icon-ai.png', title: 'Prediksi Emisi Karbon', desc: 'Analisis tren untuk memprediksi emisi karbon berbasis AI.' }
  ];

  return (
    <>
      <Navbar />
      <Hero imgSrc="/assets/hero.png" />
      <section className="features">
        <h2>We Provide Awesome Features</h2>
        <div className="feature-cards">
          {features.map((f, idx) => (
            <FeatureCard key={idx} icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </div>
      </section>
      <AboutUs />
      <Dashboard />
      <Footer />
    </>
  );
}

export default App;
