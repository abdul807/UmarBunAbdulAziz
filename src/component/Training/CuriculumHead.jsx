import abu from "../../assets/rauf.jpg";
import razak from "../../assets/malamrazak.jpg";

const CuriculumHead = () => {
  return (
    <section id="conversation" className=" bg-[#F4EEFF]">
      <div className="bg-white text-center py-5 bg-[#F4EEFF] relative w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center lg:max-w-5xl lg:flex-row lg:flex-wrap gap-20 md:justify-start md:items-start m-10">
            <div data-aos="zoom-in" className="max-w-[500px]">
              <img
                alt="profile"
                src={abu}
                className="w-80 h-90 object-cover"
                srcset=""
              />
              <p className="lg:text-left mt-2 text-[#06724b] font-bold text-center">
                <span className="text-center lg:text-left mt-2 text-[#06724b] font-bold inline-block border-b-2 border-[#06724b] pb-1">
                Sir
                </span>
                 Abdul Rauf Mohammed Umar
              </p>
              <p className=" text-center lg:text-left mt-2 text-[#06724b] font-bold">
                HeadMaster (Secular)
              </p>
              <button className="border-1 border-[#424874] text-white flex justify-center items-center text-center lg:justify-start lg:items-left mt-3 bg-[#06724b] font-bold px-7 py-2 w-full lg:w-1/2">
                Contact Us
              </button>
            </div>
            <div data-aos="zoom-in" className="max-w-[500px]">
              <img
                alt="profile"
                src={razak}
                className="w-80 h-90 object-cover"
                srcset=""
              />
              <p className="lg:text-left mt-2 text-[#06724b] font-bold text-center">
                <span className="text-center lg:text-left mt-2 text-[#06724b] font-bold inline-block border-b-2 border-[#06724b] pb-1">
                  Sheik
                </span>
                Abdul Razak Mohammed Umar
              </p>
              <p className=" text-center lg:text-left mt-2 text-[#06724b] font-bold">
                Headmaster (Islamic)
              </p>
              <button className="border-1 border-[#00a401] text-white flex justify-center items-center text-center lg:justify-start lg:items-left mt-3 bg-[#06724b] font-bold px-7 py-2 w-full lg:w-1/2">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuriculumHead;
