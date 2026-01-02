import React from "react";
import { CountText } from "../../Components/Index";

const Stats = () => {
  return (
    <div className="py-7 md:py-15 px-10 md:px-28 bg-dark font-semibold text-white">
      <div className="flex flex-col xl:gap-y-7 xl:flex-row w-full h-full justify-between items-center ">
        <div className="flex flex-col justify-center items-center md:gap-y-5">
          <p className="text-4xl md:text-6xl"><CountText to={1}/>+ Years</p>
          <p className="text-white/50 font-normal md:font-medium text-xl md:text-3xl">Experience</p>
        </div>
        <div className="bg-white/50 rotate-90 xl:rotate-0 h-20 w-0.5 rounded-full xl:bg-white z-10"></div>
        <div className="flex flex-col justify-center items-center md:gap-y-5">
          <p className="text-4xl md:text-6xl"><CountText to={10}/>+ UMKM</p>
          <p className="text-white/50 font-normal md:font-medium text-xl md:text-3x">
            Mitra UMKM Terbantu
          </p>
        </div>
        <div className="bg-white/50 rotate-90 xl:rotate-0 h-20 w-0.5 rounded-full xl:bg-white"></div>
        <div className="flex flex-col justify-center items-center gap-y-1 md:gap-y-5">
          <p className="text-4xl md:text-6xl"><CountText to={50}/>+ Client</p>
          <p className="text-white/50 font-normal md:font-medium text-xl md:text-3">Happy Client</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
