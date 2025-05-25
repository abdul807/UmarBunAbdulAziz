import React from "react";
import image1 from "../../assets/picutere.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-[#F4EEFF] rounded-lg shadow-lg left-60 fixed top-20 text-white flex justify-start gap-10 mx-auto items-start min-w-[1000px] py-10 px-10 min-h-60 z-100 flex">
      <div className="image  w-70">
        <img src={image1} alt="" srcset="" />
      </div>
      <div className="informationlinks text-black sm:flex sm:flex-col gap-5">
        <Link className="font-bold text-2xl">About UbaTech</Link>
        <Link className="hover:text-[#424874] font-semibold"> Our Values</Link>
        <Link className="hover:text-[#424874] font-semibold">
          Empowering Inclusion
        </Link>
        <Link className="hover:text-[#424874] font-semibold">
          Media Coverage & Press
        </Link>
        <Link className="hover:text-[#424874] font-semibold">Insights</Link>
      </div>
    </div>
  );
};

export default About;
