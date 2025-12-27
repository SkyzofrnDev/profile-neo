import React, { useState, useRef, useEffect } from "react";

// Komponen ReviewCard yang dapat digunakan kembali
const ReviewCard = ({ review, index, hoveredCard, setHoveredCard }) => {
  return (
    <div
      className={`shrink-0 w-96 bg-white rounded-2xl shadow-lg p-8 flex flex-col relative transition-all duration-300 cursor-pointer ${
        hoveredCard === index
          ? "scale-105 shadow-2xl border-2 border-primary z-30"
          : "hover:shadow-xl z-10"
      }`}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* Tanda kutip atas */}
      <div className="absolute top-0 left-2 pointer-events-none">
        <span
          className="m-3 text-6xl text-primary jakarta font-bold leading-none block"
        >
          <img src="./Icon/quote.svg"></img>
        </span>
      </div>

      {/* Tanda kutip bawah */}
      <div className="absolute bottom-0 right-2 pointer-events-none">
        <span
          className="m-3 mb-5 rotate-180 text-6xl text-primary jakarta font-bold leading-none block"
        >
          <img src="./Icon/quote.svg"></img>
        </span>
      </div>

      {/* Konten review */}
      <p className="text-lg text-default mb-6 mt-2 leading-relaxed pl-2 relative z-10">
        {review.review}
      </p>

      {/* Profil */}
      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-200">
        <img
          src={review.image}
          alt={review.name}
          className="w-14 h-14 rounded-full object-cover border-2 border-primary"
        />
        <div>
          <p className="font-semibold text-default text-lg">
            {review.name}
          </p>
          <p className="text-gray-600 text-sm">{review.company}</p>
        </div>
      </div>
    </div>
  );
};

const Ratings = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const scrollContainerTopRef = useRef(null);
  const scrollContainerBottomRef = useRef(null);
  const animationRef = useRef(null);
  const offsetTopRef = useRef(0);
  const offsetBottomRef = useRef(0);
  const isPausedRef = useRef(false);

  // Data review (dapat diganti dengan data asli)
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      company: "Tech Solutions Inc.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      review:
        "Pelayanan yang sangat memuaskan dan profesional. Website yang dibuat sesuai dengan kebutuhan bisnis kami.",
    },
    {
      id: 2,
      name: "Sarah Williams",
      company: "Digital Marketing Pro",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      review:
        "Hasilnya melebihi ekspektasi! Tim NeoOne sangat memahami kebutuhan kami dan memberikan solusi yang tepat.",
    },
    {
      id: 3,
      name: "Michael Chen",
      company: "Global Innovations",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      review:
        "Proses pengembangan sangat cepat dan efisien. Kualitas website sangat baik dan user-friendly.",
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      company: "Creative Studio",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      review:
        "Sangat senang bekerja sama dengan NeoOne. Website kami sekarang lebih modern dan menarik.",
    },
    {
      id: 5,
      name: "David Kim",
      company: "Startup Hub",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      review:
        "Tim yang sangat responsif dan profesional. Website yang dihasilkan sangat sesuai dengan brand kami.",
    },
    {
      id: 6,
      name: "Lisa Anderson",
      company: "E-commerce Plus",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      review:
        "Pengalaman yang luar biasa! Website e-commerce kami sekarang lebih mudah digunakan dan menarik.",
    },
  ];

  // Duplikasi data untuk infinite scroll (3x untuk smooth looping)
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];
  // Reverse array untuk baris bawah agar terlihat bergerak dari kiri ke kanan
  const reversedReviews = [...reviews].reverse();
  const duplicatedReviewsBottom = [...reversedReviews, ...reversedReviews, ...reversedReviews];

  // Set posisi awal baris bawah
  useEffect(() => {
    const cardWidth = 400;
    const singleSetWidth = cardWidth * reviews.length;
    offsetBottomRef.current = -singleSetWidth;
    if (scrollContainerBottomRef.current) {
      scrollContainerBottomRef.current.style.transform = `translateX(${offsetBottomRef.current}px)`;
    }
  }, []);

  // Animasi scroll manual untuk kedua baris
  useEffect(() => {
    const cardWidth = 400; // w-96 = 384px + gap 32px = ~400px
    const singleSetWidth = cardWidth * reviews.length;

    const animate = () => {
      if (!isPausedRef.current) {
        // Baris atas: bergerak kanan ke kiri (translateX negatif)
        if (scrollContainerTopRef.current) {
          offsetTopRef.current += 0.5;

          // Reset ketika mencapai satu set lengkap untuk smooth loop
          if (offsetTopRef.current >= singleSetWidth) {
            offsetTopRef.current = 0;
          }

          scrollContainerTopRef.current.style.transform = `translateX(-${offsetTopRef.current}px)`;
        }

        // Baris bawah: bergerak kiri ke kanan (translateX positif)
        // Mulai dari -singleSetWidth, bergerak ke 0, lalu reset kembali ke -singleSetWidth
        if (scrollContainerBottomRef.current) {
          offsetBottomRef.current += 0.5;

          // Reset ketika mencapai 0 (dari -singleSetWidth ke 0, lalu loop kembali)
          if (offsetBottomRef.current >= 0) {
            offsetBottomRef.current = -singleSetWidth;
          }

          scrollContainerBottomRef.current.style.transform = `translateX(${offsetBottomRef.current}px)`;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [reviews.length]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    isPausedRef.current = false;
  };

  return (
    <div className="text-center px-10 mt-12 lg:my-56 w-full max-w-full lg:px-24 flex flex-col items-center">
      <p className="text-3xl font-semibold text-default lg:text-5xl mb-20">
        Apa Kata Klien Kami
      </p>
      <div
        className="w-full relative py-12 flex flex-col gap-12"
        style={{ overflowX: "hidden", overflowY: "visible" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="absolute left-0 top-0 bottom-0 w-48 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, var(--background) 0%, rgba(244, 244, 244, 0.8) 50%, transparent 100%)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-48 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, var(--background) 0%, rgba(244, 244, 244, 0.8) 50%, transparent 100%)",
          }}
        />

        {/* Baris atas - bergerak kanan ke kiri */}
        <div
          className="relative py-4"
          style={{ overflowX: "hidden", overflowY: "visible" }}
        >
          <div
            ref={scrollContainerTopRef}
            className="flex gap-8 relative z-10"
            style={{ width: "max-content", willChange: "transform" }}
          >
            {duplicatedReviews.map((review, index) => {
              const uniqueKey = `top-${review.id}-${index}`;
              return (
                <ReviewCard
                  key={uniqueKey}
                  review={review}
                  index={uniqueKey}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                />
              );
            })}
          </div>
        </div>

        {/* Baris bawah - bergerak kiri ke kanan */}
        <div
          className="relative py-4"
          style={{ overflowX: "hidden", overflowY: "visible" }}
        >
          <div
            ref={scrollContainerBottomRef}
            className="flex gap-8 relative z-10"
            style={{ width: "max-content", willChange: "transform" }}
          >
            {duplicatedReviewsBottom.map((review, index) => {
              const uniqueKey = `bottom-${review.id}-${index}`;
              return (
                <ReviewCard
                  key={uniqueKey}
                  review={review}
                  index={uniqueKey}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
