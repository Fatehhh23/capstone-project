// AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  return (
    <section className="about-us">
      <h2>About Us</h2>
      <div className="about-images">
        <img src="/assets/image 2.png" alt="Image 1" />
        <img src="/assets/IMG_20240923_160429.png" alt="Image 2" />
        <img src="/assets/IMG_20240924_121533.png" alt="Image 3" />
        <img src="/assets/IMG_20240924_114744.png" alt="Image 4" />
      </div>
      <p>
        Carbondev adalah sistem dashboard monitoring yang dirancang untuk memantau emisi karbon dan kondisi cuaca secara real-time di perkebunan kelapa sawit. Dengan mengintegrasikan teknologi Internet of Things (IoT), machine learning, dan visualisasi data, sistem ini mampu memprediksi emisi karbon berdasarkan data cuaca. Carbondev mendukung pengambilan keputusan yang lebih presisi bagi para pemangku kepentingan guna mewujudkan pertanian berkelanjutan dan ramah lingkungan.
      </p>
    </section>
  );
};

export default AboutUs;
