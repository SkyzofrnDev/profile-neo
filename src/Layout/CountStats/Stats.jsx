import React from "react";
import { CountText } from "../../Components/Index";

const Stats = () => {
  return (
    <div className="flex py-15 px-28 bg-dark font-semibold text-white">
      <div className="flex w-full h-full justify-between items-center ">
        <div className="flex flex-col justify-center items-center gap-y-5">
          <p className="text-6xl"><CountText to={1}/>+ Years</p>
          <p className="text-white/50 font-medium text-3xl">Experience</p>
        </div>
        <div className="h-20 w-0.5 rounded-full bg-white z-10"></div>
        <div className="flex flex-col justify-center items-center gap-y-5">
          <p className="text-6xl"><CountText to={10}/>+ UMKM</p>
          <p className="text-white/50 font-medium text-3xl">
            Mitra UMKM Terbantu
          </p>
        </div>
        <div className="h-20 w-0.5 rounded-full bg-white"></div>
        <div className="flex flex-col justify-center items-center gap-y-5">
          <p className="text-6xl"><CountText to={50}/>+ Client</p>
          <p className="text-white/50 font-medium text-3xl">Happy Client</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
