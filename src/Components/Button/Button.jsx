import React from 'react';
import { Link } from 'react-router';

const Button = ({ bg, text }) => {
  return (
    <Link
      to="/home"
      className={`px-3 pl-10 py-3 flex items-center gap-5 text-white text-2xl tracking-wide font-medium ${bg} rounded-full w-fit group`}
    >
      {text}

      {/* ICON WRAPPER */}
      <div
        className="
          p-5 rounded-full bg-white
          transition-all duration-200 ease-out
          group-hover:scale-110
        "
      >
        {/* ICON */}
        <img
          src="/Arrow.svg"
          alt="arrow"
          loading="lazy"
          className="
            w-7 h-7
            transition-transform duration-300 ease-out
            group-hover:-rotate-45
          "
        />
      </div>
    </Link>
  );
};

export default Button;
