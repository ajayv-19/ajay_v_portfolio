import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { featured } from "../constants";

const FeaturedCard = ({ index, title, image, links }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-primary p-8 rounded-3xl sm:w-[530px] w-full"
  >
    <div className="relative w-full h-[260px]">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-2xl"
      />

      {/* Clickable Links Positioned on Top-Right */}
      <div className="absolute top-2 right-2 flex space-x-2">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-md hover:bg-gray-700 transition-all"
          >
            <span className="text-white text-xs font-bold">🔗</span>
          </a>
        ))}
      </div>
    </div>

    {/* Title Below the Image */}
    <div className="mt-5 text-center">
      <h3 className="text-white font-bold text-[22px]">{title}</h3>
    </div>
  </motion.div>
);

const Featured = () => {
  return (
    <div className="mt-12 bg-tertiary rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[250px]`}>
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} text-center`}>Featured</h2>
        </motion.div>
      </div>

      {/* Centering the Cards and Increasing Width */}
      <div className="-mt-20 pb-14 flex justify-center gap-12 flex-wrap">
        {featured.map((item, index) => (
          <FeaturedCard key={`featured-${index}`} index={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Featured, "featured");
