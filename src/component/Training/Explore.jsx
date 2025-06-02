import React from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";


const Explore = () => {
  return (
    <>
      <section
        id="expore"
        className="bg-[#626F47] text-white py-10 px-5 sm:px-10 relative w-full"
      >
        <div className="max-w-5xl relative  flex flex-col sm:flex-col gap-10 mx-auto text-center ">
          <div className="flex flex-col sm:flex-row text-center gap-10 justify-center items-center">
            <h1 className="sm:font-extrabold font-bold capitalize pb-5  text-2xl sm:text-5xl">
              Explore our Curriculum programmes in detail
            </h1>
            <p className="sm:text-justify  sm:leading-6 sm:text-lg">
              Discover new opportunities here at Umar Bun Abdul Aziz Islamic
              Institute. We offer intensive training both Islamically and
              academically, and we take pride in the strength and depth of our
              programs.
            </p>
          </div>
        </div>
      </section>
      <div className="flex sm:-mt-5 -mt-4 relative justify-center items-center text-center gap-5 sm:gap-10 flex-col sm:flex-row">
        <div className="  w-[350px] bg-[#707f51] shadow-xl relative px-5 text-center flex justify-center items-center h-30 " data-aos="fade-down">
          <Link className=" border-2 capitalize  border-white px-3 text-white  rounded-lg transition-transform duration-200 ease-in-out hover:scale-110">
            more about Circular education
          </Link>
        </div>
        <div className="  w-[350px] bg-[#707f51] shadow-xl relative px-5 text-center flex justify-center items-center h-30 " data-aos="fade-down">
          <Link className=" border-2 capitalize  border-white px-3 text-white  rounded-lg transition-transform duration-200 ease-in-out hover:scale-110">
            more about arabic education
          </Link>
        </div>
      </div>
    </>
  );
};

export default Explore;
