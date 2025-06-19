import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import "aos/dist/aos.css";

import "./navbar.css";

const links = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "About UBA",
    path: "/about",

    font: true,
  },
  {
    text: "UBA Curriculum",
    path: "/training",

    font: true,
  },
  {
    text: "UBA Social",
    path: "/social/community",

    font: true,
  },
  {
    text: "Locations & contact",
    path: "/location-contact",
  },
];

const Navbar = () => {
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
          className="absolute w-full bg-white h-screen top-0 left-0 text-5xl flex flex-col justify-center items-center z-100"
          data-aos="slide-left"
          data-aos-duration="400"
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
                className={`relative flex gap-3 justify-center items-center`}
              >
                <NavLink to={link.path} className="text-xl font-bold">
                  {link.text}
                </NavLink>
              </div>
            ))}
          </nav>
        </section>
      )}

      <header className="bg-red flex relative justify-between items-center px-10 shadow-lg h-20">
        <h1 className="lg:text-3xl text-xl font-extrabold text-[#06724b]">
          <Link to="/">UBA Islamic Institute</Link>
        </h1>

        <button
          id="hamburger-button"
          className="lg:hidden cursor-pointer text-green-900 focus:outline-none text-4xl border border-2 border-green-900"
          onClick={toggleMenu}
        >
          &#9776;
        </button>

        <nav className="hidden lg:flex space-x-4 relative">
          {links.map((link, index) => (
            <div
              key={index}
              className={`relative flex justify-center items-center`}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? " text-[#06724b] px-2 font-bold border-b-5"
                    : "text-[#06724b]"
                }
              >
                {link.text}
              </NavLink>
            </div>
          ))}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
