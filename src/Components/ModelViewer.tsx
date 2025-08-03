import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Vector3 } from "three";

import * as THREE from "three";

// TypeScript declaration for GLTF hook
type GLTFResult = {
  scene: THREE.Group;
};

export default function ModelViewer() {
  const { scene } = useGLTF("/3d.glb") as GLTFResult;

  return (
    <Canvas camera={{ position: [0, 0, 5] as unknown as Vector3, fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Suspense fallback={null}>
        <primitive object={scene} scale={1.5} />
      </Suspense>
      <OrbitControls enableZoom enablePan />
    </Canvas>
  );
}
