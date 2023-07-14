"use client";
import Link from "next/link";
import React from "react";
import { Parallax } from "react-parallax";

const Volunteer = () => {
  return (
    <div className="flex items-center  min-h-fit w-full bg-[#587ce0] ">
      <div className="w-1/2">
        <Parallax bgImage="/volunteer-image.jpg" strength={500}>
          <div
            className="w-full h-auto"
            style={{ height: "250px", objectFit: "contain" }}
          />
        </Parallax>
      </div>
      <div className="w-1/2  bg-opacity-90 text-white p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Become a Volunteer</h2>
          <p className="mb-4">
            This year, we need coders, OTs and Special Educators, a Marketing
            person and a group to collect mobility and hockey gear
          </p>
          <Link
            href="mailto:healthladakh@gmail.com"
            className="bg-white text-blue-500 py-2 px-4 rounded-lg  hover:bg-blue-100 transition-colors duration-300"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
