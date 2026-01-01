import React from "react";
import RotatingText from "./RotatingText";

const UnderConstruction = () => {
  return (
    <div className="h-screen jakarta bg-[#0f0f0f] text-white px-10 pt-10 flex items-center flex-col justify-center">
      <p className="font-extrabold text-5xl flex items-center gap-x-5">
        Under Construction
        <RotatingText
          texts={["Neo", "One", "Global", "Innovasi"]}
          mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </p>
      <div className="mt-20 flex items-center gap-x-10">
        <a
          href="/"
          className="px-7 py-5 bg-white rounded-full text-2xl font-semibold text-default"
        >
          Back To Home
        </a>
        <a href="https://instagram/neooneid">
          {" "}
          <p className="font-medium text-2xl">Need Help?</p>{" "}
        </a>
      </div>
    </div>
  );
};

export default UnderConstruction;
