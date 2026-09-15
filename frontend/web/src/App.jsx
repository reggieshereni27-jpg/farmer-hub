import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CropManagement from './pages/CropManagement';
import Weather from './pages/Weather';
import Market from './pages/Market';
import Equipment from './pages/Equipment';
import Advisory from './pages/Advisory';
import SupplyChain from './pages/SupplyChain';
import Community from './pages/Community';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/crops" element={<CropManagement />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/market" element={<Market />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/supply-chain" element={<SupplyChain />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
