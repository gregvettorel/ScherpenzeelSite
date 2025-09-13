// src/components/Logo3D.jsx
import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

function SpinnableLogo({ src }) {
  const tex = useLoader(THREE.TextureLoader, src);
  const ratio = tex.image ? tex.image.height / tex.image.width : 1;
  return (
    <Float speed={1} rotationIntensity={0.25} floatIntensity={0.4}>
      <mesh>
        <planeGeometry args={[2, 2 * ratio]} />
        <meshStandardMaterial map={tex} transparent roughness={0.5} metalness={0.1} />
      </mesh>
    </Float>
  );
}

export default function Logo3D({ src, className }) {
  return (
    <div className={className} style={{ width: "100%", aspectRatio: "4 / 3" }}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 3], fov: 35 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[2, 3, 4]} intensity={1.1} />
        <Suspense fallback={null}>
          <SpinnableLogo src={src} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
