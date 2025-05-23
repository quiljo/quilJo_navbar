import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/Splashscreen';
import MainLayout from './components/Mainlayout';
import About from './components/About';
import Messages from './components/Message';
import Navbar from './components/Navbar';  // Import Navbar here

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />  {/* Splash screen as the landing page */}
        <Route path="/mainlayout" element={<><Navbar /><MainLayout /></>} />  {/* Main content with Navbar */}
        <Route path="/about" element={<><Navbar /><About /></>} />
        <Route path="/contact" element={<><Navbar /><Messages /></>} />
      </Routes>
    </Router>
  );
}

export default App;
