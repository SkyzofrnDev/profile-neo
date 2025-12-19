import React from "react";
import "./animated-n.css";

const AnimatedN = ({ size = 64 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animated-n"
    >
      {/* PATH TUNGGAL – URUTAN BAWAH → ATAS → KANAN → BAWAH */}
      <path
        d="
          M2 21
          V11
          C2 5 6 1 11 1
          C16 1 20 5 20 11
          V21
        "
        className="n-stroke"
      />
    </svg>
  );
};

export default AnimatedN;
