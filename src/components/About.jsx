import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import profile from "../assets/profilepic.jpeg";
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
      <h3 className="text-white text-[20px] font-bold text-center mt-4">
        {title}
      </h3>
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
          <div className="md:w-3/5 space-y-4">
            <p>
              <span className="block text-white text-[19px] font-bold mb-2">
                Hey there! I’m Ajay
              </span>
              I’m a Software Engineer based in Brooklyn, NY—and I’ve had the
              chance to work on both sides: big tech and startups.
            </p>
            <p>
              At big tech—Amazon, PwC—I’ve built scalable, large-scale
              applications for customers. I’m capable of turning customer
              requirements into high-level design and features, and shipping
              production-level code using low-level design principles, CI/CD,
              and cloud. That’s where I learned to operate at scale and deliver
              for millions of users.
            </p>
            <p>
              On the other side, I’ve built products from the ground up at
              startups—from zero to launching to real customers. I own the full
              journey: design, build, and ship. That’s the blend I bring: big
              tech discipline and startup ownership.
            </p>
            <p>
              I’m also deep in AI and ML—building agents and intelligent
              systems. I’m pursuing my Master’s in Computer Engineering at NYU
              (GPA 3.9) with a focus on machine learning, deep learning, and big
              data, and I’ve published in IEEE on deep learning for healthcare.
              If that mix sounds like your kind of build—let’s connect.
            </p>
          </div>

          {/* Profile Image Section */}
          <div className="md:w-2/5 flex justify-center md:justify-end">
            <img
              src={profile}
              alt="profile"
              className="w-96 h-96 object-cover mt-5"
            />
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
