import React, { useState } from 'react';
import '../index.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // Menyimpan status menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Membalikkan status menu
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/Logo.png" alt="Logo" />
        <span>Eddy Station</span>
      </div>

      {/* Hamburger menu (ikon) */}
      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Tautan navbar */}
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a href="/" className="active">Home</a>
        <a href="#">About</a>
        <a href="#">Dashboard</a>
        <a href="#">FAQ</a>
      </div>
    </nav>
  );
}

export default Navbar;
