import React from "react";
import image1 from "../../assets/picutere.jpg";


const TrainModal = () => {
  return (
    <div className="bg-[#F4EEFF] rounded-lg shadow-lg left-60 fixed top-20 text-white flex justify-start gap-10 mx-auto items-start min-w-[1000px] py-10 px-10 min-h-60 z-100 flex">
      <div className="image  w-70">
        <img src={image1} alt="" srcset="" />
      </div>
      <div className="informationlinks text-black sm:flex sm:flex-col gap-5">
        training
      </div>
    </div>
  );
};

export default TrainModal;
