import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

type GLTFResult = {
  scene: THREE.Group;
};

function Model() {
  const { scene } = useGLTF("/3d.glb") as GLTFResult;
  return <primitive object={scene} scale={0.7} position={[0, -1, 0]} />; // Adjusted y-position
}

export default function ModelViewer() {
  return (
    <Canvas
      camera={{ position: [5, 5, 5], fov: 45 }}
      style={{
        background: "#0077B6", // Changed from transparent to light gray
        height: "228%",
        width: "100%",
      }}
      gl={{ antialias: true }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        minDistance={3}
        maxDistance={15}
        autoRotate
        autoRotateSpeed={2}
      />
    </Canvas>
  );
}
