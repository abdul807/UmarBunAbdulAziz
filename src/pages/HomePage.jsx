import React from "react";
import Offers from "../component/Offers/Offers";

import Image from "../component/Image/Image";
import MapComponent from "../component/Map/MapComponent";

import Testimonial from "../component/Provider/Testimonial";

import Conversation from "../component/Conversation/Conversation";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer/Footer";
import Background from "../component/Background/Background";
import backgroundImage from "../assets/backfound.jpg"; // Adjust the path as necessary
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white relative">
      {/* <Background> */}
      <Navbar />
      <Image />
      <Offers />

      {/* <Partners /> */}
      {/* <Train /> */}
      <Background backgroundImage={backgroundImage} />
      <Testimonial />
      {/* <Service />
        <Benefit /> */}
      <Conversation />
      <MapComponent />
      <Footer />
    
      {/* </Background> */}
      {/* <div className="bg-red-200 p-4">Row 4 Content</div> */}
    </div>
  );
};

export default HomePage;
