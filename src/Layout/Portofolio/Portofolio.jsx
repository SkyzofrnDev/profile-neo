import React, { useMemo, useState, useCallback, useEffect } from "react";

/**
 * 1) DATA: bisa kamu pindahkan ke file JSON terpisah
 * contoh: src/data/portfolio.json
 *
 * [
 *  {
 *    "badge": "Neo One",
 *    "titleTop": "Portofolio",
 *    "titleBottom": "Perusahaan",
 *    "projectTitle": "Web Portofolio PT Neo One Global Innovasi",
 *    "image": "portofolio.png",
 *    "techLabel": "Tech Stack",
 *    "techIcons": ["react.svg", "react.svg", "react.svg"]
 *  }
 * ]
 */
const portfolioData = [
  {
    badge: "Neo One",
    titleTop: "Portofolio",
    titleBottom: "Perusahaan",
    projectTitle: "Web Portofolio PT Neo One Global Innovasi",
    image: "portofolio.png",
    techLabel: "Tech Stack",
    techIcons: ["react.svg", "react.svg", "react.svg"],
  },
  {
    badge: "Agus Cooperation",
    titleTop: "Portofolio",
    titleBottom: "Perusahaan",
    projectTitle: "Company Profile Agus Cooperation",
    image: "portofolio-2.png",
    techLabel: "Tech Stack",
    techIcons: ["react.svg", "tailwind.svg", "aos.svg"],
  },
  {
    badge: "Digital Health",
    titleTop: "Portofolio",
    titleBottom: "Perusahaan",
    projectTitle: "Landing Page Digital Doctor",
    image: "portofolio-3.png",
    techLabel: "Tech Stack",
    techIcons: ["react.svg", "tailwind.svg", "three.svg"],
  },
];

const ArrowButton = ({ children, onClick, disabled, variant = "dark" }) => {
  const base =
    "flex items-center justify-center w-14 h-14 rounded-full text-white text-4xl font-semibold select-none transition-all duration-200";
  const styles =
    variant === "gray"
      ? "bg-[#8f8f8f] hover:brightness-110"
      : "bg-[#2f2f2f] hover:brightness-125";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${styles} ${
        disabled ? "opacity-40 cursor-not-allowed" : "active:scale-95"
      }`}
      aria-label="portfolio navigation button"
    >
      {children}
    </button>
  );
};

const PortfolioCard = ({ item }) => {
  return (
    <div className="w-full flex flex-col items-start">
      {/* Portfolio Image */}
      <img
        src={item.image}
        alt={item.projectTitle}
        loading="lazy"
        className="rounded-2xl w-full aspect-video object-cover"
      />

      {/* Description */}
      <div className="mt-10 text-white w-full">
        <p className="font-semibold text-2xl sm:text-3xl lg:text-4xl">
          {item.projectTitle}
        </p>

        <p className="mt-6 text-lg sm:text-xl lg:text-2xl">{item.techLabel}</p>

        <div className="flex flex-wrap gap-4 mt-5">
          {item.techIcons?.map((src, i) => (
            <img
              key={`${src}-${i}`}
              src={src}
              alt={`tech-${i}`}
              loading="lazy"
              className="h-9 w-9 sm:h-10 sm:w-10 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Portofolio = ({ data = portfolioData, autoPlay = false, interval = 4500 }) => {
  const items = useMemo(() => (Array.isArray(data) ? data : []), [data]);
  const [index, setIndex] = useState(0);

  const max = items.length;

  const prev = useCallback(() => {
    setIndex((i) => (max ? (i - 1 + max) % max : 0));
  }, [max]);

  const next = useCallback(() => {
    setIndex((i) => (max ? (i + 1) % max : 0));
  }, [max]);

  // optional autoplay
  useEffect(() => {
    if (!autoPlay || max <= 1) return;
    const t = setInterval(next, interval);
    return () => clearInterval(t);
  }, [autoPlay, interval, next, max]);

  // keyboard support (optional, nice UX)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  if (!items.length) {
    return (
      <div className="bg-dark mt-10 px-5 py-10 lg:my-24 lg:rounded-[5rem] lg:px-24 lg:py-20 lg:mx-10 text-white">
        Data portofolio kosong.
      </div>
    );
  }

  const current = items[index];

  return (
    <section className="bg-dark mt-10 px-5 py-10 lg:my-24 lg:rounded-[5rem] lg:px-24 lg:py-20 lg:mx-10">
      {/* GRID 2 KOLOM */}
      <div className="grid h-full grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="bg-secondary w-fit px-7 sm:px-9 py-2 sm:py-3 rounded-full text-dark font-medium text-xl sm:text-2xl lg:text-3xl">
            {current.badge}
          </div>

          {/* Heading */}
          <div className="mt-10 leading-none font-semibold">
            <h1 className="text-white text-4xl sm:text-5xl xl:text-7xl 2xl:text-8xl">
              {current.titleTop}
            </h1>
            <h1 className="text-[#8f8f8f] text-4xl sm:text-5xl xl:text-7xl 2xl:text-8xl">
              {current.titleBottom}
            </h1>
          </div>

          {/* Arrows + indicator */}
          <div className="flex items-center gap-6 mt-16 text-white">
            <ArrowButton onClick={prev} variant="gray">
              {"<"}
            </ArrowButton>
            <ArrowButton onClick={next} variant="dark">
              {">"}
            </ArrowButton>

            <p className="ml-2 text-white/70 text-lg">
              {index + 1} / {max}
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <PortfolioCard item={current} />
      </div>
    </section>
  );
};

export default Portofolio;
