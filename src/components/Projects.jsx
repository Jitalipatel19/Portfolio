import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <div className="mx-8 mb-20 border-b border-neutral-900 pb-6">
     <motion.h1 
    whileInView={{opacity:1,y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:0.5}}
    className="my-20 text-center text-4xl"
>
    Projects
</motion.h1>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{opacity:1,y:0}}
              initial={{opacity:0,y:-100}}
              transition={{duration:1}}
              className="relative w-full lg:w-1/4 p-4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg shadow-lg border-4 border-purple-400"
              />
            </motion.div>

            <motion.div
              whileInView={{opacity:1,y:0}}
              initial={{opacity:0,y:-100}}
              transition={{duration:1}}
              className="w-full max-w-xl lg:w-3/4 p-4"
            >
              <h6 className="mb-2 text-xl font-semibold">
                {project.title} - 
                <a 
                  href={project.sourceCode} 
                  className="text-purple-400 ml-2 text-sm font-normal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <motion.div
                whileInView={{opacity:1,y:0}}
                initial={{opacity:0,y:-100}}
                transition={{duration:1}}
                className="mt-4"
              >
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
