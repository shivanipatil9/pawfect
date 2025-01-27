import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import Disclaimer from "./components/copy-of-pawfect-play-date-agreement";
import Playdateaggrement from "./components/PlayDatePage";
import EndUserLicenseAggrement from "./components/EndUserLicenseAggrement";
import Terms_and_conditions from "./components/pawfect-terms-and-conditions";
import Privacypolicy from "./components/pawfect-privacy-policy";
import PetProfile from "./components/PetProfile";
//import JsonDisplay from "./components/JsonDisplay";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route
          path="/copy-of-pawfect-play-date-agreement"
          element={<Disclaimer />}
        />
        <Route path="/Playdateaggrement" element={<Playdateaggrement />} />
        <Route
          path="/EndUserLicenseAggrement"
          element={<EndUserLicenseAggrement />}
        />
        <Route
          path="/pawfect-terms-and-conditions"
          element={<Terms_and_conditions />}
        />
        <Route path="/pawfect-privacy-policy" element={<Privacypolicy />} />
        <Route path="/story/:storyindex/:petid" element={<PetProfile />} />
        <Route path="*" element={<Landingpage />} />
        {/* <Route path="/.well-known/apple-app-site-association" element={<JsonDisplay />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
