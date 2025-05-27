import React from "react";
import topImage from "../../assets/bignew.jpeg";

const SportsImage = () => {
  return (
    <section className="">
      <div className={`sm:w-full h-[750px] relative`} data-aos="zoom-in">
        <img
          src={topImage}
          alt="Amalitech Training"
          className="w-full absolute h-[500px] sm:h-[600px]  object-cover"
        />
        <div className="bg-black/50 relative w-full h-[500px] sm:h-[600px]"></div>
      </div>
    </section>
  );
};

export default SportsImage;
