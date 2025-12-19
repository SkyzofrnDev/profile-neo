import React, { useEffect } from "react";
import { BlurText, Button } from "../../Components/Index";
import Aos from "aos";

const Card = ({ data, title, desc }) => {
  return (
    <div className="px-10 py-10 bg-white w-96 rounded-3xl text-center ">
      <p className="text-7xl font-semibold">{data}</p>
      <p className="font-medium text-2xl my-3">{title}</p>
      <p className="text-xl">{desc}</p>
    </div>
  );
};

const Start = () => {
  useEffect(() => {
    Aos.init({
      duration: 800, // durasi animasi (ms)
      easing: "ease-in-out",
      once: true, // animasi jalan sekali
      offset: 100, // jarak trigger dari viewport
    });
  }, []);
  return (
    <div className="mt-56 grid grid-cols-3 gap-y-40 place-items-center pb-26">
      {/* kiri atas */}
      <div data-aos="fade-up" data-aos-delay="150" className="-translate-y-28">
        <Card
          data="10+"
          title="UMKM terbantu"
          desc="Banyak umkm yang usahanya sukses dan terbantu berkat digitalisasi."
        />
      </div>

      {/* tengah */}
      <div className="text-center translate-y-36 flex items-center flex-col">
        <p className="text-5xl text-default font-semibold leading-relaxed">
          <BlurText text="Ready To Start The Project?" />
        </p>
        <p className="text-2xl text-[#8f8f8f] mt-10 my-10">
          <BlurText
            text="Let’s discuss how we can help you achieve your success
"
          />
        </p>
        <div data-aos="fade-up" data-aos-delay="1050">
        <Button text="Penawaran" bg="bg-primary" />
        </div>
      </div>

      {/* kanan atas */}
      <div data-aos="fade-up" data-aos-delay="350" className="translate-y-16">
        <Card
          data="100%"
          title="Generasi muda bangsa"
          desc="Tim kami sepenuhnya didominasi generasi muda ahli di bidangnya."
        />
      </div>

      {/* kiri bawah */}
      <div data-aos="fade-up" data-aos-delay="650" className="translate-y-10">
        <Card
          data="100%"
          title="Klien kami puas"
          desc="Seluruh klien puas dengan hasil yang diberikan."
        />
      </div>

      {/* spacer tengah */}
      <div></div>

      {/* kanan bawah */}
      <div data-aos="fade-up" data-aos-delay="1050" className="translate-y-20">
        <img src="hero-img.png" className="rounded-3xl w-96" alt="team" />
      </div>
    </div>
  );
};

export default Start;
