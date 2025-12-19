import React from "react";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="px-24 mt-20 ">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-9xl">
          <p className="text-default">About</p>
          <p className="text-[#7b7b7b]">Company</p>
        </div>
        <div className="flex gap-y-4 w-1/3 flex-col">
          <p className="text-2xl text-[#7b7b7b] hover:text-[#1e1e1e] duration-300 transition-all">
            Kami adalah rumah website developer yang menciptakan website sesuai
            dengan kebutuhan digtal anda.
          </p>
          <div className="group inline-flex items-center gap-5 text-xl font-semibold text-black/80 cursor-pointer">
            <Link
              to="/"
              className="
      relative
      after:content-['']
      after:absolute
      after:left-0
      after:-bottom-1
      after:h-[2px]
      after:w-0
      after:bg-[#4285f4]
      after:transition-all
      after:duration-300
      after:ease-out
      group-hover:after:w-full
      transition-colors
      duration-300
      group-hover:text-[#4285f4]
    "
            >
              Baca Selengkapnya
            </Link>

            <svg
              width="21"
              height="15"
              viewBox="0 0 21 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="
      transition-all
      duration-300
      ease-out
      group-hover:-rotate-45
      group-hover:translate-x-1
    "
            >
              <path
                d="M1 6.36395C0.447715 6.36395 0 6.81167 0 7.36395C0 7.91624 0.447715 8.36395 1 8.36395V7.36395V6.36395ZM20.7071 8.07106C21.0976 7.68054 21.0976 7.04737 20.7071 6.65685L14.3431 0.292885C13.9526 -0.0976396 13.3195 -0.0976396 12.9289 0.292885C12.5384 0.683409 12.5384 1.31657 12.9289 1.7071L18.5858 7.36395L12.9289 13.0208C12.5384 13.4113 12.5384 14.0445 12.9289 14.435C13.3195 14.8255 13.9526 14.8255 14.3431 14.435L20.7071 8.07106ZM1 7.36395V8.36395H20V7.36395V6.36395H1V7.36395Z"
                className="
        fill-black/80
        transition-colors
        duration-300
        group-hover:fill-[#4285f4]
      "
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex gap-10 mt-28">
        <img
          src="hero-img.png"
          alt="neo-profile"
          className="w-1/3 h-[48vh] rounded-4xl"
        />
        <div className="py-10 px-14 flex flex-col gap-y-10 bg-white rounded-4xl ">
          <div className="bg-primary w-24 h-24 justify-center items-center flex rounded-full">
            <p className="text-white font-semibold text-3xl">01</p>
          </div>
          <p className="font-semibold text-5xl">Website Dev</p>
          <p className="font-medium text-xl">
            Kami spesialis dalam merancang dan mengembangkan aplikasi web serta
            platform digital yang sepenuhnya custom. Mulai dari company profile
            hingga sistem e-commerce berskala enterprise, kami memastikan solusi
            Anda scalable, aman, dan user-friendly untuk mendorong pertumbuhan
            bisnis Anda
          </p>

          <div className="group inline-flex items-center gap-5 text-xl font-semibold text-black/80 cursor-pointer">
            <Link
              to="/"
              className="
      relative
      after:content-['']
      after:absolute
      after:left-0
      after:-bottom-1
      after:h-[2px]
      after:w-0
      after:bg-[#4285f4]
      after:transition-all
      after:duration-300
      after:ease-out
      group-hover:after:w-full
      transition-colors
      duration-300
      group-hover:text-[#4285f4]
    "
            >
              Baca Selengkapnya
            </Link>

            <svg
              width="21"
              height="15"
              viewBox="0 0 21 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="
      transition-all
      duration-300
      ease-out
      group-hover:-rotate-45
      group-hover:translate-x-1
    "
            >
              <path
                d="M1 6.36395C0.447715 6.36395 0 6.81167 0 7.36395C0 7.91624 0.447715 8.36395 1 8.36395V7.36395V6.36395ZM20.7071 8.07106C21.0976 7.68054 21.0976 7.04737 20.7071 6.65685L14.3431 0.292885C13.9526 -0.0976396 13.3195 -0.0976396 12.9289 0.292885C12.5384 0.683409 12.5384 1.31657 12.9289 1.7071L18.5858 7.36395L12.9289 13.0208C12.5384 13.4113 12.5384 14.0445 12.9289 14.435C13.3195 14.8255 13.9526 14.8255 14.3431 14.435L20.7071 8.07106ZM1 7.36395V8.36395H20V7.36395V6.36395H1V7.36395Z"
                className="
        fill-black/80
        transition-colors
        duration-300
        group-hover:fill-[#4285f4]
      "
              />
            </svg>
          </div>
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
          <div className="group inline-flex items-center gap-5 text-xl font-semibold text-black/80 cursor-pointer">
            <Link
              to="/"
              className="
      relative
      after:content-['']
      after:absolute
      after:left-0
      after:-bottom-1
      after:h-[2px]
      after:w-0
      after:bg-[#4285f4]
      after:transition-all
      after:duration-300
      after:ease-out
      group-hover:after:w-full
      transition-colors
      duration-300
      group-hover:text-[#4285f4]
    "
            >
              Baca Selengkapnya
            </Link>

            <svg
              width="21"
              height="15"
              viewBox="0 0 21 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="
      transition-all
      duration-300
      ease-out
      group-hover:-rotate-45
      group-hover:translate-x-1
    "
            >
              <path
                d="M1 6.36395C0.447715 6.36395 0 6.81167 0 7.36395C0 7.91624 0.447715 8.36395 1 8.36395V7.36395V6.36395ZM20.7071 8.07106C21.0976 7.68054 21.0976 7.04737 20.7071 6.65685L14.3431 0.292885C13.9526 -0.0976396 13.3195 -0.0976396 12.9289 0.292885C12.5384 0.683409 12.5384 1.31657 12.9289 1.7071L18.5858 7.36395L12.9289 13.0208C12.5384 13.4113 12.5384 14.0445 12.9289 14.435C13.3195 14.8255 13.9526 14.8255 14.3431 14.435L20.7071 8.07106ZM1 7.36395V8.36395H20V7.36395V6.36395H1V7.36395Z"
                className="
        fill-black/80
        transition-colors
        duration-300
        group-hover:fill-[#4285f4]
      "
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
