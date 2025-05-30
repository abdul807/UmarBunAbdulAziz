import React from "react";
import construction from "../../assets/construction.svg"; // Assuming the image is in the assets folder

const About = () => {
  return (
    <div className="h-screen flex sm:flex-col items-center sm:mt-50 justify-center sm:mb-20 ">
      {" "}
      <div className="max-w-5xl mx-auto flex flex-col gap-10 items-center justify-center  h-screen">
        <img src={construction} alt="" srcset="" />
        <h3 className="text-xl">Page Under Construction</h3>
      </div>
    </div>
  );
};

export default About;
