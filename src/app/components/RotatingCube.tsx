/* eslint-disable jsx-a11y/alt-text */
"use client";
import { useCursor, Edges, Image } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState, useRef } from "react";

export const RotatingCube = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [hovered, setHover] = useState(false);
  // const selected = useSelect().map((sel) => {
  //   console.log("sel", sel);
  // });
  useCursor(hovered);
  const meshRef = useRef();
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  // const isSelected = !!selected.find((sel) => sel === store);

  return (
    <mesh
      rotation={[0, 0.4, 0]}
      ref={meshRef}
      onClick={(e) => (e.stopPropagation(), setIsSelected(!isSelected))}
      onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
      onPointerOut={(e) => setHover(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      {/* <sphereGeometry args={[2]} /> */}
      {/* <octahedronGeometry args={[2, 2]} /> */}
      <meshStandardMaterial color="green" />
      <Image url="/6797670.jpeg" position={[0, 0, 1.01]} scale={2} />

      {/* Back face */}
      <Image
        url="/6797670.jpeg"
        position={[0, 0, -1.01]}
        scale={2}
        rotation={[0, Math.PI, 0]}
      />

      {/* Top face */}
      <Image
        url="/6797670.jpeg"
        position={[0, 1.01, 0]}
        scale={2}
        rotation={[-Math.PI / 2, 0, 0]}
      />

      {/* Bottom face */}
      <Image
        url="/6797670.jpeg"
        position={[0, -1.01, 0]}
        scale={2}
        rotation={[Math.PI / 2, 0, 0]}
      />

      {/* Left face */}
      <Image
        url="/6797670.jpeg"
        position={[-1.01, 0, 0]}
        scale={2}
        rotation={[0, -Math.PI / 2, 0]}
      />

      {/* Right face */}
      <Image
        url="/6797670.jpeg"
        position={[1.01, 0, 0]}
        scale={2}
        rotation={[0, Math.PI / 2, 0]}
      />

      {/* <meshNormalMaterial /> */}
      {/* <meshDepthMaterial /> */}
      {/* <meshBasicMaterial /> */}
      <Edges
        linewidth={4}
        visible={isSelected}
        scale={1.1}
        threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
        color="white"
      />
    </mesh>
  );
};
