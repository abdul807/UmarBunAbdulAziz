import React from "react";
import profile from "../../assets/pro1.jpg";
import gado from "../../assets/asistant.jpg"
import razak from "../../assets/malamrazak.jpg"
import abu from "../../assets/abu.jpg"
import "aos/dist/aos.css";

const Conversation = () => {
  return (
    <section id="conversation" className=" bg-[#F4EEFF]" >
      <div className="bg-white text-center py-5 bg-[#F4EEFF] relative w-full">
        <div className="flex flex-col justify-center items-center">
          <h1 className="heading capitalize font-bold text-2xl sm:text-5xl text-center text-[#06724b] p-4" data-aos="fade-down">
            Let us have a conversation
          </h1>
          <div className="flex flex-col justify-center items-center sm:max-w-5xl sm:flex-row sm:flex-wrap gap-5 md:justify-start md:items-start m-10">
            <div data-aos="zoom-in" className="max-w-[500px]">
              <img
                alt="profile"
                src={abu}
                className="w-80 h-90 object-cover"
                srcset=""
              />
              <p className="sm:text-left mt-2 text-[#06724b] font-bold text-center">
                <span className="text-center sm:text-left mt-2 text-[#06724b] font-bold inline-block border-b-2 border-[#06724b] pb-1">
                Sheik
                </span>
                Abubakar Ali Koli
              </p>
              <p className=" text-center sm:text-left mt-2 text-[#06724b] font-bold">
                Propiertor
              </p>
              <button className="border-1 border-[#424874] text-white flex justify-center items-center text-center sm:justify-start sm:items-left mt-3 bg-[#06724b] font-bold px-7 py-2 w-full sm:w-1/2">
                Contact Us
              </button>
            </div>
            <div data-aos="zoom-in" className="max-w-[500px]">
              <img
                alt="profile"
                src={razak}
                className="w-80 h-90 object-cover"
                srcset=""
              />
              <p className="sm:text-left mt-2 text-[#06724b] font-bold text-center">
                <span className="text-center sm:text-left mt-2 text-[#06724b] font-bold inline-block border-b-2 border-[#06724b] pb-1">
                  Sheik
                </span>
                Abdul Razak Mohammed Umar
              </p>
              <p className=" text-center sm:text-left mt-2 text-[#06724b] font-bold">
                Headmaster
              </p>
              <button className="border-1 border-[#00a401] text-white flex justify-center items-center text-center sm:justify-start sm:items-left mt-3 bg-[#06724b] font-bold px-7 py-2 w-full sm:w-1/2">
                Contact Us
              </button>
            </div>
            <div data-aos="zoom-in" className="max-w-[500px]">
              <img
                alt="profile"
                src={gado}
                className="w-80 h-90 object-cover"
                srcset=""
              />
              <p className="sm:text-left mt-2 text-[#06724b] font-bold text-center">
                <span className="text-center sm:text-left mt-2 text-[#06724b] font-bold inline-block border-b-2 border-[#06724b] pb-1">
                  Sheik
                </span>
                Mohammed Hafiz
              </p>
              <p className=" text-center sm:text-left mt-2 text-[#06724b] font-bold">
                Asst. Headmaster
              </p>
              <button className="border-1 border-[#00a401] text-white flex justify-center items-center text-center sm:justify-start sm:items-left mt-3 bg-[#06724b] font-bold px-7 py-2 w-full sm:w-1/2">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conversation;
