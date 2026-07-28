import React from 'react';
import { Text, Float } from '@react-three/drei';

const Reviews3D = () => {
  return (
    <group position={[0, 0, -60]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[0, 2, 0]} rotation={[0, 0, 0]} castShadow>
          <cylinderGeometry args={[1.5, 1.5, 0.2, 32]} />
          <meshStandardMaterial color="#B5502E" roughness={0.7} metalness={0.2} emissive="#B5502E" emissiveIntensity={0.2} />
          <Text
            position={[0, 0.2, 0.11]}
            fontSize={0.6}
            color="#E8A93B"
            anchorX="center"
            anchorY="middle"
            characters="4.6★/5TripadvsoGl "
          >
            4.6 ★
          </Text>
          <Text
            position={[0, -0.4, 0.11]}
            fontSize={0.25}
            color="#F4ECD8"
            anchorX="center"
            anchorY="middle"
          >
            Tripadvisor / Google
          </Text>
        </mesh>
      </Float>

      <pointLight position={[0, 2, 2]} color="#E8A93B" intensity={1} distance={8} />
    </group>
  );
};

export default Reviews3D;
