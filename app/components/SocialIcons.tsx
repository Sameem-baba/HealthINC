"use client";

import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const SocialIcons = (props: Props) => {
  const [hoveredIcon, setHoveredIcon] = useState("");

  return (
    <div>
      <div className="items-center hidden md:flex space-x-2">
        <button className="px-4 text-white font-semibold py-2 rounded-md flex items-center justify-center uppercase  tracking-widest bg-[#587ce0] transition-all duration-200 ease-in">
          Donate
        </button>

        <SocialIcon
          url="https://www.facebook.com/thehelpincfund/"
          target="_blank"
          onMouseEnter={() => setHoveredIcon("facebook")}
          onMouseLeave={() => setHoveredIcon("")}
          fgColor={hoveredIcon == "facebook" ? "#587ce0" : "white"}
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/c/helphealthladakh"
          target="_blank" //so that the link opens in new tab
          onMouseEnter={() => setHoveredIcon("instagram")} //onmouseenter is an inbuilt function for anything when mouse goes on a position
          onMouseLeave={() => setHoveredIcon("")} // this needs to be done or else the icon would stay purple
          fgColor={hoveredIcon == "instagram" ? "#587ce0" : "white"}
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/HimalayaCynthia"
          target="_blank" //so that the link opens in new tab
          onMouseEnter={() => setHoveredIcon("twitter")} //onmouseenter is an inbuilt function for anything when mouse goes on a position
          onMouseLeave={() => setHoveredIcon("")} // this needs to be done or else the icon would stay purple
          fgColor={hoveredIcon == "twitter" ? "#587ce0" : "white"}
          bgColor="transparent"
        />
      </div>
    </div>
  );
};

export default SocialIcons;
