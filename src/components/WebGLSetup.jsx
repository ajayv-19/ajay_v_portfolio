import { useEffect, useRef } from "react";
import { WebGLRenderer } from "three";

const WebGLSetup = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = document.getElementById("webgl-container");
    if (!container) return;

    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");

    if (!gl) {
      console.error("WebGL is not supported on this browser!");
    } else {
      const renderer = new WebGLRenderer({ canvas, antialias: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);
    }

    return () => {
      if (canvas && canvas.parentElement) {
        canvas.parentElement.removeChild(canvas); // Cleanup
      }
    };
  }, []);

  return <div id="webgl-container" ref={canvasRef} className="webgl-container" />;
};

export default WebGLSetup;
