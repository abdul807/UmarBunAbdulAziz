import React from "react";
import image1 from "../../assets/picutere.jpg";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";



const SocialModal = () => {
  return (
    <div className="bg-white  rounded-lg shadow-xl left-60 fixed top-13 text-white flex justify-start gap-10 mx-auto items-start min-w-[1000px] py-10 px-10 min-h-60 z-50 flex" data-aos="fade-in">
      <div className="image  w-100">
        <img src={image1} alt="" srcset="" />
      </div>
      <div className="informationlinks text-black sm:flex sm:flex-col gap-5">
        <h1 className="sm:text-3xl text-xl font-extrabold text-[#06724b]">UBA Social</h1>
        <ul>
          <Link to="/gallery" className="hover:text-green-800 cursor-pointer">Gallery</Link>
          <li className="">Events</li>
          <li className="">Social Media</li>
         
        </ul>
       
      </div>
    </div>
  );
};

export default SocialModal;
