"use client";
/* eslint-disable @next/next/no-img-element */
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjectPrinciples = () => {
  const images = [
    "/carousel/1.jpg",
    "/carousel/2.jpg",
    "/carousel/3.jpg",
    "/carousel/4.jpg",
    "/carousel/5.jpg",
    "/carousel/6.jpg",
    "/carousel/7.jpg",
    "/carousel/8.jpg",
    "/carousel/9.jpg",
    "/carousel/10.jpg",
    "/carousel/11.jpg",
    "/carousel/12.jpg",
    "/carousel/13.jpg",
    // ... add paths to your 18 images
  ];
  return (
    <div className="w-full text-black bg-white py-10">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <div className="w-[40%]">
          <h1 className="text-2xl font-semibold uppercase tracking-widest ">
            Our Project Principles
          </h1>

          <p className="mt-5 text-base">
            Our projects adhere to these three principles:
            <br />
            <br />
            Beneficiaries are partners in our work: They design, implement and
            evaluate work according to their own needs, resources, and goals.
            <br />
            <br />
            We invest in young people because they are the future.
            <br />
            <br />
            We believe that partnerships not only result in better outcomes but
            teach us to live together in a time of rapid change.
            <br />
            <br />
            As a membership organization, we keep our overhead to a minimum,
            spending less than 8% on administration.
            <br />
            <br />
            We use your donations for project work.
            <br />
            <br />
            Please contact us if you would like a copy of the annual accounts.
            <br />
            <br />
            And be patient if we don’t respond right away. We might be out in
            the villages we care for so much.
          </p>
        </div>
        <div className="w-1/2">
          <Carousel>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ProjectPrinciples;
