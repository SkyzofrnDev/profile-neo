import React from "react";
import { Hero, Stats, AboutPT } from "../Layout/Index";

const About = () => {
  return (
    <div className="bg-default">
      <Hero />
      <Stats />
      <div className="px-24 mt-20 ">
        <div className="flex items-center justify-between">
          <div className="font-semibold text-9xl">
            <p className="text-default">About</p>
            <p className="text-[#7b7b7b]">Company</p>
          </div>
        </div>
        <div className="flex items-center  mt-28  ">
          <div className="py-10 w-2/3 gap-10 px-14 flex flex-col bg-white rounded-4xl ">
            <img src="neo.svg" alt="logo-neo" loading="lazy" className="w-24" />
            <p className="font-semibold text-5xl">
              PT.
              <span className="text-tertiary"> NeoOne</span>
              <span className="text-primary"> Global</span>
              <span className="text-secondary"> Innovasi</span>
            </p>
            <p className="font-medium text-2xl">
              PT Neo One Global Inovasi adalah perusahaan teknologi yang berdiri
              pada tahun 2023. Sejak awal, kami berdedikasi untuk memberikan
              solusi digital inovatif dan layanan konsultasi IT yang mampu
              mendorong transformasi digital klien kami. Berpusat di Bogor, kami
              melayani berbagai sektor industri, mengkhususkan diri pada
              pengembangan solusi custom yang canggih dan berkelanjutan.
            </p>
          </div>
          <img
            src="hero-img.png"
            alt="neo-profile"
            className="w-1/3  rounded-4xl"
          />
        </div>

        <div className="flex gap-10 mt-10">
          <div className="py-10 px-14 flex flex-col gap-y-10 bg-white rounded-4xl ">
            <div className="bg-primary w-24 h-24 justify-center items-center flex rounded-full">
              <p className="text-white font-semibold text-3xl">01</p>
            </div>
            <p className="font-semibold text-5xl">Website Dev</p>
            <p className="font-medium text-xl">
              Kami spesialis dalam merancang dan mengembangkan aplikasi web
              serta platform digital yang sepenuhnya custom. Mulai dari company
              profile hingga sistem e-commerce berskala enterprise, kami
              memastikan solusi Anda scalable, aman, dan user-friendly untuk
              mendorong pertumbuhan bisnis Anda
            </p>
          </div>
          <div className="py-10 px-14 flex flex-col gap-y-10 bg-white rounded-4xl ">
            <div className="bg-primary w-24 h-24 justify-center items-center flex rounded-full">
              <p className="text-white font-semibold text-3xl">02</p>
            </div>
            <p className="font-semibold text-5xl">Edu Tech</p>
            <p className="font-medium text-xl">
              Kami memiliki program Edukasi Teknologi untuk masyarakat seperti
              siswa, mahasiswa, dan guru melalui program learn with neo1, yang
              dimana kami memberikan pendidikan teknologi yang inklusif dan
              berdampak nyata dan menginspirasi.
            </p>
          </div>
          <img
            src="hero-img.png"
            alt="neo-profile"
            className="w-1/3 h-[48vh] rounded-4xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
