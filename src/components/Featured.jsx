import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { featured } from "../constants";

const FeaturedCard = ({ index, title, image, links }) => {
  return (
    <motion.a
      href={links.length > 0 ? links[0].url : "#"}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="w-full md:w-[45%] max-w-[90%] mx-auto bg-primary p-8 rounded-3xl cursor-pointer hover:scale-[1.02] transition-transform"
    >
      <div className="relative w-full h-[260px]">
        {/* Clickable Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain rounded-2xl max-h-[260px]"
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
    </motion.a>
  );
};

const Featured = () => {
  return (
    <div className="mt-12 bg-tertiary rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[250px]`}>
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} text-center`}>Featured</h2>
        </motion.div>
      </div>

      {/* Cards are Side-by-Side on Large Screens, Stacked on Mobile */}
      <div className="-mt-20 pb-14 flex flex-wrap md:flex-nowrap justify-center items-start gap-12">
        {featured.map((item, index) => (
          <FeaturedCard key={`featured-${index}`} index={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Featured, "featured");
