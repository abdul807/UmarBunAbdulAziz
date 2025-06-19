import React from "react";
import MapComponent from "../Map/MapComponent";

// import construction from "../../assets/construction.svg";

const Location = () => {
  return (
    <section className="h-screen sm:mt-50 mt-30">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col text-center sm:flex-row  sm:items-start justify-center">
          <h1 className="sm:w-1/2 font-bold capitalize mb-5 text-xl text-center sm:text-3xl">Akim Oda office</h1>
          <p className="text-lg sm:w-1/2  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Consectetur, vitae ipsum porro fugit vero nobis fugiat quos,
            natus laboriosam, voluptas corrupti? Error, molestias maxime
            dolorem, commodi eligendi sed adipisci, cum fugit vitae at fugiat
            provident unde quae non eveniet eos obcaecati magnam dolorum?
            Dignissimos numquam amet quibusdam, atque tempore similique.
          </p>
        </div>
        <div className="mt-10">
          <MapComponent />
        </div>
      </div>
    </section>
    // <div className="h-screen flex sm:flex-col items-center  justify-center mb-20 ">
    //   {" "}
    //   <div className="max-w-5xl mx-auto flex flex-col gap-10 items-center justify-center  h-screen">
    //     <img src={construction} alt="" srcset="" />
    //     <h3 className="text-xl">Page Under Construction</h3>
    //   </div>
    // </div>
  );
};

export default Location;
