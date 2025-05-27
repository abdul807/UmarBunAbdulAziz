import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import About from "./Modals/About";
import ServiceModal from "./Modals/ServiceModal";
import TrainModal from "./Modals/TrainModal";
import SocialModal from "./Modals/SocialModal";
import JobModal from "./Modals/JobModal";
import "aos/dist/aos.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const links = [
  {
    text: "Home",
    path: "/",
    modal: null,
  },
  {
    text: "About UBA",
    path: "#",
    modal: <About />,
    font: true,
  },
  {
    text: "UBA Training",
    path: "#",
    modal: <TrainModal />,
    font: true,
  },
  {
    text: "UBA Social",
    path: "#",
    modal: <SocialModal />,
    font: true,
  },
  {
    text: "Locations & contact",
    path: "/location-contact",
  },
];

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const [showAction, setShowAction] = useState(false);

  const toggleMenu = () => {
    setShowAction(!showAction);
  };

  return (
    <div className="fixed top-0 w-full bg-white shadow z-50">
      {/* Full-screen overlay when the menu is open */}
      {showAction && (
        <section
          id="id"
          className="absolute w-full bg-white h-screen top-0 left-0 text-5xl flex flex-col justify-center items-center z-100" data-aos="slide-left" data-aos-duration="400"
        >
          <button
            className="text-8xl self-end absolute top-0 px-6 text-[#06724b] "
            onClick={toggleMenu}
          >
            &times;
          </button>
          <nav className="text-[#06724b] flex flex-col items-center justify-center gap-5 space-x-4 relative">
            {links.map((link, index) => (
              <div
                key={index}
                onMouseLeave={() => setHovered(null)}
                className={`relative flex gap-3 justify-center items-center`}
              >
                <NavLink
                  to={link.path}
                  className="text-xl font-bold"
                  onClick={!link.modal ? toggleMenu : link.modal}
                
                >
                  {link.text}
                </NavLink>
                {link.font && (
                  <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
                )}
              </div>
            ))}
          </nav>
        </section>
      )}

      <header className="bg-red flex relative justify-between items-center px-10 shadow-md h-20">
        <h1 className="sm:text-3xl text-xl font-extrabold text-[#06724b]">
          <Link to="/">Umar Bun Abdul Aziz</Link>
        </h1>

        <button
          id="hamburger-button"
          className="sm:hidden cursor-pointer text-green-900 focus:outline-none text-4xl border border-2 border-green-900"
          onClick={toggleMenu}
        >
          &#9776;
        </button>

        <nav className="hidden sm:flex space-x-4 relative">
          {links.map((link, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(link.text)}
              onMouseLeave={() => setHovered(null)}
              className={`relative flex justify-center items-center`}
            >
              <NavLink
                to={link.path}
                className="text-lg text-[#06724b] hover:font-bold"
              >
                {link.text}
                {link.font && hovered === link.text ? (
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className="text-[#00a401] font-bold"
                  />
                ) : (
                  link.font && (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="text-[#00a401]"
                    />
                  )
                )}
              </NavLink>

              {hovered === link.text && link.modal && link.modal}
            </div>
          ))}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
