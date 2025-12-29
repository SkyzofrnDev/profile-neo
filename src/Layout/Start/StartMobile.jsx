import React from "react";
import { BlurText, Button, CountText } from "../../Components/Index";
import { LiquidGlass } from "../../Components/LiquidGlass/LiquidGlass";

const StartMobile = () => {
  return (
    <div className="bg-[url(./CompanyFam/WebDev.webp)] bg-fixed bg-cover flex w-full h-fit bg-center ">
      <div className="bg-black/40 flex-col px-7 gap-y-10 flex items-center py-10 w-full">
        <LiquidGlass
          radius={15}
          depth={50}
          blur={5}
          chromaticAberration={30}
          debug={false}
        >
          <div className="flex gap-y-2 items-center h-fit px-7 flex-col text-center py-5 text-white justify-center w-full">
            <p className="font-semibold text-4xl">
              <CountText to={10} />+
            </p>
            <p className="text-2xl font-semibold">UMKM Terbantu</p>
            <p>
              Banyak umkm yang usahanya sukses dan terbantu berkat digitalisasi.
            </p>
          </div>
        </LiquidGlass>
        <div className="text-center text-white flex items-center flex-col">
          <p className="text-3xl font-semibold text-center">
            Ready To Start The Project?
          </p>
          <p className="text-xl my-7">
            Let’s discuss how we can help you achieve your success "
          </p>
          <div data-aos="fade-up" data-aos-delay="1050">
            <Button text="Penawaran" bg="bg-primary" />
          </div>
        </div>
        <LiquidGlass
          radius={15}
          depth={50}
          blur={5}
          chromaticAberration={30}
          debug={false}
        >
          <div className="flex gap-y-2 items-center px-7 flex-col text-center py-5 text-white justify-center w-full">
            <p className="font-semibold text-4xl">
              <CountText to={10} />+
            </p>
            <p className="text-2xl font-semibold">UMKM Terbantu</p>
            <p>
              Banyak umkm yang usahanya sukses dan terbantu berkat digitalisasi.
            </p>
          </div>
        </LiquidGlass>

        <LiquidGlass
          radius={15}
          depth={50}
          blur={5}
          chromaticAberration={30}
          debug={false}
        >
          <div className="flex gap-y-2 items-center px-7 flex-col text-center py-5 text-white justify-center w-full">
            <p className="font-semibold text-4xl">
              <CountText to={10} />+
            </p>
            <p className="text-2xl font-semibold">UMKM Terbantu</p>
            <p>
              Banyak umkm yang usahanya sukses dan terbantu berkat digitalisasi.
            </p>
          </div>
        </LiquidGlass>
      </div>
    </div>
  );
};

export default StartMobile;
