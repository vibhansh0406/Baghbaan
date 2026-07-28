import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Environment } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EntranceGate, DustParticles } from '../sections/Section1/Entrance3D';
import OrchardPath from '../sections/Section2/Orchard3D';
import Thali3D from '../sections/Section3/Thali3D';
import PizzaCorner3D from '../sections/Section4/PizzaCorner3D';
import Courtyard3D from '../sections/Section5/Courtyard3D';
import Reviews3D from '../sections/Section6/Reviews3D';
import MapTransition3D from '../sections/Section7/MapTransition3D';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

gsap.registerPlugin(ScrollTrigger);

const CameraRig = () => {
  const cameraRef = useRef();

  useLayoutEffect(() => {
    if (!cameraRef.current) return;

    gsap.fromTo(cameraRef.current.position,
      { z: 12, y: 3 },
      { z: 5, y: 2, duration: 2.5, ease: "power2.out" }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    });

    tl.to(cameraRef.current.position, { z: -5, y: 1.5, ease: "power1.inOut" }, 0);
    tl.to(cameraRef.current.position, { z: -15, ease: "none" }, ">");
    tl.to(cameraRef.current.position, { z: -21, y: 4, x: 1.5, ease: "power2.inOut" }, ">");
    tl.to(cameraRef.current.position, { x: -1.5, ease: "none" }, ">");
    tl.to(cameraRef.current.position, { z: -30, y: 2, x: 0, ease: "power1.inOut" }, ">");
    tl.to(cameraRef.current.position, { x: -3, z: -32, ease: "none" }, ">");
    tl.to(cameraRef.current.position, { z: -45, y: 1.5, x: 0, ease: "power2.inOut" }, ">");
    tl.to(cameraRef.current.position, { z: -46, ease: "none" }, ">+=1");
    tl.to(cameraRef.current.position, { z: -55, y: 2, x: 0, ease: "power2.inOut" }, ">");
    tl.to(cameraRef.current.rotation, { x: 0.1, ease: "power1.inOut" }, "<");
    tl.to(cameraRef.current.position, { z: -70, y: 20, x: -5, ease: "power3.inOut" }, ">");
    tl.to(cameraRef.current.rotation, { x: -Math.PI / 3, ease: "power3.inOut" }, "<");

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <PerspectiveCamera makeDefault ref={cameraRef} position={[0, 2, 5]} fov={50} />
  );
};

const Scene = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-dusk-plum">
      <Canvas shadows dpr={isMobile ? [1, 1.5] : [1, 2]}>
        <CameraRig />

        {/* Beautiful warm sunset lighting with shadows */}
        <ambientLight intensity={0.3} color="#ffffff" />
        <directionalLight
          position={[10, 20, 10]}
          intensity={1.5}
          color="#E8A93B"
          castShadow
          shadow-mapSize-width={isMobile ? 512 : 2048}
          shadow-mapSize-height={isMobile ? 512 : 2048}
          shadow-camera-far={100}
          shadow-camera-left={-20}
          shadow-camera-right={20}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
        />

        <EntranceGate />
        <DustParticles count={isMobile ? 150 : 500} />
        <OrchardPath />
        <Thali3D />
        <PizzaCorner3D />
        <Courtyard3D />
        <Reviews3D />
        <MapTransition3D />

        <Environment preset="sunset" />

        {!isMobile && (
          <EffectComposer multisampling={0}>
            <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={300} />
          </EffectComposer>
        )}
      </Canvas>
    </div>
  );
};

export default Scene;
