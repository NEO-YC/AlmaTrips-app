import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TourDetail from './pages/TourDetail';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#FDFBF7]">
        {/* Sticky Header Navbar */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="grow">
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<Home />} />
            
            {/* Dynamic Tour Details Route */}
            <Route path="/tour/:slug" element={<TourDetail />} />
            
            {/* Catch-all route redirecting back to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        
        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}
