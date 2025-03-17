import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import shoe from '../img/nike.png';


const Hero = () => {
  return (
    <section 
      style={{ backgroundImage: "url('https://pngmagic.com/webp_images/a4-size-paper-white-background-images.webp')" }}
      className='bg-cover bg-amber-700 h-screen w-full flex items-center justify-center'
    >
      <div className='container px-4 lg:px-24 flex flex-col lg:flex-row justify-around items-center'>
        <div className='text-center lg:text-left lg:w-1/2'>
          <h1 
            style={{ fontFamily: "Josefin Sans, Serif" }}
            className='text-3xl lg:text-4xl font-extrabold text-gray-600 leading-loose'
          >
            Welcome to <br />
            <motion.span
              style={{ fontFamily: "Josefin Sans, Serif" }}
              className="text-4xl lg:text-7xl uppercase"
              animate={{ color: ["#FF5733", "#1E90FF", "#32CD32", "#FF5733"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Fashion Hub
            </motion.span>
          </h1>
          <p 
            style={{ fontFamily: "Josefin Sans, Serif" }}
            className='text-gray-600 font-bold text-lg lg:text-xl mt-4'
          >
            Style Redefined, Confidence Amplified
          </p>
        </div>
        <div className='hidden lg:flex mt-8 lg:mt-0  lg:w-1/2 justify-center lg:justify-end'>
          <img className='max-w-xs lg:max-w-sm' src={shoe} alt="Shoe" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
