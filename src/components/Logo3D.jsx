// src/components/Logo3D.jsx
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { OBJLoader } from "three-stdlib";
import * as THREE from "three";

function LogoMesh({ src, isInteracting }) {
  const obj = useLoader(OBJLoader, src);
  const ref = useRef();

  const wakoBlue = new THREE.Color("#007CFF");

  obj.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material = new THREE.MeshStandardMaterial({
        color: wakoBlue,
        roughness: 0.4,
        metalness: 0.2,
      });
    }
  });

  // Auto-spin when not interacting
  useFrame(() => {
    if (ref.current && !isInteracting) {
      ref.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={ref}>
      <primitive
        object={obj}
        scale={[0.02, 0.02, 0.02]}
        position={[0, 0, 0]}
        rotation={[0, Math.PI, 0]}
      />
    </group>
  );
}

export default function Logo3D({ src, className }) {
  const [isInteracting, setIsInteracting] = useState(false);
  const controlsRef = useRef();

  return (
    <div className={className} style={{ width: "100%", aspectRatio: "4 / 3" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 3, 3]} />
        <Suspense fallback={null}>
          <LogoMesh src={src} isInteracting={isInteracting} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          ref={controlsRef}
          enableZoom={false}
          onStart={() => setIsInteracting(true)}
          onEnd={() => setIsInteracting(false)}
        />
      </Canvas>
    </div>
  );
}
