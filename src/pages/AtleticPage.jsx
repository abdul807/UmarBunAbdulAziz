import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer/Footer";
import Atletic from "../component/Atlete/Atletic";


const AtleticPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Atletic />
      <Footer />
    </div>
  );
};

export default AtleticPage;
