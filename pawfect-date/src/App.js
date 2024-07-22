import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './components/Landingpage';
import Disclaimer from './components/Dispage';
import Playdateaggrement from './components/PlayDatePage';
import EndUserLicenseAggrement from './components/EndUserLicenseAggrement';
import Terms_and_conditions from './components/Terms_and_conditions';
import Privacypolicy from './components/Privacypolicy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Disclaimer" element={<Disclaimer />} />
        <Route path="/Playdateaggrement" element={<Playdateaggrement />} />
        <Route path="/EndUserLicenseAggrement" element={<EndUserLicenseAggrement />} />
        <Route path="/Terms_and_conditions" element={<Terms_and_conditions />} />
        <Route path="/Privacypolicy" element={<Privacypolicy />} />
      </Routes>
    </Router>

  );
}

export default App;
