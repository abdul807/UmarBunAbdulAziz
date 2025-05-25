import React from "react";
import logo from "../../assets/logo.jpg";
import ball from "../../assets/ball.jpg";

const Atletic = () => {
  return (
    // text-[#06724b]
    <section id="testimonials" className="mt-30 ">
      <div className="max-w-5xl bg-white  mx-auto flex flex-col justify-center items-center">
        <p className="leading-7 sm:text-lg sm:text-left text-center">
          At UBA, we believe that health is wealth. That’s why we prioritize the
          physical and mental well-being of our students through regular
          exercise and engaging sports activities. These initiatives not only
          help sharpen the mind and strengthen the body but also create a
          vibrant, supportive community. By promoting teamwork and healthy
          competition, our programs build strong bonds between students and
          staff, while also encouraging positive interactions with neighboring
          schools. At UBA, we nurture the whole student — mind, body, and
          spirit.
        </p>
        <div className="flex sm:flex-row flex-col mb-20 justify-center items-center sm:gap-5">
          <div className="sm:w-1/3 h-full" data-aos="zoom-in">
            {" "}
            <img
              src={ball}
              alt="Provider"
              className="w-full h-130 object-contain sm:rotate-45"
            />
          </div>
          <div className="sm:w-1/3 h-full" data-aos="zoom-in">
            {" "}
            <img
              src={ball}
              alt="Provider"
              className="w-full h-130 object-contain sm:-rotate-45"
            />
          </div>
          <div className="sm:w-1/3 h-full" data-aos="zoom-in">
            {" "}
            <img
              src={ball}
              alt="Provider"
              className="w-full h-130 object-contain sm:rotate-45"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Atletic;
