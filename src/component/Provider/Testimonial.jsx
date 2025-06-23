import React from "react";
import proImage from "../../assets/yourman.jpg";
import girl from "../../assets/girl2.jpg";
import "aos/dist/aos.css";
const Testimonial = () => {
  return (
    <section id="testimonials" className=" sm:-mt-30 sm:-mb-30  ">
      <div className="max-w-5xl bg-white  mx-auto flex flex-col justify-center items-center">
        <div className="heading p-5 sm:mt-10">
          <h1
            className="sm:font-extrabold font-bold  text-2xl sm:text-5xl  text-[#06724b]"
            data-aos="fade"
            data-aos-duration="200"
          >
            Testimonials{" "}
          </h1>
        </div>

        <div className="flex sm:flex-row flex-col mb-20 justify-center items-start gap-5">
          <div className="sm:w-1/2 h-full flex flex-col justify-center items-start text-center">
            <blockquote>
              <p
                className="sm:text-justify p-5 sm:leading-7 sm:text-lg"
                data-aos="slide-right"
              >
                UBA has truly shaped me into a better human being—both in my
                Islamic faith and in worldly matters. During my time here, I had
                the immense privilege of memorizing the entire Qur'an, studying
                numerous hadiths, and gaining a deep understanding of the life
                and teachings of the Holy Prophet Muhammad (peace be upon him).
                UBA has not only provided me with valuable knowledge but has
                also nurtured my character, discipline, and sense of purpose in
                ways I never anticipated. The institution has instilled in me a
                strong sense of responsibility, compassion, and ethical conduct,
                teaching me that true success is not just about academic
                achievement but also about striving to be a better person in all
                aspects of life. Through UBA’s guidance, I have learned how to
                navigate the challenges of this world while staying true to my
                faith, cultivating a balance between worldly pursuits and
                spiritual development. The environment at UBA is one of growth,
                encouragement, and respect, where each student is empowered to
                excel academically while also developing a strong moral compass.
                The teachers, who are not only knowledgeable but also deeply
                compassionate, guide us in not just seeking knowledge but also
                in embodying the values of patience, humility, and service to
                others. UBA has provided me with a solid foundation for the
                future, and I now feel prepared to contribute meaningfully to
                society, serving as a responsible, ethical, and principled
                leader. I wholeheartedly recommend this esteemed institution to
                anyone seeking both academic excellence and spiritual growth.
                UBA – Children Today, Leaders Tomorrow. This institution doesn’t
                just shape minds; it nurtures hearts, builds leaders, and
                empowers us to make a positive difference in the world.
              </p>
              <footer>
                <strong className="text-[#06724b] ">Farid Alhassan</strong>
              </footer>
              <p>
                <em>UBA – Children Today, Leaders Tomorrow.</em>
              </p>
            </blockquote>
          </div>
          <div className="sm:w-1/2 h-full" data-aos="zoom-in">
            {" "}
            <img src={proImage} alt="Provider" className=" object-cover" />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col mb-20 justify-center items-start gap-5">
          <div className="sm:w-1/2 h-full flex flex-col justify-center items-start text-center sm:mb-30">
            <blockquote>
              <p
                className="sm:text-justify p-5 sm:leading-8 sm:text-lg"
                data-aos="slide-right"
              >
                I am a student at UBA Islamic Institute. I am incredibly
                grateful for the opportunity to be part of this wonderful
                institution. UBA Islamic Institute has provided me with a
                nurturing and enriching environment where I can grow both
                academically and personally. The teachers and staff are not only
                knowledgeable but also deeply committed to our success. They
                create an atmosphere that encourages learning, reflection, and
                personal development. The integration of Islamic values into the
                curriculum has been particularly impactful, guiding me in both
                my studies and my everyday life. What stands out most about UBA
                Islamic Institute is its sense of community. The institute
                fosters a warm and supportive environment where every student is
                valued. I have made lifelong friends here and received
                mentorship that has helped shape my future aspirations. I am
                truly grateful for everything UBA Islamic Institute has offered
                me and would highly recommend it to anyone looking for a place
                to grow, learn, and be inspired. It has been a transformative
                experience, and I am proud to be part of this incredible
                institution UBA – Children Today, Leaders Tomorrow.
              </p>
              <footer>
                <strong className="text-[#06724b] text-center">
                  Ayisha Ali Yaroo
                </strong>
              </footer>
              <p>
                <em>UBA – Children Today, Leaders Tomorrow.</em>
              </p>
            </blockquote>
          </div>
          <div className="sm:w-1/2 h-full" data-aos="zoom-in" >
            {" "}
            <img
              alt="profile"
              src={girl}
              className="  object-cover"
              srcset=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
