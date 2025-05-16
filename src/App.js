import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

// Pages
import Resume from './pages/Resume';
import SWECareer from './pages/SWECareer';
import DevOpsCareer from './pages/DevOpsCareer';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navigation />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<DevOpsCareer />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/swe" element={<SWECareer />} />
            <Route path="/devops" element={<DevOpsCareer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
