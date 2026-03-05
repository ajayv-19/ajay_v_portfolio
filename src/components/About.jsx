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
              Hey there! I’m Ajay
            </span>
            I’m a Software Engineer based in Brooklyn, NY, pursuing my
            Master’s in Computer Engineering at NYU (GPA 3.9/4). I build
            scalable systems, cloud-native apps, and AI-powered products. At
            Campus Mesh I ship Node.js microservices and LLM-based retrieval for
            10K+ users; at Amazon I worked on serverless infra (AWS CDK, Lambda,
            DynamoDB) and React frontends; and at NYU I help build an NSF-funded
            health platform (MyBeats) with React, Node, PostgreSQL, and Stripe.
            Before grad school I was a Senior Software Engineer at PwC, where I
            led Azure backends, NLP/OCR pipelines, and Power BI reporting. I’m
            comfortable across the stack—Python, Java, TypeScript, React, Node,
            AWS, Azure—and I’ve published in IEEE on deep learning for stroke
            detection and ML for diabetes prediction. If you’re into distributed
            systems, cloud, or AI/ML, let’s connect!
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
