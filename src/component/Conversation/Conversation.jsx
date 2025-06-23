import React, { useState } from "react";

import gado from "../../assets/asistant.jpg";
import razak from "../../assets/malamrazak.jpg";
import abu from "../../assets/abu.jpg";
import "aos/dist/aos.css";
import Modal from "./Modal";

const Conversation = () => {

  const [showAction, setShowAction] = useState(false);

  const toggleMenu = () => {
    setShowAction(!showAction);
  };

  return (
    <section id="conversation" className=" bg-[#F4EEFF]">
      {showAction && <Modal show={showAction} setShow={setShowAction} />}
      <div className="bg-white text-center py-5 bg-[#F4EEFF] relative w-full">
        <div className="flex flex-col justify-center items-center">
          <h1
            className="heading capitalize font-bold text-2xl lg:text-5xl text-center text-[#06724b] p-4"
            data-aos="fade-down"
          >
            Let us have a conversation
          </h1>
          <div className="flex flex-col justify-center items-center lg:max-w-5xl lg:flex-row lg:flex-wrap gap-5 md:justify-start md:items-start m-10">
            <div data-aos="zoom-in" className="max-w-[500px]">
              <img
                alt="profile"
                src={abu}
                className="w-80 h-90 object-cover"
                srcset=""
              />
              <p className="lg:text-left mt-2 text-[#06724b] font-bold text-center">
                <span className="text-center lg:text-left mt-2 text-[#06724b] font-bold inline-block border-b-2 border-[#06724b] pb-1">
                  Sheik
                </span>
                Abubakar Ali Koli
              </p>
              <p className=" text-center lg:text-left mt-2 text-[#06724b] font-bold">
                Propiertor
              </p>
              {/* <button className="border-1 border-[#424874] text-white flex justify-center items-center text-center lg:justify-start lg:items-left mt-3 bg-[#06724b] font-bold px-7 py-2 w-full lg:w-1/2">
                Contact Us
              </button> */}
            </div>
            <div data-aos="zoom-in" className="max-w-[500px]">
              <img
                alt="profile"
                src={razak}
                className="w-80 h-90 object-cover"
                srcset=""
              />
              <p className="lg:text-left mt-2 text-[#06724b] font-bold text-center">
                <span className="text-center lg:text-left mt-2 text-[#06724b] font-bold inline-block border-b-2 border-[#06724b] pb-1">
                  Sheik
                </span>
                Abdul Razak Mohammed Umar
              </p>
              <p className=" text-center lg:text-left mt-2 text-[#06724b] font-bold">
                Headmaster
              </p>
              {/* <button className="border-1 border-[#00a401] text-white flex justify-center items-center text-center lg:justify-start lg:items-left mt-3 bg-[#06724b] font-bold px-7 py-2 w-full lg:w-1/2">
                Contact Us
              </button> */}
            </div>
            <div data-aos="zoom-in" className="max-w-[500px] backdrop-blur-md">
              <img
                alt="profile"
                src={gado}
                className="w-80 h-90 object-cover"
                srcset=""
              />
              <p className="lg:text-left mt-2 text-[#06724b] font-bold text-center">
                <span className="text-center lg:text-left mt-2 text-[#06724b] font-bold inline-block border-b-2 border-[#06724b] pb-1">
                  Sheik
                </span>
                Mohammed Hafiz
              </p>
              <p className=" text-center lg:text-left mt-2 text-[#06724b] font-bold">
                Asst. Headmaster
              </p>
              {/* <button className="border-1 border-[#00a401] text-white flex justify-center items-center text-center lg:justify-start lg:items-left mt-3 bg-[#06724b] font-bold px-7 py-2 w-full lg:w-1/2">
                Contact Us
              </button> */}
            </div>
          </div>
        </div>
        <div className="max-w-sm mx-auto text-center mb-10">
          <button
            className="cursor-pointer capitalize  text-white  text-center mt-3 bg-[#06724b] font-bold px-7 py-2 shadow-5xl w-full  rounded-xl"
            onClick={toggleMenu}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Conversation;
