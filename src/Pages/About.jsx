import React from "react";
import { Hero, Stats, AboutPT, Footer } from "../Layout/Index";
import { useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar, NavbarMobile } from "../Components/Index";
import useBreakpoint from "../Hooks/useBreakpoint";
const About = () => {
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
    <div className="bg-default">
      {(isDesktop || isTablet) && <Navbar />}
      {isMobile && <NavbarMobile />}
      <Hero />
      <Stats />
      <div className="px-4 md:px-15 lg:px-24 mt-10 md:mt-15 lg:my-20 ">
        <div className="flex items-center justify-between">
          <div
            id="about"
            className="scroll-mt-12 font-semibold text-6xl md:text-7xl lg:text-9xl"
          >
            <p className="text-default">About</p>
            <p className="text-[#7b7b7b]">Company</p>
          </div>
        </div>
        <div className="lg:flex lg:gap-10 mt-10 md:mt-20 lg:mt-28 justify-between items-stretch">
          <div className="py-10 lg:w-2/3 gap-5 md:gap-7 lg:gap-10 px-7 lg:px-14 flex flex-col bg-white rounded-4xl ">
            <img src="neo.svg" alt="logo-neo" loading="lazy" className="w-24" />

            <p className="font-semibold text-2xl lg:text-5xl">
              PT.
              <span className="text-tertiary"> NeoOne</span>
              <span className="text-primary"> Global</span>
              <span className="text-secondary"> Innovasi</span>
            </p>
            <p className="lg:font-medium lg:text-[1.7rem]">
              PT <span className="text-tertiary">Neo One</span>{" "}
              <span className="text-primary">Global</span>
              <span className="text-secondary"> Inovasi </span>adalah perusahaan
              teknologi yang berdiri pada tahun 2023. Sejak awal, kami
              berdedikasi untuk memberikan solusi digital inovatif dan layanan
              konsultasi IT yang mampu mendorong transformasi digital klien
              kami. Berpusat di Bogor, kami melayani berbagai sektor industri,
              mengkhususkan diri pada pengembangan solusi custom yang canggih
              dan berkelanjutan.
            </p>
          </div>
          {(isDesktop || isTablet) && (
            <img
              src="hero-img.png"
              alt="neo-profile"
              className="w-1/3 rounded-4xl object-cover"
            />
          )}
        </div>

        <div className="flex flex-col gap-10 mt-10">
          <div
            id="webdev"
            className="scroll-mt-28 py-8 lg:py-10 px-8 lg:px-14 flex flex-col gap-y-5 lg:gap-y-10 bg-white rounded-4xl"
          >
            <div>
              <img
                src="/CompanyFam/2.webp"
                className="rounded-lg lg:h-96 w-full object-cover max-h-80"
                loading="lazy"
              ></img>
            </div>
            <div className="flex items-center gap-x-10">
              <div className="hidden lg:flex bg-primary w-24 h-24 justify-center items-center rounded-full">
                <p className="text-white font-semibold lg:text-3xl">01</p>
              </div>
              <p className="font-semibold text-3xl lg:text-5xl">Website Dev</p>
            </div>
            <p className="font-medium lg:text-2xl">
              Kami spesialis dalam merancang dan mengembangkan aplikasi web
              serta platform digital yang sepenuhnya custom. Mulai dari company
              profile hingga sistem e-commerce berskala enterprise, kami
              memastikan solusi Anda scalable, aman, dan user-friendly untuk
              mendorong pertumbuhan bisnis Anda
            </p>
          </div>

          <div
            id="edu"
            className="scroll-mt-28 py-8 lg:py-10 px-8 lg:px-14 flex flex-col gap-y-5 lg:gap-y-10 bg-white rounded-4xl "
          >
            <img
              src="/CompanyFam/edu.webp"
              className="rounded-lg lg:h-96 w-full object-cover max-h-80"
              loading="lazy"
            ></img>
            <div className="flex items-center gap-x-10">
                <div className="hidden bg-secondary w-24 h-24 justify-center items-center lg:flex rounded-full">
                  <p className="text-white font-semibold text-3xl">02</p>
                </div>
              <p className="font-semibold text-3xl lg:text-5xl">Edu Tech</p>
            </div>
            <p className="font-medium lg:text-2xl">
              Kami memiliki program Edukasi Teknologi untuk masyarakat seperti
              siswa, mahasiswa, dan guru melalui program learn with neo1, yang
              dimana kami memberikan pendidikan teknologi yang inklusif dan
              berdampak nyata dan menginspirasi.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
