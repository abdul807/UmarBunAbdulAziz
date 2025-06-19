import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import AOS from "aos";

import "aos/dist/aos.css"; // Import the AOS CSS file
import { Route, Routes } from "react-router-dom";
import SocialPage from "./pages/SocialPage";
import LocationPage from "./pages/LocationPage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import TrainingPage from "./pages/TrainingPage";
import ScrollToTop from "./component/ScrollToTop";
import SportsImage from "./component/Social/SportsImage";
import Community from "./component/Social/Community";
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
        <Route path="/social" element={<SocialPage />} >
        <Route index element={<Community />} />
        <Route path="athletics" element={<SportsImage />} />
        <Route path="community" element={<Community />} />
        </Route>
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
