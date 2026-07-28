import React, { useEffect } from 'react';
import Scene from './components/Scene';
import Section1UI from './sections/Section1/Section1UI';
import Section2UI from './sections/Section2/Section2UI';
import Section3UI from './sections/Section3/Section3UI';
import Section4UI from './sections/Section4/Section4UI';
import Section5UI from './sections/Section5/Section5UI';
import Section6UI from './sections/Section6/Section6UI';
import Section7UI from './sections/Section7/Section7UI';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div id="scroll-container" className="relative w-full text-ivory font-inter">
      <Scene />

      <div className="absolute top-0 left-0 w-full z-10">
        <Section1UI />
        <Section2UI />
        <Section3UI />
        <Section4UI />
        <Section5UI />
        <Section6UI />
        <Section7UI />

        <div className="h-[750vh] w-full pointer-events-none"></div>
      </div>
    </div>
  );
}

export default App;
