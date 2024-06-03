import React from 'react';
import profileImage from "../assets/hero.jpg";
import { HERO_CONTENT } from "..";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0, opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:flex-nowrap items-center lg:space-x-8">
        <div className="w-full lg:w-1/2">
          {/* NAME */}
          <div className="my-20 ml-6 flex flex-col items-center lg:items-start space-y-6 lg:space-y-8">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="mt-12 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-white mx-8 lg:mx-0"
            >
              Jitali Patel
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="mx-20 lg:mx-0 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Software Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="mx-8 lg:mx-0 max-w-xl font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-8 lg:mt-0 lg:ml-8 flex justify-center lg:justify-end"
        >
          <img
            src={profileImage}
            alt="Profilepic"
            className="w-60 h-60 lg:w-72 lg:h-80 object-cover shadow-lg border-4 border-neutral-900"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
