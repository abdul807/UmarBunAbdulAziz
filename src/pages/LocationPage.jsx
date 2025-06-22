import React from "react";
import Location from "../component/Location/Location";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar";
import Address from "../component/Location/Address";

const LocationPage = () => {
  return (
    <>
      <Navbar />
      <Location />
      <Address />
      <Footer />
    </>
  );
};

export default LocationPage;
