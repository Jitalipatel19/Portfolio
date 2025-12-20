import React from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaPhoneSquareAlt } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";

export const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 bg-gray-900 text-white">
      <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="my-20 text-center text-4xl"
          >
            Get In Touch
          </motion.h1>

      <div className="text-center tracking-tight">
        <motion.p 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="my-4 text-lg"
        >
          {CONTACT.phoneNo}
        </motion.p>
        
        <motion.a 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          href={`mailto:${CONTACT.email}`} 
          className="text-lg border-b border-transparent hover:border-white transition-colors duration-300"
        >
          {CONTACT.email}
        </motion.a>
      </div>

      {/* ICONS */}
      <div className="mt-12 flex items-center justify-center gap-6 text-3xl">
        <a href="https://www.linkedin.com/in/jitali-patel-431017263/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-300">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Jitalipatel19" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors duration-300">
          <FaGithub />
        </a>
        <a href="mailto:jitalipatel21@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors duration-300">
          <BiLogoGmail />
        </a>
        <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors duration-300">
          <FaPhoneSquareAlt />
        </a>
      </div>

      <p className='mt-20 text-center text-sm text-gray-500'>All Rights Reserved By Jitali</p>
    </div>
  );
};
