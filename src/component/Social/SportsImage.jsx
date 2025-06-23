import React from "react";
import topImage from "../../assets/ball.jpg";

const SportsImage = () => {
  return (
    <section className="">
      <div
        className={`max-w-5xl mx-auto -mb-60 sm:mb-0 flex text-center`}
        data-aos="zoom-in"
      >
        <div>
          {" "}
          <img
            src={topImage}
            alt="Sports"
            className="w-full mb-15  h-[400px] object-cover rounded-lg shadow-lg"
          />
          <h1 className="text-3xl font-bold text-[#06724b] uppercase mt-5">
            {" "}
            Athletics
          </h1>
          <p className="text-lg mt-2 px-5" data-aos="ease-in">
            At UBA, athletics play a vital role in shaping well-rounded
            individuals, fostering teamwork, discipline, and perseverance. Our
            sports programs are designed to encourage physical fitness, promote
            healthy competition, and instill a sense of unity among students.
            Whether participating in team sports or individual activities, our
            athletes develop not only their physical strength but also valuable
            life skills such as leadership, time management, and resilience. We
            believe that through athletics, students learn the importance of
            commitment, hard work, and pushing through challenges, which helps
            them excel both on and off the field. UBA’s athletic programs are
            more than just about winning; they are about building character,
            inspiring confidence, and promoting a balanced, active lifestyle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SportsImage;
