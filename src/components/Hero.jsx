import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import shoe from '../img/nike.png';


const Hero = () => {
  return (
    <section 
    style={{ backgroundImage: "url('https://pngmagic.com/webp_images/a4-size-paper-white-background-images.webp')" }}

    className='bg-cover md:p-12 h-[800px] items-center flex '>
      <div 
      className='w-full bg-cover  h-full flex justify-center items-center'>
        <div className=''>
          <div className='text-start lg:text-center '>
          <h1 
          style={{fontFamily: "Josefin Sans, Serif"}}
          className='text-4xl lg:text-4xl font-extrabold text-gray-600 py-1 leading-[100px]'>Welcome to <br /><motion.span
          style={{fontFamily: "Josefin Sans, Serif"}}
          className=" lg:text-7xl text-5xl uppercase "
          animate={{ color: ["#FF5733", "#1E90FF", "#32CD32", "#FF5733"] }}
          transition={{ duration: 3, repeat: Infinity }}
          >RB Collection</motion.span></h1>
          </div>

            <div className=' text-start lg:text-center '>
          <p 
          style={{fontFamily: "Josefin Sans, Serif"}}
          className='text-gray-600  font-bold text-lg lg:text-xl  '>Style Redefined, Confidence Amplified </p>

            </div>
        </div>
      </div>

      <div className='hidden lg:block'><img  className='mt-[100px] mr-[200px]' src={shoe} alt="" /></div>
    </section>
  )
};

export default Hero;
