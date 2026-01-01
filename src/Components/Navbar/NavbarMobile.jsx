import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const NavItem = ({ to, title, onClick, delay = 0 }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="
        text-white text-xl font-medium
        tracking-widest
        opacity-0 translate-y-5
        animate-nav-item
        transition-colors duration-300
        hover:text-[#4285f4]
      "
      style={{ animationDelay: `${delay}ms` }}
    >
      {title}
    </Link>
  );
};
// src/data/navItems.js
 const navItems = [
  { id: 1, title: "Home", to: "/#home" },
  { id: 2, title: "About", to: "/#About" },
  { id: 3, title: "Portofolio", to: "/#portofolio" },
  { id: 4, title: "Contact", to: "/#contact" },
];


const NavbarMobile = () => {
  const [isTop, setIsTop] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    
    <>
      <div
        className={`
          fixed top-0 z-50
          w-full
          flex items-center justify-between
          px-5 py-6
          transition-colors duration-300
          ${isTop ? "bg-[#f4f4f4]" : "bg-white"}
          `}
      >
        <img src="/neo.svg" alt="logo" className="w-20" />

        {/* Hamburger */}
        <button
  onClick={() => setOpen(!open)}
  className="absolute w-6 h-6 flex right-6 items-center justify-center"
>
  {/* TOP BAR */}
  <span
    className={`
      absolute w-6 h-[2px] bg-black
      transition-all duration-300 ease-in-out
      ${open ? "rotate-45" : "-translate-y-2"}
    `}
  />

  {/* MIDDLE BAR */}
  <span
    className={`
      absolute w-6 h-[2px] bg-black
      transition-all duration-300 ease-in-out
      ${open ? "opacity-0" : "opacity-100"}
    `}
  />

  {/* BOTTOM BAR */}
  <span
    className={`
      absolute w-6 h-[2px] bg-black
      transition-all duration-300 ease-in-out
      ${open ? "-rotate-45" : "translate-y-2"}
    `}
  />
</button>

      </div>

      {/* OVERLAY MENU */}
      <div
        className={`
          fixed inset-0 z-999
          bg-black/80 backdrop-blur-md
          transition-all duration-300
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
          `}
      >
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-white text-3xl"
        >
          ✕
        </button>

        {/* Menu */}
        <div className="h-full flex flex-col items-center justify-center gap-8">
          {navItems.map((item, index) => (
            <NavItem
              key={item.id}
              title={item.title}
              to={item.to}
              delay={index * 100}
              onClick={() => setOpen(false)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
