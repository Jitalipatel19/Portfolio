import React from 'react';
import { motion } from "framer-motion";
import { CERTIFICATION } from '../constants';

export const Certification = () => {
  return (
    <div className="mx-8 mb-20 border-b border-neutral-900 pb-6">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
         className="my-20 text-center text-4xl"
      >
        Certification
      </motion.h1>

      <div className="flex flex-row justify-center items-center ">
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl p-4 border-2 border-purple-400 rounded-lg  shadow-md mr-4"
        >
          <p className="text-lg font-semibold text-white-900 mb-4">
            {CERTIFICATION.name1}
          </p>
          <a 
            href={CERTIFICATION.pdfLink1} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-4 py-2 text-sm font-medium text-purple-400 border border-purple-400 rounded hover:bg-purple-400 hover:text-white transition-colors duration-300"
          >
            View Certificate
          </a>
        </motion.div>
      </div>
    </div>
  );
};
