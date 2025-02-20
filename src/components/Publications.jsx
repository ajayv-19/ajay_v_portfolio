import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { publications } from "../constants";
import useMediaQuery from "../utils/useMediaQuery";

const PublicationCard = ({ index, title, journal, link, image }) => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {isLargeScreen ? (
        <Tilt options={{ max: 25, scale: 1, speed: 400 }}>
          <CardContent
            title={title}
            journal={journal}
            link={link}
            image={image}
          />
        </Tilt>
      ) : (
        <CardContent
          title={title}
          journal={journal}
          link={link}
          image={image}
        />
      )}
    </motion.div>
  );
};

const CardContent = ({ title, journal, link, image }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full flex flex-col h-[450px] cursor-pointer">
      <div className="relative w-full h-[240px]">
        {/* Entire card is now clickable */}
        <img
          src={image}
          alt="publication_image"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center">
            <span className="text-white text-xs font-bold">🔗</span>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[20px]">{title}</h3>
        <p className="mt-2 text-secondary text-[16px]">{journal}</p>
      </div>
    </div>
  </a>
);

const Publications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Research & Publications</p>
        <h2 className={`${styles.sectionHeadText}`}>Publications</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here are my research contributions across AI, deep learning, and IoT.
          These publications reflect my efforts in advancing technology and
          solving real-world challenges.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 block">
        {publications.map((publication, index) => (
          <PublicationCard
            key={`publication-${index}`}
            index={index}
            {...publication}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Publications, "publications");
