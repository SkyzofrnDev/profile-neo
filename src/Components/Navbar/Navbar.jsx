import React from "react";
import { GlassElement } from "../LiquidGlass/GlassElement";
import { Link } from "react-router";
import "./style.module.css";

const NavLink = ({ to, title, delay }) => {
  return (
    <div
      className="group inline-flex items-center gap-5 cursor-pointer
      opacity-0 translate-y-5
      animate-nav-item"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Link
        to={to}
        className="
          relative
          after:content-['']
          after:left-0
          bottom-5
          after:w-0
          after:bg-[#4285f4]
          after:transition-all
          after:duration-300
          group-hover:after:w-full
          transition-colors
          duration-300
          group-hover:text-[#4285f4]
        "
      >
        {title}
      </Link>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="pt-10 justify-center flex w-full items-center rounded-bl-xl right-0 bg- text-white fixed  z-50">
      <GlassElement
        width={700}
        height={100}
        radius={100}
        depth={50}
        blur={5}
        chromaticAberration={30}
        debug={false}
      >
        <div className="flex w-full text-white text-xl font-medium items-center justify-between px-20">
            <NavLink to="/#home" title="Home" delay={700} />
            <NavLink to="/#about" title="About" delay={800} />
            <NavLink to="/#portofolio" title="Portofolio" delay={900} />
            <NavLink to="/#contact" title="Contact" delay={1100} />
        </div>
      </GlassElement>
    </div>
  );
};

export default Navbar;
