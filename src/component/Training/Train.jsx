import React from "react";
import "./train.css";
import "aos/dist/aos.css";
import train from "../../assets/about.jpg";
import { Link } from "react-router-dom";

const Train = () => {
  return (
    <section id="training  w-full">
      <div className="sm:w-full h-[550px] relative">
        <img
          src={train}
          className=" object-cover w-full h-[500px]"
          alt=""
          srcset=""
        />
      </div>
      <div className="max-w-5xl  flex flex-col sm:flex-col gap-10 mx-auto text-center ">
        <h1
          className="sm:font-extrabold font-bold  text-2xl sm:text-5xl  text-[#06724b]"
          data-aos="fade-down"
          
        >
          UBA Curriculum
        </h1>
        <p className="leading-7 sm:text-lg sm:text-left text-center pb-10">
          Umar Bun Abdul Aziz Islamic Institute runs two main curricula: the
        
            Circular curriculum
          
          and the Arabic curriculum. The
          <span className="text-[#06724b] font-bold">
            {" "}
            <Link>Circular curriculum</Link>{" "}
          </span>{" "}
          begins at the nursery level and continues through to Junior High
          School (JHS) three. It covers a wide range of subjects including
          English, Mathematics, Social Studies, Science, and Arabic, ensuring
          students receive a well-rounded education. Alongside this, the{" "}
          <span className="text-[#06724b] font-bold">
            {" "}
            <Link>Arabic curriculum</Link>{" "}
          </span>{" "}
          focuses on Islamic studies, where students are taught the Seerah
          (biography of the Prophet), Fiqh (Islamic jurisprudence), Tawheed
          (Islamic monotheism), and many other key aspects of Islamic knowledge
          and practice.
        </p>

        {/* <div className=" text-center p-5 -mt-20 sm:-mt-4 leading-7 bg-[#DCD6F7] shadow-xl  hover:scale-105  transition-transform duration-300 ease-in-out">
          <h1 className="uppercase font-bold text-[#424874]">Free Tech Training</h1>
          <p className="sm:text-justify text-[#424874] sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            inventore autem earum illo dolores rem non quaerat veniam atque!
            Incidunt neque quam quisquam adipisci exercitationem ullam quos
            fugit temporibus modi!
          </p>
        <button className="border-1 border-[#424874] text-[#424874] text-lg px-5 mt-2 py-3 rounded-lg font-bold cursor-pointer flex justify-center items-center mx-auto">Learn More</button>
        </div> */}

        {/* <div className="bg-[#DCD6F7] shadow-xl gap-2 text-center p-5 -mt-4 leading-7 bg-[#DCD6F7]  hover:scale-105  transition-transform duration-300 ease-in-out">
          <h1 className="uppercase font-bold text-[#424874]">Free Tech Training</h1>
          <p className="sm:text-justify text-[#424874]  sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            inventore autem earum illo dolores rem non quaerat veniam atque!
            Incidunt neque quam quisquam adipisci exercitationem ullam quos
            fugit temporibus modi!
          </p>
        <button className="border-1 border-[#424874] text-[#424874] text-lg px-5 mt-2 py-3 rounded-lg font-bold cursor-pointer flex justify-center items-center mx-auto">Learn More</button>
        </div> */}
      </div>
    </section>
  );
};

export default Train;
