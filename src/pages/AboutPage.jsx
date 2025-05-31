import React from "react";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer/Footer";
import About from "../component/About/About";

const AboutPage = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
