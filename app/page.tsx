import Contact from "./components/Contact";
import About from "./components/About";
import Banner from "./components/Banner";
import MagicLab from "./components/MagicLab";
import Header from "./components/Header";
import OurMission from "./components/OurMission";
import ProjectPrinciples from "./components/ProjectPrinciples";
import Volunteer from "./components/Volunteer";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory bg-[#587ce0]">
      <Header />
      <Banner />
      <About />
      <MagicLab />
      <OurMission />
      <ProjectPrinciples />
      <Volunteer />
      <Contact />
    </div>
  );
}
