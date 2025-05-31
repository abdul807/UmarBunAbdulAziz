import React from "react";

import construction from "../../assets/construction.svg";

const Location = () => {
  return (
    <div className="h-screen flex sm:flex-col items-center mt-50 justify-center mb-20 ">
      {" "}
      <div className="max-w-5xl mx-auto flex flex-col gap-10 items-center justify-center  h-screen">
        <img src={construction} alt="" srcset="" />
        <h3 className="text-xl">Page Under Construction</h3>
      </div>
    </div>
  );
};

export default Location;
