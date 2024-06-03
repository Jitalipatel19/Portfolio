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
        className="my-8 text-center text-2xl">
        Certification
      </motion.h1>
      <div className="flex flex-row justify-center items-center">
        <motion.div 
         whileInView={{ opacity: 1, y: 0 }}
         initial={{ opacity: 0, y: -100 }}
         transition={{ duration: 0.5 }}
        className="max-w-xl p-4 border-2 border-purple-400 rounded-lg mr-4">
          <p className="text-lg font-semibold">{CERTIFICATION.name1}</p>
          <a 
            href={CERTIFICATION.pdfLink1} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mr-2 mb-2 px-2 py-1 text-sm font-medium text-purple-400"
          >
            View Certificate
          </a>
        </motion.div>
        <motion.div 
         whileInView={{ opacity: 1, y: 0 }}
         initial={{ opacity: 0, y: -100 }}
         transition={{ duration: 0.5 }}
        className="max-w-xl p-4 border-2 border-purple-400 rounded-lg">
          <p className="text-lg font-semibold">{CERTIFICATION.name2}</p>
          <a 
            href={CERTIFICATION.pdfLink2} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mr-2 mb-2 px-2 py-1 text-sm font-medium text-purple-400"
          >
            View Certificate
          </a>
        </motion.div>
      </div>  
    </div>
  );
};
