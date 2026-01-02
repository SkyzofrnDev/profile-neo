import React from "react";

const steps = [
  {
    id: 1,
    title: "Inovatif",
    desc: "Menciptakan produk yang dibangun menggunakan teknologi yang canggih untuk mencapai efisiensi berdasarkan kebutuhan yang relevan.",
    icon: "Lamp.svg",
    iconClass: "w-12 h-12",
  },
  {
    id: 2,
    title: "Quality",
    desc: "Berorientasi pada hasil yang maksimal namun dibangun dengan struktur fundamental yang kokoh untuk mencapai produk yang berkualitas.",
    icon: "/Icon/Diamond.svg",
    iconClass: "w-12 h-12",
  },
  {
    id: 3,
    title: "Collaboration",
    desc: "Menghubungkan antara kami dengan Anda. Kami bekerja dalam tim memastikan semuanya saling berkesinambungan.",
    icon: "/Icon/Collab.svg",
    iconClass: "w-12 h-12",
  },
];

const Approach = () => {
  return (
    <section className="mt-20 lg:mt-56 w-full px-6 sm:px-10 lg:px-24 flex flex-col items-center text-center">
      <h2 className="text-3xl font-semibold text-default lg:text-5xl">
        Pendekatan kami pada klien
      </h2>

      {/* Wrapper steps */}
      <div className="mt-12 lg:mt-20 w-full max-w-9xl">
        {/* 
          - Mobile: stack (1 kolom)
          - md: 2 kolom
          - lg: 3 kolom
        */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
          {steps.map((s, idx) => (
            <div key={s.id} className="relative flex flex-col items-center">
              {/* Icon + number */}
              <div className="relative w-fit">
                <div className="flex items-center justify-center bg-secondary rounded-full h-24 w-24">
                  <img
                    src={s.icon}
                    alt={`icon-${s.title}`}
                    className={`${s.iconClass} object-contain`}
                  />
                </div>

                <div className="flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-blue-500 rounded-full absolute -right-6 lg:-right-10 top-1/2 -translate-y-1/2 border-4 border-[#f4f4f4]">
                  <p className="text-xl lg:text-2xl text-white font-semibold">
                    {s.id}
                  </p>
                </div>
              </div>

              {/* Connector (desktop only) */}
              {idx < steps.length - 1 && (
                <div
                  className="
                    hidden lg:block
                    absolute
                    top-12
                    right-[-8.75rem]
                    w-[10.5rem]
                    h-1
                    bg-dark
                    rounded-full
                  "
                />
              )}

              {/* Title + desc */}
              <div className="mt-6 max-w-sm">
                <p className="text-3xl lg:text-4xl font-semibold">{s.title}</p>
                <p className="mt-3 font-medium text-base lg:text-lg text-[#2b2b2b]">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
