"use client";

import Link from "next/link";
import React, { Suspense } from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url(/bgImage.jpg)`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      }}
      className="text-white min-h-screen md:h-screen w-full text-center overflow-x-hidden flex flex-col items-center justify-center  relative md:py-0"
    >
      <div
        className="absolute bottom-0 z-0 md:h-screen w-full h-full"
        style={{
          background: "rgba(0,0,0,0.4)",
          backgroundImage: `linear-gradient(to top, rgba(0,0,0, 4) 0, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.6) 100%)`,
        }}
      />

      <div className="w-full z-10  justify-center items-center px-4 md:px-0  flex flex-col space-y-3">
        <p className="uppercase tracking-widest text-xl font-medium text-[#587ce0]">
          Investing through health and nutrition
        </p>
        <h1 className="text-3xl uppercase tracking-wide font-medium">
          Building healthy futures in the Himalayas for over 20 years
        </h1>
        <div className="flex flex-col space-y-4 items-center justify-center md:space-y-0 md:flex-row md:space-x-4">
          <Link
            href="#about"
            className="px-4 py-2 rounded-lg flex items-center justify-center uppercase tracking-widest border-2 border-[#587ce0] bg-[#587ce0] transition-all duration-200 ease-in"
          >
            More About us
          </Link>
          <Link
            href="mailto:healthladakh@gmail.com"
            className="px-4 py-2 rounded-lg flex items-center justify-center uppercase tracking-widest border-2 border-[#587ce0] transition-all duration-200 ease-in"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
