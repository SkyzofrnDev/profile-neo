import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-white px-20 pb-10 pt-20 mx-5 rounded-[4rem]">
      <div>
        <p className="font-bold text-6xl leading-tight jakarta">
          Bring your <span className="text-tertiary">ideas</span> <br />
          To <span className="text-secondary">digital</span>
          <span className="text-primary"> life</span>{" "}
        </p>
      </div>
      <div>
        <ul className="flex gap-20 ml-10 mt-5 text-xl">
          <Link to={"/#home"}>Home</Link>
          <Link to={"/#about"}>About</Link>
          <Link to={"/#portofolio"}>Project</Link>
          <Link to={"/#contact"}>Contact</Link>
        </ul>
      </div>
      <div className="flex gap-20 items-center justify-center mt-20 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="378"
          height="380"
          viewBox="0 0 22 22"
          fill="none"
          className="opacity-60 hover:opacity-100 transition-all duration-300"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.7059 0C4.79318 0 0 4.79318 0 10.7059V12.1882V12.4635V21.4117H4.94116V12.1882H4.94115V11.6941C4.94115 8.51034 7.52209 5.9294 10.7058 5.9294C13.8896 5.9294 16.4705 8.51034 16.4705 11.6941V12.1882V12.4635V21.4117H21.4117V12.4635H21.4117V10.7059C21.4117 4.79318 16.6185 0 10.7059 0Z"
            fill="#0F9D58"
          />
        </svg>
        <svg
          width="378"
          height="380"
          viewBox="0 0 278 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-60 hover:opacity-100 transition-all duration-300"
        >
          <path
            d="M275.473 163.777C276.78 156.043 277.459 148.099 277.459 139.944C277.459 129.159 276.257 118.848 273.958 108.746C259.899 46.5078 204.554 0 138.39 0C72.3307 0 16.9852 46.4552 2.87441 108.746C1.46333 114.691 0.574882 120.794 0 127.055V152.887C0.313572 156.517 0.783933 160.252 1.41108 163.724C4.80811 183.927 12.5952 202.656 23.5702 218.86C48.5514 255.688 90.7269 279.941 138.39 279.941C186.157 279.941 228.333 255.688 253.314 218.86H138.39C103.322 218.86 73.6372 195.712 63.6551 163.724H275.473V163.777ZM66.4773 108.746C78.4453 80.7048 106.144 61.081 138.442 61.081C170.792 61.081 198.491 80.7048 210.511 108.746H66.4773Z"
            fill="#4285F4"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="378"
          height="380"
          viewBox="0 0 22 22"
          fill="none"
          className="opacity-60 hover:opacity-100 transition-all duration-300"
        >
          <path
            d="M21.9999 0.0400537V10.7097C21.9999 12.9307 21.3192 14.9959 20.1608 16.6977C19.4204 17.7802 18.4889 18.7309 17.4061 19.4779C15.973 20.4726 14.2772 21.1197 12.45 21.3114H10.2686C5.67075 20.8441 1.9328 17.4407 0.969451 12.9866C0.81022 12.2516 0.726624 11.4966 0.726624 10.7097C0.726624 4.82961 5.48764 0.0640215 11.3593 0.0640215C11.8927 0.0640215 12.4182 0.103968 12.9317 0.179866L7.21132 6.30363C7.0282 6.47939 6.85304 6.66315 6.69381 6.85489L6.65002 6.90682C5.81804 7.95341 5.31646 9.27563 5.31646 10.7097C5.31646 14.0532 8.02339 16.7656 11.3633 16.7656C11.7892 16.7656 12.2032 16.7216 12.6053 16.6337C15.352 16.0625 17.4101 13.6258 17.4101 10.7057V6.6232L16.5263 7.56194L15.2923 8.89215L11.7215 5.30897L12.2709 4.72176L15.7421 1.00276L16.6418 0.0400537H21.9999Z"
            fill="#F4B400"
          />
        </svg>
      </div>
      <div className="w-full mt-15 px-28 h-0.5 bg-[#8f8f8f] rounded-full "></div>
      <div className="flex mt-5 justify-between items-center px-20 pt-5">
        <div className="flex gap-5">
          <a href="https://instagram.com/neooneid" target="_blank" className="border-2 flex items-center border-[#4d4d4d] p-3 rounded-full">
            <img src="/Sosmed/linkedin.svg" alt="instagram" />
          </a>
          <a href="https://instagram.com/neooneid" target="_blank" className="border-2  flex items-center border-[#4d4d4d] p-3 rounded-full">
            <img src="/Sosmed/ig.svg" alt="instagram" />
          </a>
          <a href="https://instagram.com/neooneid" target="_blank" className="border-2  flex items-center border-[#4d4d4d] p-3 rounded-full">
            <img src="/Sosmed/twitet.svg" alt="instagram" />
          </a>
        </div>
        <p className="text-[#4d4d4d] font-semibold text-2xl">
          Copyright © 2025, All rights reserved.
        </p>
        <div className="flex gap-x-22">
          <Link to={"/"} className="text-[#4d4d4d] font-medium text-2xl">Contact</Link>
          <p className="text-[#4d4d4d] font-medium text-2xl">
            FAQ
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
