import React from "react";
import "./train.css";
import "aos/dist/aos.css";
import train from "../../assets/about.jpg";
import { Link } from "react-router-dom";

const Train = () => {
  return (
    <section id="training  w-full">
      <div
        className={`sm:w-full h-[550px] sm:h-[750px] relative`}
        data-aos="fade-up"
      >
        <img
          src={train}
          alt="Amalitech Training"
          className="w-full absolute h-[500px] sm:h-[720px] object-cover"
        />
        <div className="bg-black/50 relative w-full h-[500px] sm:h-[720px]"></div>
      </div>
      <div className="max-w-5xl  flex flex-col sm:flex-col gap-10 mx-auto text-center ">
        <h1
          className="sm:font-extrabold font-bold  text-2xl sm:text-5xl  text-[#626F47]"
          data-aos="fade-down"
        >
          UBA Curriculum
        </h1>
        <p className="leading-7 sm:text-lg sm:text-left text-center pb-10">
          Umar Bun Abdul Aziz Islamic Institute runs two main curricula: the
          secular curriculum and the Arabic curriculum. The
          <span className="text-[#626F47] font-bold">
            <Link>secular curriculum</Link>
          </span>
          begins at the nursery level and continues through to Junior High
          School (JHS) three. It covers a wide range of subjects including
          English, Mathematics, Social Studies, Science, and Arabic, ensuring
          students receive a well-rounded education. Alongside this, the{" "}
          <span className="text-text-[#626F47] font-bold">
            <Link>Arabic curriculum</Link>{" "}
          </span>
          focuses on Islamic studies, where students are taught the Seerah
          (biography of the Prophet), Fiqh (Islamic jurisprudence), Tawheed
          (Islamic monotheism), and many other key aspects of Islamic knowledge
          and practice.
        </p>
      </div>
    </section>
  );
};

export default Train;
