import React, { useRef, useLayoutEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ThaliDish = ({ position, color, scrollStart, scrollEnd }) => {
  const meshRef = useRef();

  useLayoutEffect(() => {
    if (!meshRef.current) return;

    gsap.fromTo(meshRef.current.scale,
      { x: 0, y: 0, z: 0 },
      {
        x: 1, y: 1, z: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: "#scroll-container",
          start: scrollStart,
          end: scrollEnd,
          scrub: 1,
        }
      }
    );
  }, [scrollStart, scrollEnd]);

  return (
    <group position={position} ref={meshRef}>
      <mesh position={[0, 0.2, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.4, 0.3, 0.4, 16]} />
        <meshStandardMaterial color="#B5502E" roughness={0.3} metalness={0.4} />
      </mesh>
      <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.38, 0.38, 0.05, 16]} />
        <meshStandardMaterial color={color} roughness={0.7} />
      </mesh>
    </group>
  );
};

const Thali3D = () => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group position={[0, 0, -25]} ref={groupRef}>
      {/* Main Plate */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[2.5, 2.5, 0.1, 32]} />
        <meshStandardMaterial color="#EAEAEA" roughness={0.2} metalness={0.9} />
      </mesh>

      {/* Roti / Bread in center */}
      <mesh position={[0, 0.1, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.8, 0.8, 0.05, 16]} />
        <meshStandardMaterial color="#D2B48C" roughness={0.9} />
      </mesh>
      <mesh position={[0.2, 0.12, 0.2]} rotation={[0, 0.5, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.8, 0.8, 0.05, 16]} />
        <meshStandardMaterial color="#C4A47C" roughness={0.9} />
      </mesh>

      {/* 100% Pure Veg Dishes */}
      <ThaliDish position={[1.5, 0, 0]} color="#8B4513" scrollStart="30%" scrollEnd="32%" />
      <ThaliDish position={[1.06, 0, 1.06]} color="#228B22" scrollStart="32%" scrollEnd="34%" />
      <ThaliDish position={[0, 0, 1.5]} color="#FFD700" scrollStart="34%" scrollEnd="36%" />
      <ThaliDish position={[-1.06, 0, 1.06]} color="#FF8C00" scrollStart="36%" scrollEnd="38%" />
      <ThaliDish position={[-1.5, 0, 0]} color="#FFF8DC" scrollStart="38%" scrollEnd="40%" />
      <ThaliDish position={[-1.06, 0, -1.06]} color="#FDF5E6" scrollStart="40%" scrollEnd="42%" />
    </group>
  );
};

export default Thali3D;
