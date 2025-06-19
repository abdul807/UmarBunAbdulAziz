import React from "react";
import school from "../../assets/school.jpg"

const Address = () => {
  return (
    <section className="sm:mt-10 sm:mb-50 -mb-70 mt-50">
      <div className="max-w-5xl mx-auto  grid grid-cols-1 place-items-center sm:grid-cols-4 gap-10">
        <div className="">
          <img src={school} alt="" srcset=""
          className="h-40 object-contain" />
        </div>
        <div>
          <h1 className="font-bold uppercase text-xl">Address </h1>
          <span className="">P.O Box 662</span>
          <br />
          <span className="uppercase">Akim Oda</span> <br />
          <span className="uppercase">Ghana, West Africa</span>
        </div>
        <div className="leading-7">
          <h1 className="font-bold uppercase text-xl">Contact </h1>
          <span className="">+233 20 123 4567</span>
          <br />
          <span className="">ubaismlamic@gmail.com</span>
        </div>
        <div>
          <button className=" text-white p-3 text-center bg-[#06724b] font-bold">
            Get Directions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Address;
