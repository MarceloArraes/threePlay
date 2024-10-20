"use client";
import { Canvas, extend } from "@react-three/fiber";
import {
  // Fisheye,
  CameraControls,
  PerspectiveCamera,
  // Environment,
  Stage,
  Grid,
  // AsciiRenderer,
  Text,
  Billboard,
  // Edges,
  // useCursor,
  // useSelect,
  Torus,
} from "@react-three/drei";
import { Suspense } from "react";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import { Band } from "./ThreeDimensionalThing";
import { geometry } from "maath";
import { ImageComponent } from "./components/ImageComponent";
import { RotatingCube } from "./components/RotatingCube";
extend({ RoundedPlaneGeometry: geometry.RoundedPlaneGeometry });

export const FiberComponent = () => {
  return (
    <Canvas
      // flat
      // style={{ height: "800px" }}
      style={{ height: "800px" }}
      // camera={{ position: [0, 0, 150], fov: 4 }}
    >
      <Billboard
        follow={true}
        position={[0, 5, 0]}
        lockX={false}
        lockY={false}
        lockZ={false} // Lock the rotation on the z axis (default=false)
      >
        <Text fontSize={1}>Marcelo test </Text>
      </Billboard>
      {/* <AsciiRenderer /> */}
      <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
      <PerspectiveCamera makeDefault position={[0, 0, 90]} fov={4} />

      <ambientLight intensity={0.1} />
      <directionalLight color="red" intensity={2} position={[0, 0, 5]} />
      <Stage
        intensity={0.5}
        environment="city"
        shadows={{ type: "accumulative", bias: -0.001, intensity: Math.PI }}
        adjustCamera={false}
      >
        <RotatingCube />
      </Stage>
      <Suspense>
        <Physics debug interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
          <RigidBody position={[10, 0, 0]} colliders={"ball"} restitution={2}>
            <Torus />
          </RigidBody>
          <Band />
          <CuboidCollider position={[0, -2, 0]} args={[20, 0.5, 20]} />
        </Physics>
      </Suspense>
      <ImageComponent />
      {/* <Environment background preset="forest" blur={0.1} /> */}
      <Grid
        renderOrder={-1}
        position={[0, -1.85, 0]}
        infiniteGrid
        cellSize={0.6}
        cellThickness={0.6}
        sectionSize={3.3}
        sectionThickness={1.5}
        // sectionColor={[0.5, 0.5, 10]}
        fadeDistance={30}
      />
    </Canvas>
  );
};
