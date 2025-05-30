import "aos/dist/aos.css";
import topImage from "../../assets/bignew.jpeg";
import "./image.css";
import { Link } from "react-router-dom";
const Image = () => {
  // text-[#00a401] - deep green
  // text-[#a7c263] -light green 
  
  return (
    <section className="">
      <div className={`sm:w-full h-[750px] relative`} data-aos="fade-up">
        <img
          src={topImage}
          alt="Amalitech Training"
          className="w-full absolute h-[500px] sm:h-[720px] object-cover"
          
        />
        <div className='bg-black/50 relative w-full h-[500px] sm:h-[720px]'></div>
      </div>
      <div className="absolute flex flex-col  w-[400px] top-20  sm:top-50 text-right p-15 sm:w-1/2">
        <div className="heading ">
          <h1 className="sm:leading-15 text-white sm:-mt-20 uppercase text-center sm:text-left font-extrabold text-2xl sm:text-5xl">
            Shaping The Leaders of the next generation through Education & Islam
          </h1>
        </div>
        <div className="text-white capitalize sm:text-justify text- leading-7 mt-4 text-center italic">
          Children today, leaders tomorrow
        </div>
        <div className="sm:justify-start flex justify-center space-x-4 text-white mt-20">
          <button className="capitalize bg-white px-3 py-3 text-[#06724b]  sm:px-15  font-extrabold shadow-">
            contact us
          </button>
          <Link
            to="https://www.facebook.com/profile.php?id=100076396008442&sk=videos"
            className="capitalize border-1 border-white  px-3 py-3 sm:px-15 cursor-pointer font-bold shadow-lg"
          >
            watch video
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Image;
