import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import profile from "../assets/profile.jpeg";
import useMediaQuery from "../utils/useMediaQuery";

const ServiceCard = ({ index, title, icon }) => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full xs:w-[250px] flex justify-center"
    >
      {isLargeScreen ? (
        <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
          <CardContent title={title} icon={icon} />
        </Tilt>
      ) : (
        <CardContent title={title} icon={icon} />
      )}
    </motion.div>
  );
};

const CardContent = ({ title, icon }) => (
  <div className="w-full xs:w-[250px] h-[320px] green-pink-gradient p-[1px] rounded-[20px] shadow-card flex flex-col justify-center items-center">
    <div className="bg-tertiary rounded-[20px] py-5 px-12 h-full w-full flex flex-col justify-center items-center">
      <img src={icon} alt="service_icon" className="w-16 h-16 object-contain" />
      <h3 className="text-white text-[20px] font-bold text-center mt-4">{title}</h3>
    </div>
  </div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About Me</h2>
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[15px] leading-[30px] flex flex-col md:flex-row items-center md:items-start justify-between"
        >
          {/* Text Section */}
          <div className="md:w-3/5">
            <span className="block text-white text-[19px] font-bold mb-2">
              Hey there! I’m Metun
            </span>
            Ever met someone who blends code, AI, and entrepreneurship like a
            perfectly brewed cup of coffee? Well, now you have! I’m a software
            engineer, AI enthusiast, and problem-solver who thrives at the
            intersection of technology and impact. Currently pursuing my
            Master’s in Computer Science at NYU, I’ve built AI-driven healthcare
            solutions, engineered fintech platforms, and even secured $110K in
            NSF funding for FireBeats, an AI-powered health monitoring app for
            firefighters. Oh, and did I mention I’m a Stern Venture Fellow 2024?
            Pretty wild, right? If it involves React, AI models, or AWS/GCP
            magic, I’m all over it. And because I love nerding out over AI, I’ve
            published 8 research papers in AI/ML with IEEE and Springer,
            covering everything from deep learning in healthcare to IoT-based
            smart automation. Basically, if it’s AI-powered, I’ve probably tried
            to build it. When I’m not writing code, you’ll find me brainstorming
            wild ideas, chasing new challenges, or debugging at 3 AM while
            questioning my life choices. If you’re into building something
            awesome, exploring AI, or just want to exchange tech memes—hit me
            up!
          </div>

          {/* Profile Image Section */}
          <div className="md:w-2/5 flex justify-center md:justify-end">
            <img src={profile} alt="profile" className="w-96 h-96 object-cover mt-5" />
          </div>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-10 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
