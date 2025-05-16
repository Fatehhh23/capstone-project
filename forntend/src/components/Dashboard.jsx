// Dashboard.jsx
import React from 'react';
import '../styles/dashboard.css'; 

const Dashboard = () => {
  // Data pertama (Eddy Station Dashboard)
  const data1 = [
    { id: 1, name: 'Eddy Station Dashboard', location: 'Go to Location', status: 'Active' },
  ];

  // Data kedua (Emisi dan Kondisi)
  const data2 = [
    { id: 1, name: 'Karbon Dioksida (CO₂)', value: '500 ppm', status: 'Tinggi' },
    { id: 2, name: 'Curah Hujan', value: '200 mm', status: 'Rendah' },
    { id: 3, name: 'Intensitas Matahari', value: '67 W/m²', status: 'Sedang' },
    { id: 4, name: 'Temperature', value: '33°C', status: 'Rendah' },
    { id: 5, name: 'Humidity', value: '40%', status: 'Tinggi' },
  ];

  // Fungsi untuk menentukan warna berdasarkan status
  const getStatusColor = (status) => {
    switch (status) {
      case 'Tinggi':
        return 'red';
      case 'Sedang':
        return 'yellow';
      case 'Rendah':
        return 'green';
      default:
        return 'gray';
    }
  };

  return (
  <section id='dashboard' className='section'>
    <div className="dashboard-container">
        <div className="dashboard-header">
            <h2>Dashboard</h2>
         </div>
      {/* Tabel 1: Eddy Station Dashboard */}
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data1.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.location}</td>
              <td><span className="status">{item.status}</span></td>
              <td><button className="action-button">Dashboard</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Memberikan jarak antar tabel */}
      <div className="space-between-tables"></div>

      {/* Tabel 2: Data Emisi dan Kondisi */}
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Nilai</th>
            <th>Indikator</th>
          </tr>
        </thead>
        <tbody>
          {data2.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.value}</td>
              <td>
                <span className={`indicator ${getStatusColor(item.status)}`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
  );
};

export default Dashboard;