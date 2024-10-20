"use client";
import type * as THREE from "three";

import { type Color, extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { geometry } from "maath";
import { Image } from "@react-three/drei";

export type ImageProps = Omit<JSX.IntrinsicElements["mesh"], "scale"> & {
  segments?: number;
  scale?: number | [number, number];
  color?: Color;
  zoom?: number;
  radius?: number;
  grayscale?: number;
  toneMapped?: boolean;
  transparent?: boolean;
  opacity?: number;
  side?: THREE.Side;
};

export function ImageComponent() {
  const ref = useRef();
  const ref2 = useRef();
  extend({ roundedPlaneGeometry: geometry.RoundedPlaneGeometry });

  useFrame(() => {
    ref.current.material.radius = 0.5; // between 0 and 1
    ref.current.material.zoom = 1; // 1 and higher
    ref.current.material.grayscale = 1; // between 0 and 1
    // ref.current.material.color.set(0xff0000); // mix-in color
    ref2.current.material.radius = 0.5; // between 0 and 1
    ref2.current.material.zoom = 1; // 1 and higher
    ref2.current.material.grayscale = 1; // between 0 and 1
    // ref2.current.material.color.set(0xff0000); // mix-in color
  });
  return (
    <>
      <Image ref={ref} url="/6797670.jpeg" position={[-5, 0, 0]}>
        <roundedPlaneGeometry args={[1, 2, 0.15]} />
      </Image>
      <Image
        ref={ref2}
        url="/6797670.jpeg"
        position={[-5, 0, 0]}
        rotation={[0, Math.PI, 0]}
      >
        <roundedPlaneGeometry args={[1, 2, 0.15]} />
      </Image>
    </>
  );
}
