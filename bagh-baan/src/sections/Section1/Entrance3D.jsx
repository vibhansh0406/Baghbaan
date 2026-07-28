import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const EntranceGate = () => {
  return (
    <group position={[0, 0, 0]}>
      {/* High-quality stylized Jaali Gate Base using RoundedBox for smoother, realistic edges */}
      <RoundedBox position={[-3, 3, 0]} args={[2.5, 6, 0.8]} radius={0.1} smoothness={4} castShadow receiveShadow>
        <meshStandardMaterial color="#8B3A2F" roughness={0.6} metalness={0.2} />
      </RoundedBox>
      <RoundedBox position={[3, 3, 0]} args={[2.5, 6, 0.8]} radius={0.1} smoothness={4} castShadow receiveShadow>
        <meshStandardMaterial color="#8B3A2F" roughness={0.6} metalness={0.2} />
      </RoundedBox>
      <RoundedBox position={[0, 5.5, 0]} args={[5, 1.5, 1]} radius={0.15} smoothness={4} castShadow receiveShadow>
        <meshStandardMaterial color="#8B3A2F" roughness={0.6} metalness={0.2} />
      </RoundedBox>

      {/* Intricate Jaali pattern insert (using a grid of small boxes to simulate the pattern) */}
      <group position={[0, 4, 0]}>
        {Array.from({ length: 5 }).map((_, i) => (
          Array.from({ length: 2 }).map((_, j) => (
            <mesh key={`jaali-${i}-${j}`} position={[-2 + i, -0.5 + j, 0]} castShadow>
              <boxGeometry args={[0.2, 0.2, 0.4]} />
              <meshStandardMaterial color="#E8A93B" metalness={0.8} roughness={0.3} />
            </mesh>
          ))
        ))}
      </group>

      {/* Ground path - with a slight bump/roughness for dirt texture feel */}
      <mesh position={[0, 0.01, -10]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 30, 32, 32]} />
        <meshStandardMaterial
          color="#1a2e22"
          roughness={1}
          metalness={0}
          wireframe={false}
        />
      </mesh>

      {/* Decorative Lanterns on the gate */}
      <group position={[-2.5, 4.5, 0.6]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.15, 0.2, 0.5, 16]} />
          <meshStandardMaterial color="#111" />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#E8A93B" emissive="#E8A93B" emissiveIntensity={2} />
        </mesh>
        <pointLight color="#E8A93B" intensity={1} distance={5} decay={2} castShadow />
      </group>

      <group position={[2.5, 4.5, 0.6]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.15, 0.2, 0.5, 16]} />
          <meshStandardMaterial color="#111" />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#E8A93B" emissive="#E8A93B" emissiveIntensity={2} />
        </mesh>
        <pointLight color="#E8A93B" intensity={1} distance={5} decay={2} castShadow />
      </group>

    </group>
  );
};

const DustParticles = ({ count = 500 }) => {
  const mesh = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = Math.random() * 10;
      const z = (Math.random() - 0.5) * 20;
      const speed = 0.01 + Math.random() * 0.02;
      temp.push({ x, y, z, speed });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    particles.forEach((particle, i) => {
      let { x, y, z, speed } = particle;
      y += speed;
      if (y > 10) y = 0;
      particle.y = y;

      dummy.position.set(x, y, z);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.03, 8, 8]} />
      <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} transparent opacity={0.6} />
    </instancedMesh>
  );
};

export { EntranceGate, DustParticles };
