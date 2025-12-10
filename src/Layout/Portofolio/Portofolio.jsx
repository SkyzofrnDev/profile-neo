import React from "react";

const Portofolio = () => {
  return (
    <div className="bg-dark my-24 rounded-[5rem] px-24 py-20 mx-10 " >
      
      {/* GRID 2 KOLOM */}
      <div className="grid h-full grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="bg-secondary w-fit px-9 py-3 rounded-full text-dark font-medium text-3xl">
            Neo One
          </div>

          {/* Heading */}
          <div className="mt-10">
            <h1 className="text-white font-semibold text-7xl lg:text-8xl leading-none">
              Portofolio
            </h1>
            <h1 className="text-[#8f8f8f] font-semibold text-7xl lg:text-8xl leading-none">
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
