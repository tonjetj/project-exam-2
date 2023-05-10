import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import LandingPage from "./pages/landingPage";
import VenuesPage from "./pages/venues";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/venues" element={<VenuesPage />} />
          {/* <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/login" element={<LoginPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
