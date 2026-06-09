import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";

function AbstractShape() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron ref={meshRef} args={[1.2, 2]}>
        <MeshDistortMaterial
          color="#00f0ff"
          emissive="#0044ff"
          emissiveIntensity={0.5}
          wireframe
          distort={0.4}
          speed={2}
        />
      </Icosahedron>
    </Float>
  );
}

function FloatingElements() {
  const elements = useMemo(() => {
    return Array.from({ length: 6 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 3,
      ],
      scale: Math.random() * 0.3 + 0.1,
      speed: Math.random() * 2 + 1,
    }));
  }, []);

  return (
    <>
      {elements.map((el, index) => (
        <Float key={index} speed={el.speed} rotationIntensity={2} floatIntensity={3}>
          <Sphere position={el.position} scale={el.scale} args={[1, 16, 16]}>
            <meshStandardMaterial color="#00f0ff" wireframe opacity={0.6} transparent />
          </Sphere>
        </Float>
      ))}
    </>
  );
}

export default function ThreeHeroScene() {
  return (
    <div className="w-full h-full min-h-[300px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AbstractShape />
        <FloatingElements />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
