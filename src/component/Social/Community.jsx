import React from "react";
import topImage from "../../assets/bignew.jpeg";

const Community = () => {
  return (
    <section className="">
      <div className={`max-w-5xl mx-auto -mb-60 sm:mb-0 flex text-center`}>
        <div>
          {" "}
          <img
            src={topImage}
            alt="Sports"
            className="w-full h-[400px] mb-15 object-cover rounded-lg shadow-lg"
            data-aos="zoom-in"
          />
          <h1 className="text-3xl uppercase font-bold text-[#06724b] mt-5">
            Community
          </h1>
          <p className="text-lg mt-2 px-5" data-aos="ease-in">
            At UBA, we are deeply committed to serving the community by
            fostering a culture of compassion, support, and positive change. We
            believe in the power of unity and the importance of giving back,
            whether through education, charitable initiatives, or simply being
            there for one another. Our goal is not only to shape individual
            lives but also to uplift and strengthen the community as a whole. By
            nurturing a sense of responsibility and empathy, we empower our
            students and staff to contribute meaningfully to society, creating
            lasting impacts that go beyond the classroom. Together, we work
            towards building a stronger, more inclusive community where everyone
            thrives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;
