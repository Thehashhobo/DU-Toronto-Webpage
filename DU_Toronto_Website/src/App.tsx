import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppBar from './component/responsiveAppBar'
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './App.css'

const App: React.FC = () => {

  return (
    <Router>
      {/* <ScrollToTop /> */}
      <AppBar />

        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/management" element={<ManagementPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/rentals" element={<RentalsPage />} />
          <Route path="/trainings" element={<TrainingsPage />} />
        </Routes> */}
        {/* <div className="footer-section">
        <div className="footer-links">
          <h3>Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/management">Management</Link></li>
              <li><Link to="/services">Service and Repair</Link></li>
              <li><Link to="/rentals">Rentals</Link></li>
            </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" target="_blank"><FacebookFilled style={{ fontSize: '24px', color: '#fff' }} /></a>
            <a href="#" target="_blank"><TwitterCircleFilled style={{ fontSize: '24px', color: '#fff' }} /></a>
            <a href="#" target="_blank"><InstagramFilled style={{ fontSize: '24px', color: '#fff' }} /></a>
            <a href="#" target="_blank"><YoutubeFilled style={{ fontSize: '24px', color: '#fff' }} /></a>
          </div>
        </div>

        <div className="footer-info">
          <h3>General Inquiries</h3>
          <p><strong>Location:</strong> Vancouver, British Columbia, Canada</p>
          <p><strong>Hours:</strong> Mon - Fri: 9 AM - 6 PM</p>
          <p><strong>Phone:</strong> +1 778-989-8588</p>
          <p><strong>Email:</strong> <a href="mailto:oceanwave.vip@gmail.com" style={{ color: '#ffcc00' }}>Ocean Wave Enterprises Ltd</a></p>
        </div>
      </div> */}
        {/* <Footer style={{ textAlign: 'center' }}>
          Designed by JerryW ©{new Date().getFullYear()} Powered by Ant Design
        </Footer> */}
    </Router>
  );
};

export default App;
