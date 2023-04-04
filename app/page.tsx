import React from "react";
import Banner from "../components/Banner";
import About from "../components/About";
import MagicLab from "../components/MagicLab";
import Contact from "../components/Contact";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Banner />
      <About />
      <MagicLab />
      <Contact />
    </div>
  );
};

export default Home;
