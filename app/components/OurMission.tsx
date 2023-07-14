import React from "react";

const OurMission = () => {
  return (
    <div className="w-full text-white py-10">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <div className="w-[40%]">
          <h1 className="text-2xl font-medium ">
            Our Mission is to provide skills and knowledge that help people make
            informed decisions about future
          </h1>

          <p className="mt-10 text-lg">
            Sadly, in many isolated Ladakhi villages, youth lack the
            opportunities to build skills and experiences that will help them
            lead tomorrow. For over 18 years, HEALTH Inc provides safe,
            inclusive spaces to discover, learn and grow together.
          </p>
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/sG6TxizHolE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
