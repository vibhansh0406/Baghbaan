import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const WoodFiredOven = () => {
  const fireGlow = useRef();

  useFrame(({ clock }) => {
    if (fireGlow.current) {
      fireGlow.current.material.emissiveIntensity = 1 + Math.sin(clock.elapsedTime * 8) * 0.5;
    }
  });

  return (
    <group position={[3, 0, -35]} rotation={[0, -Math.PI / 4, 0]}>
      {/* Oven Base */}
      <mesh position={[0, 1, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 2, 3]} />
        <meshStandardMaterial color="#8B4513" roughness={0.9} />
      </mesh>

      {/* Oven Dome */}
      <mesh position={[0, 2.5, 0]} castShadow receiveShadow>
        <sphereGeometry args={[1.5, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#A0522D" roughness={0.8} />
      </mesh>

      {/* Oven Opening */}
      <mesh position={[0, 2.2, 1.4]} castShadow receiveShadow>
        <boxGeometry args={[1.2, 0.8, 0.5]} />
        <meshStandardMaterial color="#222" roughness={0.9} />
      </mesh>

      {/* Fire Glow inside oven */}
      <mesh position={[0, 2.2, 0.5]} ref={fireGlow}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color="#FF4500" emissive="#FF4500" emissiveIntensity={1.5} toneMapped={false} />
      </mesh>

      <pointLight position={[0, 2.2, 1.5]} color="#FF6347" intensity={2} distance={10} decay={2} castShadow />
    </group>
  );
};

const PizzaBoard = () => {
  return (
    <group position={[-1, 1.5, -32]} rotation={[0, Math.PI / 6, 0]}>
      {/* Wooden Board */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.2, 1.2, 0.05, 32]} />
        <meshStandardMaterial color="#D2B48C" roughness={0.8} />
      </mesh>
      {/* Handle */}
      <mesh position={[1.4, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow receiveShadow>
        <cylinderGeometry args={[0.1, 0.1, 0.8, 16]} />
        <meshStandardMaterial color="#D2B48C" roughness={0.8} />
      </mesh>

      {/* Pizza Slices */}
      <mesh position={[-0.3, 0.05, -0.3]} rotation={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.8, 0.8, 0.04, 3, 1, false, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#F4A460" roughness={0.9} />
      </mesh>
      <mesh position={[0.3, 0.05, 0.3]} rotation={[0, Math.PI, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.8, 0.8, 0.04, 3, 1, false, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#F4A460" roughness={0.9} />
      </mesh>
    </group>
  );
};

const PizzaCorner3D = () => {
  return (
    <group>
      <WoodFiredOven />
      <PizzaBoard />
    </group>
  );
};

export default PizzaCorner3D;
