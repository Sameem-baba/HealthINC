import React from "react";
import ComingSoon from "../../components/ComingSoon";

type Props = {};

const Resources = (props: Props) => {
  return (
    <div>
      <div className="max-w-7xl h-screen overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent snap-y snap-mandatory mx-auto">
        <ComingSoon />
      </div>
    </div>
  );
};

export default Resources;
