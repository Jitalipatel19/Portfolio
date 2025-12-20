import React from 'react';
import { motion } from "framer-motion";

export const Resume = () => {
  // We define the path here. 
  // IMPORTANT: Ensure this relative path correctly points from this file to your PDF
  const resumePath = require('../assets/certificate/resume.pdf');

  return (
    <div className="mx-auto max-w-4xl mb-20 border-b border-neutral-900 pb-10 text-white">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Resume
      </motion.h1>

      <div className="flex justify-center items-center">
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="max-w-md p-6 border-2 border-purple-400 rounded-lg shadow-lg text-center"
        >
          <p className="text-xl font-semibold mb-6 text-gray-300">
            Professional Profile
          </p>

          <a 
            href={resumePath} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-lg font-medium text-purple-400 border border-purple-400 rounded hover:bg-purple-400 hover:text-white transition-colors duration-300"
          >
            View Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};