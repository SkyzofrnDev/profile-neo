import React, { useRef, useState, useEffect } from "react";

const originalData = [
  {
    title: "Innovatif",
    desc:
      "Menciptakan produk yang dibangun menggunakan teknologi yang canggih untuk mencapai efisiensi berdasarkan kebutuhan yang relevan bisnis Anda",
    icon: "Lamp.svg",
  },
  {
    title: "Kolaboratif",
    desc: "Bekerja sama secara aktif dengan klien untuk mencapai hasil terbaik",
    icon: "/Icon/Diamond.svg",
  },
  {
    title: "Efisien",
    desc: "Mengoptimalkan waktu dan sumber daya untuk hasil maksimal",
    icon: "/Icon/Collab.svg",
  },
];

// 🔁 infinite data
const data = [...originalData, ...originalData, ...originalData];

const START_INDEX = originalData.length;

const ApproachMobile = () => {
  const [active, setActive] = useState(START_INDEX);
  const [visualIndex, setVisualIndex] = useState(START_INDEX);
  const [animate, setAnimate] = useState(true);

  const startX = useRef(0);
  const moveX = useRef(0);

  // 🔒 FIX BUG CLICK CEPAT
  const isAnimating = useRef(false);

  /* =======================
        REFS & MEASUREMENT
  ======================= */
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const [cardDistance, setCardDistance] = useState(0);
  const [centerOffset, setCenterOffset] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (
        !containerRef.current ||
        cardRefs.current.length < 1
      )
        return;

      const containerRect =
        containerRef.current.getBoundingClientRect();
      const firstCard =
        cardRefs.current[0].getBoundingClientRect();

      // CENTER RELATIVE TO CONTAINER
      setCenterOffset(
        containerRect.width / 2 -
          firstCard.width / 2 -
          22 // fine tune kamu
      );

      if (cardRefs.current.length >= 2) {
        const secondCard =
          cardRefs.current[1].getBoundingClientRect();
        setCardDistance(
          secondCard.left - firstCard.left
        );
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () =>
      window.removeEventListener("resize", measure);
  }, []);

  /* =======================
        SNAP BACK TANPA KEJUT
  ======================= */
  useEffect(() => {
    const total = originalData.length;

    if (visualIndex >= total * 2) {
      setTimeout(() => {
        setAnimate(false);
        setVisualIndex(START_INDEX);
      }, 500);
    }

    if (visualIndex < total) {
      setTimeout(() => {
        setAnimate(false);
        setVisualIndex(START_INDEX + total - 1);
      }, 500);
    }
  }, [visualIndex]);

  useEffect(() => {
    if (!animate) {
      requestAnimationFrame(() => setAnimate(true));
    }
  }, [animate]);

  /* =======================
          NAVIGATION
  ======================= */
  const next = () => {
    if (isAnimating.current) return; // 🔒
    isAnimating.current = true;

    setActive((p) => p + 1);
    setVisualIndex((p) => p + 1);

    setTimeout(() => {
      isAnimating.current = false;
    }, 500);
  };

  const prev = () => {
    if (isAnimating.current) return; // 🔒
    isAnimating.current = true;

    setActive((p) => p - 1);
    setVisualIndex((p) => p - 1);

    setTimeout(() => {
      isAnimating.current = false;
    }, 500);
  };

  /* =======================
          TOUCH
  ======================= */
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    moveX.current =
      e.touches[0].clientX - startX.current;
  };

  const onTouchEnd = () => {
    if (isAnimating.current) return; // 🔒

    if (moveX.current < -80) next();
    if (moveX.current > 80) prev();
    moveX.current = 0;
  };

  /* =======================
        TAP LEFT / RIGHT
  ======================= */
  const onTap = (e) => {
    if (isAnimating.current) return; // 🔒

    const { left, width } =
      e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    x < width / 2 ? prev() : next();
  };

  /* =======================
        REAL ACTIVE INDEX
  ======================= */
  const realIndex =
    ((active - START_INDEX) % originalData.length +
      originalData.length) %
    originalData.length;

  return (
    <div className="select-none mt-20 w-full flex flex-col items-center text-center overflow-hidden">
      <p className="mx-10 text-3xl font-semibold text-default">
        Pendekatan kami pada klien
      </p>

      <div
        ref={containerRef}
        className="relative mt-10 w-full"
      >
        {/* BLUR EDGE */}
        <div className="pointer-events-none absolute left-0 top-0 h-96 w-14 bg-gradient-to-r from-[#f4f4f4] to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-14 bg-gradient-to-l from-[#f4f4f4] to-transparent z-20" />

        {/* TRACK */}
        <div
          className={`flex items-stretch gap-6 px-10 ${
            animate
              ? "transition-transform duration-500 ease-out"
              : ""
          }`}
          style={{
            transform: `translateX(${
              centerOffset -
              visualIndex * cardDistance
            }px)`,
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onClick={onTap}
        >
          {data.map((item, index) => {
            const isActive =
              index % originalData.length ===
              realIndex;

            return (
              <div
                key={index}
                ref={(el) =>
                  (cardRefs.current[index] = el)
                }
                className={`
                  min-w-[260px] bg-white rounded-4xl
                  px-7 py-6 flex flex-col items-center
                  transition-all duration-500
                  ${
                    isActive
                      ? "scale-100 translate-y-0 shadow-xl opacity-100"
                      : "scale-95 translate-y-10 opacity-60"
                  }
                `}
              >
                <div className="bg-tertiary w-16 h-16 flex items-center justify-center rounded-full">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-8 object-cover"
                  />
                </div>

                <p className="mt-6 font-semibold text-2xl">
                  {item.title}
                </p>

                <p className="mt-3 text-sm font-medium">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* DOT INDICATOR */}
      <div className="flex gap-2 mt-15">
        {originalData.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (isAnimating.current) return; // 🔒
              const diff = i - realIndex;
              setActive((p) => p + diff);
              setVisualIndex((p) => p + diff);
            }}
            className={`h-2 rounded-full transition-all ${
              i === realIndex
                ? "bg-primary w-6"
                : "bg-gray-300 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ApproachMobile;
