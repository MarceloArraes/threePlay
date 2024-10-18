"use client";
import { Canvas } from "@react-three/fiber";

export const FiberComponent = () => {
  return (
    <Canvas
      style={{ height: "1000px" }}
      //   camera={{ position: [0, 0, 150], fov: 4 }}
    >
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <mesh>
        {/* <boxGeometry args={[2, 2, 2]} /> */}
        {/* <sphereGeometry args={[2, 2, 2]} /> */}
        <octahedronGeometry args={[2, 2]} />
        <meshStandardMaterial />
        {/* <meshNormalMaterial /> */}
        {/* <meshDepthMaterial /> */}
        {/* <meshBasicMaterial /> */}
      </mesh>
    </Canvas>
  );
};
