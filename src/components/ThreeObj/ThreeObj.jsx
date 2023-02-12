import React from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const Model = () => {
  const gltf = useLoader(GLTFLoader, ".obj.glb");
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  );
};

function ThreeObj() {
  return (
    <div>
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default ThreeObj;
