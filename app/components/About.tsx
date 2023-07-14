/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className=" bg-[#587ce0] py-10">
      <div className="flex snap-center max-w-7xl mx-auto flex-col items-center justify-around gap-4 md:flex-row px-10 md:px-[10%]">
        <div className="grid-template grid h-fit w-full gap-4 place-items-center md:w-[30%]">
          <Image
            src="/images/1.jpg"
            alt=""
            height={50}
            width={50}
            unoptimized={true}
            className="h-40 w-40 rounded-md object-cover"
          />
          <Image
            src="/images/2.jpg"
            alt=""
            height={50}
            unoptimized={true}
            width={50}
            className="h-40 w-40 rounded-md object-cover"
          />
          <Image
            src="/images/3.jpg"
            alt=""
            unoptimized={true}
            height={50}
            width={50}
            className="h-40 w-40 rounded-md object-cover"
          />
          <Image
            src="/images/4.JPG"
            alt=""
            unoptimized={true}
            height={50}
            width={50}
            className="h-40 w-40 rounded-md object-cover"
          />
        </div>
        <div className="flex w-full text-white flex-col items-center justify-center p-5 md:w-[50%]">
          <div className="relative flex h-full w-full items-end">
            <div className="font-marker text-4xl text-center md:text-left w-full mb-5 font-black">
              <p className="underline underline-offset-2">ABOUT</p>
            </div>
          </div>
          <p className="text-md font-normal text-center md:text-left">
            Registered in the state of Jammu and Kashmir, HEALTH Inc is a
            membership-run NGO operating in Ladakh since 1992. Our Mission is
            providing access to the skills and knowledge that help people make
            informed decisions about their future.
            <br /> <br />
            We work in conjunction with partner non-profits in India, USA,
            Canada and the UK. And we work in full collaboration with government
            departments serving our member's home villages.
            <br /> <br />
            We have no paid staff. No vehicle. Very low overhead costs. When our
            members want change in their village or their service area, they
            create a project and solicit local support to make it happen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
