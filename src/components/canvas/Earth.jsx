// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Earth = () => {
//   const earth = useGLTF("./planet/scene.gltf");

//   return (
//     <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
//   );
// };

// const EarthCanvas = () => {
//   return (
//     <Canvas
//       shadows
//       frameloop='demand'
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//       camera={{
//         fov: 45,
//         near: 0.1,
//         far: 200,
//         position: [-4, 3, 6],
//       }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           autoRotate
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Earth />

//         <Preload all />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default EarthCanvas;

import { motion } from "framer-motion";
import React from "react";
import globeImage from "../../assets/globe1.png"; // Replace with your actual image path

const EarthCanvas = () => {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }} // Enter from right
      animate={{ x: 0, opacity: 1 }} // Move into position
      transition={{ duration: 1.5, ease: "easeOut" }} // Smooth transition
      className="flex justify-center items-center w-full max-w-[900px]"
    >
      <motion.img
        src={globeImage}
        alt="Globe"
        className="w-[400px] md:w-[500px] lg:w-[850px] max-w-full h-auto"
        animate={{
          y: [0, -10, 0], // Floating effect
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default EarthCanvas;
