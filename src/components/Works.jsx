import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, figmaIcon } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import useMediaQuery from "../utils/useMediaQuery";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  isFigma,
  publication_link,
}) => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {isLargeScreen ? (
        <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
          <ProjectContent
            name={name}
            description={description}
            tags={tags}
            image={image}
            source_code_link={source_code_link}
            isFigma={isFigma}
            publication_link={publication_link}
          />
        </Tilt>
      ) : (
        <ProjectContent
          name={name}
          description={description}
          tags={tags}
          image={image}
          source_code_link={source_code_link}
          isFigma={isFigma}
        />
      )}
    </motion.div>
  );
};

const ProjectContent = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  isFigma,
  publication_link,
}) => (
  <a href={publication_link || source_code_link} target="_blank" rel="noopener noreferrer">
  <div className="flex flex-col md:flex-row bg-tertiary p-5 rounded-2xl w-full cursor-pointer md:space-x-5">
    {/* Image Section */}
    <div className="relative md:w-[400px] w-full h-[230px] flex-shrink-0">
      <img
        src={image}
        alt="project_image"
        className="w-full h-full object-cover rounded-2xl"
      />
      <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
        {source_code_link && !isFigma && (
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center"
          >
            <img
              src={github}
              alt="GitHub source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </a>
        )}
        {isFigma && source_code_link && (
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center"
          >
            <img
              src={figmaIcon}
              alt="Figma link"
              className="w-1/2 h-1/2 object-contain"
            />
          </a>
        )}
        {publication_link && !isFigma && !source_code_link && (
          <a
            href={publication_link}
            target="_blank"
            rel="noopener noreferrer"
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center"
          >
            <span className="text-white text-xs font-bold mr-1">🔗</span>
          </a>
        )}
      </div>
    </div>

    {/* Text Content Section */}
    <div className="flex flex-col">
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  </div>
</a>
);

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 block">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
