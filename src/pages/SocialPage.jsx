import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer/Footer";
import Atletic from "../component/Social/Atletic";

const SocialPage = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <Atletic />
      <Footer />
    </div>
  );
};

export default SocialPage;
