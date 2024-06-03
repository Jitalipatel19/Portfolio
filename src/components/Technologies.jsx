import { RiReactjsLine } from "react-icons/ri";
import { FcAndroidOs } from "react-icons/fc";
import { FaHtml5 } from "react-icons/fa";
import { MdOutlineCss } from "react-icons/md";
import { SiMysql } from "react-icons/si";
import { IoLogoPython } from "react-icons/io";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      {/* HEADING */}
      <h1 className="my-8 text-center text-2xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center">

        {/* REACTJS */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-2 icon-border"
        >
          <div className="border-2 border-cyan-500 rounded-full p-2">
            <RiReactjsLine className="text-7xl text-cyan-500" />
          </div>
        </motion.div>

        {/* ANDROID */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="p-2 icon-border"
        >
          <div className="border-2 border-green-500 rounded-full p-2">
            <FcAndroidOs className="text-7xl text-green-500" />
          </div>
        </motion.div>

        {/* HTML */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="p-2 icon-border"
        >
          <div className="border-2 border-red-500 rounded-full p-2">
            <FaHtml5 className="text-7xl text-red-500" />
          </div>
        </motion.div>

        {/* CSS */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="p-2 icon-border"
        >
          <div className="border-2 border-purple-500 rounded-full p-2">
            <MdOutlineCss className="text-7xl text-purple-500" />
          </div>
        </motion.div>

        {/* MYSQL */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="p-2 icon-border"
        >
          <div className="border-2 border-yellow-500 rounded-full p-2">
            <SiMysql className="text-7xl text-yellow-500" />
          </div>
        </motion.div>

        {/* PYTHON */}
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="p-2 icon-border"
        >
          <div className="border-2 border-blue-500 rounded-full p-2">
            <IoLogoPython className="text-7xl text-blue-500" />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Technologies;
