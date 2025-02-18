import { motion } from "framer-motion";
import React from "react";

const StarsCanvasLowIntensity = () => {
  const starsArray = Array.from({ length: 50 }, (_, i) => i); // Fewer stars for lower intensity

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {starsArray.map((_, i) => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomSize = Math.random() * 2 + 1; // Smaller stars
        const randomDuration = Math.random() * 4 + 2; // Blinking speed

        return (
          <motion.div
            key={i}
            className="absolute bg-gray-400 rounded-full opacity-50"
            style={{
              width: `${randomSize}px`,
              height: `${randomSize}px`,
              top: `${randomY}%`,
              left: `${randomX}%`,
            }}
            animate={{
              opacity: [0.2, 0.9, 0.2], // Simple blinking effect
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export default StarsCanvasLowIntensity;
