import React, { useEffect } from "react";
import { BlurText, Button, CountText } from "../../Components/Index";
import Aos from "aos";

const Card = ({ data, title, desc, symbol }) => {
  return (
    <div className="px-6 py-8 sm:px-8 sm:py-10 bg-white lg:w-72 xl:w-96 sm:w-96 rounded-3xl text-center">
      <p className="text-4xl sm:text-5xl lg:text-5xl font-semibold">
        <CountText to={data} />
        {symbol}
      </p>

      <p className="font-medium text-lg sm:text-xl lg:text-xl xl:text-2xl my-3">
        {title}
      </p>

      <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#4a4a4a]">
        {desc}
      </p>
    </div>
  );
};


const Start = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="mt-32 lg:mt-56 grid grid-cols-1 lg:grid-cols-3 gap-y-24 lg:gap-y-40 place-items-center pb-26">
      {/* kiri atas */}
      <div data-aos="fade-up" data-aos-delay="150" className="lg:-translate-y-16">
        <Card
          data="10"
          symbol="+"
          title="UMKM terbantu"
          desc="Banyak UMKM yang usahanya sukses dan terbantu berkat digitalisasi."
        />
      </div>

      {/* tengah */}
      <div className="text-center lg:translate-y-36 flex items-center flex-col px-4">
        <p className="text-3xl sm:text-4xl lg:text-5xl text-default font-semibold leading-relaxed">
          <BlurText text="Ready To Start The Project?" />
        </p>

        <p className="text-base sm:text-lg lg:text-2xl text-[#8f8f8f] mt-6 lg:mt-10 mb-8">
          <BlurText text="Let’s discuss how we can help you achieve your success" />
        </p>

        <div data-aos="fade-up" data-aos-delay="1050">
          <Button text="Penawaran" bg="bg-primary" />
        </div>
      </div>

      {/* kanan atas */}
      <div data-aos="fade-up" data-aos-delay="350" className="lg:translate-y-16">
        <Card
          data="100"
          symbol="%"
          title="Generasi muda bangsa"
          desc="Tim kami sepenuhnya didominasi generasi muda ahli di bidangnya."
        />
      </div>

      {/* kiri bawah */}
      <div data-aos="fade-up" data-aos-delay="650" className="lg:translate-y-10">
        <Card
          data="100"
          symbol="%"
          title="Klien kami puas"
          desc="Seluruh klien puas dengan hasil yang diberikan."
        />
      </div>

      {/* spacer tengah (desktop only) */}
      <div className="hidden lg:block"></div>

      {/* kanan bawah */}
      <div data-aos="fade-up" data-aos-delay="1050" className="lg:translate-y-20">
        <img
          src="hero-img.png"
          className="rounded-3xl w-72 sm:w-80 lg:w-96"
          alt="team"
        />
      </div>
    </div>
  );
};


export default Start;
