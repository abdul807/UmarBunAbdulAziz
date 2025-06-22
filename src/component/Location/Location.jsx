import React from "react";
import MapComponent from "../Map/MapComponent";

// import construction from "../../assets/construction.svg";

const Location = () => {
  return (
    <section className="h-screen sm:mt-50 mt-30">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col text-center sm:flex-row  sm:items-start justify-center">
          <h1 className="sm:w-1/2 text-[#06724b] font-extrabold capitalize mb-5 text-2xl text-center sm:text-3xl">
            Akim Oda office
          </h1>
          <p className="text-lg sm:w-1/2  ">
            The Akim Oda office serves as our main office. Here, you can access
            comprehensive information about the institution, including both
            secular and Islamic studies, as well as details about all our
            programs. The office is open at all times for your convenience. We
            also hold in-person meetings, and marriage counseling services are
            available here.
          </p>
        </div>
        <div className="mt-10">
          <MapComponent />
        </div>
      </div>
    </section>
  );
};

export default Location;
