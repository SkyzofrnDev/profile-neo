import React from 'react';
import { Link } from 'react-router';

const Button = ({ bg, text,to }) => {
  return (
    <Link
      to={to}
      className={`my-2 pl-4 sm:my-5 md:mt-0 px-2 py-2 md:px-3 md:pl-10 md:py-3 flex items-center gap-2 md:gap-5 text-white xl:text-xl 2xl:text-2xl tracking-wide font-medium ${bg} rounded-full w-fit group`}
    >
      {text}

      {/* ICON WRAPPER */}
      <div
        className="
          p-2 md:p-4 rounded-full bg-white
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
          w-4 h-4  md:w-4 md:h-4
            transition-transform duration-300 ease-out
            group-hover:-rotate-45
          "
        />
      </div>
    </Link>
  );
};

export default Button;
