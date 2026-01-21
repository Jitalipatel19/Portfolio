import { RiReactjsLine } from "react-icons/ri";
import { MdHtml } from "react-icons/md";
import { MdOutlineCss } from "react-icons/md";
import { FaNodeJs } from "react-icons/fa";
import { FcAndroidOs } from "react-icons/fc";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { IoLogoPython } from "react-icons/io";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "easeInOut", // Smooth floating effect
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <h1 className="my-20 text-center text-4xl font-bold">Technologies</h1>

      <div className="flex flex-wrap items-center justify-center gap-6">

        {/* HTML - Official Orange */}
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate">
          <div className="border-4 border-orange-600/80 rounded-2xl p-4">
            <MdHtml className="text-7xl text-orange-600" />
          </div>
        </motion.div>

        {/* CSS - Official Blue */}
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate">
          <div className="border-4 border-blue-500/80 rounded-2xl p-4">
            <MdOutlineCss className="text-7xl text-blue-500" />
          </div>
        </motion.div>

        {/* Node.js - Official Green */}
        <motion.div variants={iconVariants(5)} initial="initial" animate="animate">
          <div className="border-4 border-green-500/80 rounded-2xl p-4">
            <FaNodeJs className="text-7xl text-green-500" />
          </div>
        </motion.div>

        {/* ReactJS - Official Cyan */}
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate">
          <div className="border-4 border-cyan-400/80 rounded-2xl p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </div>
        </motion.div>

        {/* Android - Official Android Green */}
        <motion.div variants={iconVariants(6)} initial="initial" animate="animate">
          <div className="border-4 border-green-400/80 rounded-2xl p-4">
            <FcAndroidOs className="text-7xl" />
          </div>
        </motion.div>

        {/* PHP - Official Indigo/Purple */}
        <motion.div variants={iconVariants(4)} initial="initial" animate="animate">
          <div className="border-4 border-indigo-400/80 rounded-2xl p-4">
            <FaPhp className="text-7xl text-indigo-400" />
          </div>
        </motion.div>

        {/* MYSQL - Official Sky Blue */}
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate">
          <div className="border-4 border-sky-500/80 rounded-2xl p-4">
            <SiMysql className="text-7xl text-sky-500" />
          </div>
        </motion.div>

        {/* PYTHON - Official Yellow/Gold */}
        <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate">
          <div className="border-4 border-yellow-400/80 rounded-2xl p-4">
            <IoLogoPython className="text-7xl text-yellow-400" />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Technologies;