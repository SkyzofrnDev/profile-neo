import React, { useEffect } from "react";
import {
  AboutPT,
  Approach,
  ApproachMobile,
  Contact,
  Footer,
  Hero,
  Portofolio,
  Ratings,
  Start,
  StartMobile,
  Stats,
} from "../Layout/Index";
import { Navbar, NavbarMobile } from "../Components/Index";
import { useLocation } from "react-router";
import useBreakpoint from "../Hooks/useBreakpoint";

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);
  const { isMobile, isTablet, isDesktop } = useBreakpoint();

  return (
    <div className="bg-default flex flex-col lg:pb-5">
      {isMobile && <NavbarMobile/>}
      {(isDesktop || isTablet) && <Navbar />}
      <div id="home">
        <Hero />
      </div>
      <Stats />
      <div id="about">
        <AboutPT />
      </div>
      {(isDesktop || isTablet) && <Approach />}
      {isMobile && <ApproachMobile />}
      <Ratings />
      <div id="portofolio">
        <Portofolio />
      </div>
      {(isDesktop || isTablet) && <Start />}
      {isMobile && <StartMobile/>}
      <div id="contact" className="-scroll-mt-28">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
