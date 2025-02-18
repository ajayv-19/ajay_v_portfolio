// import { useState, useRef, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial, Preload } from "@react-three/drei";
// import * as random from "maath/random/dist/maath-random.esm";

// const Stars = (props) => {
//   const ref = useRef();
//   const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta / 10;
//     ref.current.rotation.y -= delta / 15;
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial
//           transparent
//           color='#f272c8'
//           size={0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };

// const StarsCanvas = () => {
//   return (
//     <div className='w-full h-auto absolute inset-0 z-[-1]'>
//       <Canvas camera={{ position: [0, 0, 1] }}>
//         <Suspense fallback={null}>
//           <Stars />
//         </Suspense>

//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// export default StarsCanvas;

import { motion } from "framer-motion";
import React from "react";

const StarsCanvas = () => {
  const starsArray = Array.from({ length: 100 }, (_, i) => i); // Generate 100 stars

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-[-1]">
      {starsArray.map((_, i) => {
        const randomX = Math.random() * 100; // Random X position
        const randomY = Math.random() * 100; // Random Y position
        const randomSize = Math.random() * 3 + 1; // Random size between 1px and 4px
        const randomDuration = Math.random() * 3 + 2; // Flickering speed

        return (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${randomSize}px`,
              height: `${randomSize}px`,
              top: `${randomY}%`,
              left: `${randomX}%`,
              opacity: Math.random() * 0.5 + 0.5, // Random opacity
            }}
            animate={{
              opacity: [0.2, 1, 0.2], // Flickering effect
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

export default StarsCanvas;

