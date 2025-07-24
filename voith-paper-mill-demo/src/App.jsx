import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Demos from './pages/Demos';
import Contact from './pages/Contact';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/demos" element={<Demos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
