import React from "react";

const About = () => {
  return (
    <div className="px-24 mt-20 ">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-9xl">
          <p className="text-default">About</p>
          <p className="text-[#7b7b7b]">Company</p>
        </div>
        <p className="text-2xl w-1/3 text-[#7b7b7b]">
          Kami adalah rumah website developer yang menciptakan website sesuai
          dengan kebutuhan digtal anda.
        </p>
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
            Lorem ipsum dolor sit amet consectetur. Vestibulum est nunc
            tristique in quisque a tincidunt eget. Pellentesque vivamus enim
            aliquam tincidunt fusce in.
          </p>
        </div>
        <div className="py-10 px-14 flex flex-col gap-y-10 bg-white rounded-4xl ">
          <div className="bg-primary w-24 h-24 justify-center items-center flex rounded-full">
            <p className="text-white font-semibold text-3xl">02</p>
          </div>
          <p className="font-semibold text-5xl">Edu Tech</p>
          <p className="font-medium text-xl">
            Lorem ipsum dolor sit amet consectetur. Vestibulum est nunc
            tristique in quisque a tincidunt eget. Pellentesque vivamus enim
            aliquam tincidunt fusce in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
