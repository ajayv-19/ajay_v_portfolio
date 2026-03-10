import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
const TechCard = ({ index, name, icon }) => (
  <Tilt className="max-w-[120px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.1, 0.5)}
      className="flex flex-col items-center gap-2 group"
    >
      <div className="w-full green-pink-gradient p-[1px] rounded-full shadow-lg">
        <div className="bg-tertiary rounded-full w-28 h-28 flex justify-center items-center shadow-md p-4 transition-transform transform group-hover:scale-105">
          <img src={icon} alt={name} className="w-16 h-16 object-contain" />
        </div>
      </div>
      <p className="text-secondary text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {name}
      </p>
    </motion.div>
  </Tilt>
);

const Tech = () => {
  return (
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Tech Stack</p>
      <h2 className={styles.sectionHeadText}>Technologies I Work With.</h2>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)} // Ensures smooth entrance animation
        className="mt-10 flex flex-wrap justify-center gap-10"
      >
        {technologies.map((technology, index) => (
          <TechCard key={technology.name} index={index} {...technology} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(Tech, "tech");



// import React from "react";

// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";

// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");
