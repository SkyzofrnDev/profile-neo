import React, { useEffect } from "react";
import { Button } from "../../Components/Index";
import Aos from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router";
import useBreakpoint from "../../Hooks/useBreakpoint";

const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 800, // durasi animasi (ms)
      easing: "ease-in-out",
      once: true, // animasi jalan sekali
      offset: 100, // jarak trigger dari viewport
    });
  }, []);
  const { hash } = useLocation();
  const { isMobile, isTablet, isDesktop } = useBreakpoint();

  useEffect(() => {
    if (!hash) return;

    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <div className="md:flex-row items-center h-screen px-7 lg:px-0 flex lg:ml-10 xl:ml-24">
      <div className="flex flex-col gap-y-5 lg:w-3/5 lg:pr-20">
        <img
          data-aos="fade-down"
          src="/neo.svg"
          alt="neo-logo"
          className="hidden object-fit lg:block w-20 xl:w-44 2xl:w-56 xl:my-14 2xl:my-14 my-5 md:my-10"
        />
        <p className="text-5xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-7xl text-default font-bold leading-tight jakarta">
          <span data-aos="fade-up" data-aos-delay="0" className="inline-block">
            Bring your
          </span>{" "}
          <span
            data-aos="fade-up"
            data-aos-delay="150"
            className="inline-block text-tertiary"
          >
            ideas
          </span>{" "}
          <br />
          <span
            data-aos="fade-up"
            data-aos-delay="300"
            className="inline-block"
          >
            To
          </span>{" "}
          <span
            data-aos="fade-up"
            data-aos-delay="450"
            className="inline-block text-primary"
          >
            digital
          </span>{" "}
          <span
            data-aos="fade-up"
            data-aos-delay="600"
            className="inline-block text-secondary"
          >
            life
          </span>
        </p>

        <p
          data-aos="fade"
          data-aos-delay="900"
          className="text-md mt-3 xl:text-xl 2xl:text-2xl lg:mt-3 leading-normal"
        >
          Kami menyediakan solusi untuk kebutuhan digital anda dengan{" "}
          <span className="text-primary">professional</span>{" "}
          <span className="text-secondary">website</span> yang sesuai dengan
          kebutuhan.
        </p>
        <div className="flex flex-wrap lg:mt-10 gap-x-5 md:mb-10">
          <div data-aos="fade-up" data-aos-delay="200">
            <Button bg="bg-primary" text="Penawaran" />
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <Button bg="bg-tertiary" text="Mulai Digital" to={"https://wa.me/6281234567890?text=Halo"} />
          </div>
        </div>
      </div>
      {(isDesktop || isTablet) && (
        <div className="w-2/3 hidden lg:flex h-screen">
          <img
            data-aos-delay="0.01 "
            data-aos="fade"
            src="/hero-img.png"
            alt="hero-image"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default Hero;
