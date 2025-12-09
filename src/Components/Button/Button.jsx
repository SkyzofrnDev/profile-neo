import React from 'react'
import { Link } from 'react-router';

const Button = ({ bg, text }) => {
    return (
      <Link to="/home" className={`px-3 pl-10 py-3 flex items-center gap-5  text-white text-2xl tracking-wide font-medium ${bg} flex w-fit rounded-full`}>
        {text} <div className='p-5 rounded-full bg-white'> <img src="/Arrow.svg" alt="arrow" className="w-7 h-7" loading="lazy" /></div>
      </Link>
    );
  };
  
  export default Button;
  