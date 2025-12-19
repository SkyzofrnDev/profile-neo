import React from "react";

const Approach = () => {
  return (
    <div className="mt-56 w-full max-w-full px-24 flex flex-col justify-center items-center text-center">
      <p className="font-semibold text-default text-5xl">
        Pendekatan kami pada klien
      </p>
      <div className="flex w-3/4 justify-evenly items-center mt-20">
        <div className="relative w-fit ">
          <div className="flex items-center justify-center p-5 bg-secondary rounded-full h-24 w-24">
            <img src="Lamp.svg" alt="icon-lamp" className="object-cover z-10" />
          </div>
          <div
            className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full 
          absolute -right-12 top-1/2 -translate-y-1/2 border-4 border-[#f4f4f4]"
          >
            <p className="text-2xl text-white font-semibold">1</p>
          </div>
        </div>
        <div className="w-full h-1 bg-dark mx-20 rounded-full"></div>
        <div className="relative w-fit ">
          <div className="flex items-center justify-center p-5 bg-secondary rounded-full h-24 w-24">
            <img src="/Icon/Diamond.svg" alt="icon-lamp" className="z-10 w-20" />
          </div>
          <div
            className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full 
                  absolute -right-12 top-1/2 -translate-y-1/2 border-4 border-[#f4f4f4]"
          >
            <p className="text-2xl text-white font-semibold">2</p>
          </div>
        </div>
        <div className="w-full h-1 bg-dark mx-20  rounded-full"></div>
        <div className="relative w-fit">
          <div className="flex items-center justify-center p-5 bg-secondary rounded-full h-24 w-24">
            <img src="/Icon/Collab.svg" alt="icon-lamp" className="object-cover w-20 z-10" />
          </div>
          <div
            className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full 
                  absolute -right-12 top-1/2 -translate-y-1/2 border-4 border-[#f4f4f4]"
          >
            <p className="text-2xl text-white font-semibold">3</p>
          </div>
        </div>
      </div>
      <div className="flex px-16 gap-56">
        <div className="w-1/4">
          <p className="text-4xl font-semibold my-5">Inovatif</p>
          <p className="font-medium text-xl">
            Menciptakan produk yang dibangun menggunakan teknologi yang canggih
            untuk mencapai efisiensi berdasarkan kebutuhan yang relevan.
          </p>
        </div>
        <div className="w-1/4">
          <p className="text-4xl font-semibold my-5">Quality</p>
          <p className="font-medium text-xl">
            Berorientasi pada hasil yang maksimal namun dibangun dengan struktur
            fundamental yang kokoh untuk mencapai produk yang berkualitas.
          </p>
        </div>
        <div className="w-1/4">
          <p className="text-4xl font-semibold my-5">Collaboration</p>
          <p className="font-medium text-xl">
            Menghubungkan antara kami dengan Anda. Kami bekerja dalam tim
            memastikan semuanya saling berkesinambungan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Approach;
