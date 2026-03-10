import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { FaFileAlt } from "react-icons/fa";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certificates } from "../constants";
import useMediaQuery from "../utils/useMediaQuery";

// Get Google Drive thumbnail URL for file preview (same style as publication cards)
const getDriveThumbnailUrl = (link) => {
  const match = link && link.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  return match
    ? `https://drive.google.com/thumbnail?id=${match[1]}&sz=w400`
    : null;
};

const CertificateCard = ({ index, title, link, image }) => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {isLargeScreen ? (
        <Tilt options={{ max: 25, scale: 1, speed: 400 }}>
          <CardContent title={title} link={link} image={image} />
        </Tilt>
      ) : (
        <CardContent title={title} link={link} image={image} />
      )}
    </motion.div>
  );
};

const CardContent = ({ title, link, image }) => {
  const driveThumbnail = getDriveThumbnailUrl(link);
  const [imgError, setImgError] = useState(false);
  // Prefer your own image, then Drive thumbnail, then placeholder
  const previewSrc = image || (driveThumbnail && !imgError ? driveThumbnail : null);

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="bg-tertiary rounded-2xl sm:w-[360px] w-full flex flex-col h-[450px] cursor-pointer overflow-hidden shadow-card">
        {/* White document-style preview area (rounded top only, like publication cards) */}
        <div className="relative w-full h-[240px] bg-white rounded-t-2xl overflow-hidden">
          {previewSrc ? (
            <img
              src={previewSrc}
              alt={title}
              className="w-full h-full object-cover object-top"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gray-50">
              <FaFileAlt className="text-[#915EFF]/40" size={64} />
              <span className="text-gray-400 text-sm font-medium">Certificate</span>
            </div>
          )}
          {/* Dark circular link icon, top-right */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center">
              <span className="text-white text-xs font-bold">🔗</span>
            </div>
          </div>
        </div>

        {/* Dark text section: centered title + subtitle (like publication journal) */}
        <div className="p-5 flex-1 flex flex-col justify-center">
          <h3 className="text-white font-bold text-[20px] leading-tight text-center">
            {title}
          </h3>
          <p className="mt-2 text-secondary text-[16px] text-center">
            View certificate
          </p>
        </div>
      </div>
    </a>
  );
};

const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Credentials</p>
        <h2 className={`${styles.sectionHeadText}`}>Certificates</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Professional certifications and course completions across cloud, data,
          and software development.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {certificates.map((cert, index) => (
          <CertificateCard
            key={`certificate-${index}`}
            index={index}
            title={cert.title}
            link={cert.link}
            image={cert.image}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");
