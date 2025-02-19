import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import useMediaQuery from "../utils/useMediaQuery";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    const isLargeScreen = useMediaQuery("(min-width: 1024px)");

    return (
      <motion.section
        {...(isLargeScreen
          ? {
              variants: staggerContainer(),
              initial: "hidden",
              whileInView: "show",
            }
          : {})}
        viewport={isLargeScreen ? { once: true, amount: 0.25 } : {}}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
