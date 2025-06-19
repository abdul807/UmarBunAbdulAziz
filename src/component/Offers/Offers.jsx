import React from "react";

import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown} from '@fortawesome/free-brands-svg-icons'; // Import the Facebook icon
import {
  faPalette,
  faMosque,
  faTicket,
  faMedal,

  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import "./Offers.css"; // Import your CSS file for styling
import { faServicestack } from "@fortawesome/free-brands-svg-icons";

const Offers = () => {
  // text-[#00a401] - deep green
  // text-[#a7c263] -light green

  return (
    <section className="-mt-50 sm:mt-20 p-2 sm:mb-20" id="about">
      <div className="max-w-5xl flex flex-col sm:flex-row justify-center items-center sm:items-start gap-10 mx-auto text-center ">
        <div className="sm:w-1/3" data-aos="zoom-in">
          <div className="heading">
            <h1 className="capitalize border-b-3 pb-4 border-[#06724b] mb-5 text-center  text-3xl sm:text-left text-[#06724b]  ">
              welcome!
            </h1>
          </div>
          <p className="leading-7 sm:text-lg sm:text-left text-center">
            Umar Bun Abdul Aziz Islamic Institute is a non-profit organization
            dedicated to providing quality Islamic education and community
            services. Our mission is to promote the teachings of Islam, foster a
            sense of community, and empower individuals through knowledge and
            spiritual growth. We offer a range of programs including Quranic
            studies, Arabic language courses, and community outreach
            initiatives. Our dedicated team works tirelessly to create a
            welcoming environment for all, ensuring that everyone has access to
            the resources they need to thrive.
          </p>
          <Link className="hover:text-white transition-colors duration-200 cursor-pointer capitalize border-1 border-[#424874] text-white flex justify-center items-center text-center sm:justify-start sm:items-left mt-3 bg-[#06724b] font-bold px-7 py-2 shadow-5xl w-full sm:w-2/3 rounded-xl">
            Learn more about us
          </Link>
        </div>

        <div className="sm:w-2/3 flex sm:flex-row flex-col flex-wrap text-wrap h-full items-stretch">
          <div className="flex-1">
            <Link
              to="/training"
              className="cursor-pointer border-r-1  border-gray-200 sm:w-full border-b-1 flex justify-center items-center gap-2"
              data-aos="zoom-in"
            >
              <div className="icon">
                <FontAwesomeIcon
                  icon={faTicket}
                  className="text-5xl text-[#06724b]"
                />
              </div>
              <div className="message text-left text-lg leading-5">
                <h1 className="text-center font-bold text-lg text-start pt-2">
                  Admissions
                </h1>
                <p className="text-lg w-60 sm:break-words p-5">
                  Contact on ubaislamicinstitute@gmail.com. Click here to apply.
                </p>
              </div>
            </Link>
            <Link
              to="/training"
              data-aos="zoom-in"
              className="cursor-pointer border-r-1  border-gray-200 sm:w-full border-b-1 flex justify-center items-center gap-2"
            >
              <div className="icon">
                <FontAwesomeIcon
                  icon={faMosque}
                  className="text-5xl text-[#06724b]"
                />
              </div>
              <div className="message text-left text-lg leading-5">
                <h1 className="text-center font-bold text-lg text-start pt-2">
                  Curriculum
                </h1>
                <p className="text-lg w-60 sm:text-wrap p-5">
                  Click here to learn more about the curriculum that covers both
                  Arabic and secular subjects
                </p>
              </div>
            </Link>
            <div
              data-aos="zoom-in"
              className="border-r-1  border-gray-200 sm:w-full border-b-1 flex justify-center items-center gap-2"
            >
              <div className="icon">
                <FontAwesomeIcon
                  icon={faPalette}
                  className="text-5xl text-[#06724b]"
                />
              </div>
              <div className="message text-left text-lg leading-5">
                <h1 className="text-center font-bold text-lg text-start pt-2">
                  Arts
                </h1>
                <p className="text-lg w-60 sm:text-wrap p-5">
                  Here you can see how creative UBA students are in poetry and
                  recitation of Holy Quran.
                </p>
              </div>
            </div>
            <Link to="social/athletics">
              <div
                data-aos="zoom-in"
                className="border-r-1  border-gray-200 sm:w-full border-b-1 flex justify-center items-center gap-2"
              >
                <div className="icon">
                  <FontAwesomeIcon
                    icon={faMedal}
                    className="text-5xl text-[#06724b]"
                  />
                </div>
                <div className="message text-left text-lg leading-5">
                  <h1 className="text-center font-bold text-lg text-start pt-2">
                    Atletics
                  </h1>
                  <p className="text-lg w-60 sm:text-wrap p-5">
                    Click here for UBa Athletics information including
                    Inter-Organization event information.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex-1">
            <div
              data-aos="zoom-in"
              className="border-r-1  border-gray-200 sm:w-full border-b-1 flex justify-center items-center gap-2"
            >
              <div className="icon">
                <FontAwesomeIcon
                  icon={faUsers}
                  className="text-5xl text-[#06724b]"
                />
              </div>
              <div className="message text-left text-lg leading-5">
                <h1 className="text-center font-bold text-lg text-start pt-2">
                  Community
                </h1>
                <p className="text-lg w-60 sm:text-wrap p-5">
                  Find out about our active Parent Teacher Organization,
                  community and get involved.
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              className="border-r-1  border-gray-200 sm:w-full border-b-1 flex justify-center items-center gap-2"
            >
              <div className="icon">
                <FontAwesomeIcon
                  icon={faServicestack}
                  className="text-5xl text-[#06724b]"
                />
              </div>
              <div className="message text-left text-lg leading-5">
                <h1 className="text-center font-bold text-lg text-start pt-2">
                  Service
                </h1>
                <p className="text-lg w-60 sm:text-wrap p-5">
                  Service Learning is an important part of LCS. Find out more
                  here and everything.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
