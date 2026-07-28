import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const ProceduralTree = ({ position, scale = 1, swayOffset = 0 }) => {
  const group = useRef();

  useFrame(({ clock }) => {
    if (group.current) {
      // Wind sway on the whole group
      group.current.rotation.z = Math.sin(clock.elapsedTime * 0.4 + swayOffset) * 0.03;
      group.current.rotation.x = Math.cos(clock.elapsedTime * 0.3 + swayOffset) * 0.02;
    }
  });

  return (
    <group ref={group} position={position} scale={scale}>
      {/* High-fidelity Trunk */}
      <mesh position={[0, 2, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.3, 0.5, 4, 12]} />
        <meshStandardMaterial color="#4A2F1D" roughness={0.95} metalness={0.0} />
      </mesh>

      {/* Root flares */}
      <mesh position={[0.3, 0.5, 0]} rotation={[0, 0, -Math.PI / 8]} castShadow receiveShadow>
        <cylinderGeometry args={[0.1, 0.3, 1.5, 8]} />
        <meshStandardMaterial color="#4A2F1D" roughness={0.95} />
      </mesh>
      <mesh position={[-0.3, 0.5, 0.2]} rotation={[0, 0, Math.PI / 8]} castShadow receiveShadow>
        <cylinderGeometry args={[0.1, 0.3, 1.5, 8]} />
        <meshStandardMaterial color="#4A2F1D" roughness={0.95} />
      </mesh>

      {/* Volumetric / Clustered Canopy for realism */}
      <group position={[0, 4.5, 0]}>
        <mesh castShadow receiveShadow position={[0, 1, 0]}>
          <dodecahedronGeometry args={[2.5, 2]} />
          <meshStandardMaterial color="#193322" roughness={1} metalness={0} />
        </mesh>
        <mesh castShadow receiveShadow position={[1.5, 0, 1]}>
          <dodecahedronGeometry args={[1.8, 1]} />
          <meshStandardMaterial color="#1a3b26" roughness={1} />
        </mesh>
        <mesh castShadow receiveShadow position={[-1.5, 0.5, -1]}>
          <dodecahedronGeometry args={[2, 1]} />
          <meshStandardMaterial color="#152b1b" roughness={1} />
        </mesh>
        <mesh castShadow receiveShadow position={[0, 0, -1.8]}>
          <dodecahedronGeometry args={[1.5, 1]} />
          <meshStandardMaterial color="#1a3b26" roughness={1} />
        </mesh>
      </group>

      {/* Glowing Lantern hanging from tree instead of fruits */}
      <group position={[1.5, 3.5, 1.5]}>
        <mesh position={[0, 0.5, 0]} castShadow>
          <cylinderGeometry args={[0.01, 0.01, 1, 8]} />
          <meshStandardMaterial color="#111" />
        </mesh>
        <mesh castShadow>
          <cylinderGeometry args={[0.2, 0.2, 0.4, 16]} />
          <meshStandardMaterial color="#8B3A2F" roughness={0.8} />
        </mesh>
        <mesh position={[0, -0.2, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#FFB84D" emissive="#FFB84D" emissiveIntensity={1.5} />
        </mesh>
        <pointLight color="#FFB84D" intensity={0.8} distance={8} decay={2} castShadow />
      </group>
    </group>
  );
};

const OrchardPath = () => {
  return (
    <group position={[0, 0, -15]}>
      {/* Left side trees */}
      <ProceduralTree position={[-5, 0, 0]} swayOffset={0} />
      <ProceduralTree position={[-4.5, 0, -6]} scale={1.2} swayOffset={1.2} />
      <ProceduralTree position={[-5.5, 0, -12]} scale={0.9} swayOffset={2.5} />

      {/* Right side trees */}
      <ProceduralTree position={[5, 0, -3]} scale={1.1} swayOffset={0.7} />
      <ProceduralTree position={[4.5, 0, -9]} scale={0.95} swayOffset={1.8} />
      <ProceduralTree position={[5.5, 0, -15]} scale={1.05} swayOffset={3.1} />
    </group>
  );
};

export default OrchardPath;
