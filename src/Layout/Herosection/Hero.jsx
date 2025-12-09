import React from "react";
import { Button } from "../../Components/Index";

const Hero = () => {
  return (
    <div className="flex ml-24">
      <div className="w-3/5 pr-22">
        <img src="/neo.svg" alt="neo-logo" className="w-56 h-56" />
        <p className="text-8xl text-default font-bold leading-tight jakarta">
          Bring your <span className="text-tertiary">ideas</span> <br />
          To <span className="text-primary">digital</span>{" "}
          <span className="text-secondary">life</span>
        </p>
        <p className="text-3xl mt-10 leading-normal">
          Kami menyediakan solusi untuk kebutuhan digital anda dengan{" "}
          <span className="text-primary">professional</span>{" "}
          <span className="text-secondary">website</span> yang sesuai dengan
          kebutuhan.
        </p>
        <div className="flex gap-x-5 mt-10">
          <Button bg="bg-primary" text="Penawaran" />
          <Button bg="bg-tertiary" text="Mulai Digital" />
        </div>
      </div>
      <div className="w-2/3">
        <img src="/hero-img.png" alt="hero-image" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Hero;
