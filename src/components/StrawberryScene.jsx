import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, useScroll, OrbitControls, Environment } from "@react-three/drei";
import StrawberryModel from "../pages/StrawberryModel";

function AnimatedStrawberry() {
  const ref = useRef();
  const scroll = useScroll(); // value from 0 (top) to 1 (bottom)

  useFrame(() => {
    if (ref.current) {
      // Animate position and scale based on scroll progress
      // Pop forward from z=4 to z=0 as you scroll
      const z = 4 - scroll.offset * 4; // Adjust values as needed
      ref.current.position.z = z;
      // Also scale up
      const scale = 1 + 2 * scroll.offset; // From 1 to 3x size
      ref.current.scale.set(scale, scale, scale);
    }
  });

  return <StrawberryModel ref={ref} />;
}

export default function StrawberryScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <Environment preset="sunset" />
      {/* 2 pages means the scroll will go from 0 to 1 while scrolling down */}
      <ScrollControls pages={2} damping={0.25}>
        <AnimatedStrawberry />
      </ScrollControls>
      {/* OrbitControls is optional; remove if you don't want mouse drag */}
      {/* <OrbitControls /> */}
    </Canvas>
  );
}
