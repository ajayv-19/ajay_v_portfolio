import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const CleanupWebGL = () => {
  const { gl, scene } = useThree();

  useEffect(() => {
    return () => {
      console.log("Cleaning up WebGL resources...");

      // Traverse scene and dispose of materials, geometries, and textures
      scene.traverse((object) => {
        if (!object.isMesh) return;

        if (object.geometry) {
          object.geometry.dispose();
        }

        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });

      // Dispose of WebGL context
      gl.dispose();
    };
  }, [gl, scene]);

  return null;
};

export default CleanupWebGL;
