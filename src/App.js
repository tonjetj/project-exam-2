import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import LandingPage from "./pages/landingPage";
import VenuesPage from "./pages/venues";
import RegisterPage from "./pages/registerPage/index.jsx";
import DashboardPage from "./pages/dashboard/index.jsx";
import VenuePage from "./pages/venue/index.jsx";
import Footer from "./components/footer/index.jsx";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/venues" element={<VenuesPage />} />
          <Route path="/venue/:id" element={<VenuePage />} />
          {/* <Routes path="/favourites" element={<FavouritesPage />} /> */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard/:username" element={<DashboardPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
