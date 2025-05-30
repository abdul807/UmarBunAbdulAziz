import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"; // Import the Facebook icon
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer text-[#00a401]" id="footer">
      <div className="bg-[#06724b] flex flex-col text-center sm:w-full text-white py-10 px-10 text-[#00a401]">
        <div className="flex flex-col justify-center items-center gap-5   sm:flex-row sm:justify-around sm:items-start mb-20 ">
          <div className="logo font-extrabold text-2xl text-white sm:text-5xl">
            Umar Bun Abdul Aziz
          </div>
          <div className="home flex flex-col gap-2" id="home">
            <Link to="/" className="">Home</Link>
            <Link className="text-sm text-white hover:scale-110">About Us</Link>
            <Link className="text-sm text-white hover:scale-110">Services</Link>
          </div>
          <div className="home flex flex-col gap-2" id="home">
            <Link>Company</Link>
            <Link className="text-sm text-white hover:scale-110">Imprint</Link>
            <Link className="text-sm text-white hover:scale-110">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col  justify-center items-center gap-10 sm:justify-between sm:items-center mb-5">
          <p className="text-white text-sm sm:relative sm:left-38">
            © 2025 Umar Bun Abdul Aziz | All rights reserved
          </p>
          <div className="icons flex sm:relative sm:right-34">
            <Link
              to="https://web.facebook.com/profile.php?id=100076396008442"
              className="text-white mx-2"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link className="text-white mx-2">
              <FontAwesomeIcon icon={faTwitter} className="mr-2 text-white" />
            </Link>
            <Link className="text-white mx-2">
              <FontAwesomeIcon icon={faInstagram} className="mr-2 text-white" />
            </Link>
            <Link to="www.gmail.com" className="text-white mx-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
