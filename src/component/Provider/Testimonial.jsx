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

        <div className="flex sm:flex-row flex-col mb-20 justify-center items-center gap-5">
          <div className="sm:w-1/2 h-full flex flex-col justify-center items-center text-center">
            <blockquote>
              <p
                className="sm:text-justify p-5 sm:leading-7 sm:text-lg"
                data-aos="slide-right"
              >
                UBA has truly shaped me into a better human being—both in my
                Islamic faith and in worldly matters. During my time here, I had
                the opportunity to memorize the entire Qur'an, study numerous
                hadiths, and learn deeply about the life and teachings of the
                Holy Prophet Muhammad (peace be upon him). UBA has provided me
                with more than just knowledge; it has nurtured my character,
                discipline, and purpose. I wholeheartedly recommend this great
                institution to anyone seeking both academic excellence and
                spiritual growth. UBA – Children Today, Leaders Tomorrow.
              </p>
              <footer>
                <strong className="text-[#00a401] ">Farid Alhassan</strong>
              </footer>
              <p>
                <em>UBA – Children Today, Leaders Tomorrow.</em>
              </p>
            </blockquote>
          </div>
          <div className="sm:w-1/2 h-full" data-aos="zoom-in">
            {" "}
            <img
              src={proImage}
              alt="Provider"
              className="w-80 h-90 object-cover"
            />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col mb-20 justify-center items-center gap-5">
          <div className="sm:w-1/2 h-full flex flex-col justify-center items-center text-center sm:mb-30">
            <blockquote>
              <p
                className="sm:text-justify p-5 sm:leading-8 sm:text-lg"
                data-aos="zoom-in"
              >
                UBA has truly shaped me into a better human being—both in my
                Islamic faith and in worldly matters. During my time here, I had
                the opportunity to memorize the entire Qur'an, study numerous
                hadiths, and learn deeply about the life and teachings of the
                Holy Prophet Muhammad (peace be upon him). UBA has provided me
                with more than just knowledge; it has nurtured my character,
                discipline, and purpose. I wholeheartedly recommend this great
                institution to anyone seeking both academic excellence and
                spiritual growth. UBA – Children Today, Leaders Tomorrow.
              </p>
              <footer>
                <strong className="text-[#00a401] text-center">
                  Ayisha Ali Yaroo
                </strong>
              </footer>
              <p>
                <em>UBA – Children Today, Leaders Tomorrow.</em>
              </p>
            </blockquote>
          </div>
          <div className="sm:w-1/2 h-full" data-aos="slide-right">
            {" "}
            <img
              alt="profile"
              src={girl}
              className="w-80 h-90 object-cover"
              srcset=""
            />
          </div>
        </div>
      </div>
    </section>
    // <section>
    //   <div className="max-w-5xl bg-white  mx-auto">
    //     <h1 className="capitalize text-center sm:mt-5 leading-10 text-2xl sm:text-5xl text-[#06724b]   mb-5 font-extrabold">
    //       Testimonials
    //     </h1>
    //   </div>
    //   <div className="flex flex-col justify-center items-center gap-5">
    //     <div className="flex justify-center items-center gap-10">
    //       <div className="sm:w-1/2">
    // <blockquote>
    //   <p className="sm:text-justify sm:leading-8 sm:text-lg">
    //     UBA has truly shaped me into a better human being—both in my
    //     Islamic faith and in worldly matters. During my time here, I had
    //     the opportunity to memorize the entire Qur'an, study numerous
    //     hadiths, and learn deeply about the life and teachings of the
    //     Holy Prophet Muhammad (peace be upon him). UBA has provided me
    //     with more than just knowledge; it has nurtured my character,
    //     discipline, and purpose. I wholeheartedly recommend this great
    //     institution to anyone seeking both academic excellence and
    //     spiritual growth. UBA – Children Today, Leaders Tomorrow.
    //   </p>
    //   <footer>
    //     <strong className="text-[#00a401]">Farid Alhassan</strong>
    //   </footer>
    //   <p>
    //     <em>UBA – Children Today, Leaders Tomorrow.</em>
    //   </p>
    // </blockquote>
    //       </div>
    //       <div className="image  " data-aos="fade-left">

    //       </div>
    //     </div>
    //     <div>second</div>
    //   </div>
    // </section>
    // <section id="provider">
    //   <div className="max-w-5xl bg-white  mx-auto ">
    //     <div className="info sm:w-1/2" data-aos="fade-right">
    //       <h1 className="capitalize text-center leading-10 text-2xl sm:text-5xl text-[#00a401]   mb-5 font-extrabold">
    //         Testimonials
    //       </h1>
    //     </div>
    //     <div className="flex flex-col sm:flex-row gap-20 items-center justify-center m-4 p-5">

    //     </div>

    //   </div>
    // </section>
  );
};

export default Testimonial;
