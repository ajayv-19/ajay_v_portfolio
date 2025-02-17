import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { FaLinkedin, FaGithub, FaResearchgate, FaEnvelope } from "react-icons/fa";

const typingText = "Metun";
const stopAt = 1;

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const typingSpeed = 150; // Speed of typing/deleting
  const pauseTime = 1000; // Pause before deleting or retyping

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
            Lead Software Developer | ML Research Scientist
          </p>
          {/* Social Media Links Below EarthCanvas */}
          <div className="mt-2 flex flex-row space-x-3">
            <a
              href="https://www.linkedin.com/in/metun/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full text-white hover:bg-secondary transition-all duration-300 flex items-center justify-center shadow-lg"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/MetunNivin"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full text-white hover:bg-secondary transition-all duration-300 flex items-center justify-center shadow-lg"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.researchgate.net/profile/Metun-Nivin/research"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full text-white hover:bg-secondary transition-all duration-300 flex items-center justify-center shadow-lg"
            >
              <FaResearchgate size={30} />
            </a>
            <a
              href="mailto:metunnivin@gmail.com"
              className="w-12 h-12 rounded-full text-white hover:bg-secondary transition-all duration-300 flex items-center justify-center shadow-lg"
            >
              <FaEnvelope size={30} />
            </a>
          </div>
        </div>
      </div>

      <ComputersCanvas />

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
