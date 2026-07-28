import React from 'react';

const MapTransition3D = () => {
  return (
    <group position={[0, -2, -80]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#1F3B2C" roughness={0.9} />
      </mesh>

      {Array.from({ length: 15 }).map((_, i) => {
        const x = (Math.random() - 0.5) * 30;
        const z = (Math.random() - 0.5) * 30;
        return (
          <group key={i} position={[x, 0, z]}>
            <mesh position={[0, 0.5, 0]} castShadow>
              <cylinderGeometry args={[0.1, 0.1, 1, 8]} />
              <meshStandardMaterial color="#5C3D2E" />
            </mesh>
            <mesh position={[0, 1.5, 0]} castShadow>
              <sphereGeometry args={[1, 8, 8]} />
              <meshStandardMaterial color="#1F3B2C" roughness={1} />
            </mesh>
          </group>
        );
      })}

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-15, -0.9, 0]} receiveShadow>
        <planeGeometry args={[5, 40]} />
        <meshStandardMaterial color="#111" />
      </mesh>
    </group>
  );
};

export default MapTransition3D;
