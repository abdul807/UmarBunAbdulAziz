import React from "react";

import construction from "../../assets/construction.svg";
import { NavLink, Outlet } from "react-router-dom";

const Atletic = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-10 items-center justify-center h-screen">
      <div className="flex sm:mt-50 mt-150  sm:mb-10  flex-row justify-center items-center gap-5">
        <NavLink
          to="community"
          className={({ isActive }) =>
            isActive
              ? " text-[#06724b] px-2 font-bold border-b-5"
              : "text-[#06724b] capitalize"
          }
        >
          Community
        </NavLink>
        <NavLink
          to="athletics"
          className={({ isActive }) =>
            isActive
              ? " text-[#06724b] px-2 font-bold border-b-5"
              : "text-[#06724b] capitalize"
          }
        >
          Sports
        </NavLink>
        {/* <NavLink>Sports</NavLink> */}
      </div>
      <Outlet />
    </div>

    // <div className="h-screen flex sm:flex-col items-center justify-center ">
    //   <div className={`sm:w-full h-[750px] relative`} data-aos="zoom-in">
    //     <img
    //       src={topImage}
    //       alt="Amalitech Training"
    //       className="w-full absolute h-[500px] sm:h-[800px]  object-cover"
    //     />
    //     <div className="bg-black/50 relative w-full h-[500px] sm:h-[600px]"></div>
    //   </div>
    //   <div className="max-w-5xl relative">
    //     {" "}
    //     <p className="leading-7 sm:text-lg sm:text-left text-center relative mt-50  mb-100 pt-10 pb-30">
    //       At UBA, we believe that health is wealth. That’s why we prioritize the
    //       physical and mental well-being of our students through regular
    //       exercise and engaging sports activities. These initiatives not only
    //       help sharpen the mind and strengthen the body but also create a
    //       vibrant, supportive community. By promoting teamwork and healthy
    //       competition, our programs build strong bonds between students and
    //       staff, while also encouraging positive interactions with neighboring
    //       schools. At UBA, we nurture the whole student — mind, body, and
    //       spirit.
    //     </p>
    //   </div>
    // </div>
    // text-[#06724b]
    // <section id="testimonials" className="mt-30 min-h-screen ">
    //   <div className="max-w-5xl mx-auto bg-white   flex flex-col justify-center items-center">

    //     <div className="flex sm:flex-row flex-col mb-20 justify-center items-center sm:gap-5">
    //       <div className="sm:w-1/3 h-full" data-aos="zoom-in">
    //         {" "}
    //         <img
    //           src={ball}
    //           alt="Provider"
    //           className="w-full h-130 object-contain sm:rotate-45"
    //         />
    //       </div>
    //       <div className="sm:w-1/3 h-full" data-aos="zoom-in">
    //         {" "}
    //         <img
    //           src={ball}
    //           alt="Provider"
    //           className="w-full h-130 object-contain sm:-rotate-45"
    //         />
    //       </div>
    //       <div className="sm:w-1/3 h-full" data-aos="zoom-in">
    //         {" "}
    //         <img
    //           src={ball}
    //           alt="Provider"
    //           className="w-full h-130 object-contain sm:rotate-45"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Atletic;
