import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function StrawberryModel(props) {
  const ref = useRef();
  // This assumes you placed 'strawberry.glb' in your public directory
  const { scene } = useGLTF("/strawberry.glb");
  return <primitive ref={ref} object={scene} {...props} />;
}
