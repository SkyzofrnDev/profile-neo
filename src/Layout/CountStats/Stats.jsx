import React from "react";

const Stats = () => {
  return (
    <div className="flex w-full py-15 px-28 bg-dark font-semibold text-white justify-between items-center">
      <div className="flex flex-col justify-center items-center gap-y-5">
        <p className="text-6xl">1+ Years </p>
        <p className="text-white/50 font-medium text-3xl">Experience</p>
      </div>
      <div className="h-3/4 w-0.5 rounded-full bg-default"></div>
      <div className="flex flex-col justify-center items-center gap-y-5">
        <p className="text-6xl">10+ UMKM</p>
        <p className="text-white/50 font-medium text-3xl">Mitra UMKM Terbantu</p>
      </div>
      <div className="h-3/4 w-0.5 rounded-full bg-default"></div>
      <div className="flex flex-col justify-center items-center gap-y-5">
        <p className="text-6xl">50+ Client</p>
        <p className="text-white/50 font-medium text-3xl">Happy Client</p>
      </div>
    </div>
  );
};

export default Stats;
