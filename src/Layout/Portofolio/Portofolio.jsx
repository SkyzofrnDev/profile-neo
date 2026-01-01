import React from "react";

const Portofolio = () => {
  return (
    <div className="bg-dark mt-10 px-5 py-10 lg:my-24 lg:rounded-[5rem] lg:px-24 lg:py-20 lg:mx-10 " >
      
      {/* GRID 2 KOLOM */}
      <div className="grid h-full grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="bg-secondary w-fit px-9 py-3 rounded-full text-dark font-medium text-3xl">
            Neo One
          </div>

          {/* Heading */}
          <div className="mt-10 leading-none text-5xl xl:text-7xl 2xl:text-8xl font-semibold">
            <h1 className="text-white ">
              Portofolio
            </h1>
            <h1 className="text-[#8f8f8f] ">
              Perusahaan
            </h1>
          </div>

          {/* Arrows */}
          <div className="flex gap-8 mt-16 text-white text-4xl font-semibold">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#8f8f8f]">
              {"<"}
            </div>
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#2f2f2f]">
              {">"}
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full flex flex-col items-start">

          {/* Portfolio Image */}
          <img
            src="portofolio.png"
            alt="img-portofolio"
            loading="lazy"
            className="rounded-2xl w-full aspect-video object-cover"
          />

          {/* Description */}
          <div className="mt-10 text-white w-full">
            <p className="font-semibold text-3xl lg:text-4xl">
              Web Portofolio PT Neo One Global Innovasi
            </p>
            <p className="mt-6 text-xl lg:text-2xl">Tech Stack</p>
            <div className="flex gap-5 mt-5">
                <img src="react.svg" alt="" loading="lazy" />
                <img src="react.svg" alt="" loading="lazy" />
                <img src="react.svg" alt="" loading="lazy" />

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Portofolio;
