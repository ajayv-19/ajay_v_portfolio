import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import StarsCanvasLowIntensity from "./StarsCanvasLowIntensity";
import {
  FaLinkedin,
  FaGithub,
  FaResearchgate,
  FaEnvelope,
} from "react-icons/fa";

const Counter = ({ from, to, duration = 2 }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start = from;
    const step = (to - from) / (duration * 60); // Increment per frame (assuming 60fps)

    const interval = setInterval(() => {
      start += step;
      if (start >= to) {
        setCount(to);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [from, to, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const typingText = "Metun";
const stopAt = 1;

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const typingSpeed = 150; // Speed of typing/deleting
  const pauseTime = 1000; // Pause before deleting or retyping
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && index <= typingText.length) {
        // Typing forward
        setDisplayedText(typingText.substring(0, index));
        setIndex((prev) => prev + 1);
      } else if (isDeleting && index > stopAt) {
        // Backspacing but stopping at "M"
        setDisplayedText(typingText.substring(0, index - 1));
        setIndex((prev) => prev - 1);
      }

      if (index === typingText.length && !isDeleting) {
        // Pause when fully typed
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (index === stopAt + 1 && isDeleting) {
        // Pause when stopping at "M" before retyping
        setTimeout(() => setIsDeleting(false), pauseTime);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <StarsCanvasLowIntensity/>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I am<span className="text-[#915EFF]"> {displayedText}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100`}>
             Software Developer | ML Research Scientist
          </p>
          {/* Social Media Links Below EarthCanvas */}
          <div className="mt-2 flex flex-row space-x-3">
            <a
              href="https://www.linkedin.com/in/metun/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full text-white hover:text-purple-500 transition-all duration-300 flex items-center justify-center shadow-lg"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/MetunNivin"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full text-white hover:text-purple-500 transition-all duration-300 flex items-center justify-center shadow-lg"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.researchgate.net/profile/Metun-Nivin/research"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full text-white hover:text-purple-500 transition-all duration-300 flex items-center justify-center shadow-lg"
            >
              <FaResearchgate size={30} />
            </a>
            <a
              href="mailto:metunnivin@gmail.com"
              className="w-12 h-12 rounded-full text-white hover:text-purple-500 transition-all duration-300 flex items-center justify-center shadow-lg"
            >
              <FaEnvelope size={30} />
            </a>
          </div>
          <div className="absolute flex flex-col items-center lg:items-start lg:top-1/2">
            {/* For Large Screens: Show Counters */}
            <div className="hidden lg:flex flex-row gap-10">
              {/* Years of Experience Counter */}
              <motion.div className="text-center text-white font-bold text-xl md:text-3xl flex flex-col items-center">
                <p className="flex items-center text-white text-2xl md:text-4xl font-extrabold">
                  <Counter from={0} to={3} duration={2} />+
                </p>
                <p className="text-gray-400 text-xs md:text-base">
                  Years of Experience
                </p>
              </motion.div>

              {/* Grant Counter */}
              <motion.div className="text-center text-white font-bold text-xl md:text-3xl flex flex-col items-center">
                <p className="flex items-center text-white text-2xl md:text-4xl font-extrabold">
                  $ <Counter from={0} to={110000} duration={2} />
                </p>
                <p className="text-gray-400 text-xs md:text-base">
                  Grant for AI App
                </p>
              </motion.div>

              {/* Research Paper Counter */}
              <motion.div className="text-center text-white font-bold text-xl md:text-3xl flex flex-col items-center">
                <p className="flex items-center text-white text-2xl md:text-4xl font-extrabold">
                  <Counter from={0} to={8} duration={2} />
                </p>
                <p className="text-gray-400 text-xs md:text-base">
                  Research Papers Published
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-full flex justify-center">
        {/* <ComputersCanvas /> */}
        {/* For Small Screens: Show Download CV Button */}
        <div className="lg:hidden flex justify-center w-full">
          <a
            href="https://drive.google.com/uc?export=download&id=1TvHjLA-FYZsWS9Rm6pehOm_naVSFsqBl"
            download
            className="bg-purple-600 hover:bg-purple-700 hover:scale-110 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 text-md"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
