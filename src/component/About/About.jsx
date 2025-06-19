import React from "react";
import about from "../../assets/about2.jpg";
import construction from "../../assets/construction.svg"; // Assuming the image is in the assets folder

const About = () => {
  return (
    <div>
      <div className={`sm:w-full h-full sm:-mb-30 -mb-120 sm:h-[750px] relative`} data-aos="fade-up">
        <img
          src={about}
          alt="Amalitech Training"
          className="w-full absolute h-[700px] sm:h-[840px] object-cover"
        />
        <div className="bg-black/50 relative w-full h-[700px] sm:h-[840px]"></div>
       
        <h1 className="sm:leading-20 text-white p-5   uppercase sm:text-left font-extrabold text-6xl sm:text-9xl w-100 absolute top-50 sm:top-25 sm:right-15">
          It is about time you know us
        </h1>
      </div>
    </div>
    // <div className="h-screen flex sm:flex-col items-center sm:mt-10 justify-center pb-20 ">

    //   <div className="  h-screen">

    //   </div>
    // </div>
  );
};

export default About;
