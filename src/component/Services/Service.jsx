

import "./service.css";

const Service = () => {
  const flipStyle = {
    "@keyframes flip": {
      "0%": {
        transform: "rotateY(0deg)",
      },
      "50%": {
        transform: "rotateY(180deg)",
      },
      "100%": {
        transform: "rotateY(360deg)",
      },
    },
    animation: "flip 1s ease-in-out",
  };
  return (
    <section id="service" className="">
      <div className="bg-[#effffa] text-center py-5  relative w-full">
        <div className="flex flex-col justify-center items-center">
          <h1 className="heading capitalize font-bold text-2xl sm:text-5xl text-center text-[#00a401] p-4">
            Our curiculum
          </h1>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-5 justify-center items-center m-10">
            <div className={`w-80 h-40  text-center text-white border-1 border-white py-15 px-20 hover:cursor-pointer hover:animate-${flipStyle}`}> 
              <h1>Arabic Education</h1>
            </div>
            <div className="flex w-80 h-40  flex-col sm:flex-row sm:flex-wrap text-center text-white border-1 border-white py-15 px-20">
              Secular Eduction
            </div>
            <div className="flex w-80 h-40  flex-col sm:flex-row sm:flex-wrap text-center text-white border-1 border-white py-15 px-20">
              Adult Education
            </div>
            <div className="flex w-80 h-40 flex-col sm:flex-row sm:flex-wrap text-center text-white border-1 border-white py-15 px-20">
              Quran Memorization
            </div>
            <div className="flex w-80 h-40  flex-col sm:flex-row sm:flex-wrap text-center text-white border-1 border-white py-15 px-20">
              Cloud Solutions
            </div>
            <div className="flex w-80 h-40  flex-col sm:flex-row sm:flex-wrap text-center text-white border-1 border-white py-15 px-20">
              Cloud Solutions
            </div>
            <div className="flex w-80 h-40  flex-col sm:flex-row sm:flex-wrap text-center text-white border-1 border-white py-15 px-20">
              Cloud Solutions
            </div>
          </div>
        </div>
        <button className=" border-1 border-[#DCD6F7] text-white px-5 mt-2 py-3 rounded-lg font-bold cursor-pointer flex justify-center items-center mx-auto">Learn More</button>
      </div>
    </section>
  );
};

export default Service;
