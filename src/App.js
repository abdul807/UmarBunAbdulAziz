import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import AOS from "aos";

import "aos/dist/aos.css"; // Import the AOS CSS file
import { Route, Routes } from "react-router-dom";
import AtleticPage from "./pages/AtleticPage";
import LocationPage from "./pages/LocationPage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import TrainingPage from "./pages/TrainingPage";
import ScrollToTop from "./component/ScrollToTop";
function App() {
  // Initialize AOS

  useEffect(() => {
    // Initialize AOS when the component is mounted
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Keep the animation on repeat scroll
      offset: 120, // Offset to start the animation earlier or later
    });
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sports" element={<AtleticPage />} />
        <Route path="/location-contact" element={<LocationPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/training" element={<TrainingPage />} />

        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
