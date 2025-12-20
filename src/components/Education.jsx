import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../constants'; // Make sure EDUCATION is properly defined

function Education() {
  return (
    <>
      <div className="pb-24">
        {/* HEADING */}
        <div className="mx-8 mb-20 border-b border-neutral-900 pb-6">
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="my-20 text-center text-4xl"
          >
            Education
          </motion.h1>

          {/* School Section */}
          <div>
            <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="my-6 text-center text-2xl font-bold text-purple-600"
            >
              School
            </motion.h2>

            <div className="flex flex-row justify-center space-x-6">
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-sm p-6 border border-purple-400 shadow-md rounded-lg mb-6"
              >
                <p className="text-xl font-bold text-purple-600 mb-2">{EDUCATION.school1}</p>
                <p className="text-sm font-medium text-gray-700 mb-1">
                  Percentage: <span className="text-purple-500">{EDUCATION.percentage1}%</span>
                </p>
                <p className="text-sm font-medium text-gray-600">
                  {EDUCATION.school_name1}, {EDUCATION.city1}
                </p>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-sm p-6 border border-purple-400 shadow-md rounded-lg mb-6"
              >
                <p className="text-xl font-bold text-purple-600 mb-2">{EDUCATION.school2}</p>
                <p className="text-sm font-medium text-gray-700 mb-1">
                  Percentage: <span className="text-purple-500">{EDUCATION.percentage2}%</span>
                </p>
                <p className="text-sm font-medium text-gray-600">
                  {EDUCATION.school_name2}, {EDUCATION.city2}
                </p>
              </motion.div>
            </div>
          </div>

          {/* College Section */}
          <div>
            <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="my-6 text-center text-2xl font-bold text-purple-600"
            >
              College
            </motion.h2>

            <div className="flex flex-row justify-center space-x-6">
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-sm p-6 border border-purple-400 shadow-md rounded-lg mb-6"
              >
                <p className="text-xl font-bold text-purple-600 mb-2">{EDUCATION.degree1}</p>
                <p className="text-sm font-medium text-gray-700 mb-1">
                  Percentage: <span className="text-purple-500">{EDUCATION.degree_percentage_1}%</span>
                </p>
                <p className="text-sm font-medium text-gray-600">
                  {EDUCATION.collage_name1}, {EDUCATION.city3}
                </p>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-sm p-6 border border-purple-400 shadow-md rounded-lg mb-6"
              >
                <p className="text-xl font-bold text-purple-600 mb-2">{EDUCATION.degree2}</p>
                <p className="text-sm font-medium text-gray-700 mb-1">
                  Percentage: <span className="text-purple-500">{EDUCATION.degree_percentage_2}%</span>
                </p>
                <p className="text-sm font-medium text-gray-600">
                  {EDUCATION.collage_name2}, {EDUCATION.city4}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
