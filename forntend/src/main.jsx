import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter
import App from './App';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>  {/* Membungkus seluruh aplikasi dengan Router */}
      <App />
    </Router>
  </React.StrictMode>
);
