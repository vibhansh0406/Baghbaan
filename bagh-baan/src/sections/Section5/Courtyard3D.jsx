import React from 'react';

const StringLights = () => {
  const lights = Array.from({ length: 20 }).map((_, i) => {
    return {
      id: i,
      x: (Math.random() - 0.5) * 15,
      y: 4 + Math.random() * 1.5,
      z: -45 - (Math.random() * 10),
    };
  });

  return (
    <group>
      {lights.map(light => (
        <group key={light.id} position={[light.x, light.y, light.z]}>
          <mesh position={[0, 0.5, 0]}>
            <cylinderGeometry args={[0.01, 0.01, 1, 8]} />
            <meshBasicMaterial color="#111" />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color="#E8A93B" emissive="#E8A93B" emissiveIntensity={2} toneMapped={false} />
          </mesh>
          <pointLight color="#E8A93B" intensity={0.5} distance={5} />
        </group>
      ))}
    </group>
  );
};

const Courtyard3D = () => {
  return (
    <group>
      <mesh position={[0, -0.05, -50]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[30, 20]} />
        <meshStandardMaterial color="#2A1F3D" roughness={1} />
      </mesh>

      <mesh position={[-5, 0.5, -55]} castShadow receiveShadow>
        <boxGeometry args={[2, 1, 2]} />
        <meshStandardMaterial color="#111" roughness={0.9} />
      </mesh>
      <mesh position={[6, 0.5, -48]} castShadow receiveShadow>
        <boxGeometry args={[4, 1, 2]} />
        <meshStandardMaterial color="#111" roughness={0.9} />
      </mesh>

      <StringLights />
    </group>
  );
};

export default Courtyard3D;
